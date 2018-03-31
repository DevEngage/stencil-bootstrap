import {Component, Prop, Element, Event, EventEmitter, Method} from '@stencil/core';

@Component({
  styleUrl: 'collapse.scss',
  tag: 'stb-collapse',
  host: {
    theme: '',
  }
})
export class StbCollapse {


  body: HTMLElement = document.body;

  @Element() element: HTMLElement;
  @Event() showEvent: EventEmitter;
  @Event() hideEvent: EventEmitter;
  @Prop() disabled: boolean = false;
  @Prop() type = ''; // btn-primary | btn-secondary
  @Prop() active = false;
  @Prop() activeClass = 'show';
  @Prop() accordian = false;
  private activeDiv;
  private collapseElements;

  @Method()
  public toggle() {
    // this.isVisible = !this.isVisible;
    // return this.isVisible ? this.hide() : this.show()
  }

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
      collapse.addEventListener("click",() =>  {
        if (collapsible.classList.contains('show')) {
          this.hideCollapsible(collapse)
        } else {
          this.showCollapsible(collapse)
        }
      });
    })
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
    let target;
    if (element.getAttribute('data-target')) target = element.getAttribute('data-target');
    if (element.getAttribute('href')) target = element.getAttribute('href');
    return document.querySelector(target);
  }

  showCollapsible(element) {
    const collapsible = this.getCollapsible(element);
    if (this.accordian && this.activeDiv && this.activeDiv !== collapsible) {
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
  public show(): void {

  }

  @Method()
  public hide(): void {
  }

  componentDidUnload(): void {
  }

}
