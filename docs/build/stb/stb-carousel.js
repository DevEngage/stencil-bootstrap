/*! Built with http://stenciljs.com */
const { h } = window.stb;

const TOGGLE_CLASSES = {
    active: 'active',
    show: 'show',
    inactive: ''
};
class StbCarousel {
    constructor() {
        this.selected = 0;
        this.slideSelector = '.carousel-item';
        this.indicatorSelector = '[data-slide-to]';
        this.prevSelector = '[data-slide="prev"]';
        this.nextSelector = '[data-slide="next"]';
        this.interval = 5000; //default
        this.cycleType = 'hover';
        this.ride = false;
        this.wrap = true;
        this.listeners = {};
        this.currentSlide = 0;
    }
    componentWillLoad() {
        this.currentSlide = this.selected || 0;
        this.getSlideElements();
        this.getIndicatorElements();
        this.getPrevNextButtons();
        if (this.currentSlide > 0) {
            this.show(this.selected);
        }
        this.play();
    }
    componentDidUnload() {
        if (this.slideElements && this.slideElements.length) {
            this.slideElements.forEach((element, i) => {
                element.removeEventListener('click', this.listeners[i]);
            });
        }
        if (this.prevElement && this.prevListener) {
            this.prevElement.removeEventListener('click', this.prevListener);
        }
        if (this.nextElement && this.nextListener) {
            this.nextElement.removeEventListener('click', this.nextListener);
        }
        this.pause();
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
    getSlideElements() {
        this.slideElements = this.element.querySelectorAll(this.slideSelector);
    }
    getIndicatorElements() {
        this.indicatorElements = this.element.querySelectorAll(this.indicatorSelector);
        this.indicatorElements.forEach((element, i) => {
            this.indicatorClickHandler(element, i);
        });
    }
    addClickHandler(element, fn = this.next) {
        if (!element)
            return;
        let eventHandler = () => {
            if (fn) {
                fn();
            }
        };
        element.addEventListener('click', eventHandler);
        return eventHandler;
    }
    indicatorClickHandler(element, index) {
        if (!element)
            return;
        let eventHandler = () => {
            this.show(index);
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
    removeActiveClass(elements = this.slideElements) {
        elements.forEach(item => {
            item.classList.remove(TOGGLE_CLASSES.active);
            if (TOGGLE_CLASSES.inactive) {
                item.classList.add(TOGGLE_CLASSES.inactive);
            }
        });
    }
    show(index = 0) {
        this.removeActiveClass();
        if (this.indicatorElements && this.indicatorElements.length) {
            this.removeActiveClass(this.indicatorElements);
        }
        this.indicatorClickHandler(this.slideElements[index], index);
        this.addActiveClass(this.slideElements[index]);
        this.currentSlide = index;
        this.pause();
        this.play();
        this.onShow.emit({
            current: this.currentSlide,
            element: this.slideElements[index]
        });
    }
    hide(index = 0) {
        this.removeActiveClass();
        if (this.indicatorElements && this.indicatorElements.length) {
            this.removeActiveClass(this.indicatorElements);
        }
        this.onHide.emit({
            current: this.currentSlide,
            element: this.slideElements[index]
        });
        this.currentSlide = 0;
    }
    next() {
        if (this.slideElements && this.slideElements.length - 1 <= this.currentSlide) {
            this.show(0);
        }
        else {
            this.show(this.currentSlide + 1);
        }
    }
    prev() {
        if (this.currentSlide <= 0) {
            this.show(this.slideElements.length - 1);
        }
        else {
            this.show(this.currentSlide - 1);
        }
    }
    pause() {
        if (this.intervalHandler) {
            clearInterval(this.intervalHandler);
        }
    }
    play() {
        if (this.interval) {
            this.intervalHandler = setInterval(() => this.next(), this.interval);
        }
    }
    static get is() { return "stb-carousel"; }
    static get host() { return { "theme": "" }; }
    static get properties() { return { "cycleType": { "type": "Any", "attr": "cycle-type" }, "element": { "elementRef": true }, "hide": { "method": true }, "indicatorSelector": { "type": String, "attr": "indicator-selector" }, "interval": { "type": Number, "attr": "interval" }, "next": { "method": true }, "nextSelector": { "type": String, "attr": "next-selector" }, "pause": { "method": true }, "play": { "method": true }, "prev": { "method": true }, "prevSelector": { "type": String, "attr": "prev-selector" }, "ride": { "type": Boolean, "attr": "ride" }, "selected": { "type": Number, "attr": "selected" }, "show": { "method": true }, "slideSelector": { "type": String, "attr": "slide-selector" }, "wrap": { "type": Boolean, "attr": "wrap" } }; }
    static get events() { return [{ "name": "onShow", "method": "onShow", "bubbles": true, "cancelable": true, "composed": true }, { "name": "onHide", "method": "onHide", "bubbles": true, "cancelable": true, "composed": true }]; }
}

class StbPageCarousels {
    constructor() {
        this.testImage = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162753624ac%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162753624ac%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
        this.testImage2 = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162753624b7%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162753624b7%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
        this.testImage3 = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_162753624b8%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_162753624b8%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';
    }
    render() {
        return (h("div", { class: "pb-4" },
            h("h1", null, "Carousels"),
            h("br", null),
            h("br", null),
            h("stb-carousel", null,
                h("div", { class: "carousel-inner" },
                    h("div", { class: "carousel-item active" },
                        h("img", { class: "d-block w-100", src: this.testImage, alt: "First slide" })),
                    h("div", { class: "carousel-item" },
                        h("img", { class: "d-block w-100", src: this.testImage2, alt: "Second slide" })),
                    h("div", { class: "carousel-item" },
                        h("img", { class: "d-block w-100", src: this.testImage3, alt: "Third slide" })))),
            h("br", null),
            h("br", null),
            h("stb-carousel", { selected: 1 },
                h("div", { id: "carouselExampleIndicators", class: "carousel slide", "data-ride": "carousel" },
                    h("ol", { class: "carousel-indicators" },
                        h("li", { "data-target": "#carouselExampleIndicators", "data-slide-to": "0", class: "active" }),
                        h("li", { "data-target": "#carouselExampleIndicators", "data-slide-to": "1" }),
                        h("li", { "data-target": "#carouselExampleIndicators", "data-slide-to": "2" })),
                    h("div", { class: "carousel-inner" },
                        h("div", { class: "carousel-item active" },
                            h("img", { class: "d-block w-100", src: this.testImage, alt: "First slide" })),
                        h("div", { class: "carousel-item" },
                            h("img", { class: "d-block w-100", src: this.testImage2, alt: "Second slide" })),
                        h("div", { class: "carousel-item" },
                            h("img", { class: "d-block w-100", src: this.testImage3, alt: "Third slide" }))),
                    h("a", { class: "carousel-control-prev", href: "#carouselExampleIndicators", role: "button", "data-slide": "prev" },
                        h("span", { class: "carousel-control-prev-icon", "aria-hidden": "true" }),
                        h("span", { class: "sr-only" }, "Previous")),
                    h("a", { class: "carousel-control-next", href: "#carouselExampleIndicators", role: "button", "data-slide": "next" },
                        h("span", { class: "carousel-control-next-icon", "aria-hidden": "true" }),
                        h("span", { class: "sr-only" }, "Next")))),
            h("br", null),
            h("br", null)));
    }
    static get is() { return "stb-page-carousels"; }
    static get style() { return ""; }
}

export { StbCarousel, StbPageCarousels };
