/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */
declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }

  interface HTMLAttributes {}
}

import '@stencil/router';

import {
  Modifiers,
  Placement,
} from 'popper.js';
import {
  ISTBProgress,
} from './components/progress/progress';
import {
  RouterHistory,
} from '@stencil/router';

import {
  StbCard as StbCard
} from './components/card/card';

declare global {
  interface HTMLStbCardElement extends StbCard, HTMLStencilElement {
  }
  var HTMLStbCardElement: {
    prototype: HTMLStbCardElement;
    new (): HTMLStbCardElement;
  };
  interface HTMLElementTagNameMap {
    "stb-card": HTMLStbCardElement;
  }
  interface ElementTagNameMap {
    "stb-card": HTMLStbCardElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stb-card": JSXElements.StbCardAttributes;
    }
  }
  namespace JSXElements {
    export interface StbCardAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  StbCarousel as StbCarousel
} from './components/carousel/carousel';

declare global {
  interface HTMLStbCarouselElement extends StbCarousel, HTMLStencilElement {
  }
  var HTMLStbCarouselElement: {
    prototype: HTMLStbCarouselElement;
    new (): HTMLStbCarouselElement;
  };
  interface HTMLElementTagNameMap {
    "stb-carousel": HTMLStbCarouselElement;
  }
  interface ElementTagNameMap {
    "stb-carousel": HTMLStbCarouselElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stb-carousel": JSXElements.StbCarouselAttributes;
    }
  }
  namespace JSXElements {
    export interface StbCarouselAttributes extends HTMLAttributes {
      cycleType?: string | boolean;
      indicatorSelector?: string;
      interval?: number;
      nextSelector?: string;
      prevSelector?: string;
      ride?: boolean;
      selected?: number;
      slideSelector?: string;
      wrap?: boolean;
    }
  }
}


import {
  StbCollapse as StbCollapse
} from './components/collapse/collapse';

declare global {
  interface HTMLStbCollapseElement extends StbCollapse, HTMLStencilElement {
  }
  var HTMLStbCollapseElement: {
    prototype: HTMLStbCollapseElement;
    new (): HTMLStbCollapseElement;
  };
  interface HTMLElementTagNameMap {
    "stb-collapse": HTMLStbCollapseElement;
  }
  interface ElementTagNameMap {
    "stb-collapse": HTMLStbCollapseElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stb-collapse": JSXElements.StbCollapseAttributes;
    }
  }
  namespace JSXElements {
    export interface StbCollapseAttributes extends HTMLAttributes {
      accordian?: boolean;
      active?: boolean;
      activeClass?: string;
      disabled?: boolean;
      type?: string;
    }
  }
}


import {
  StbDropdown as StbDropdown
} from './components/dropdown/dropdown';

declare global {
  interface HTMLStbDropdownElement extends StbDropdown, HTMLStencilElement {
  }
  var HTMLStbDropdownElement: {
    prototype: HTMLStbDropdownElement;
    new (): HTMLStbDropdownElement;
  };
  interface HTMLElementTagNameMap {
    "stb-dropdown": HTMLStbDropdownElement;
  }
  interface ElementTagNameMap {
    "stb-dropdown": HTMLStbDropdownElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stb-dropdown": JSXElements.StbDropdownAttributes;
    }
  }
  namespace JSXElements {
    export interface StbDropdownAttributes extends HTMLAttributes {
      action?: string;
      disabled?: boolean;
      modifiers?: Modifiers;
      onlyOneOpen?: boolean;
      placement?: Placement;
      positionFixed?: boolean;
      target?: string;
    }
  }
}


import {
  StbModal as StbModal
} from './components/modal/stb-modal';

declare global {
  interface HTMLStbModalElement extends StbModal, HTMLStencilElement {
  }
  var HTMLStbModalElement: {
    prototype: HTMLStbModalElement;
    new (): HTMLStbModalElement;
  };
  interface HTMLElementTagNameMap {
    "stb-modal": HTMLStbModalElement;
  }
  interface ElementTagNameMap {
    "stb-modal": HTMLStbModalElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stb-modal": JSXElements.StbModalAttributes;
    }
  }
  namespace JSXElements {
    export interface StbModalAttributes extends HTMLAttributes {
      animation?: any;
      ignoreBackdropClick?: boolean;
      keyboard?: boolean;
      options?: any;
    }
  }
}


