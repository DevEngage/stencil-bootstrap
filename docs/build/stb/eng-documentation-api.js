/*! Built with http://stenciljs.com */
const { h } = window.stb;

class EngageDocumentationApi {
    constructor() {
        this.title = '';
        this.details = '';
        this.api = [];
        this.type = '';
        this.language = 'html';
    }
    render() {
        return (h("div", null,
            h("h2", null, this.title),
            h("slot", { name: 'details' },
                h("p", null, this.details)),
            h("ul", null, this.api.map(api => h("li", null, api.name))),
            h("slot", { name: 'code' })));
    }
    static get is() { return "eng-documentation-api"; }
    static get properties() { return { "api": { "type": "Any", "attr": "api" }, "details": { "type": String, "attr": "details" }, "element": { "elementRef": true }, "language": { "type": String, "attr": "language" }, "title": { "type": String, "attr": "title" }, "type": { "type": String, "attr": "type" } }; }
    static get style() { return ""; }
}

export { EngageDocumentationApi as EngDocumentationApi };
