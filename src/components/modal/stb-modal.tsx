import {Component, Prop, Element, Event, EventEmitter, Listen, Method} from '@stencil/core';

// const NAME                         = 'modal';
const VERSION                      = '4.0.0';
// const DATA_KEY                     = 'bs.modal';
// const EVENT_KEY                    = `.${DATA_KEY}`;
// const DATA_API_KEY                 = '.data-api';
// const JQUERY_NO_CONFLICT           = $.fn[NAME];
// const TRANSITION_DURATION          = 300;
// const BACKDROP_TRANSITION_DURATION = 150;
// const ESCAPE_KEYCODE               = 27; // KeyboardEvent.which value for Escape (Esc) key

const Default = {
  backdrop : true,
  keyboard : true,
  focus    : true,
  show     : true
};

// const DefaultType = {
//   backdrop : '(boolean|string)',
//   keyboard : 'boolean',
//   focus    : 'boolean',
//   show     : 'boolean'
// };

// const StbEvent = {
//   HIDE              : `hide${EVENT_KEY}`,
//   HIDDEN            : `hidden${EVENT_KEY}`,
//   SHOW              : `show${EVENT_KEY}`,
//   SHOWN             : `shown${EVENT_KEY}`,
//   FOCUSIN           : `focusin${EVENT_KEY}`,
//   RESIZE            : `resize${EVENT_KEY}`,
//   CLICK_DISMISS     : `click.dismiss${EVENT_KEY}`,
//   KEYDOWN_DISMISS   : `keydown.dismiss${EVENT_KEY}`,
//   MOUSEUP_DISMISS   : `mouseup.dismiss${EVENT_KEY}`,
//   MOUSEDOWN_DISMISS : `mousedown.dismiss${EVENT_KEY}`,
//   CLICK_DATA_API    : `click${EVENT_KEY}${DATA_API_KEY}`
// };

const ClassName = {
  SCROLLBAR_MEASURER : 'modal-scrollbar-measure',
  BACKDROP           : 'modal-backdrop',
  OPEN               : 'modal-open',
  FADE               : 'fade',
  SHOW               : 'show'
};

// const Selector = {
//   DIALOG             : '.modal-dialog',
//   DATA_TOGGLE        : '[data-toggle="modal"]',
//   DATA_DISMISS       : '[data-dismiss="modal"]',
//   FIXED_CONTENT      : '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
//   STICKY_CONTENT     : '.sticky-top',
//   NAVBAR_TOGGLER     : '.navbar-toggler'
// };

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

  private isTransitioning = false;


  // Getters

  static get VERSION() {
    return VERSION
  }

  static get Default() {
    return Default
  }

  // Public

  toggle(relatedTarget) {
    return this.isVisible ? this.hide(relatedTarget) : this.show(relatedTarget)
  }

  componentWillLoad(): void {
    console.log(this.stbModalElement);
    this.stbModalElement.classList.add('modal');
    this.stbModalElement.classList.add(this.effect);
    // this.show();
  }

  @Method()
  show(relatedTarget?): void {
    // if (this.isTransitioning || this.isVisible) {
    //   return
    // }
    // const containerSelector = this.options.container || 'body';
    // const containerEl = document.querySelector(containerSelector);
    //
    // if (!containerEl) {
    //   throw new Error(`The specified modal container "${containerSelector}" was not found in the DOM.`);
    // }
    this.stbModalElement.style.display = 'block';
    this.body.classList.add('model-open');
    this.stbModalElement.classList.add('show');
    this.showEvent.emit(relatedTarget);
    this.isVisible = true;

    this.showBackdrop(() => this.showElement(relatedTarget))
  }

  @Method()
  hide(reason?): void {
    if (this.isTransitioning || !this.isVisible) {
      return
    }

    this.stbModalElement.classList.remove(ClassName.SHOW);
    this.body.classList.remove('model-open');
    this.hideEvent.emit(reason);
    this.isVisible = false;
    this.hideModal();
  }

  hideModal() {
    this.stbModalElement.style.display = 'none';
    // this.stbModalElement.setAttribute('aria-hidden', true);
    this.isTransitioning = false;
    this.showBackdrop(() => {
      this.body.classList.remove(ClassName.OPEN);
      // this._resetAdjustments();
      // this._resetScrollbar();
      // $(this._element).trigger(Event.HIDDEN)
    })
  }

  @Listen('keyup.escape')
  escKey($event): void {
    if (this.keyboard && !$event.defaultPrevented) {
      this.hide('esc');
    }
  }

  private showElement(relatedTarget?) {
    console.log(relatedTarget)
  //   console.log(relatedTarget)
  //   // const transition = Util.supportsTransitionEnd() &&
  //   //   $(this._element).hasClass(ClassName.FADE);
  //
  //   if (!this.stbModalElement.parentNode ||
  //     this.stbModalElement.parentNode.nodeType !== Node.ELEMENT_NODE) {
  //     // Don't move modal's DOM position
  //     document.body.appendChild(this.stbModalElement)
  //   }
  //
  //   this.stbModalElement.style.display = 'block';
  //   this.stbModalElement.removeAttribute('aria-hidden');
  //   this.stbModalElement.scrollTop = 0;
  //
  //   // if (transition) {
  //   //   Util.reflow(this._element)
  //   // }
  //
  //   this.stbModalElement.classList.add(ClassName.SHOW);
  //
  //   // if (Default.focus) {
  //   //   this._enforceFocus()
  //   // }
  //
  //   // const shownEvent = $.Event(Event.SHOWN, {
  //   //   relatedTarget
  //   // });
  //
  //   // const transitionComplete = () => {
  //   //   if (this._config.focus) {
  //   //     this._element.focus()
  //   //   }
  //   //   this._isTransitioning = false;
  //   //   $(this._element).trigger(shownEvent)
  //   // }
  //
  //   // if (transition) {
  //   //   $(this._dialog)
  //   //     .one(Util.TRANSITION_END, transitionComplete)
  //   //     .emulateTransitionEnd(TRANSITION_DURATION)
  //   // } else {
  //   //   transitionComplete()
  //   // }
  }

  private showBackdrop(callback?) {
    // const animate = $(this._element).hasClass(ClassName.FADE)
    //   ? ClassName.FADE : ''

    if (this.isVisible) {
      // const doAnimate = Util.supportsTransitionEnd() && animate

      this.backdrop = document.createElement('div');
      this.backdrop.className = ClassName.BACKDROP;

      // if (animate) {
      //   $(this._backdrop).addClass(animate)
      // }

      this.body.appendChild(this.backdrop);

      this.backdrop.addEventListener('click', (event) => {
        console.log('hit')
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

      // if (doAnimate) {
      //   Util.reflow(this._backdrop)
      // }

      this.backdrop.classList.add(ClassName.SHOW);

      if (!callback) {
        return
      }

      // if (!doAnimate) {
      //   callback();
      //   return
      // }

      // $(this.backdrop)
      //   .one(Util.TRANSITION_END, callback)
      //   .emulateTransitionEnd(BACKDROP_TRANSITION_DURATION)
    } else if (!this.isVisible && this.backdrop) {
      this.backdrop.classList.remove(ClassName.SHOW);

      const callbackRemove = () => {
        this.removeBackdrop();
        if (callback) {
          callback();
        }
      };

      // if (Util.supportsTransitionEnd() &&
      //   $(this._element).hasClass(ClassName.FADE)) {
      //   $(this._backdrop)
      //     .one(Util.TRANSITION_END, callbackRemove)
      //     .emulateTransitionEnd(BACKDROP_TRANSITION_DURATION)
      // } else {
        callbackRemove();
      // }
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