import {
  StbNav as StbNav
} from './components/nav/nav';

declare global {
  interface HTMLStbNavElement extends StbNav, HTMLStencilElement {
  }
  var HTMLStbNavElement: {
    prototype: HTMLStbNavElement;
    new (): HTMLStbNavElement;
  };
  interface HTMLElementTagNameMap {
    "stb-nav": HTMLStbNavElement;
  }
  interface ElementTagNameMap {
    "stb-nav": HTMLStbNavElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stb-nav": JSXElements.StbNavAttributes;
    }
  }
  namespace JSXElements {
    export interface StbNavAttributes extends HTMLAttributes {
      panelSelector?: string;
      selected?: number;
      tabSelector?: string;
    }
  }
}


import {
  StbPagination as StbPagination
} from './components/pagination/pagination';

declare global {
  interface HTMLStbPaginationElement extends StbPagination, HTMLStencilElement {
  }
  var HTMLStbPaginationElement: {
    prototype: HTMLStbPaginationElement;
    new (): HTMLStbPaginationElement;
  };
  interface HTMLElementTagNameMap {
    "stb-pagination": HTMLStbPaginationElement;
  }
  interface ElementTagNameMap {
    "stb-pagination": HTMLStbPaginationElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stb-pagination": JSXElements.StbPaginationAttributes;
    }
  }
  namespace JSXElements {
    export interface StbPaginationAttributes extends HTMLAttributes {
      nextSelector?: string;
      pagesSelector?: string;
      prevSelector?: string;
      selected?: number;
    }
  }
}


import {
  StbProgress as StbProgress
} from './components/progress/progress';

declare global {
  interface HTMLStbProgressElement extends StbProgress, HTMLStencilElement {
  }
  var HTMLStbProgressElement: {
    prototype: HTMLStbProgressElement;
    new (): HTMLStbProgressElement;
  };
  interface HTMLElementTagNameMap {
    "stb-progress": HTMLStbProgressElement;
  }
  interface ElementTagNameMap {
    "stb-progress": HTMLStbProgressElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stb-progress": JSXElements.StbProgressAttributes;
    }
  }
  namespace JSXElements {
    export interface StbProgressAttributes extends HTMLAttributes {
      classes?: string;
      current?: number | ISTBProgress | ISTBProgress[];
      max?: number;
      min?: number;
      title?: string;
    }
  }
}


import {
  StbToggle as StbToggle
} from './components/toggle/toggle';

declare global {
  interface HTMLStbToggleElement extends StbToggle, HTMLStencilElement {
  }
  var HTMLStbToggleElement: {
    prototype: HTMLStbToggleElement;
    new (): HTMLStbToggleElement;
  };
  interface HTMLElementTagNameMap {
    "stb-toggle": HTMLStbToggleElement;
  }
  interface ElementTagNameMap {
    "stb-toggle": HTMLStbToggleElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stb-toggle": JSXElements.StbToggleAttributes;
    }
  }
  namespace JSXElements {
    export interface StbToggleAttributes extends HTMLAttributes {
      selected?: number;
      target?: string;
    }
  }
}


import {
  StbPageCarousels as StbPageCarousels
} from './pages/components/carousels/carousels';

declare global {
  interface HTMLStbPageCarouselsElement extends StbPageCarousels, HTMLStencilElement {
  }
  var HTMLStbPageCarouselsElement: {
    prototype: HTMLStbPageCarouselsElement;
    new (): HTMLStbPageCarouselsElement;
  };
  interface HTMLElementTagNameMap {
    "stb-page-carousels": HTMLStbPageCarouselsElement;
  }
  interface ElementTagNameMap {
    "stb-page-carousels": HTMLStbPageCarouselsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stb-page-carousels": JSXElements.StbPageCarouselsAttributes;
    }
  }
  namespace JSXElements {
    export interface StbPageCarouselsAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  StbPageComponents as StbPageComponents
} from './pages/components/components';

