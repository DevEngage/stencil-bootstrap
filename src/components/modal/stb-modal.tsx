import {Component, Prop, Element, Event, EventEmitter, Method} from '@stencil/core';

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
    theme: 'modal',
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
  @Element() element: HTMLElement;
  @Event() onShow: EventEmitter;
  @Event() onHide: EventEmitter;
  @Prop() keyboard?: boolean = true;
  @Prop() options: any;
  @Prop() ignoreBackdropClick: boolean = false;
  // @Prop() animation = {
  //   prefix: 'animated',
  //   showDuration: 'duration-500ms',
  //   show: 'fadeInDown',
  //   hideDuration: 'duration-500ms',
  //   hide: 'fadeOut'
  // };
  documentBackDropClickHandler;
  documentEscHandler;

  componentWillLoad(): void {
  }

  componentDidUnload(): void {
    this.body.classList.remove('model-open');
    if (this.documentBackDropClickHandler) {
      document.removeEventListener('mouseup', this.documentBackDropClickHandler);
    }
  }

  @Method()
  public toggle(relatedTarget) {
    return this.isVisible ? this.hide(relatedTarget) : this.show(relatedTarget)
  }

  @Method()
  public show(relatedTarget?): void {
    // const modalDialogElement = this.element.getElementsByClassName('modal-dialog')[0];
    this.element.style.display = 'block';
    this.element.style.overflow = 'auto';
    this.body.classList.add('model-open');
    // modalDialogElement.classList.add(this.animation.showDuration);
    // modalDialogElement.classList.add(this.animation.prefix);
    // modalDialogElement.classList.add(this.animation.show);
    this.element.classList.add('show');
    this.onShow.emit(relatedTarget);
    this.isVisible = true;
    this.adjustDialog();
    this.checkScrollbar();
    this.showBackdrop(() => this.showElement());
    this.documentEscHandler = this.escKey();
    document.addEventListener('keyup', this.documentEscHandler);
  }

  @Method()
  public hide(reason?): void {
    if (this.isTransitioning || !this.isVisible) {
      return
    }
    // this.element.getElementsByClassName('modal-dialog')[0].classList.remove(this.animation.showDuration);
    // this.element.getElementsByClassName('modal-dialog')[0].classList.remove(this.animation.prefix);
    // this.element.getElementsByClassName('modal-dialog')[0].classList.remove(this.animation.show);
    this.element.classList.remove(ClassName.SHOW);
    this.body.classList.remove('model-open');
    this.onHide.emit(reason);
    this.isVisible = false;
    this.hideModal();
    if (this.documentEscHandler) document.addEventListener('keyup', this.documentEscHandler);
    this.documentEscHandler = undefined;
  }

  private hideModal() {
    this.element.style.display = 'none';
    this.element.style.overflow = 'hidden';
    this.element.setAttribute('aria-hidden', 'true');
    this.isTransitioning = false;
    this.showBackdrop(() => {
      this.body.classList.remove(ClassName.OPEN);
      this.resetAdjustments();
      this.resetScrollbar();
    });
    if (this.documentBackDropClickHandler) {
      document.removeEventListener('mouseup', this.documentBackDropClickHandler);
    }
  }

  // @Listen('keyup.escape')
  escKey() {
    return ($event) => {
      if (this.keyboard && !$event.defaultPrevented && $event.key === 'Escape') {
        console.log($event.key)
        this.hide('esc');
      }
    }
  }

  private showElement() {

    if (!this.element.parentNode ||
      this.element.parentNode.nodeType !== Node.ELEMENT_NODE) {
      // Don't move modal's DOM position
      document.body.appendChild(this.element)
    }
  //
    this.element.style.display = 'block';
    this.element.removeAttribute('aria-hidden');
    this.element.scrollTop = 0;

    this.element.classList.add(ClassName.SHOW);

  }

  private showBackdrop(callback?) {
    if (this.isVisible) {
      this.backdrop = document.createElement('div');
      this.backdrop.className = ClassName.BACKDROP;
      this.body.appendChild(this.backdrop);

      this.documentBackDropClickHandler = (event) => {
        if (this.ignoreBackdropClick) {
          return;
        }
        if (event.target !== this.element) {
          return;
        }
        this.hide();
      };

      document.addEventListener('mouseup', this.documentBackDropClickHandler);

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
    this.element.style.paddingLeft = '';
    this.element.style.paddingRight = '';
  }

  private adjustDialog() {
    const isModalOverflowing =
      this.element.scrollHeight > document.documentElement.clientHeight;

    if (!this.isBodyOverflowing && isModalOverflowing) {
      this.element.style.paddingLeft = `${this.scrollbarWidth}px`;
    }

    if (this.isBodyOverflowing && !isModalOverflowing) {
      this.element.style.paddingRight = `${this.scrollbarWidth}px`;
    }
  }

  private checkScrollbar() {
    const rect = document.body.getBoundingClientRect();
    this.isBodyOverflowing = rect.left + rect.right < window.innerWidth;
    this.scrollbarWidth = this.getScrollbarWidth();
  }

  private getScrollbarWidth() {
    const scrollDiv = document.createElement('div');
    scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  }

  resetScrollbar() {
    document.getElementsByClassName(Selector.FIXED_CONTENT)
  }
}
