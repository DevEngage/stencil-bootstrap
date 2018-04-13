/*! Built with http://stenciljs.com */
const { h } = window.stb;

import Popper from './chunk1.js';

// const ClassName = {
//   DISABLED  : 'disabled',
//   SHOW      : 'show',
//   DROPUP    : 'dropup',
//   DROPRIGHT : 'dropright',
//   DROPLEFT  : 'dropleft',
//   MENURIGHT : 'dropdown-menu-right',
//   MENULEFT  : 'dropdown-menu-left',
//   POSITION_STATIC : 'position-static'
// };
class StbDropdown {
    constructor() {
        this.body = document.body;
        this.isVisible = false;
        this.disabled = false;
        this.action = '[data-toggle="dropdown"]';
        this.target = '.dropdown-menu';
        this.placement = 'bottom-start';
        this.positionFixed = false;
        this.modifiers = {};
        this.onlyOneOpen = false;
    }
    componentDidLoad() {
        this.button = this.element.querySelector(this.action);
        this.dropdown = this.element.querySelector(this.target);
        this.addClickListener();
        new Popper(this.button, this.dropdown, {
            placement: this.placement,
            positionFixed: this.positionFixed,
            modifiers: this.modifiers
        });
        this.managePlacement();
    }
    componentDidUnload() {
        if (this.documentListener) {
            this.removeDocumentListener();
        }
        if (this.buttonListener) {
            this.removeClickListener();
        }
    }
    hideAllDropdowns() {
        if (this.onlyOneOpen) {
            const dropdowns = document.querySelectorAll('stb-dropdown');
            if (dropdowns) {
                dropdowns.forEach(item => item.hide());
            }
        }
    }
    hasClass(element, className) {
        return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
    }
    managePlacement() {
        const dropdownMenu = this.element.querySelector(this.target);
        const buffer = 2;
        switch (this.placement) {
            case 'top':
                dropdownMenu.style.top = -(buffer + dropdownMenu.clientHeight) + 'px';
                break;
            case 'top-start':
                dropdownMenu.style.top = -(buffer + dropdownMenu.clientHeight) + 'px';
                break;
            case 'top-end':
                dropdownMenu.style.top = -(buffer + dropdownMenu.clientHeight) + 'px';
                break;
            case 'left':
                dropdownMenu.style.left = -(buffer + dropdownMenu.clientWidth) + 'px';
                break;
            case 'left-start':
                dropdownMenu.style.left = -(buffer + dropdownMenu.clientWidth) + 'px';
                break;
            case 'left-end':
                dropdownMenu.style.left = -(buffer + dropdownMenu.clientWidth) + 'px';
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
        const dropdownMenu = this.element.querySelectorAll(this.target);
        dropdownMenu[0].style.display = 'block';
        this.isVisible = true;
    }
    hideTarget() {
        const dropdownMenu = this.element.querySelectorAll(this.target);
        dropdownMenu[0].style.display = 'none';
        this.isVisible = false;
    }
    toggle() {
        return this.isVisible ? this.hide() : this.show();
    }
    show() {
        this.hideAllDropdowns();
        this.showTarget();
        this.managePlacement();
        this.onShow.emit();
        setTimeout(() => this.addDocumentListener(), 400);
    }
    hide() {
        this.removeDocumentListener();
        this.hideTarget();
        this.onHide.emit();
    }
    static get is() { return "stb-dropdown"; }
    static get host() { return { "theme": "dropdown" }; }
    static get properties() { return { "action": { "type": String, "attr": "action" }, "disabled": { "type": Boolean, "attr": "disabled" }, "element": { "elementRef": true }, "hide": { "method": true }, "modifiers": { "type": "Any", "attr": "modifiers" }, "onlyOneOpen": { "type": Boolean, "attr": "only-one-open" }, "placement": { "type": "Any", "attr": "placement" }, "positionFixed": { "type": Boolean, "attr": "position-fixed" }, "show": { "method": true }, "target": { "type": String, "attr": "target" }, "toggle": { "method": true } }; }
    static get events() { return [{ "name": "onShow", "method": "onShow", "bubbles": true, "cancelable": true, "composed": true }, { "name": "onHide", "method": "onHide", "bubbles": true, "cancelable": true, "composed": true }]; }
}

class StbPageDropdowns {
    render() {
        return (h("div", { class: "pb-4" },
            h("h1", null, "Dropdowns"),
            h("br", null),
            h("br", null),
            h("stb-dropdown", null,
                h("button", { class: "btn btn-secondary dropdown-toggle", type: "button", id: "dropdownMenuButton", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, "Dropdown button"),
                h("div", { class: "dropdown-menu", "aria-labelledby": "dropdownMenuButton" },
                    h("a", { class: "dropdown-item", href: "#" }, "Action"),
                    h("a", { class: "dropdown-item", href: "#" }, "Another action"),
                    h("a", { class: "dropdown-item", href: "#" }, "Something else here"))),
            h("stb-dropdown", { placement: "left-start", class: "dropup" },
                h("button", { class: "btn btn-secondary dropdown-toggle", type: "button", id: "dropdownMenuButton", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, "Dropdown button"),
                h("div", { class: "dropdown-menu", "aria-labelledby": "dropdownMenuButton" },
                    h("a", { class: "dropdown-item", href: "#" }, "Action"),
                    h("a", { class: "dropdown-item", href: "#" }, "Another action"),
                    h("a", { class: "dropdown-item", href: "#" }, "Something else here"))),
            h("br", null),
            h("br", null),
            h("stb-dropdown", { placement: "top-start", class: "btn-group dropup" },
                h("button", { type: "button", class: "btn btn-secondary dropdown-toggle", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, "Dropup"),
                h("div", { class: "dropdown-menu", "aria-labelledby": "dropdownMenuButton" },
                    h("a", { class: "dropdown-item", href: "#" }, "Action"),
                    h("a", { class: "dropdown-item", href: "#" }, "Another action"),
                    h("a", { class: "dropdown-item", href: "#" }, "Something else here")))));
    }
    static get is() { return "stb-page-dropdowns"; }
    static get style() { return ""; }
}

export { StbDropdown, StbPageDropdowns };
