import {Component, Prop, Element, Event, EventEmitter, Listen, Method} from '@stencil/core';

const ClassName = {
  SCROLLBAR_MEASURER : 'modal-scrollbar-measure',
  BACKDROP           : 'modal-backdrop',
  OPEN               : 'modal-open',
  FADE               : 'fade',
  SHOW               : 'show'
};

const Selector = {
  DIALOG             : '.modal-dialog',
  DATA_TOGGLE        : '[data-toggle="modal"]',
  DATA_DISMISS       : '[data-dismiss="modal"]',
  FIXED_CONTENT      : '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT     : '.sticky-top',
  NAVBAR_TOGGLER     : '.navbar-toggler'
};

@Component({
  tag: 'stb-modal',
  host: {
    role: 'dialog',
    tabindex: '-1',
    'style': 'display: block;',
  }
})
export class StbModal {

  private backdrop = null;
  private isBodyOverflowing = null;
  private scrollbarWidth = null;
  private isTransitioning = false;
  private isVisible = false;

  body: HTMLElement = document.body;

  @Element() stbModalElement: HTMLElement;
  @Event() showEvent: EventEmitter;
  @Event() hideEvent: EventEmitter;

  @Prop() effect = 'fade';
  @Prop() ariaLabelledBy = 'exampleModalLabel';
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


  public toggle(relatedTarget) {
    return this.isVisible ? this.hide(relatedTarget) : this.show(relatedTarget)
  }

  componentWillLoad(): void {
    console.log(this.stbModalElement);
    this.stbModalElement.classList.add('modal');
    this.stbModalElement.classList.add(this.effect);
  }

  @Method()
  public show(relatedTarget?): void {
    const modalDialogElement = this.stbModalElement.getElementsByClassName('modal-dialog')[0];
    // if (this.isTransitioning || this.isVisible) {
    //   return
    // }
    this.stbModalElement.style.display = 'block';
    this.stbModalElement.style.overflow = 'auto';
    this.body.classList.add('model-open');
    modalDialogElement.classList.add(this.animation.showDuration);
    modalDialogElement.classList.add(this.animation.prefix);
    modalDialogElement.classList.add(this.animation.show);
    this.stbModalElement.classList.add('show');
    this.showEvent.emit(relatedTarget);
    this.isVisible = true;

    this.adjustDialog();
    this.checkScrollbar();
    this.setScrollbar();

    this.showBackdrop(() => this.showElement());
  }

  @Method()
  public hide(reason?): void {
    if (this.isTransitioning || !this.isVisible) {
      return
    }

    this.stbModalElement.getElementsByClassName('modal-dialog')[0].classList.remove(this.animation.showDuration);
    this.stbModalElement.getElementsByClassName('modal-dialog')[0].classList.remove(this.animation.prefix);
    this.stbModalElement.getElementsByClassName('modal-dialog')[0].classList.remove(this.animation.show);
    this.stbModalElement.classList.remove(ClassName.SHOW);
    // setTimeout(() => {
      this.body.classList.remove('model-open');
      this.hideEvent.emit(reason);
      this.isVisible = false;
      this.hideModal();
    // }, this.animation.hideDuration);
  }

  private hideModal() {
    this.stbModalElement.style.display = 'none';
    this.stbModalElement.style.overflow = 'hidden';
    this.stbModalElement.setAttribute('aria-hidden', 'true');
    this.isTransitioning = false;
    this.showBackdrop(() => {
      this.body.classList.remove(ClassName.OPEN);
      this.resetAdjustments();
      this.resetScrollbar();
    })
  }

  @Listen('keyup.escape')
  escKey($event): void {
    if (this.keyboard && !$event.defaultPrevented) {
      this.hide('esc');
    }
  }

  private showElement() {

    if (!this.stbModalElement.parentNode ||
      this.stbModalElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
      // Don't move modal's DOM position
      document.body.appendChild(this.stbModalElement)
    }
  //
    this.stbModalElement.style.display = 'block';
    this.stbModalElement.removeAttribute('aria-hidden');
    this.stbModalElement.scrollTop = 0;

    this.stbModalElement.classList.add(ClassName.SHOW);

  //   // if (Default.focus) {
  //   //   this.enforceFocus()
  //   // }
  //

  }

