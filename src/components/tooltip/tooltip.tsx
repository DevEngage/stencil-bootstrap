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
  @Prop() positionFixed: boolean = false;
  @Prop() modifiers: Modifiers = {};
  @Prop() onlyOneOpen: boolean = false;
  @State() placement: any = 'top';
  @State() tooltipTitle: any = 'this is a tooltip';
  buttonListener;
  documentListener;
  button;
  tooltip;

  componentDidLoad(): void {
    this.button = this.element.querySelector(this.action);
    this.tooltip = this.element.querySelector(this.target);
    this.getPlacement();
    this.addClickListener();
    this.getTitle();
    new Popper(this.button, this.tooltip, {
      placement: this.placement,
      positionFixed: this.positionFixed,
      modifiers: this.modifiers
    });
    this.managePlacement();
    this.tooltip.style.zIndex = -10;
  }

  componentDidUnload(): void {
    if (this.buttonListener) {
      this.removeClickListener();
    }
  }

  getTitle() {
    this.tooltipTitle = this.button.getAttribute('title');
    console.log('this.tooltipTitle', this.tooltipTitle);
    this.element.querySelector('.tooltip-inner').innerHTML = this.tooltipTitle
  }

  getPlacement() {
    this.placement = this.button.getAttribute('data-placement');
  }

  hideAllTooltips() {
    if (this.onlyOneOpen) {
      const tooltips: any = document.querySelectorAll('stb-tooltip');
      if (tooltips) {
        tooltips.forEach(item => item.hide());
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
    this.tooltip.style.zIndex = 1060;
    this.isVisible = true;
  }

  hideTarget() {
    this.tooltip.classList.remove('show');
    this.tooltip.style.zIndex = -10;
    this.isVisible = false;
  }

  @Method()
  public toggle() {
    return this.isVisible ? this.hide() : this.show();
  }

  @Method()
  public show(): void {
    console.log('show');
    this.hideAllTooltips();
    this.showTarget();
    this.managePlacement();
    this.onShow.emit();
  }

  @Method()
  public hide(): void {
    console.log('hide');
    this.hideTarget();
    this.onHide.emit();
  }

  render() {
    return (
    <div class="tooltip fade" role="tooltip">
      <div class="arrow"></div>
      <div class="tooltip-inner" >

      </div>
    </div>
    )
  }

}
