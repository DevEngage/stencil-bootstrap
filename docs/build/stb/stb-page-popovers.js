/*! Built with http://stenciljs.com */
const { h } = window.stb;

import Popper from './chunk1.js';

class StbPopovers {
    render() {
        return (h("div", { class: "pb-4" },
            h("h1", null, "Popovers"),
            h("br", null),
            h("br", null),
            h("stb-popover", null,
                h("button", { class: "btn btn-secondary", type: "button", "data-toggle": "popover", "data-placement": "top", title: "Popover on top", "data-content": "And here's some amazing content. It's very engaging. Right?", "aria-haspopup": "true", "aria-expanded": "false" }, "Popover on Top")),
            h("br", null),
            h("br", null),
            h("stb-popover", null,
                h("button", { class: "btn btn-secondary", type: "button", "data-toggle": "popover", "data-placement": "bottom", title: "Popover on bottom", "aria-haspopup": "true", "aria-expanded": "false" }, "Popover on Bottom")),
            h("br", null),
            h("br", null),
            h("stb-popover", null,
                h("button", { class: "btn btn-secondary", type: "button", "data-toggle": "popover", "data-placement": "right", "data-content": "Popover on right", "aria-haspopup": "true", "aria-expanded": "false" }, "Popover on Right")),
            h("br", null),
            h("br", null),
            h("stb-popover", null,
                h("button", { class: "btn btn-secondary", type: "button", "data-toggle": "popover", "data-placement": "left", "data-content": "Popover on left", "aria-haspopup": "true", "aria-expanded": "false" }, "Popover on Left"))));
    }
    static get is() { return "stb-page-popovers"; }
    static get style() { return ""; }
}

class StbPopover {
    constructor() {
        this.body = document.body;
        this.isVisible = false;
        this.disabled = false;
        this.action = '[data-toggle="popover"]';
        this.target = '.popover';
        this.positionFixed = false;
        this.modifiers = {};
        this.onlyOneOpen = false;
        this.placement = 'right';
        this.popoverTitle = 'popover title';
        this.popoverBody = 'popover body';
    }
    componentDidLoad() {
        this.button = this.element.querySelector(this.action);
        this.popover = this.element.querySelector(this.target);
        this.getPlacement();
        this.getContent();
        this.addClickListener();
        new Popper(this.button, this.popover, {
            placement: this.placement,
            positionFixed: this.positionFixed,
            modifiers: this.modifiers
        });
        this.managePlacement();
        this.popover.style.zIndex = -10;
    }
    componentDidUnload() {
        if (this.documentListener) {
            this.removeDocumentListener();
        }
        if (this.buttonListener) {
            this.removeClickListener();
        }
    }
    getPlacement() {
        this.placement = this.button.getAttribute('data-placement');
    }
    getContent() {
        this.popoverTitle = this.button.getAttribute('title');
        this.element.querySelector('.popover-header').innerHTML = this.popoverTitle;
        this.popoverBody = this.button.getAttribute('data-content');
        this.element.querySelector('.popover-body').innerHTML = this.popoverBody;
    }
    hideAllPopovers() {
        if (this.onlyOneOpen) {
            const popovers = document.querySelectorAll('stb-popover');
            if (popovers) {
                popovers.forEach(item => item.hide());
            }
        }
    }
    hasClass(element, className) {
        return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
    }
    managePlacement() {
        const popover = this.element.querySelector(this.target);
        const arrow = this.element.querySelector('.arrow');
        switch (this.placement) {
            case 'top':
                arrow.style.left = (popover.clientWidth / 2 - 12) + 'px';
                this.popover.classList.add('bs-popover-top');
                break;
            case 'bottom':
                arrow.style.left = (popover.clientWidth / 2 - 12) + 'px';
                this.popover.classList.add('bs-popover-bottom');
                break;
            case 'left':
                arrow.style.top = (popover.clientHeight / 2 - 12) + 'px';
                this.popover.classList.add('bs-popover-left');
                break;
            case 'right':
                arrow.style.top = (popover.clientHeight / 2 - 12) + 'px';
                this.popover.classList.add('bs-popover-right');
                break;
        }
    }
    addDocumentListener() {
        this.documentListener = () => {
            this.toggle();
        };
        document.addEventListener('mouseup', this.documentListener);
    }
    removeDocumentListener() {
        document.removeEventListener('mouseup', this.documentListener);
    }
    addClickListener(element = this.button) {
        this.buttonListener = () => this.toggle();
        element.addEventListener('mouseup', this.buttonListener);
    }
    removeClickListener(element = this.button) {
        element.removeEventListener('mouseup', this.buttonListener);
    }
    showTarget() {
        this.popover.classList.add('show');
        this.popover.style.zIndex = 1060;
        this.isVisible = true;
    }
    hideTarget() {
        this.popover.classList.remove('show');
        this.popover.style.zIndex = -10;
        this.isVisible = false;
    }
    toggle() {
        return this.isVisible ? this.hide() : this.show();
    }
    show() {
        console.log('show');
        this.hideAllPopovers();
        this.showTarget();
        this.managePlacement();
        this.onShow.emit();
        setTimeout(() => this.addDocumentListener(), 400);
    }
    hide() {
        this.removeDocumentListener();
        console.log('hide');
        this.hideTarget();
        this.onHide.emit();
    }
    render() {
        return (h("div", { class: "popover fade", role: "tooltip" },
            h("div", { class: "arrow" }),
            h("h3", { class: "popover-header" }),
            h("div", { class: "popover-body" })));
    }
    static get is() { return "stb-popover"; }
    static get host() { return { "theme": "" }; }
    static get properties() { return { "action": { "type": String, "attr": "action" }, "disabled": { "type": Boolean, "attr": "disabled" }, "element": { "elementRef": true }, "hide": { "method": true }, "modifiers": { "type": "Any", "attr": "modifiers" }, "onlyOneOpen": { "type": Boolean, "attr": "only-one-open" }, "placement": { "state": true }, "popoverBody": { "state": true }, "popoverTitle": { "state": true }, "positionFixed": { "type": Boolean, "attr": "position-fixed" }, "show": { "method": true }, "target": { "type": String, "attr": "target" }, "toggle": { "method": true } }; }
    static get events() { return [{ "name": "onShow", "method": "onShow", "bubbles": true, "cancelable": true, "composed": true }, { "name": "onHide", "method": "onHide", "bubbles": true, "cancelable": true, "composed": true }]; }
}

export { StbPopovers as StbPagePopovers, StbPopover };
