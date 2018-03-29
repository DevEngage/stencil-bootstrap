import {Component, Prop, Element, Event, EventEmitter, Method} from '@stencil/core';

export const TOGGLE_CLASSES = {

};

@Component({
  tag: 'stb-toggle',
  host: {
    theme: '',
  }
})
export class StbDropdown {


  body: HTMLElement = document.body;

  @Element() element: HTMLElement;
  @Event() showEvent: EventEmitter;
  @Event() hideEvent: EventEmitter;

  @Prop() disabled: boolean = false;
  @Prop() type = ''; // btn-primary | btn-secondary

  @Prop() active = false;
  @Prop() activeClass = 'active';

  private listeners = [];

  private buttonsElement;
  //
  // @Prop() animation = {
  //   prefix: 'animated',
  //   showDuration: 'duration-500ms',
  //   show: 'fadeInDown',
  //   hideDuration: 'duration-500ms',
  //   hide: 'fadeOut'
  // };

  @Method()
  public toggle() {
    // this.isVisible = !this.isVisible;
    // return this.isVisible ? this.hide() : this.show()
  }

  componentWillLoad(): void {
    // this.toggleElement = this.element.querySelector('[data-toggle="buttons"]');
    this.getBtnElements();
  }

  getBtnElements() {
    this.buttonsElement = this.element.querySelectorAll('.btn');
    console.log(this.buttonsElement)
    this.buttonsElement.forEach(element => {
      let eventHandler = event => {
        console.log(event);
        this.removeActiveClass();
        this.addActiveClass(element);

      };
      element.addEventListener('click', eventHandler);
      this.listeners.push(eventHandler);
    });

    // this.listeners.forEach(handler => {
    //   item.removeEventListener('click', handler);
    // });
  }

  addClickListener() {

  }

  addActiveClass(element) {
    element.classList.add('active');
  }
  removeActiveClass() {
    this.buttonsElement.forEach(item => {
      item.classList.remove('active');
    });
  }

  hasClass(element, className) {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
  }

  @Method()
  public show(): void {
    // this.toggleElement;
    // if (this.disabled || this.hasClass(this.element)) {
    //   return;
    // }
    // this.isVisible = true;
  }

  @Method()
  public hide(): void {
  }

  componentDidUnload(): void {
    // this.listeners.forEach(handler => {
    //   item.removeEventListener('click', handler);
    // });
  }

  render() {
    // return ();
  }
}
