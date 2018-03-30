import {Component, Prop, Element, Event, EventEmitter, Method} from '@stencil/core';
import {hasClass} from "../../utils/has-class";

export const TOGGLE_CLASSES = {
  active: 'active',
  inactive: ''
};

@Component({
  tag: 'stb-pagination',
  host: {
    role: 'nav',
  }
})
export class StbPagination {

  @Element() element: HTMLElement;
  @Event() onSelect: EventEmitter;
  @Prop() selected: number = 0;
  @Prop() prevSelector: string = '[stb-prev]';
  @Prop() nextSelector: string = '[stb-next]';
  @Prop() pagesSelector: string = '[stb-page]';
  private listeners: object = {};
  private pageElements;
  private prevElement;
  private nextElement;
  private prevListener;
  private nextListener;
  private currentSlide;

  componentWillLoad(): void {
    this.currentSlide = this.selected || 0;
    this.getPageElements();
    this.getPrevNextButtons();
    if (this.selected > -1) {
      this.select(this.selected);
    }
  }

  componentDidUnload(): void {
    if (this.pageElements && this.pageElements.length) {
      this.pageElements.forEach((element, i) => {
        element.removeEventListener('mouseup', this.listeners[i]);
      });
    }
    if (this.prevElement && this.prevListener) {
      this.prevElement.removeEventListener('mouseup', this.prevListener);
    }
    if (this.nextElement && this.nextListener) {
      this.nextElement.removeEventListener('mouseup', this.nextListener);
    }
  }

  getPrevNextButtons() {
    this.prevElement = this.element.querySelector(this.prevSelector);
    this.nextElement = this.element.querySelector(this.nextSelector);
    if (this.prevElement)  {
      this.prevListener = this.addClickHandler(this.prevElement, () => this.prev());
    }
    if (this.nextElement) {
      this.nextListener = this.addClickHandler(this.nextElement, () => this.next());
    }
  }

  getPageElements() {
    this.pageElements = this.element.querySelectorAll(this.pagesSelector);
    this.pageElements.forEach((element, i) => {
      this.elementClickHandler(element, i);
    });
  }

  addClickHandler(element, fn) {
    if (!element) return;
    let eventHandler = () => {
      if (hasClass(element, 'disabled')) {
        return false;
      }
      if (fn) {
        fn();
      }
    };
    element.addEventListener('mouseup', eventHandler);
    return eventHandler;
  }

  elementClickHandler(element, index) {
    if (!element) return;
    let eventHandler = (e) => {
      e.preventDefault();
      this.select(index);
      return false;
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
    this.pageElements.forEach(item => {
      item.classList.remove(TOGGLE_CLASSES.active);
      if (TOGGLE_CLASSES.inactive) {
        item.classList.add(TOGGLE_CLASSES.inactive);
      }
    });
  }

  @Method()
  public select(index = 0): void {
    this.removeActiveClass();
    this.elementClickHandler(this.pageElements[index], index);
    this.addActiveClass(this.pageElements[index]);
    this.currentSlide = index;
    this.onSelect.emit({
      selected: this.currentSlide,
      element: this.pageElements[index]
    });
  }

  @Method()
  public next() {
    if (this.pageElements && this.pageElements.length - 1 <= this.currentSlide) {
      this.select(0);
    } else {
      this.select(this.currentSlide + 1);
    }
  }

  @Method()
  public prev() {
    if (this.currentSlide <= 0) {
      this.select(this.pageElements.length - 1);
    } else {
      this.select(this.currentSlide - 1);
    }
  }
}
