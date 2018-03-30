import {Component, Prop, Element, Event, EventEmitter, Method, State} from '@stencil/core';

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
  @Prop() activeClass = 'active';
  @Prop() accordian = false;

  @State() activeDiv;

  @Method()
  public toggle() {
    // this.isVisible = !this.isVisible;
    // return this.isVisible ? this.hide() : this.show()
  }

  componentDidLoad(): void {
    this.addListener()
  }

  addListener() {
    this.activeDiv = document.querySelector('.show');
    let collapse;
    collapse = this.element.querySelectorAll('[data-toggle="collapse"]');
    let i;

    for (i = 0; i < collapse.length; i++) {
      const collDiv:any = collapse[i];
      collDiv.classList.add('coll-div');

      let target;
      let divHeight;

      if (collDiv.getAttribute('data-target')) target = collapse[i].getAttribute('data-target');
      if (collDiv.getAttribute('href')) target = collapse[i].getAttribute('href');
      const collapsible: any = document.querySelector(target);
      collapsible.classList.add('collapsing');

      if (this.activeDiv) {
        collapsible.style.height = collapsible.children[0].offsetHeight + 'px';
      }

      collDiv.addEventListener("click",() =>  {

        if (collapsible.classList.contains('show')) {
          // if (this.accordian && this.activeDiv) this.activeDiv = null;
          collapsible.style.height = 0;
          setTimeout(() => {
            collapsible.classList.remove('show');
          }, 500);
        } else {
          if (this.accordian && this.activeDiv && this.activeDiv !== collapsible) {
            console.log('active Div', this.activeDiv);
            this.activeDiv.style.height = 0;
            setTimeout(() => {
              this.activeDiv.classList.remove('show');
              this.activeDiv = collapsible;
            }, 500);
          }
          collapsible.classList.add('show');
          setTimeout(() => {
            divHeight = collapsible.children[0].offsetHeight;
            console.log('divHeight', divHeight);
            collapsible.style.height = divHeight + 'px';
          }, 50);
        }

      });
    }
  }

  @Method()
  public show(index): void {

    console.log('help', index);
    const collapsible: any = document.querySelector('#collapseExample');
    collapsible.classList.contains('show') ? collapsible.classList.remove('show') : collapsible.classList.add('show');
    console.log(collapsible);

  }

  @Method()
  public hide(): void {
  }

  componentDidUnload(): void {
  }


  render() {
    return (
      <div>
        <slot />
      </div>
    );

  }
}
