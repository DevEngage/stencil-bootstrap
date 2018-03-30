import {Component, Prop, Element, Event, EventEmitter, Method} from '@stencil/core';

export const TOGGLE_CLASSES = {
  active: 'active',
  show: 'show',
  inactive: ''
};

@Component({
  tag: 'stb-nav',
  host: {
    theme: '',
  }
})
export class StbNav {

  @Element() element: HTMLElement;
  @Event() onShow: EventEmitter;
  @Event() onHide: EventEmitter;
  @Prop() selected: number = -1;
  @Prop() tabSelector: string = '[role="tab"]';
  @Prop() panelSelector: string = '[role="tabpanel"]';
  private listeners: object = {};
  private global: boolean = false;
  private buttonsElement;
  private panelsElement;

  componentWillLoad(): void {
    this.getBtnElements();
    this.getPanelElements();
    if (this.selected > -1) {
      this.show(this.selected);
    }
  }

  componentDidUnload(): void {
    if (this.buttonsElement && this.buttonsElement.length) {
      this.buttonsElement.forEach((element, i) => {
        element.removeEventListener('click', this.listeners[i]);
      });
    }
  }

  getBtnElements() {
    this.buttonsElement = this.element.querySelectorAll(this.tabSelector);
    this.buttonsElement.forEach((element, i) => {
      this.elementClickHandler(element, i);
    });
  }

  getPanelElements() {
    if (this.global) {
      this.panelsElement = document.querySelectorAll(this.panelSelector);
    } else {
      this.panelsElement = this.element.querySelectorAll(this.panelSelector);
    }
  }

  elementClickHandler(element, index) {
    if (!element) return;
    let eventHandler = (e) => {
      e.preventDefault();
      this.show(index);
      return false;
    };
    element.addEventListener('click', eventHandler);
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

  showPanel(element) {
    const href = element.getAttribute('href');
    const panelElement = this.element.querySelectorAll(href);
    panelElement[0].classList.add(TOGGLE_CLASSES.active);
    panelElement[0].classList.add(TOGGLE_CLASSES.show);
    panelElement[0].style.display = 'block';
    if (TOGGLE_CLASSES.inactive) {
      panelElement[0].classList.remove(TOGGLE_CLASSES.inactive);
    }
  }

  hidePanels() {
    this.panelsElement.forEach(item => {
      item.classList.remove(TOGGLE_CLASSES.active);
      item.classList.remove(TOGGLE_CLASSES.show);
      item.style.display = 'none';
      if (TOGGLE_CLASSES.inactive) {
        item.classList.add(TOGGLE_CLASSES.inactive);
      }
    });
  }

  @Method()
  public toggle() {
    return this.selected > -1 ? this.hide() : this.show();
  }

  @Method()
  public show(index = 0): void {
    this.removeActiveClass();
    this.hidePanels();
    this.elementClickHandler(this.buttonsElement[index], index);
    this.addActiveClass(this.buttonsElement[index]);
    this.showPanel(this.buttonsElement[index]);
    this.selected = index;
    this.onShow.emit({
      selected: this.selected,
      element: this.buttonsElement[index]
    });
  }

  @Method()
  public hide(index = 0): void {
    this.removeActiveClass();
    this.hidePanels();
    this.onHide.emit({
      selected: this.selected,
      element: this.buttonsElement[index]
    });
    this.selected = -1;
  }
}