declare global {
  interface HTMLStbPageComponentsElement extends StbPageComponents, HTMLStencilElement {
  }
  var HTMLStbPageComponentsElement: {
    prototype: HTMLStbPageComponentsElement;
    new (): HTMLStbPageComponentsElement;
  };
  interface HTMLElementTagNameMap {
    "stb-page-components": HTMLStbPageComponentsElement;
  }
  interface ElementTagNameMap {
    "stb-page-components": HTMLStbPageComponentsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stb-page-components": JSXElements.StbPageComponentsAttributes;
    }
  }
  namespace JSXElements {
    export interface StbPageComponentsAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  StbPageDropdowns as StbPageDropdowns
} from './pages/components/dropdowns/dropdowns';

declare global {
  interface HTMLStbPageDropdownsElement extends StbPageDropdowns, HTMLStencilElement {
  }
  var HTMLStbPageDropdownsElement: {
    prototype: HTMLStbPageDropdownsElement;
    new (): HTMLStbPageDropdownsElement;
  };
  interface HTMLElementTagNameMap {
    "stb-page-dropdowns": HTMLStbPageDropdownsElement;
  }
  interface ElementTagNameMap {
    "stb-page-dropdowns": HTMLStbPageDropdownsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stb-page-dropdowns": JSXElements.StbPageDropdownsAttributes;
    }
  }
  namespace JSXElements {
    export interface StbPageDropdownsAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  StbPageNavs as StbPageNavs
} from './pages/components/navs/navs';

declare global {
  interface HTMLStbPageNavsElement extends StbPageNavs, HTMLStencilElement {
  }
  var HTMLStbPageNavsElement: {
    prototype: HTMLStbPageNavsElement;
    new (): HTMLStbPageNavsElement;
  };
  interface HTMLElementTagNameMap {
    "stb-page-navs": HTMLStbPageNavsElement;
  }
  interface ElementTagNameMap {
    "stb-page-navs": HTMLStbPageNavsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stb-page-navs": JSXElements.StbPageNavsAttributes;
    }
  }
  namespace JSXElements {
    export interface StbPageNavsAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  StbPagePaginations as StbPagePaginations
} from './pages/components/paginations/paginations';

declare global {
  interface HTMLStbPagePaginationsElement extends StbPagePaginations, HTMLStencilElement {
  }
  var HTMLStbPagePaginationsElement: {
    prototype: HTMLStbPagePaginationsElement;
    new (): HTMLStbPagePaginationsElement;
  };
  interface HTMLElementTagNameMap {
    "stb-page-paginations": HTMLStbPagePaginationsElement;
  }
  interface ElementTagNameMap {
    "stb-page-paginations": HTMLStbPagePaginationsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stb-page-paginations": JSXElements.StbPagePaginationsAttributes;
    }
  }
  namespace JSXElements {
    export interface StbPagePaginationsAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  StbPageProgressBars as StbPageProgressBars
} from './pages/components/progress-bars/progress-bars';

declare global {
  interface HTMLStbPageProgressBarsElement extends StbPageProgressBars, HTMLStencilElement {
  }
  var HTMLStbPageProgressBarsElement: {
    prototype: HTMLStbPageProgressBarsElement;
    new (): HTMLStbPageProgressBarsElement;
  };
  interface HTMLElementTagNameMap {
    "stb-page-progress-bars": HTMLStbPageProgressBarsElement;
  }
  interface ElementTagNameMap {
    "stb-page-progress-bars": HTMLStbPageProgressBarsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stb-page-progress-bars": JSXElements.StbPageProgressBarsAttributes;
    }
  }
  namespace JSXElements {
    export interface StbPageProgressBarsAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  AppHome as AppHome
} from './pages/home/app-home';

declare global {
  interface HTMLAppHomeElement extends AppHome, HTMLStencilElement {
  }
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };
  interface HTMLElementTagNameMap {
    "app-home": HTMLAppHomeElement;
  }
  interface ElementTagNameMap {
    "app-home": HTMLAppHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-home": JSXElements.AppHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHomeAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  MyApp as MyApp
} from './pages/my-app/my-app';

declare global {
  interface HTMLMyAppElement extends MyApp, HTMLStencilElement {
  }
  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };
  interface HTMLElementTagNameMap {
    "my-app": HTMLMyAppElement;
  }
  interface ElementTagNameMap {
    "my-app": HTMLMyAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-app": JSXElements.MyAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAppAttributes extends HTMLAttributes {
      history?: RouterHistory;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
