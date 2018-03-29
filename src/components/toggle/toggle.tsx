import {Component, Prop, Element, Event, EventEmitter, Method} from '@stencil/core';

export const TOGGLE_CLASSES = {
  active: 'active',
  inactive: ''
};

@Component({
  tag: 'stb-toggle',
  host: {
    theme: '',
  }
})
export class StbToggle {

  @Element() element: HTMLElement;
  @Event() onActivate: EventEmitter;
  @Event() onDeactivate: EventEmitter;
  @Prop() selected: number = -1;
  @Prop() target: string = '.btn';
  private listeners: object = {};
  private buttonsElement;

  componentWillLoad(): void {
    this.getBtnElements();
    if (this.selected > -1) {
      this.activate(this.selected);
    }
  }

  componentDidUnload(): void {
    this.buttonsElement.forEach((element, i) => {
      element.removeEventListener('mouseup', this.listeners[i]);
    });
  }

  getBtnElements() {
    this.buttonsElement = this.element.querySelectorAll(this.target);
    this.buttonsElement.forEach((element, i) => {
      this.elementClickHandler(element, i);
    });
  }

  elementClickHandler(element, index) {
    if (!element) return;
    let eventHandler = () => {
      this.removeActiveClass();
      this.addActiveClass(element);
      this.selected = index;
    };
    element.addEventListener('mouseup', eventHandler);
    this.listeners[index] = eventHandler;
  }

  addActiveClass(element) {
    element.classList.add(TOGGLE_CLASSES.active);
    if (TOGGLE_CLASSES.inactive) {
      element.classList.remove(TOGGLE_CLASSES.inactive);
    }
  }

  removeActiveClass() {
    this.buttonsElement.forEach(item => {
      item.classList.remove(TOGGLE_CLASSES.active);
      if (TOGGLE_CLASSES.inactive) {
        item.classList.add(TOGGLE_CLASSES.inactive);
      }
    });
  }

  @Method()
  public toggle() {
    return this.selected > -1 ? this.deactivate() : this.activate()
  }

  @Method()
  public activate(index = 0): void {
    this.removeActiveClass();
    this.elementClickHandler(this.buttonsElement[index], index);
    this.addActiveClass(this.buttonsElement[index]);
    this.onActivate.emit({
      selected: this.selected,
      element: this.buttonsElement[index]
    });
  }

  @Method()
  public deactivate(index = 0): void {
    this.removeActiveClass();
    this.onDeactivate.emit({
      selected: this.selected,
      element: this.buttonsElement[index]
    });
    this.selected = -1;
  }
}
