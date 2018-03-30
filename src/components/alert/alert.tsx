import {Component, Element, Prop, Watch} from '@stencil/core';

@Component({
  tag: 'stb-alert',
  host: {
    theme: 'alert',
    role: 'alert',
  },
})
export class StbAlert {

  @Prop() context: string = '';
  @Element() element: HTMLElement;
  @Prop() closeSelector: string = '[data-dismiss="alert"]';
  private closeElement;
  private closeListener;

  componentDidLoad() {
    if (this.context) {
      this.element.classList.add('alert-' + this.context);
    }
    this.setCloseListener();
  }

  componentDidUnload() {
    this.clearCloseListener();
  }

  setCloseListener() {
    this.closeElement = this.element.querySelector(this.closeSelector);
    this.closeListener = () => {
      console.log(this.element)
      this.element.outerHTML = '';
      delete this.element;
    };
    console.log(this.closeElement)
    if (this.closeElement) {
      this.closeElement.addEventListener('mouseup', this.closeListener);
    }
  }

  clearCloseListener() {
    this.closeElement.removeEventListener('mouseup', this.closeListener);
  }

  @Watch('context')
  watchContext (newValue: string, oldValue: string) {
    if (oldValue) {
      this.element.classList.remove('alert-' + oldValue);
    }
    if (newValue) {
      this.element.classList.add('alert-' + newValue);
    }
  }

}
