/*! Built with http://stenciljs.com */
const { h } = window.stb;

class StbPagePaginations {
    render() {
        return (h("div", { class: "pb-4" },
            h("h1", null, "Pagination"),
            h("br", null),
            h("br", null),
            h("stb-pagination", null,
                h("ul", { class: "pagination" },
                    h("li", { class: "page-item", "stb-prev": true },
                        h("a", { class: "page-link" }, "Previous")),
                    h("li", { class: "page-item", "stb-page": "1" },
                        h("a", { class: "page-link" }, "1")),
                    h("li", { class: "page-item", "stb-page": "2" },
                        h("a", { class: "page-link" }, "2")),
                    h("li", { class: "page-item", "stb-page": true },
                        h("a", { class: "page-link" }, "3")),
                    h("li", { class: "page-item", "stb-next": true },
                        h("a", { class: "page-link" }, "Next")))),
            h("br", null),
            h("br", null),
            h("stb-pagination", { selected: 1 },
                h("ul", { class: "pagination" },
                    h("li", { class: "page-item disabled", "stb-prev": true },
                        h("a", { class: "page-link", tabindex: "-1" }, "Previous")),
                    h("li", { class: "page-item", "stb-page": true },
                        h("a", { class: "page-link" }, "1")),
                    h("li", { class: "page-item active", "stb-page": true },
                        h("a", { class: "page-link" },
                            "2 ",
                            h("span", { class: "sr-only" }, "(current)"))),
                    h("li", { class: "page-item", "stb-page": true },
                        h("a", { class: "page-link" }, "3")),
                    h("li", { class: "page-item", "stb-next": true },
                        h("a", { class: "page-link" }, "Next"))))));
    }
    static get is() { return "stb-page-paginations"; }
    static get style() { return ""; }
}

const hasClass = (element, className) => {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
};

const TOGGLE_CLASSES = {
    active: 'active',
    inactive: ''
};
class StbPagination {
    constructor() {
        this.selected = 0;
        this.prevSelector = '[stb-prev]';
        this.nextSelector = '[stb-next]';
        this.pagesSelector = '[stb-page]';
        this.listeners = {};
    }
    componentWillLoad() {
        this.currentSlide = this.selected || 0;
        this.getPageElements();
        this.getPrevNextButtons();
        if (this.selected > -1) {
            this.select(this.selected);
        }
    }
    componentDidUnload() {
        if (this.pageElements && this.pageElements.length) {
            this.pageElements.forEach((element, i) => {
                element.removeEventListener('mouseup', this.listeners[i]);
            });
        }
        if (this.prevElement && this.prevListener) {
            this.prevElement.removeEventListener('mouseup', this.prevListener);
        }
        if (this.nextElement && this.nextListener) {
            this.nextElement.removeEventListener('mouseup', this.nextListener);
        }
    }
    getPrevNextButtons() {
        this.prevElement = this.element.querySelector(this.prevSelector);
        this.nextElement = this.element.querySelector(this.nextSelector);
        if (this.prevElement) {
            this.prevListener = this.addClickHandler(this.prevElement, () => this.prev());
        }
        if (this.nextElement) {
            this.nextListener = this.addClickHandler(this.nextElement, () => this.next());
        }
    }
    getPageElements() {
        this.pageElements = this.element.querySelectorAll(this.pagesSelector);
        this.pageElements.forEach((element, i) => {
            this.elementClickHandler(element, i);
        });
    }
    addClickHandler(element, fn) {
        if (!element)
            return;
        let eventHandler = () => {
            if (hasClass(element, 'disabled')) {
                return false;
            }
            if (fn) {
                fn();
            }
        };
        element.addEventListener('mouseup', eventHandler);
        return eventHandler;
    }
    elementClickHandler(element, index) {
        if (!element)
            return;
        let eventHandler = (e) => {
            e.preventDefault();
            this.select(index);
            return false;
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
        this.pageElements.forEach(item => {
            item.classList.remove(TOGGLE_CLASSES.active);
            if (TOGGLE_CLASSES.inactive) {
                item.classList.add(TOGGLE_CLASSES.inactive);
            }
        });
    }
    select(index = 0) {
        this.removeActiveClass();
        this.elementClickHandler(this.pageElements[index], index);
        this.addActiveClass(this.pageElements[index]);
        this.currentSlide = index;
        this.onSelect.emit({
            selected: this.currentSlide,
            element: this.pageElements[index]
        });
    }
    next() {
        if (this.pageElements && this.pageElements.length - 1 <= this.currentSlide) {
            this.select(0);
        }
        else {
            this.select(this.currentSlide + 1);
        }
    }
    prev() {
        if (this.currentSlide <= 0) {
            this.select(this.pageElements.length - 1);
        }
        else {
            this.select(this.currentSlide - 1);
        }
    }
    static get is() { return "stb-pagination"; }
    static get host() { return { "role": "nav" }; }
    static get properties() { return { "element": { "elementRef": true }, "next": { "method": true }, "nextSelector": { "type": String, "attr": "next-selector" }, "pagesSelector": { "type": String, "attr": "pages-selector" }, "prev": { "method": true }, "prevSelector": { "type": String, "attr": "prev-selector" }, "select": { "method": true }, "selected": { "type": Number, "attr": "selected" } }; }
    static get events() { return [{ "name": "onSelect", "method": "onSelect", "bubbles": true, "cancelable": true, "composed": true }]; }
}

export { StbPagePaginations, StbPagination };
