import {Component, Prop, Element, Event, EventEmitter, Method, State} from '@stencil/core';
import Popper, {Modifiers} from 'popper.js';

@Component({
  tag: 'stb-tooltip',
  host: {
    theme: ''
  }
})
export class StbTooltip {

  body: HTMLElement = document.body;
  public isVisible = false;
  @Element() element: HTMLElement;
  @Event() onShow: EventEmitter;
  @Event() onHide: EventEmitter;
  @Prop() disabled: boolean = false;
  @Prop() action: string = '[data-toggle="tooltip"]';
  @Prop() target: string = '.tooltip';
  @State() placement: any = 'top';
  @Prop() positionFixed: boolean = false;
  @Prop() modifiers: Modifiers = {};
  @Prop() onlyOneOpen: boolean = false;
  // @Prop() keyboard?: boolean = true;
  // @Prop() animation = {
  //   prefix: 'animated',
  //   showDuration: 'duration-500ms',
  //   show: 'fadeInDown',
  //   hideDuration: 'duration-500ms',
  //   hide: 'fadeOut'
  // };
  buttonListener;
  documentListener;
  button;
  tooltip;

  componentDidLoad(): void {
    this.button = this.element.querySelector(this.action);
    this.tooltip = this.element.querySelector(this.target);
    this.getPlacement();
    this.addClickListener();
    new Popper(this.button, this.tooltip, {
      placement: this.placement,
      positionFixed: this.positionFixed,
      modifiers: this.modifiers
    });
    this.managePlacement();
  }

  componentDidUnload(): void {
    if (this.documentListener) {
      this.removeDocumentListener();
    }
    if (this.buttonListener) {
      this.removeClickListener();
    }
  }

  getPlacement() {
    this.placement = this.button.getAttribute('data-placement');
    console.log('placement', this.placement);
  }

  hideAllDropdowns() {
    if (this.onlyOneOpen) {
      const dropdowns: any = document.querySelectorAll('stb-tooltip');
      if (dropdowns) {
        dropdowns.forEach(item => item.hide());
      }
    }
  }

  hasClass(element, className) {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
  }

  managePlacement() {
    const tooltip: any = this.element.querySelector(this.target);
    const arrow: any = this.element.querySelector('.arrow');
    switch(this.placement) {
      case 'top':
        arrow.style.left = (tooltip.clientWidth / 2 - 6) + 'px';
        this.tooltip.classList.add('bs-tooltip-top');
        break;
      case 'bottom':
        arrow.style.left = (tooltip.clientWidth / 2 - 6) + 'px';
        this.tooltip.classList.add('bs-tooltip-bottom');
        break;
      case 'left':
        arrow.style.top = (tooltip.clientHeight / 2 - 6) + 'px';
        this.tooltip.classList.add('bs-tooltip-left');
        break;
      case 'right':
        arrow.style.top = (tooltip.clientHeight / 2 - 6) + 'px';
        this.tooltip.classList.add('bs-tooltip-right');
        break;
    }
  }

  addDocumentListener() {
    // this.documentListener = () => {
    //   this.toggle();
    // };
    // document.addEventListener('mouseover', this.documentListener);
  }

  removeDocumentListener() {
    // document.removeEventListener('mouseover', this.documentListener);
  }

  addClickListener(element = this.button) {
    this.buttonListener = () => this.toggle();
    element.addEventListener('mouseover', this.buttonListener);
    element.addEventListener('mouseout', this.buttonListener);
  }

  removeClickListener(element = this.button) {
    element.removeEventListener('mouseover', this.buttonListener);
    element.removeEventListener('mouseout', this.buttonListener);
  }

  showTarget() {
    this.tooltip.classList.add('show');
    this.isVisible = true;
  }

  hideTarget() {
    this.tooltip.classList.remove('show');
    this.isVisible = false;
  }

  @Method()
  public toggle() {
    return this.isVisible ? this.hide() : this.show();
  }

  @Method()
  public show(): void {
    console.log('show');
    this.hideAllDropdowns();
    this.showTarget();
    this.managePlacement();
    this.onShow.emit();
    setTimeout(() => this.addDocumentListener(), 400);
  }

  @Method()
  public hide(): void {
    console.log('hide');
    this.removeDocumentListener();
    this.hideTarget();
    this.onHide.emit();
  }

  render() {
    return (
    <div class="tooltip fade" role="tooltip">
            <div class="arrow"></div>
            <div class="tooltip-inner">
              Some tooltip text!
            </div>
          </div>
    )
  }

}
