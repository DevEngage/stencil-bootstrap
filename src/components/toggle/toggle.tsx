import {Component, Prop, Element, Event, EventEmitter, Method, State} from '@stencil/core';

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

  @Prop() animation = {
    prefix: 'animated',
    showDuration: 'duration-500ms',
    show: 'fadeInDown',
    hideDuration: 'duration-500ms',
    hide: 'fadeOut'
  };

  @Method()
  public toggle() {
    // this.isVisible = !this.isVisible;
    // return this.isVisible ? this.hide() : this.show()
  }

  componentWillLoad(): void {
  }

  hasClass(element, className) {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
  }

  @Method()
  public show(): void {
    // if (this.disabled || this.hasClass(this.element)) {
    //   return;
    // }
    // this.isVisible = true;
  }

  @Method()
  public hide(): void {
  }

  componentDidUnload(): void {
  }

  render() {
    return (
      <button type="button" class={`btn ${this.type} ${this.active ? `${this.activeClass}` : ''}`}  disabled={this.disabled}>
        Single toggle
      </button>
    );
  }
}
