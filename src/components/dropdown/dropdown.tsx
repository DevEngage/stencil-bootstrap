import {Component, Prop, Element, Event, EventEmitter, Method} from '@stencil/core';
import Popper, {Modifiers, Placement} from 'popper.js';

// const ClassName = {
//   DISABLED  : 'disabled',
//   SHOW      : 'show',
//   DROPUP    : 'dropup',
//   DROPRIGHT : 'dropright',
//   DROPLEFT  : 'dropleft',
//   MENURIGHT : 'dropdown-menu-right',
//   MENULEFT  : 'dropdown-menu-left',
//   POSITION_STATIC : 'position-static'
// };

@Component({
  tag: 'stb-dropdown',
  host: {
    theme: 'dropdown'
  }
})
export class StbDropdown {

  body: HTMLElement = document.body;
  public isVisible = false;
  @Element() element: HTMLElement;
  @Event() onShow: EventEmitter;
  @Event() onHide: EventEmitter;
  @Prop() disabled: boolean = false;
  @Prop() action: string = '[data-toggle="dropdown"]';
  @Prop() target: string = '.dropdown-menu';
  @Prop() placement: Placement = 'bottom-start';
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
  dropdown;

  componentDidLoad(): void {
    this.button = this.element.querySelector(this.action);
    this.dropdown = this.element.querySelector(this.target);
    this.addClickListener();
    new Popper(this.button, this.dropdown, {
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

  hideAllDropdowns() {
    if (this.onlyOneOpen) {
      const dropdowns: any = document.querySelectorAll('stb-dropdown');
      if (dropdowns) {
        dropdowns.forEach(item => item.hide());
      }
    }
  }

  hasClass(element, className) {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
  }

  managePlacement() {
    const dropdownMenu: any = this.element.querySelector(this.target);
    const buffer = 2;
    switch(this.placement) {
      case 'top':
        dropdownMenu.style.top = -(buffer + dropdownMenu.clientHeight) + 'px';
        break;
      case 'top-start':
        dropdownMenu.style.top = -(buffer + dropdownMenu.clientHeight) + 'px';
        break;
      case 'top-end':
        dropdownMenu.style.top = -(buffer + dropdownMenu.clientHeight) + 'px';
        break;
      case 'left':
        dropdownMenu.style.left = -(buffer + dropdownMenu.clientWidth) + 'px';
        break;
      case 'left-start':
        dropdownMenu.style.left = -(buffer + dropdownMenu.clientWidth) + 'px';
        break;
      case 'left-end':
        dropdownMenu.style.left = -(buffer + dropdownMenu.clientWidth) + 'px';
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
    const dropdownMenu: any = this.element.querySelectorAll(this.target);
    dropdownMenu[0].style.display = 'block';
    this.isVisible = true;
  }

  hideTarget() {
    const dropdownMenu: any = this.element.querySelectorAll(this.target);
    dropdownMenu[0].style.display = 'none';
    this.isVisible = false;
  }

  @Method()
  public toggle() {
    return this.isVisible ? this.hide() : this.show();
  }

  @Method()
  public show(): void {
    this.hideAllDropdowns();
    this.showTarget();
    this.managePlacement();
    this.onShow.emit();
    setTimeout(() => this.addDocumentListener(), 400);
  }

  @Method()
  public hide(): void {
    this.removeDocumentListener();
    this.hideTarget();
    this.onHide.emit();
  }

}
