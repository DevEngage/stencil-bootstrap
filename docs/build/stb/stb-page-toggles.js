/*! Built with http://stenciljs.com */
const { h } = window.stb;

class StbPageToggles {
    render() {
        return (h("div", { class: "pb-4" },
            h("stb-toggle", null,
                h("div", { class: "btn-group-toggle", "data-toggle": "buttons" },
                    h("label", { class: "btn btn-secondary active" },
                        h("input", { type: "checkbox", checked: true, autocomplete: "off" }),
                        " Checked"))),
            h("br", null),
            h("br", null),
            h("stb-toggle", { selected: 1 },
                h("div", { class: "btn-group btn-group-toggle", "data-toggle": "buttons" },
                    h("label", { class: "btn btn-secondary active" },
                        h("input", { type: "radio", name: "options", id: "option1", autocomplete: "off", checked: true }),
                        " Active"),
                    h("label", { class: "btn btn-secondary" },
                        h("input", { type: "radio", name: "options", id: "option2", autocomplete: "off" }),
                        " Radio"),
                    h("label", { class: "btn btn-secondary" },
                        h("input", { type: "radio", name: "options", id: "option3", autocomplete: "off" }),
                        " Radio")))));
    }
    static get is() { return "stb-page-toggles"; }
    static get style() { return ""; }
}

const TOGGLE_CLASSES = {
    active: 'active',
    inactive: ''
};
class StbToggle {
    constructor() {
        this.selected = -1;
        this.target = '.btn';
        this.listeners = {};
    }
    componentWillLoad() {
        this.getBtnElements();
        if (this.selected > -1) {
            this.activate(this.selected);
        }
    }
    componentDidUnload() {
        this.buttonsElement.forEach((element, i) => {
            element.removeEventListener('mouseup', this.listeners[i]);
        });
    }
    getBtnElements() {
        this.buttonsElement = this.element.querySelectorAll(this.target);
        this.buttonsElement.forEach((element, i) => {
            this.elementClickHandler(element, i);
        });
    }
    elementClickHandler(element, index) {
        if (!element)
            return;
        let eventHandler = () => {
            this.removeActiveClass();
            this.addActiveClass(element);
            this.selected = index;
        };
        element.addEventListener('mouseup', eventHandler);
        this.listeners[index] = eventHandler;
    }
    addActiveClass(element) {
        element.classList.add(TOGGLE_CLASSES.active);
        if (TOGGLE_CLASSES.inactive) {
            element.classList.remove(TOGGLE_CLASSES.inactive);
        }
    }
    removeActiveClass() {
        this.buttonsElement.forEach(item => {
            item.classList.remove(TOGGLE_CLASSES.active);
            if (TOGGLE_CLASSES.inactive) {
                item.classList.add(TOGGLE_CLASSES.inactive);
            }
        });
    }
    toggle() {
        return this.selected > -1 ? this.deactivate() : this.activate();
    }
    activate(index = 0) {
        this.removeActiveClass();
        this.elementClickHandler(this.buttonsElement[index], index);
        this.addActiveClass(this.buttonsElement[index]);
        this.onActivate.emit({
            selected: this.selected,
            element: this.buttonsElement[index]
        });
    }
    deactivate(index = 0) {
        this.removeActiveClass();
        this.onDeactivate.emit({
            selected: this.selected,
            element: this.buttonsElement[index]
        });
        this.selected = -1;
    }
    static get is() { return "stb-toggle"; }
    static get host() { return { "theme": "" }; }
    static get properties() { return { "activate": { "method": true }, "deactivate": { "method": true }, "element": { "elementRef": true }, "selected": { "type": Number, "attr": "selected" }, "target": { "type": String, "attr": "target" }, "toggle": { "method": true } }; }
    static get events() { return [{ "name": "onActivate", "method": "onActivate", "bubbles": true, "cancelable": true, "composed": true }, { "name": "onDeactivate", "method": "onDeactivate", "bubbles": true, "cancelable": true, "composed": true }]; }
}

export { StbPageToggles, StbToggle };
