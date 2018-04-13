/*! Built with http://stenciljs.com */
const { h } = window.stb;

import Popper from './chunk1.js';

class StbTooltips {
    render() {
        return (h("div", { class: "pb-4" },
            h("h1", null, "Tooltips"),
            h("br", null),
            h("br", null),
            h("stb-tooltip", null,
                h("button", { class: "btn btn-secondary", type: "button", "data-toggle": "tooltip", "data-placement": "top", title: "Tooltip on top", "aria-haspopup": "true", "aria-expanded": "false" }, "Tooltip on Top")),
            h("br", null),
            h("br", null),
            h("stb-tooltip", null,
                h("button", { class: "btn btn-secondary", type: "button", "data-toggle": "tooltip", "data-placement": "bottom", title: "Tooltip on bottom", "aria-haspopup": "true", "aria-expanded": "false" }, "Tooltip on Bottom")),
            h("br", null),
            h("br", null),
            h("stb-tooltip", null,
                h("button", { class: "btn btn-secondary", type: "button", "data-toggle": "tooltip", "data-placement": "left", title: "Tooltip on left", "aria-haspopup": "true", "aria-expanded": "false" }, "Tooltip on Left")),
            h("br", null),
            h("br", null),
            h("stb-tooltip", null,
                h("button", { class: "btn btn-secondary", type: "button", "data-toggle": "tooltip", "data-placement": "right", title: "Tooltip on right", "aria-haspopup": "true", "aria-expanded": "false" }, "Tooltip on Right"))));
    }
    static get is() { return "stb-page-tooltips"; }
    static get style() { return ""; }
}

class StbTooltip {
    constructor() {
        this.body = document.body;
        this.isVisible = false;
        this.disabled = false;
        this.action = '[data-toggle="tooltip"]';
        this.target = '.tooltip';
        this.positionFixed = false;
        this.modifiers = {};
        this.onlyOneOpen = false;
        this.placement = 'top';
        this.tooltipTitle = 'this is a tooltip';
    }
    componentDidLoad() {
        this.button = this.element.querySelector(this.action);
        this.tooltip = this.element.querySelector(this.target);
        this.getPlacement();
        this.addClickListener();
        this.getTitle();
        new Popper(this.button, this.tooltip, {
            placement: this.placement,
            positionFixed: this.positionFixed,
            modifiers: this.modifiers
        });
        this.managePlacement();
        this.tooltip.style.zIndex = -10;
    }
    componentDidUnload() {
        if (this.buttonListener) {
            this.removeClickListener();
        }
    }
    getTitle() {
        this.tooltipTitle = this.button.getAttribute('title');
        console.log('this.tooltipTitle', this.tooltipTitle);
        this.element.querySelector('.tooltip-inner').innerHTML = this.tooltipTitle;
    }
    getPlacement() {
        this.placement = this.button.getAttribute('data-placement');
    }
    hideAllTooltips() {
        if (this.onlyOneOpen) {
            const tooltips = document.querySelectorAll('stb-tooltip');
            if (tooltips) {
                tooltips.forEach(item => item.hide());
            }
        }
    }
    hasClass(element, className) {
        return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
    }
    managePlacement() {
        const tooltip = this.element.querySelector(this.target);
        const arrow = this.element.querySelector('.arrow');
        switch (this.placement) {
            case 'top':
                arrow.style.left = (tooltip.clientWidth / 2 - 6) + 'px';
                this.tooltip.classList.add('bs-tooltip-top');
                break;
            case 'bottom':
                arrow.style.left = (tooltip.clientWidth / 2 - 6) + 'px';
                this.tooltip.classList.add('bs-tooltip-bottom');
                break;
            case 'left':
                arrow.style.top = (tooltip.clientHeight / 2 - 6) + 'px';
                this.tooltip.classList.add('bs-tooltip-left');
                break;
            case 'right':
                arrow.style.top = (tooltip.clientHeight / 2 - 6) + 'px';
                this.tooltip.classList.add('bs-tooltip-right');
                break;
        }
    }
    addClickListener(element = this.button) {
        this.buttonListener = () => this.toggle();
        element.addEventListener('mouseover', this.buttonListener);
        element.addEventListener('mouseout', this.buttonListener);
    }
    removeClickListener(element = this.button) {
        element.removeEventListener('mouseover', this.buttonListener);
        element.removeEventListener('mouseout', this.buttonListener);
    }
    showTarget() {
        this.tooltip.classList.add('show');
        this.tooltip.style.zIndex = 1060;
        this.isVisible = true;
    }
    hideTarget() {
        this.tooltip.classList.remove('show');
        this.tooltip.style.zIndex = -10;
        this.isVisible = false;
    }
    toggle() {
        return this.isVisible ? this.hide() : this.show();
    }
    show() {
        console.log('show');
        this.hideAllTooltips();
        this.showTarget();
        this.managePlacement();
        this.onShow.emit();
    }
    hide() {
        console.log('hide');
        this.hideTarget();
        this.onHide.emit();
    }
    render() {
        return (h("div", { class: "tooltip fade", role: "tooltip" },
            h("div", { class: "arrow" }),
            h("div", { class: "tooltip-inner" })));
    }
    static get is() { return "stb-tooltip"; }
    static get host() { return { "theme": "" }; }
    static get properties() { return { "action": { "type": String, "attr": "action" }, "disabled": { "type": Boolean, "attr": "disabled" }, "element": { "elementRef": true }, "hide": { "method": true }, "modifiers": { "type": "Any", "attr": "modifiers" }, "onlyOneOpen": { "type": Boolean, "attr": "only-one-open" }, "placement": { "state": true }, "positionFixed": { "type": Boolean, "attr": "position-fixed" }, "show": { "method": true }, "target": { "type": String, "attr": "target" }, "toggle": { "method": true }, "tooltipTitle": { "state": true } }; }
    static get events() { return [{ "name": "onShow", "method": "onShow", "bubbles": true, "cancelable": true, "composed": true }, { "name": "onHide", "method": "onHide", "bubbles": true, "cancelable": true, "composed": true }]; }
}

export { StbTooltips as StbPageTooltips, StbTooltip };
