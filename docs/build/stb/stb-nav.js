/*! Built with http://stenciljs.com */
const { h } = window.stb;

const TOGGLE_CLASSES = {
    active: 'active',
    show: 'show',
    inactive: ''
};
class StbNav {
    constructor() {
        this.selected = -1;
        this.tabSelector = '[role="tab"]';
        this.panelSelector = '[role="tabpanel"]';
        this.listeners = {};
        this.global = false;
    }
    componentWillLoad() {
        this.getBtnElements();
        this.getPanelElements();
        if (this.selected > -1) {
            this.show(this.selected);
        }
    }
    componentDidUnload() {
        if (this.buttonsElement && this.buttonsElement.length) {
            this.buttonsElement.forEach((element, i) => {
                element.removeEventListener('click', this.listeners[i]);
            });
        }
    }
    getBtnElements() {
        this.buttonsElement = this.element.querySelectorAll(this.tabSelector);
        this.buttonsElement.forEach((element, i) => {
            this.elementClickHandler(element, i);
        });
    }
    getPanelElements() {
        if (this.global) {
            this.panelsElement = document.querySelectorAll(this.panelSelector);
        }
        else {
            this.panelsElement = this.element.querySelectorAll(this.panelSelector);
        }
    }
    elementClickHandler(element, index) {
        if (!element)
            return;
        let eventHandler = (e) => {
            e.preventDefault();
            this.show(index);
            return false;
        };
        element.addEventListener('click', eventHandler);
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
    showPanel(element) {
        const href = element.getAttribute('href');
        const panelElement = this.element.querySelectorAll(href);
        panelElement[0].classList.add(TOGGLE_CLASSES.active);
        panelElement[0].classList.add(TOGGLE_CLASSES.show);
        panelElement[0].style.display = 'block';
        if (TOGGLE_CLASSES.inactive) {
            panelElement[0].classList.remove(TOGGLE_CLASSES.inactive);
        }
    }
    hidePanels() {
        this.panelsElement.forEach(item => {
            item.classList.remove(TOGGLE_CLASSES.active);
            item.classList.remove(TOGGLE_CLASSES.show);
            item.style.display = 'none';
            if (TOGGLE_CLASSES.inactive) {
                item.classList.add(TOGGLE_CLASSES.inactive);
            }
        });
    }
    toggle() {
        return this.selected > -1 ? this.hide() : this.show();
    }
    show(index = 0) {
        this.removeActiveClass();
        this.hidePanels();
        this.elementClickHandler(this.buttonsElement[index], index);
        this.addActiveClass(this.buttonsElement[index]);
        this.showPanel(this.buttonsElement[index]);
        this.selected = index;
        this.onShow.emit({
            selected: this.selected,
            element: this.buttonsElement[index]
        });
    }
    hide(index = 0) {
        this.removeActiveClass();
        this.hidePanels();
        this.onHide.emit({
            selected: this.selected,
            element: this.buttonsElement[index]
        });
        this.selected = -1;
    }
    static get is() { return "stb-nav"; }
    static get host() { return { "theme": "" }; }
    static get properties() { return { "element": { "elementRef": true }, "hide": { "method": true }, "panelSelector": { "type": String, "attr": "panel-selector" }, "selected": { "type": Number, "attr": "selected" }, "show": { "method": true }, "tabSelector": { "type": String, "attr": "tab-selector" }, "toggle": { "method": true } }; }
    static get events() { return [{ "name": "onShow", "method": "onShow", "bubbles": true, "cancelable": true, "composed": true }, { "name": "onHide", "method": "onHide", "bubbles": true, "cancelable": true, "composed": true }]; }
}

class StbPageNavs {
    render() {
        return (h("div", { class: "pb-4" },
            h("h1", null, "Navs"),
            h("br", null),
            h("br", null),
            h("stb-nav", null,
                h("div", { class: "nav nav-tabs", id: "nav-tab", role: "tablist" },
                    h("a", { class: "nav-item nav-link active", id: "nav-home-tab", "data-toggle": "tab", href: "#nav-home", role: "tab", "aria-controls": "nav-home", "aria-selected": "true" }, "Home"),
                    h("a", { class: "nav-item nav-link", id: "nav-profile-tab", "data-toggle": "tab", href: "#nav-profile", role: "tab", "aria-controls": "nav-profile", "aria-selected": "false" }, "Profile"),
                    h("a", { class: "nav-item nav-link", id: "nav-contact-tab", "data-toggle": "tab", href: "#nav-contact", role: "tab", "aria-controls": "nav-contact", "aria-selected": "false" }, "Contact")),
                h("div", { class: "tab-content", id: "nav-tabContent" },
                    h("div", { class: "tab-pane fade show active", id: "nav-home", role: "tabpanel", "aria-labelledby": "nav-home-tab" }, "tab page 1"),
                    h("div", { class: "tab-pane fade", id: "nav-profile", role: "tabpanel", "aria-labelledby": "nav-profile-tab" }, "tab page 2"),
                    h("div", { class: "tab-pane fade", id: "nav-contact", role: "tabpanel", "aria-labelledby": "nav-contact-tab" }, "tab page 3"))),
            h("br", null),
            h("br", null),
            h("stb-nav", null,
                h("ul", { class: "nav nav-pills mb-3", id: "pills-tab", role: "tablist" },
                    h("li", { class: "nav-item" },
                        h("a", { class: "nav-link active", id: "pills-home-tab", "data-toggle": "pill", href: "#pills-home", role: "tab", "aria-controls": "pills-home", "aria-selected": "true" }, "Home")),
                    h("li", { class: "nav-item" },
                        h("a", { class: "nav-link", id: "pills-profile-tab", "data-toggle": "pill", href: "#pills-profile", role: "tab", "aria-controls": "pills-profile", "aria-selected": "false" }, "Profile")),
                    h("li", { class: "nav-item" },
                        h("a", { class: "nav-link", id: "pills-contact-tab", "data-toggle": "pill", href: "#pills-contact", role: "tab", "aria-controls": "pills-contact", "aria-selected": "false" }, "Contact"))),
                h("div", { class: "tab-content", id: "pills-tabContent" },
                    h("div", { class: "tab-pane fade show active", id: "pills-home", role: "tabpanel", "aria-labelledby": "pills-home-tab" }, "tab pill 1"),
                    h("div", { class: "tab-pane fade", id: "pills-profile", role: "tabpanel", "aria-labelledby": "pills-profile-tab" }, "tab pill 2"),
                    h("div", { class: "tab-pane fade", id: "pills-contact", role: "tabpanel", "aria-labelledby": "pills-contact-tab" }, "tab pill 3"))),
            h("br", null),
            h("br", null),
            h("stb-nav", null,
                h("div", { class: "nav flex-column nav-pills", id: "v-pills-tab", role: "tablist", "aria-orientation": "vertical" },
                    h("a", { class: "nav-link active", id: "v-pills-home-tab", "data-toggle": "pill", href: "#v-pills-home", role: "tab", "aria-controls": "v-pills-home", "aria-selected": "true" }, "Home"),
                    h("a", { class: "nav-link", id: "v-pills-profile-tab", "data-toggle": "pill", href: "#v-pills-profile", role: "tab", "aria-controls": "v-pills-profile", "aria-selected": "false" }, "Profile"),
                    h("a", { class: "nav-link", id: "v-pills-messages-tab", "data-toggle": "pill", href: "#v-pills-messages", role: "tab", "aria-controls": "v-pills-messages", "aria-selected": "false" }, "Messages"),
                    h("a", { class: "nav-link", id: "v-pills-settings-tab", "data-toggle": "pill", href: "#v-pills-settings", role: "tab", "aria-controls": "v-pills-settings", "aria-selected": "false" }, "Settings")),
                h("div", { class: "tab-content", id: "v-pills-tabContent" },
                    h("div", { class: "tab-pane fade show active", id: "v-pills-home", role: "tabpanel", "aria-labelledby": "v-pills-home-tab" }, "side tab pill 1"),
                    h("div", { class: "tab-pane fade", id: "v-pills-profile", role: "tabpanel", "aria-labelledby": "v-pills-profile-tab" }, "side tab pill 2"),
                    h("div", { class: "tab-pane fade", id: "v-pills-messages", role: "tabpanel", "aria-labelledby": "v-pills-messages-tab" }, "side tab pill 3"),
                    h("div", { class: "tab-pane fade", id: "v-pills-settings", role: "tabpanel", "aria-labelledby": "v-pills-settings-tab" }, "side tab pill 4"))),
            h("br", null),
            h("br", null)));
    }
    static get is() { return "stb-page-navs"; }
    static get style() { return ""; }
}

export { StbNav, StbPageNavs };
