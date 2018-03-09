import {Component, Prop, Element, Event, EventEmitter, Method, State} from '@stencil/core';

const ClassName = {
  DISABLED  : 'disabled',
  SHOW      : 'show',
  DROPUP    : 'dropup',
  DROPRIGHT : 'dropright',
  DROPLEFT  : 'dropleft',
  MENURIGHT : 'dropdown-menu-right',
  MENULEFT  : 'dropdown-menu-left',
  POSITION_STATIC : 'position-static'
};

@Component({
  tag: 'stb-dropdown',
  host: {
    theme: 'dropdown',
  }
})
export class StbDropdown {

  @State() isVisible = false;

  body: HTMLElement = document.body;

  @Element() element: HTMLElement;
  @Event() showEvent: EventEmitter;
  @Event() hideEvent: EventEmitter;

  @Prop() disabled: boolean = false;
  // @Prop() type = 'dropdown';

  @Prop() effect = 'fade';
  @Prop() ariaHidden = 'true';
  @Prop() modalDialogCentered = 'true';
  @Prop() keyboard?: boolean = true;
  @Prop() size?: 'sm' | 'lg' = 'sm'; // sm | lg

  @Prop() options: any;

  @Prop() animation = {
    prefix: 'animated',
    showDuration: 'duration-500ms',
    show: 'fadeInDown',
    hideDuration: 'duration-500ms',
    hide: 'fadeOut'
  };

  @Method()
  public toggle() {
    // this.isVisible = !this.isVisible;

    return this.isVisible ? this.hide() : this.show()
  }

  componentWillLoad(): void {
    // console.log(this.stbModalElement);
    // this.stbModalElement.classList.add('modal');
    // this.stbModalElement.classList.add(this.effect);
  }

  hasClass(element, className) {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
  }

  @Method()
  public show(): void {
    if (this.disabled || this.hasClass(this.element, ClassName.DISABLED)) {
      return;
    }
    this.isVisible = true;
  }

  @Method()
  public hide(): void {
    this.isVisible = false;
  }

  static _getParentFromElement() {
    // let parent
    // const selector = Util.getSelectorFromElement(element)
    //
    // if (selector) {
    //   parent = $(selector)[0]
    // }
    //
    // return parent || element.parentNode
  }

  // @Listen('keyup.escape')
  // escKey($event): void {
  //   if (this.keyboard && !$event.defaultPrevented) {
  //     this.hide('esc');
  //   }
  // }

  // resetAdjustments() {
  //   this.stbModalElement.style.paddingLeft = '';
  //   this.stbModalElement.style.paddingRight = '';
  // }
  //
  // private adjustDialog() {
  //   const isModalOverflowing =
  //     this.stbModalElement.scrollHeight > document.documentElement.clientHeight;
  //
  //   if (!this.isBodyOverflowing && isModalOverflowing) {
  //     this.stbModalElement.style.paddingLeft = `${this.scrollbarWidth}px`
  //   }
  //
  //   if (this.isBodyOverflowing && !isModalOverflowing) {
  //     this.stbModalElement.style.paddingRight = `${this.scrollbarWidth}px`
  //   }
  // }
  //
  // private checkScrollbar() {
  //   const rect = document.body.getBoundingClientRect();
  //   this.isBodyOverflowing = rect.left + rect.right < window.innerWidth;
  //   this.scrollbarWidth = this.getScrollbarWidth();
  // }

  // private getScrollbarWidth() { // thx d.walsh
  //   const scrollDiv = document.createElement('div');
  //   scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
  //   document.body.appendChild(scrollDiv);
  //   const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
  //   document.body.removeChild(scrollDiv);
  //   return scrollbarWidth;
  // }


  // resetScrollbar() {
  //   document.getElementsByClassName(Selector.FIXED_CONTENT)
  // }

  componentDidUnload(): void {
    // this.body.classList.remove('model-open');
  }

  render() {
    return (
      <div class="dropdown">
        <button onClick={this.toggle} class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">
          <slot name="button" />
        </button>
        {this.isVisible ? <slot name="dropdown-menu" /> : null}
      </div>
    );
  }
}
