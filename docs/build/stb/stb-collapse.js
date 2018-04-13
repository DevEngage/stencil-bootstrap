/*! Built with http://stenciljs.com */
const { h } = window.stb;

class StbCollapse {
    constructor() {
        this.body = document.body;
        this.disabled = false;
        this.type = ''; // btn-primary | btn-secondary
        this.active = false;
        this.activeClass = 'show';
        this.accordian = false;
    }
    componentDidLoad() {
        this.getCollapseElements();
        this.addClickListener();
        this.checkForActiveElement();
    }
    getCollapseElements() {
        this.collapseElements = this.element.querySelectorAll('[data-toggle="collapse"]');
    }
    addClickListener() {
        this.collapseElements.forEach((collapse) => {
            collapse.classList.add('coll-div');
            const collapsible = this.getCollapsible(collapse);
            this.addCollapsibleClass(collapsible);
            collapse.addEventListener("click", () => {
                if (collapsible.classList.contains('show')) {
                    this.hideCollapsible(collapse);
                }
                else {
                    this.showCollapsible(collapse);
                }
            });
        });
    }
    checkForActiveElement() {
        this.activeDiv = document.querySelector('.show');
        if (this.activeDiv) {
            this.activeDiv.style.height = this.activeDiv.children[0].offsetHeight + 'px';
        }
    }
    addCollapsibleClass(element) {
        element.classList.add('collapsing');
    }
    getCollapsible(element) {
        let target;
        if (element.getAttribute('data-target'))
            target = element.getAttribute('data-target');
        if (element.getAttribute('href'))
            target = element.getAttribute('href');
        return document.querySelector(target);
    }
    showCollapsible(element) {
        const collapsible = this.getCollapsible(element);
        if (this.accordian && this.activeDiv && this.activeDiv !== collapsible) {
            this.activeDiv.style.height = 0;
            setTimeout(() => {
                this.activeDiv.classList.remove('show');
                this.activeDiv = collapsible;
            }, 500);
        }
        collapsible.classList.add('show');
        setTimeout(() => {
            collapsible.style.height = collapsible.children[0].offsetHeight + 'px';
        }, 50);
    }
    hideCollapsible(element) {
        const collapsible = this.getCollapsible(element);
        collapsible.style.height = 0;
        setTimeout(() => {
            collapsible.classList.remove(this.activeClass);
        }, 500);
    }
    show(element) {
        this.showCollapsible(element);
        this.showEvent.emit({
            element: element
        });
    }
    hide(element) {
        this.showCollapsible(element);
        this.showEvent.emit({
            element: element
        });
    }
    componentDidUnload() {
    }
    static get is() { return "stb-collapse"; }
    static get host() { return { "theme": "" }; }
    static get properties() { return { "accordian": { "type": Boolean, "attr": "accordian" }, "active": { "type": Boolean, "attr": "active" }, "activeClass": { "type": String, "attr": "active-class" }, "disabled": { "type": Boolean, "attr": "disabled" }, "element": { "elementRef": true }, "hide": { "method": true }, "show": { "method": true }, "type": { "type": String, "attr": "type" } }; }
    static get events() { return [{ "name": "showEvent", "method": "showEvent", "bubbles": true, "cancelable": true, "composed": true }, { "name": "hideEvent", "method": "hideEvent", "bubbles": true, "cancelable": true, "composed": true }]; }
    static get style() { return "stb-collapse .coll-div {\n  cursor: pointer; }"; }
}

class StbPageCollapses {
    render() {
        return (h("div", { class: "pb-4" },
            h("h1", null, "Collapses"),
            h("br", null),
            h("br", null),
            h("stb-collapse", null,
                h("button", { class: "btn btn-primary", type: "button", "data-toggle": "collapse", "data-target": "#outsideBox", "aria-expanded": "false", "aria-controls": "collapseExample" }, "Button with outside collapsible")),
            h("br", null),
            h("br", null),
            h("stb-collapse", { accordian: false },
                h("div", null,
                    h("p", null,
                        h("button", { class: "btn btn-primary", type: "button", "data-toggle": "collapse", "data-target": "#collapseExample", role: "button", "aria-expanded": "false", "aria-controls": "collapseExample" }, "Link with href"),
                        h("button", { class: "btn btn-primary", type: "button", "data-toggle": "collapse", "data-target": "#collapseExample2", "aria-expanded": "false", "aria-controls": "collapseExample" }, "Button with data-target")),
                    h("div", { class: "collapse", id: "collapseExample" },
                        h("div", { class: "card card-body" }, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.")),
                    h("div", { class: "collapse", id: "collapseExample2" },
                        h("div", { class: "card card-body" }, "Anim2 pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.")))),
            h("br", null),
            h("br", null),
            h("div", { class: "collapse", id: "outsideBox" },
                h("div", { class: "card card-body" }, "Anim2 pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.")),
            h("stb-collapse", { accordian: true },
                h("div", { id: "accordion" },
                    h("div", { class: "card" },
                        h("div", { class: "card-header", id: "headingOne", "data-toggle": "collapse", "data-target": "#collapseOne" },
                            h("h5", { class: "mb-0" },
                                h("button", { class: "btn btn-link", "aria-expanded": "true", "aria-controls": "collapseOne" }, "Collapsible Group Item #1"))),
                        h("div", { id: "collapseOne", class: "collapse show", "aria-labelledby": "headingOne", "data-parent": "#accordion" },
                            h("div", { class: "card-body" }, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."))),
                    h("div", { class: "card" },
                        h("div", { class: "card-header", id: "headingTwo", "data-toggle": "collapse", "data-target": "#collapseTwo" },
                            h("h5", { class: "mb-0" },
                                h("button", { class: "btn btn-link collapsed", "aria-expanded": "false", "aria-controls": "collapseTwo" }, "Collapsible Group Item #2"))),
                        h("div", { id: "collapseTwo", class: "collapse", "aria-labelledby": "headingTwo", "data-parent": "#accordion" },
                            h("div", { class: "card-body" }, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."))),
                    h("div", { class: "card" },
                        h("div", { class: "card-header", id: "headingThree", "data-toggle": "collapse", "data-target": "#collapseThree" },
                            h("h5", { class: "mb-0" },
                                h("button", { class: "btn btn-link collapsed", "aria-expanded": "false", "aria-controls": "collapseThree" }, "Collapsible Group Item #3"))),
                        h("div", { id: "collapseThree", class: "collapse", "aria-labelledby": "headingThree", "data-parent": "#accordion" },
                            h("div", { class: "card-body" }, "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.")))))));
    }
    static get is() { return "stb-page-collapses"; }
    static get style() { return ""; }
}

export { StbCollapse, StbPageCollapses };
