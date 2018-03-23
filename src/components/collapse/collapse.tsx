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
  @Prop() activeClass = 'active';

  @Prop() animation = {
    prefix: 'animated',
    showDuration: 'duration-500ms',
    show: 'fadeInD',
    hideDuration: 'duration-500ms',
    hide: 'fadeOut'
  };

  @Method()
  public toggle() {
    // this.isVisible = !this.isVisible;
    // return this.isVisible ? this.hide() : this.show()
  }

  componentDidLoad(): void {
    console.log('collapse');
    const collapse = document.querySelectorAll('[data-toggle="collapse"]');
    let i;
    console.log('coll', collapse);
    for (i = 0; i < collapse.length; i++) {
      const collDiv:any = collapse[i];
      let target;

      if (collDiv.getAttribute('data-target')) target = collapse[i].getAttribute('data-target');
      if (collDiv.getAttribute('href')) target = collapse[i].getAttribute('href');
      const collapsible: any = document.querySelector(target);
      collapsible.classList.add('collapsing');
      collDiv.addEventListener("click",() =>  {
        // collapsible.classList.contains('this.animation.showDuration') ? collapsible.classList.remove(this.animation.showDuration) : collapsible.classList.add(this.animation.showDuration);
        // collapsible.classList.contains('this.animation.prefix') ? collapsible.classList.remove(this.animation.prefix) : collapsible.classList.add(this.animation.prefix);
        // collapsible.classList.contains('this.animation.show') ? collapsible.classList.remove(this.animation.show) : collapsible.classList.add(this.animation.show);

        if (collapsible.classList.contains('show')) {
          collapsible.style.height = 0;
          setTimeout(() => {
            collapsible.classList.remove('show');
          }, 500);
        } else {
          collapsible.classList.add('show');
          setTimeout(() => {
            collapsible.style.height = '115px';
          }, 50);
        }

        // collapsible.classList.contains('full-height') ? collapsible.classList.remove('full-height') : collapsible.classList.add('full-height');
        // collapsible.classList.contains('show') ? collapsible.classList.remove('show') : collapsible.classList.add('show');
        console.log(collapsible);
      });
    }

  }

  @Method(test)
  public show(test): void {

    console.log('help', test);
    const collapsible: any = document.querySelector('#collapseExample');
    collapsible.classList.contains('show') ? collapsible.classList.remove('show') : collapsible.classList.add('show');
    console.log(collapsible);


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
      <div>
      <p>
        <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
        Link with href
        </a>
        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
          Button with data-target
        </button>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </div>
        <div class="collapse" id="collapseExample2">
          <div class="card card-body">
            Anim2 pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </div>
      </div>
    );
  }
}
