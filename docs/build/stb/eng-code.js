/*! Built with http://stenciljs.com */
const { h } = window.stb;

class EngageCode {
    constructor() {
        this.language = 'html';
    }
    componentDidLoad() {
        const element = this.element.querySelector('code');
        hljs.highlightBlock(element);
        this.clipboard = new ClipboardJS(this.element.querySelector('.clip-code'), {
            target: () => {
                return element;
            }
        });
    }
    componentDidUnload() {
        if (this.clipboard) {
            this.clipboard.destroy();
        }
    }
    // loadLibs() {
    //   const imported = document.createElement('script');
    //   imported.src = '/path/to/imported/script';
    //   document.head.appendChild(imported);
    // }
    render() {
        return (h("div", null,
            h("div", { class: "language-title", style: { backgroundColor: 'purple', color: 'white' } },
                h("span", null, this.language.toUpperCase()),
                h("button", { class: 'btn clip-code' }, "Copy to clipboard")),
            h("pre", null,
                h("code", { class: `${this.language}` },
                    h("slot", null)))));
    }
    static get is() { return "eng-code"; }
    static get properties() { return { "element": { "elementRef": true }, "language": { "type": String, "attr": "language" } }; }
    static get style() { return "eng-code .language-title {\n  padding: 6px 0 6px 10px;\n  width: 100%; }\n  eng-code .language-title .clip-code {\n    padding: .000rem .75rem;\n    margin-right: 5px;\n    background-color: #0b2e13;\n    color: white;\n    float: right; }"; }
}

class StbAlert {
    constructor() {
        this.context = '';
        this.closeSelector = '[data-dismiss="alert"]';
    }
    componentDidLoad() {
        if (this.context) {
            this.element.classList.add('alert-' + this.context);
        }
        this.setCloseListener();
    }
    componentDidUnload() {
        this.clearCloseListener();
    }
    setCloseListener() {
        this.closeElement = this.element.querySelector(this.closeSelector);
        this.closeListener = () => {
            console.log(this.element);
            this.element.outerHTML = '';
            delete this.element;
        };
        console.log(this.closeElement);
        if (this.closeElement) {
            this.closeElement.addEventListener('mouseup', this.closeListener);
        }
    }
    clearCloseListener() {
        this.closeElement.removeEventListener('mouseup', this.closeListener);
    }
    watchContext(newValue, oldValue) {
        if (oldValue) {
            this.element.classList.remove('alert-' + oldValue);
        }
        if (newValue) {
            this.element.classList.add('alert-' + newValue);
        }
    }
    static get is() { return "stb-alert"; }
    static get host() { return { "theme": "alert", "role": "alert" }; }
    static get properties() { return { "closeSelector": { "type": String, "attr": "close-selector" }, "context": { "type": String, "attr": "context", "watchCallbacks": ["watchContext"] }, "element": { "elementRef": true } }; }
}

class StbPageAlerts {
    render() {
        return (h("div", { class: "pb-4" },
            h("h1", null, "Alerts"),
            h("eng-documentation-api", null),
            h("stb-alert", { context: "success" }, " Test this now! "),
            h("br", null),
            h("br", null),
            h("eng-code", null, `<stb-alert context="success"> Test this now! </stb-alert>`),
            h("eng-code", null, `
          <stb-alert class="alert-warning alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </stb-alert>
          `),
            h("br", null),
            h("br", null),
            h("stb-alert", { context: "success" }, " Test this now! "),
            h("br", null),
            h("br", null),
            h("stb-alert", { class: "alert-warning alert-dismissible fade show", role: "alert" },
                h("strong", null, "Holy guacamole!"),
                " You should check in on some of those fields below.",
                h("button", { type: "button", class: "close", "data-dismiss": "alert", "aria-label": "Close" },
                    h("span", { "aria-hidden": "true" }, "\u00D7"))),
            h("br", null),
            h("br", null)));
    }
    static get is() { return "stb-page-alerts"; }
    static get style() { return ""; }
}

export { EngageCode as EngCode, StbAlert, StbPageAlerts };
