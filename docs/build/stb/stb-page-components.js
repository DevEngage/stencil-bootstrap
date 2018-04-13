/*! Built with http://stenciljs.com */
const { h } = window.stb;

class StbPageComponents {
    render() {
        return (h("div", { class: "pb-4" },
            h("h1", null, "Components"),
            h("br", null),
            h("br", null),
            h("br", null),
            h("br", null),
            h("stb-card", null,
                h("div", { class: "card-body" },
                    h("h5", { class: "card-title" }, "Card Title"),
                    h("p", { class: "card-text" }, "Some quick example text to build on the card title and make up the bulk of the card's content."),
                    h("a", { href: "#", class: "btn btn-primary" }, "Go somewhere"))),
            h("br", null),
            h("br", null),
            h("br", null),
            h("br", null),
            h("br", null),
            h("br", null),
            h("div", { class: "pt-5" },
                h("p", null, "this is the footer"))));
    }
    static get is() { return "stb-page-components"; }
    static get style() { return ""; }
}

export { StbPageComponents };
