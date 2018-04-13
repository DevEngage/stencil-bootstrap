/*! Built with http://stenciljs.com */
const { h } = window.stb;

class AppHome {
    render() {
        return (h("div", { class: 'app-home' },
            h("h1", null, "Welcome!"),
            h("p", null, "Welcome to the last bootstrap component library. Thanks to Stencil, we can now have our bootstrap components work everywhere; including, angular, react, vue, and the future.")));
    }
    static get is() { return "app-home"; }
    static get style() { return ".app-home {\n  padding: 10px; }\n\nbutton {\n  background: #5851ff;\n  color: white;\n  margin: 8px;\n  border: none;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 16px 20px;\n  border-radius: 2px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);\n  outline: 0;\n  letter-spacing: .04em;\n  transition: all .15s ease;\n  cursor: pointer; }\n\nbutton:hover {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);\n  transform: translateY(1px); }"; }
}

export { AppHome };
