import {Component, Prop, Element, Event, EventEmitter, Method} from '@stencil/core';

@Component({
  tag: 'stb-collapse',
  styleUrl: 'collapse.scss',
})
export class StbCollapse {

  @Element() element: HTMLElement;
  @Event() showEvent: EventEmitter;
  @Event() hideEvent: EventEmitter;
  @Prop() active = false;
  @Prop() activeClass = 'show';
  @Prop() accordion = false;
  private activeDiv;
  private collapseElements;

  componentDidLoad(): void {
    this.getCollapseElements();
    this.addClickListener();
    this.checkForActiveElement();
  }

  getCollapseElements() {
    this.collapseElements = this.element.querySelectorAll('[data-toggle="collapse"]');
  }

  addClickListener() {
    this.collapseElements.forEach((collapse) => {
      collapse.classList.add('coll-div');
      const collapsible = this.getCollapsible(collapse);
      this.addCollapsibleClass(collapsible);
      collapse.addEventListener("click", () =>  {
        if (collapsible.classList.contains('show')) {
          this.hideCollapsible(collapse);
        } else {
          this.showCollapsible(collapse);
        }
      });
    });
  }

  checkForActiveElement() {
    this.activeDiv = document.querySelector('.show');
    if (this.activeDiv) {
      this.activeDiv.style.height = this.activeDiv.children[0].offsetHeight + 'px';
    }
  }

  addCollapsibleClass(element) {
    element.classList.add('collapsing')
  }

  getCollapsible(element) {
    const disabled = element.getAttribute('disabled=[true]');
    if (disabled) return null;
    let target;
    if (element.getAttribute('data-target')) target = element.getAttribute('data-target');
    if (element.getAttribute('href')) target = element.getAttribute('href');
    return document.querySelector(target);
  }

  showCollapsible(element) {
    const collapsible = this.getCollapsible(element);
    if (!collapsible) {
      return;
    }
    if (this.accordion && this.activeDiv && this.activeDiv !== collapsible) {
      this.activeDiv.style.height = 0;
      setTimeout(() => {
        this.activeDiv.classList.remove('show');
        this.activeDiv = collapsible;
      }, 500);
    }
    collapsible.classList.add('show');
    setTimeout(() => {
      collapsible.style.height = collapsible.children[0].offsetHeight + 'px';
    }, 50);
  }

  hideCollapsible(element) {
    const collapsible = this.getCollapsible(element);
    collapsible.style.height = 0;
    setTimeout(() => {
      collapsible.classList.remove(this.activeClass);
    }, 500);
  }

  @Method()
  public show(element): void {
    this.showCollapsible(element);
    this.showEvent.emit({
      element: element
    });
  }

  @Method()
  public hide(element): void {
    this.showCollapsible(element);
    this.hideEvent.emit({
      element: element
    });
  }

  componentDidUnload(): void {
  }

}
