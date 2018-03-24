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
  @Prop() accordian = true;

  @Prop() animation = {
    prefix: 'animated',
    showDuration: 'duration-500ms',
    show: 'fadeInD',
    hideDuration: 'duration-500ms',
    hide: 'fadeOut'
  };
  @State() activeDiv;

  @Method()
  public toggle() {
    // this.isVisible = !this.isVisible;
    // return this.isVisible ? this.hide() : this.show()
  }

  componentDidLoad(): void {
    console.log('collapse');
    console.log('body', this.body);
    this.activeDiv = document.querySelector('.show');
    console.log('activeDiv', this.activeDiv);
    const collapse = document.querySelectorAll('[data-toggle="collapse"]');
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
        collapsible.style.height = collapsible.children[0].clientHeight + 'px';
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
            divHeight = collapsible.children[0].clientHeight;
            console.log('divHeight', divHeight);
            collapsible.style.height = divHeight + 'px';
          }, 50);
        }

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

  // render() {
  //   return (
  //     <div>
  //     <p>
  //       <a class="btn btn-primary" data-toggle="collapse" data-target="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
  //       Link with href
  //       </a>
  //       <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
  //         Button with data-target
  //       </button>
  //     </p>
  //     <div class="collapse" id="collapseExample">
  //       <div class="card card-body">
  //         Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  //       </div>
  //     </div>
  //       <div class="collapse" id="collapseExample2">
  //         <div class="card card-body">
  //           Anim2 pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  render() {
    return (
      <div id="accordion">
        <div class="card">
          <div class="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne">
            <h5 class="mb-0">
              <button class="btn btn-link"  aria-expanded="true" aria-controls="collapseOne">
                Collapsible Group Item #1
              </button>
            </h5>
          </div>

          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed"  aria-expanded="false" aria-controls="collapseTwo">
                Collapsible Group Item #2
              </button>
            </h5>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header" id="headingThree" data-toggle="collapse" data-target="#collapseThree">
            <h5 class="mb-0">
              <button class="btn btn-link collapsed"  aria-expanded="false" aria-controls="collapseThree">
                Collapsible Group Item #3
              </button>
            </h5>
          </div>
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
            <div class="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </div>
        </div>
      </div>
    );

  }
}
