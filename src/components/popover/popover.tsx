import {Component, Prop, Element, Event, EventEmitter, Method, State} from '@stencil/core';
import Popper, {Modifiers} from 'popper.js';

@Component({
  tag: 'stb-popover',
  host: {
    theme: ''
  }
})
export class StbPopover {

  body: HTMLElement = document.body;
  public isVisible = false;
  @Element() element: HTMLElement;
  @Event() onShow: EventEmitter;
  @Event() onHide: EventEmitter;
  @Prop() disabled: boolean = false;
  @Prop() action: string = '[data-toggle="popover"]';
  @Prop() target: string = '.popover';
  @Prop() positionFixed: boolean = false;
  @Prop() modifiers: Modifiers = {};
  @Prop() onlyOneOpen: boolean = false;
  @State() placement: any = 'right';
  buttonListener;
  documentListener;
  button;
  popover;

  componentDidLoad(): void {
    this.button = this.element.querySelector(this.action);
    this.popover = this.element.querySelector(this.target);
    this.getPlacement();
    this.addClickListener();
    new Popper(this.button, this.popover, {
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
  }

  hideAllPopovers() {
    if (this.onlyOneOpen) {
      const popovers: any = document.querySelectorAll('stb-popover');
      if (popovers) {
        popovers.forEach(item => item.hide());
      }
    }
  }

  hasClass(element, className) {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
  }

  managePlacement() {
    const popover: any = this.element.querySelector(this.target);
    const arrow: any = this.element.querySelector('.arrow');
    switch(this.placement) {
      case 'top':
        arrow.style.left = (popover.clientWidth / 2 - 12) + 'px';
        this.popover.classList.add('bs-popover-top');
        break;
      case 'bottom':
        arrow.style.left = (popover.clientWidth / 2 - 12) + 'px';
        this.popover.classList.add('bs-popover-bottom');
        break;
      case 'left':
        arrow.style.top = (popover.clientHeight / 2 - 12) + 'px';
        this.popover.classList.add('bs-popover-left');
        break;
      case 'right':
        arrow.style.top = (popover.clientHeight / 2 - 12) + 'px';
        this.popover.classList.add('bs-popover-right');
        break;
    }
  }

  addDocumentListener() {
    this.documentListener = () => {
      this.toggle();
    };
    document.addEventListener('mouseup', this.documentListener);
  }

  removeDocumentListener() {
    document.removeEventListener('mouseup', this.documentListener);
  }

  addClickListener(element = this.button) {
    this.buttonListener = () => this.toggle();
    element.addEventListener('mouseup', this.buttonListener);
  }

  removeClickListener(element = this.button) {
    element.removeEventListener('mouseup', this.buttonListener);
  }

  showTarget() {
    this.popover.classList.add('show');
    this.isVisible = true;
  }

  hideTarget() {
    this.popover.classList.remove('show');
    this.isVisible = false;
  }

  @Method()
  public toggle() {
    return this.isVisible ? this.hide() : this.show();
  }

  @Method()
  public show(): void {
    console.log('show');
    this.hideAllPopovers();
    this.showTarget();
    this.managePlacement();
    this.onShow.emit();
    setTimeout(() => this.addDocumentListener(), 400);
  }

  @Method()
  public hide(): void {
    this.removeDocumentListener();
    console.log('hide');
    this.hideTarget();
    this.onHide.emit();
  }

  render() {
    return (
      <div class="popover fade" role="tooltip">
        <div class="arrow"></div>
        <h3 class="popover-header">Some popover text!!!</h3>
        <div class="popover-body">Some popover text!</div>
      </div>
    )
  }

}
