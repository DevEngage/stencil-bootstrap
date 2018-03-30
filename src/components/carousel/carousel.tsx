import {Component, Prop, Element, Event, EventEmitter, Method} from '@stencil/core';

export const TOGGLE_CLASSES = {
  active: 'active',
  show: 'show',
  inactive: ''
};

@Component({
  tag: 'stb-carousel',
  host: {
    theme: '',
  }
})
export class StbCarousel {

  @Element() element: HTMLElement;
  @Event() onShow: EventEmitter;
  @Event() onHide: EventEmitter;
  @Prop() selected: number = 0;
  @Prop() slideSelector: string = '.carousel-item';
  @Prop() indicatorSelector: string = '[data-slide-to]';
  @Prop() prevSelector: string = '[data-slide="prev"]';
  @Prop() nextSelector: string = '[data-slide="next"]';
  @Prop() interval: number = 5000; //default
  @Prop() cycleType: string | boolean = 'hover';
  @Prop() ride: boolean = false;
  @Prop() wrap: boolean = true;
  private listeners: object = {};
  private nextListener;
  private prevListener;
  private slideElements;
  private indicatorElements;
  private prevElement;
  private nextElement;
  private intervalHandler;
  private currentSlide: number = 0;

  constructor() {
    this.currentSlide = this.selected || 0;
  }

  componentWillLoad(): void {
    this.getSlideElements();
    this.getIndicatorElements();
    this.getPrevNextButtons();
    if (this.currentSlide > 0) {
      this.show(this.selected);
    }
    this.play();
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

  componentDidUnload(): void {
    if (this.slideElements && this.slideElements.length) {
      this.slideElements.forEach((element, i) => {
        element.removeEventListener('click', this.listeners[i]);
      });
    }
    if (this.prevElement && this.prevListener) {
      this.prevElement.removeEventListener('click', this.prevListener);
    }
    if (this.nextElement && this.nextListener) {
      this.nextElement.removeEventListener('click', this.nextListener);
    }
    this.pause();
  }

  getSlideElements() {
    this.slideElements = this.element.querySelectorAll(this.slideSelector);
  }

  getIndicatorElements() {
    this.indicatorElements = this.element.querySelectorAll(this.indicatorSelector);
    this.slideElements.forEach((element, i) => {
      this.indicatorClickHandler(element, i);
    });
  }

  addClickHandler(element, fn = this.next) {
    if (!element) return;
    let eventHandler = () => {
      if (fn) {
        fn();
      }
    };
    element.addEventListener('click', eventHandler);
    return eventHandler;
  }

  indicatorClickHandler(element, index) {
    if (!element) return;
    let eventHandler = () => {
      this.show(index);
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
  removeActiveClass(elements = this.slideElements) {
    elements.forEach(item => {
      item.classList.remove(TOGGLE_CLASSES.active);
      if (TOGGLE_CLASSES.inactive) {
        item.classList.add(TOGGLE_CLASSES.inactive);
      }
    });
  }

  @Method()
  public show(index = 0): void {
    this.removeActiveClass();
    if (this.indicatorElements && this.indicatorElements.length) {
      this.removeActiveClass(this.indicatorElements);
    }
    this.indicatorClickHandler(this.slideElements[index], index);
    this.addActiveClass(this.slideElements[index]);
    this.currentSlide = index;
    this.onShow.emit({
      current: this.currentSlide,
      element: this.slideElements[index]
    });
  }

  @Method()
  public hide(index = 0): void {
    this.removeActiveClass();
    if (this.indicatorElements && this.indicatorElements.length) {
      this.removeActiveClass(this.indicatorElements);
    }
    this.onHide.emit({
      current: this.currentSlide,
      element: this.slideElements[index]
    });
    this.currentSlide = -1;
  }

  @Method()
  next() {
    if (this.slideElements && this.slideElements.length - 1 <= this.currentSlide) {
      this.show(0);
    } else {
      this.show(this.currentSlide + 1);
    }
  }

  @Method()
  prev() {
    if (this.currentSlide <= 0) {
      this.show(this.slideElements.length - 1);
    } else {
      this.show(this.currentSlide - 1);
    }
  }

  @Method()
  pause() {
    if (this.intervalHandler) {
      clearInterval(this.intervalHandler);
    }
  }

  @Method()
  play() {
    if (this.interval) {
      this.intervalHandler = setInterval(() => this.next(), this.interval);
    }
  }
}