  private showBackdrop(callback?) {
    // const animate = $(this._element).hasClass(ClassName.FADE)
    //   ? ClassName.FADE : ''

    if (this.isVisible) {
      this.backdrop = document.createElement('div');
      this.backdrop.className = ClassName.BACKDROP;

      this.body.appendChild(this.backdrop);

      this.backdrop.addEventListener('click', (event) => {
        if (event.target !== event.currentTarget) {
          return;
        }
        // if (this._config.backdrop === 'static') {
        //   this.stbModalElement.focus();
        // } else {
          this.hide()
        // }
      });

      // $(this._element).on(Event.CLICK_DISMISS, (event) => {
      //   if (this._ignoreBackdropClick) {
      //     this._ignoreBackdropClick = false
      //     return
      //   }
      //   if (event.target !== event.currentTarget) {
      //     return
      //   }
      //   if (this._config.backdrop === 'static') {
      //     this._element.focus()
      //   } else {
      //     this.hide()
      //   }
      // })

      this.backdrop.classList.add(ClassName.SHOW);

      if (!callback) {
        return
      }

    } else if (!this.isVisible && this.backdrop) {
      this.backdrop.classList.remove(ClassName.SHOW);

      const callbackRemove = () => {
        this.removeBackdrop();
        if (callback) {
          callback();
        }
      };
      callbackRemove();
    } else if (callback) {
      callback()
    }
  }

  removeBackdrop() {
    if (this.backdrop) {
      this.body.removeChild(this.backdrop);
      this.backdrop = null
    }
  }

  resetAdjustments() {
    this.stbModalElement.style.paddingLeft = '';
    this.stbModalElement.style.paddingRight = '';
  }

  private adjustDialog() {
    const isModalOverflowing =
      this.stbModalElement.scrollHeight > document.documentElement.clientHeight;

    if (!this.isBodyOverflowing && isModalOverflowing) {
      this.stbModalElement.style.paddingLeft = `${this.scrollbarWidth}px`
    }

    if (this.isBodyOverflowing && !isModalOverflowing) {
      this.stbModalElement.style.paddingRight = `${this.scrollbarWidth}px`
    }
  }

  private checkScrollbar() {
    const rect = document.body.getBoundingClientRect();
    this.isBodyOverflowing = rect.left + rect.right < window.innerWidth;
    this.scrollbarWidth = this.getScrollbarWidth();
  }

  private getScrollbarWidth() { // thx d.walsh
    const scrollDiv = document.createElement('div');
    scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  }

  private setScrollbar() {
    console.log(this.isBodyOverflowing)
  //   if (this.isBodyOverflowing) {
  //     // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
  //     //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
  //
  //     // Adjust fixed content padding
  //     $(Selector.FIXED_CONTENT).each((index, element) => {
  //       const actualPadding = $(element)[0].style.paddingRight
  //       const calculatedPadding = $(element).css('padding-right')
  //       $(element).data('padding-right', actualPadding).css('padding-right', `${parseFloat(calculatedPadding) + this._scrollbarWidth}px`)
  //     })
  //
  //     // Adjust sticky content margin
  //     $(Selector.STICKY_CONTENT).each((index, element) => {
  //       const actualMargin = $(element)[0].style.marginRight
  //       const calculatedMargin = $(element).css('margin-right')
  //       $(element).data('margin-right', actualMargin).css('margin-right', `${parseFloat(calculatedMargin) - this._scrollbarWidth}px`)
  //     })
  //
  //     // Adjust navbar-toggler margin
  //     $(Selector.NAVBAR_TOGGLER).each((index, element) => {
  //       const actualMargin = $(element)[0].style.marginRight
  //       const calculatedMargin = $(element).css('margin-right')
  //       $(element).data('margin-right', actualMargin).css('margin-right', `${parseFloat(calculatedMargin) + this._scrollbarWidth}px`)
  //     })
  //
  //     // Adjust body padding
  //     const actualPadding = document.body.style.paddingRight
  //     const calculatedPadding = $('body').css('padding-right')
  //     $('body').data('padding-right', actualPadding).css('padding-right', `${parseFloat(calculatedPadding) + this._scrollbarWidth}px`)
  //   }

  }

  resetScrollbar() {
    document.getElementsByClassName(Selector.FIXED_CONTENT)
  }

  componentDidUnload(): void {
    this.body.classList.remove('model-open');
  }

  render() {
    return (
      <div class={`modal-dialog ${this.modalDialogCentered ? 'modal-dialog-centered' : ''} ${this.size}`} role="document">
        <slot name="modal-dialog" />
      </div>
    );
  }
}
