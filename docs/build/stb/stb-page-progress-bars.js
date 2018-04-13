/*! Built with http://stenciljs.com */
const { h } = window.stb;

class StbPageProgressBars {
    render() {
        return (h("div", { class: "pb-4" },
            h("h1", null, "Progress Bars"),
            h("br", null),
            h("br", null),
            h("stb-progress", { current: 20 }),
            h("br", null),
            h("br", null),
            h("stb-progress", { current: [{ current: 40, classes: 'bg-success' }, { current: 10, }] }),
            h("br", null),
            h("br", null)));
    }
    static get is() { return "stb-page-progress-bars"; }
    static get style() { return ""; }
}

class StbProgress {
    constructor() {
        this.current = 0;
        this.min = 0;
        this.max = 100;
        this.title = '';
        this.classes = '';
    }
    convertToInt(str) {
        str = str + '';
        str = str.replace('$', '');
        str = str.replace(',', '');
        str = str.replace('*', '');
        return parseInt(str);
    }
    calcProgress(bar) {
        let valueInt = this.convertToInt(bar.current);
        let maxInt = this.convertToInt(bar.max || this.max);
        return (valueInt / maxInt) * 100;
    }
    renderBar(bar) {
        const calculated = this.calcProgress(bar);
        return (h("div", { class: `progress-bar ${bar.classes || ''}`, role: "progressbar", style: { width: `${calculated}%` }, "aria-valuenow": bar.current, "aria-valuemin": bar.min || this.min, "aria-valuemax": bar.max || this.max }, bar.title || ''));
    }
    render() {
        if (typeof this.current === 'number') {
            return this.renderBar({
                title: this.title,
                current: this.current,
                min: this.min,
                max: this.max,
                classes: this.classes
            });
        }
        else if (typeof this.current === 'object' && this.current['length']) {
            const bars = [];
            for (let index in this.current) {
                const bar = this.current[index];
                bars.push(this.renderBar(bar));
            }
            return bars;
        }
        else if (typeof this.current === 'object') {
            return this.renderBar(this.current);
        }
    }
    static get is() { return "stb-progress"; }
    static get host() { return { "theme": "progress" }; }
    static get properties() { return { "classes": { "type": String, "attr": "classes" }, "current": { "type": "Any", "attr": "current" }, "max": { "type": Number, "attr": "max" }, "min": { "type": Number, "attr": "min" }, "title": { "type": String, "attr": "title" } }; }
}

export { StbPageProgressBars, StbProgress };
