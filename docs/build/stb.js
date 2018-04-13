/*! Built with http://stenciljs.com */
(function(win, doc, appNamespace, urlNamespace, publicPath, discoverPublicPath, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components) {

function init(win, doc, docScripts, appNamespace, urlNamespace, publicPath, discoverPublicPath, appCore, appCorePolyfilled, hydratedCssClass, components, x, y) {
    // create global namespace if it doesn't already exist
    (win[appNamespace] = win[appNamespace] || {}).components = components;
    y = components.filter(function (c) { return c[2]; }).map(function (c) { return c[0]; });
    if (y.length) {
        // auto hide components until they been fully hydrated
        // reusing the "x" and "i" variables from the args for funzies
        x = doc.createElement('style');
        x.innerHTML = y.join() + '{visibility:hidden}.' + hydratedCssClass + '{visibility:inherit}';
        x.setAttribute('data-styles', '');
        doc.head.insertBefore(x, doc.head.firstChild);
    }
    // get this current script
    // script tag cannot use "async" attribute
    if (discoverPublicPath) {
        x = docScripts[docScripts.length - 1];
        if (x && x.src) {
            y = x.src.split('/').slice(0, -1);
            publicPath = (y.join('/')) + (y.length ? '/' : '') + urlNamespace + '/';
        }
    }
    // request the core this browser needs
    // test for native support of custom elements and fetch
    // if either of those are not supported, then use the core w/ polyfills
    // also check if the page was build with ssr or not
    x = doc.createElement('script');
    x.src = publicPath + (usePolyfills(win, win.location, x, 'import("")') ? appCorePolyfilled : appCore);
    x.setAttribute('data-path', publicPath);
    x.setAttribute('data-namespace', urlNamespace);
    doc.head.appendChild(x);
}
function usePolyfills(win, location, scriptElm, dynamicImportTest) {
    // fyi, dev mode has verbose if/return statements
    // but it minifies to a nice 'lil one-liner ;)
    if (location.search.indexOf('core=es5') > -1) {
        // force es5 polyfill w/ ?core=es5 querystring
        return true;
    }
    if (location.protocol === 'file:') {
        // file protocol cannot use dynamic module imports
        return true;
    }
    if (!win.customElements) {
        // does not have customElement support
        return true;
    }
    if (!win.fetch) {
        // does not have fetch support
        return true;
    }
    if (!(win.CSS && win.CSS.supports && win.CSS.supports('color', 'var(--c)'))) {
        // does not have CSS variables support
        return true;
    }
    if (!('noModule' in scriptElm)) {
        // does not have static ES module support
        return true;
    }
    return doesNotSupportsDynamicImports(dynamicImportTest);
}
function doesNotSupportsDynamicImports(dynamicImportTest) {
    try {
        new Function(dynamicImportTest);
        return false;
    }
    catch (e) { }
    return true;
}


init(win, doc, doc.scripts, appNamespace, urlNamespace, publicPath, discoverPublicPath, appCore, appCoreSsr, appCorePolyfilled, hydratedCssClass, components);

})(window, document, "stb","stb","/build/stb/",true,"stb.core.js","es5-build-disabled.js","hydrated",[["app-home","app-home",1],["eng-code","eng-code",1,[["element",7],["language",1,1,2]]],["eng-documentation-api","eng-documentation-api",1,[["api",1,1,1],["details",1,1,2],["element",7],["language",1,1,2],["title",1,1,2],["type",1,1,2]]],["my-app","my-app",1,[["currentPage",5],["history",1]]],["stb-alert","eng-code",0,[["closeSelector",1,"close-selector",2],["context",1,1,2],["element",7]]],["stb-card","stb-card",1],["stb-carousel","stb-carousel",0,[["cycleType",1],["element",7],["hide",6],["indicatorSelector",1,"indicator-selector",2],["interval",1,1,4],["next",6],["nextSelector",1,"next-selector",2],["pause",6],["play",6],["prev",6],["prevSelector",1,"prev-selector",2],["ride",1,1,3],["selected",1,1,4],["show",6],["slideSelector",1,"slide-selector",2],["wrap",1,1,3]]],["stb-collapse","stb-collapse",1,[["accordian",1,1,3],["active",1,1,3],["activeClass",1,"active-class",2],["disabled",1,1,3],["element",7],["hide",6],["show",6],["type",1,1,2]]],["stb-dropdown","stb-dropdown",0,[["action",1,1,2],["disabled",1,1,3],["element",7],["hide",6],["modifiers",1],["onlyOneOpen",1,"only-one-open",3],["placement",1],["positionFixed",1,"position-fixed",3],["show",6],["target",1,1,2],["toggle",6]]],["stb-modal","stb-modal",0,[["animation",1,1,1],["element",7],["hide",6],["ignoreBackdropClick",1,"ignore-backdrop-click",3],["keyboard",1,1,3],["options",1,1,1],["show",6],["toggle",6]],0,[["keyup.escape","escKey"]]],["stb-nav","stb-nav",0,[["element",7],["hide",6],["panelSelector",1,"panel-selector",2],["selected",1,1,4],["show",6],["tabSelector",1,"tab-selector",2],["toggle",6]]],["stb-page-alerts","eng-code",1],["stb-page-card","stb-page-card",1],["stb-page-carousels","stb-carousel",1],["stb-page-collapses","stb-collapse",1],["stb-page-components","stb-page-components",1],["stb-page-dropdowns","stb-dropdown",1],["stb-page-modals","stb-modal",1],["stb-page-navs","stb-nav",1],["stb-page-paginations","stb-page-paginations",1],["stb-page-popovers","stb-page-popovers",1],["stb-page-progress-bars","stb-page-progress-bars",1],["stb-page-toggles","stb-page-toggles",1],["stb-page-tooltips","stb-page-tooltips",1],["stb-pagination","stb-page-paginations",0,[["element",7],["next",6],["nextSelector",1,"next-selector",2],["pagesSelector",1,"pages-selector",2],["prev",6],["prevSelector",1,"prev-selector",2],["select",6],["selected",1,1,4]]],["stb-popover","stb-page-popovers",0,[["action",1,1,2],["disabled",1,1,3],["element",7],["hide",6],["modifiers",1],["onlyOneOpen",1,"only-one-open",3],["placement",5],["popoverBody",5],["popoverTitle",5],["positionFixed",1,"position-fixed",3],["show",6],["target",1,1,2],["toggle",6]]],["stb-progress","stb-page-progress-bars",0,[["classes",1,1,2],["current",1],["max",1,1,4],["min",1,1,4],["title",1,1,2]]],["stb-toggle","stb-page-toggles",0,[["activate",6],["deactivate",6],["element",7],["selected",1,1,4],["target",1,1,2],["toggle",6]]],["stb-tooltip","stb-page-tooltips",0,[["action",1,1,2],["disabled",1,1,3],["element",7],["hide",6],["modifiers",1],["onlyOneOpen",1,"only-one-open",3],["placement",5],["positionFixed",1,"position-fixed",3],["show",6],["target",1,1,2],["toggle",6],["tooltipTitle",5]]],["stencil-route","my-app",0,[["activeRouter",3,0,0,"activeRouter"],["component",1,1,2],["componentProps",1],["exact",1,1,3],["group",1,1,2],["groupIndex",1,1,4],["location",3,0,0,"location"],["match",5],["routeRender",1],["url",1]]],["stencil-route-link","my-app",0,[["activeClass",1,1,2],["activeRouter",3,0,0,"activeRouter"],["custom",1,1,2],["exact",1,1,3],["location",3,0,0,"location"],["match",5],["url",1,1,2],["urlMatch",1]]],["stencil-router","my-app",0,[["activeRouter",3,0,0,"activeRouter"],["historyType",1],["match",5],["root",1,1,2],["titleSuffix",1,1,2]]]]);