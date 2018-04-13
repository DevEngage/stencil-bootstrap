/*! Built with http://stenciljs.com */
const { h } = window.stb;

class StbCard {
    render() {
        return (h("div", null,
            h("slot", null)));
    }
    static get is() { return "stb-card"; }
    static get host() { return { "theme": "card" }; }
    static get style() { return "stb-collapse .coll-div {\n  cursor: pointer; }"; }
}

export { StbCard };
