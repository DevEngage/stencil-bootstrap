/*! Built with http://stenciljs.com */
const { h } = window.stb;

const ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
};
const Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top',
    NAVBAR_TOGGLER: '.navbar-toggler'
};
class StbModal {
    constructor() {
        this.backdrop = null;
        this.isBodyOverflowing = null;
        this.scrollbarWidth = null;
        this.isTransitioning = false;
        this.isVisible = false;
        this.body = document.body;
        this.keyboard = true;
        this.ignoreBackdropClick = false;
        this.animation = {
            prefix: 'animated',
            showDuration: 'duration-500ms',
            show: 'fadeInDown',
            hideDuration: 'duration-500ms',
            hide: 'fadeOut'
        };
    }
    componentWillLoad() {
    }
    componentDidUnload() {
        this.body.classList.remove('model-open');
        if (this.documentBackDropClickHandler) {
            document.removeEventListener('mouseup', this.documentBackDropClickHandler);
        }
    }
    toggle(relatedTarget) {
        return this.isVisible ? this.hide(relatedTarget) : this.show(relatedTarget);
    }
    show(relatedTarget) {
        const modalDialogElement = this.element.getElementsByClassName('modal-dialog')[0];
        this.element.style.display = 'block';
        this.element.style.overflow = 'auto';
        this.body.classList.add('model-open');
        modalDialogElement.classList.add(this.animation.showDuration);
        modalDialogElement.classList.add(this.animation.prefix);
        modalDialogElement.classList.add(this.animation.show);
        this.element.classList.add('show');
        this.onShow.emit(relatedTarget);
        this.isVisible = true;
        this.adjustDialog();
        this.checkScrollbar();
        this.showBackdrop(() => this.showElement());
    }
    hide(reason) {
        if (this.isTransitioning || !this.isVisible) {
            return;
        }
        this.element.getElementsByClassName('modal-dialog')[0].classList.remove(this.animation.showDuration);
        this.element.getElementsByClassName('modal-dialog')[0].classList.remove(this.animation.prefix);
        this.element.getElementsByClassName('modal-dialog')[0].classList.remove(this.animation.show);
        this.element.classList.remove(ClassName.SHOW);
        this.body.classList.remove('model-open');
        this.onHide.emit(reason);
        this.isVisible = false;
        this.hideModal();
    }
    hideModal() {
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
    escKey($event) {
        if (this.keyboard && !$event.defaultPrevented) {
            this.hide('esc');
        }
    }
    showElement() {
        if (!this.element.parentNode ||
            this.element.parentNode.nodeType !== Node.ELEMENT_NODE) {
            // Don't move modal's DOM position
            document.body.appendChild(this.element);
        }
        //
        this.element.style.display = 'block';
        this.element.removeAttribute('aria-hidden');
        this.element.scrollTop = 0;
        this.element.classList.add(ClassName.SHOW);
    }
    showBackdrop(callback) {
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
                return;
            }
        }
        else if (!this.isVisible && this.backdrop) {
            this.backdrop.classList.remove(ClassName.SHOW);
            const callbackRemove = () => {
                this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            callbackRemove();
        }
        else if (callback) {
            callback();
        }
    }
    removeBackdrop() {
        if (this.backdrop) {
            this.body.removeChild(this.backdrop);
            this.backdrop = null;
        }
    }
    resetAdjustments() {
        this.element.style.paddingLeft = '';
        this.element.style.paddingRight = '';
    }
    adjustDialog() {
        const isModalOverflowing = this.element.scrollHeight > document.documentElement.clientHeight;
        if (!this.isBodyOverflowing && isModalOverflowing) {
            this.element.style.paddingLeft = `${this.scrollbarWidth}px`;
        }
        if (this.isBodyOverflowing && !isModalOverflowing) {
            this.element.style.paddingRight = `${this.scrollbarWidth}px`;
        }
    }
    checkScrollbar() {
        const rect = document.body.getBoundingClientRect();
        this.isBodyOverflowing = rect.left + rect.right < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    }
    getScrollbarWidth() {
        const scrollDiv = document.createElement('div');
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
        document.body.appendChild(scrollDiv);
        const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    }
    resetScrollbar() {
        document.getElementsByClassName(Selector.FIXED_CONTENT);
    }
    static get is() { return "stb-modal"; }
    static get host() { return { "theme": "modal", "role": "dialog", "tabindex": "-1", "style": "display: block;" }; }
    static get properties() { return { "animation": { "type": "Any", "attr": "animation" }, "element": { "elementRef": true }, "hide": { "method": true }, "ignoreBackdropClick": { "type": Boolean, "attr": "ignore-backdrop-click" }, "keyboard": { "type": Boolean, "attr": "keyboard" }, "options": { "type": "Any", "attr": "options" }, "show": { "method": true }, "toggle": { "method": true } }; }
    static get events() { return [{ "name": "onShow", "method": "onShow", "bubbles": true, "cancelable": true, "composed": true }, { "name": "onHide", "method": "onHide", "bubbles": true, "cancelable": true, "composed": true }]; }
}

class StbPageModals {
    openModal() {
        const modal = document.querySelector('stb-modal');
        console.log(modal);
        modal.show();
    }
    closeModal() {
        const modal = document.querySelector('stb-modal');
        console.log(modal);
        modal.hide();
    }
    openLongModal() {
        const modal = document.querySelector('#long-modal');
        console.log(modal);
        modal.show();
    }
    closeLongModal() {
        const modal = document.querySelector('#long-modal');
        console.log(modal);
        modal.hide();
    }
    render() {
        return (h("div", { class: "pb-4" },
            h("h2", null, "Modals"),
            h("button", { class: "btn", onClick: this.openModal }, "Open Modal"),
            h("script", { async: true, src: "//jsfiddle.net/devengage/yw72Lmaa/15/embed/js/" }),
            h("button", { class: "btn mt-2", onClick: this.openLongModal }, "Open Long Modal"),
            h("stb-modal", null,
                h("div", { class: "modal-dialog", role: "document" },
                    h("div", { class: "modal-content" },
                        h("div", { class: "modal-header" },
                            h("h5", { class: "modal-title", id: "exampleModalLabel" }, "Modal title"),
                            h("button", { type: "button", class: "close", onClick: this.closeModal },
                                h("span", { "aria-hidden": "true" }, "\u00D7"))),
                        h("div", { class: "modal-body" }, "..."),
                        h("div", { class: "modal-footer" },
                            h("button", { type: "button", class: "btn btn-secondary", onClick: this.closeModal }, "Close"),
                            h("button", { type: "button", class: "btn btn-primary" }, "Save changes"))))),
            h("stb-modal", { id: "long-modal" },
                h("div", { class: "modal-dialog", role: "document" },
                    h("div", { class: "modal-content" },
                        h("div", { class: "modal-header" },
                            h("h5", { class: "modal-title", id: "exampleModalLabel" }, "Modal title 2"),
                            h("button", { type: "button", class: "close", onClick: this.closeLongModal },
                                h("span", { "aria-hidden": "true" }, "\u00D7"))),
                        h("div", { class: "modal-body" }, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."),
                        h("div", { class: "modal-footer" },
                            h("button", { type: "button", class: "btn btn-secondary", onClick: this.closeLongModal }, "Close"),
                            h("button", { type: "button", class: "btn btn-primary" }, "Save changes")))))));
    }
    static get is() { return "stb-page-modals"; }
    static get style() { return ""; }
}

export { StbModal, StbPageModals };
