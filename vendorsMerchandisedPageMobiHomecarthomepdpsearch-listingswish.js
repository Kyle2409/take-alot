(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1127:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o(925),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,o):{};n.get||n.set?Object.defineProperty(e,o,n):e[o]=t[o]}return e.default=t,e}(o(1531));function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable})))),n.forEach((function(e){a(t,e,o[e])}))}return t}function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var s=null,d=null,u=!0,f=!1,c=!1,p=null,g=!0,h=!0,b={},y=!1,v={},S={},m=Object.assign((new n.EventEmitter).setMaxListeners(0),{singleRequestIsEnabled:function(){return u},configureSingleRequest:function(t){u=!!t},disableInitialLoadIsEnabled:function(){return f},configureDisableInitialLoad:function(t){f=!!t},configureLazyLoad:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=null;null!==e&&"object"===r(e)&&(o=l({},e)),c=!!t,p=o},lazyLoadIsEnabled:function(){return c},getLazyLoadConfig:function(){return p},getAdSenseAttribute:function(t){return S[t]},configurePersonalizedAds:function(t){g=t},configureCookieOption:function(t){h=t},personalizedAdsEnabled:function(){return g},cookiesEnabled:function(){return h},setAdSenseAttribute:function(t,e){this.setAdSenseAttributes(a({},t,e))},getAdSenseAttributes:function(){return l({},S)},setAdSenseAttributes:function(t){Object.assign(S,t),!0===y&&this.getGoogletag().then((function(t){t.cmd.push((function(){var e=t.pubads();Object.keys(S).forEach((function(t){e.set(t,v[t])}))}))}))},setTargetingArguments:function(t){Object.assign(v,t),!0===y&&this.getGoogletag().then((function(t){t.cmd.push((function(){var e=t.pubads();Object.keys(v).forEach((function(t){e&&e.setTargeting(t,v[t])}))}))}))},getTargetingArguments:function(){return l({},v)},getSlotProperty:function(t,e){var o=this.getRegisteredSlots()[t],n=null;return void 0!==o&&(n=o[e]||n),n},getSlotTargetingArguments:function(t){var e=this.getSlotProperty(t,"targetingArguments");return e?l({},e):null},getSlotAdSenseAttributes:function(t){var e=this.getSlotProperty(t,"adSenseAttributes");return e?l({},e):null},init:function(){var t=this;!1===y&&(y=!0,this.getGoogletag().then((function(e){e.cmd.push((function(){var o=e.pubads();o.addEventListener("slotRenderEnded",(function(e){var o=e.slot.getSlotElementId();t.emit("slotRenderEnded",{slotId:o,event:e})})),o.addEventListener("impressionViewable",(function(e){var o=e.slot.getSlotElementId();t.emit("impressionViewable",{slotId:o,event:e})})),o.addEventListener("slotVisibilityChanged",(function(e){var o=e.slot.getSlotElementId();t.emit("slotVisibilityChanged",{slotId:o,event:e})})),o.setRequestNonPersonalizedAds(t.personalizedAdsEnabled()?0:1),o.setCookieOptions(t.cookiesEnabled()?0:1)}))})))},getGoogletag:function(){return null===d&&(d=i.loadGPTScript()),d},setCollapseEmptyDivs:function(t){this.collapseEmptyDivs=t},load:function(){for(var t=this,e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];s=null===s?this.doLoad.apply(this,o):s.then((function(){return t.doLoad.apply(t,o)}))},doLoad:function(){this.init();for(var t={},e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return(t=(t=o.length>0?o.filter((function(t){return Object.prototype.hasOwnProperty.call(b,t)})):Object.keys(b)).filter((function(t){return!b[t].loading&&!b[t].gptSlot}))).forEach((function(t){b[t].loading=!0})),this.gptLoadAds(t)},gptLoadAds:function(t){var e=this;return new Promise((function(o){e.getGoogletag().then((function(n){e.configureInitialOptions(n),t.forEach((function(t){b[t].loading=!1,n.cmd.push((function(){var o,i=b[t],l="".concat(i.dfpNetworkId,"/").concat(i.adUnit);if(null!==(o=!0===i.renderOutOfThePage?n.defineOutOfPageSlot(l,t):n.defineSlot(l,i.sizes,t))){i.gptSlot=o;var a=e.getSlotTargetingArguments(t);null!==a&&Object.keys(a).forEach((function(t){i&&i.gptSlot&&i.gptSlot.setTargeting(t,a[t])}));var r=e.getSlotAdSenseAttributes(t);if(null!==r&&Object.keys(r).forEach((function(t){i.gptSlot.set(t,r[t])})),i.gptSlot.addService(n.pubads()),i.sizeMapping){var s=n.sizeMapping();i.sizeMapping.forEach((function(t){s=s.addSize(t.viewport,t.sizes)})),i.gptSlot.defineSizeMapping(s.build())}}}))})),e.configureOptions(n),n.cmd.push((function(){n.enableServices(),e.disableInitialLoadIsEnabled()||t.forEach((function(t){n.display(t)})),o()}))}))}))},configureInitialOptions:function(t){var e=this;t.cmd.push((function(){e.disableInitialLoadIsEnabled()&&t.pubads().disableInitialLoad()}))},configureOptions:function(t){var e=this;t.cmd.push((function(){var o=t.pubads();o.setRequestNonPersonalizedAds(e.personalizedAdsEnabled()?0:1),o.setCookieOptions(e.cookiesEnabled()?0:1);var n=e.getTargetingArguments();Object.keys(n).forEach((function(t){o&&o.setTargeting(t,n[t])}));var i=e.getAdSenseAttributes();if(Object.keys(i).forEach((function(t){o.set(t,i[t])})),e.lazyLoadIsEnabled()){var l=e.getLazyLoadConfig();l?o.enableLazyLoad(l):o.enableLazyLoad()}e.singleRequestIsEnabled()&&o.enableSingleRequest(),!0!==e.collapseEmptyDivs&&!1!==e.collapseEmptyDivs||o.collapseEmptyDivs(e.collapseEmptyDivs)}))},getRefreshableSlots:function(){for(var t={},e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];if(0===o.length){var i=Object.keys(b).map((function(t){return b[t]}));return i.reduce((function(e,o){return!0===o.slotShouldRefresh()&&(t[o.slotId]=o),t}),t)}return o.reduce((function(e,o){var n=b[o];return void 0!==n&&(t[o]=n),t}),t)},refresh:function(){null===s?this.load():this.gptRefreshAds(Object.keys(this.getRefreshableSlots.apply(this,arguments)))},gptRefreshAds:function(t){var e=this;return this.getGoogletag().then((function(o){e.configureOptions(o),o.cmd.push((function(){o.pubads().refresh(t.map((function(t){return b[t].gptSlot})))}))}))},reload:function(){var t=this;return this.destroyGPTSlots.apply(this,arguments).then((function(){return t.load()}))},destroyGPTSlots:function(){for(var t=this,e=arguments.length,o=new Array(e),n=0;n<e;n++)o[n]=arguments[n];return 0===o.length&&(o=Object.keys(b)),new Promise((function(e){var n=[];for(var i in o){var l=o[i],a=b[l];n.push(a)}t.getGoogletag().then((function(t){t.cmd.push((function(){if(!0===y)if(o.length>0){for(var i in n){var l=n[i];n.push(l.gptSlot),delete l.gptSlot}t.destroySlots(n)}else t.destroySlots();e(o)}))}))}))},registerSlot:function(t){var e=this,o=t.slotId,n=t.dfpNetworkId,i=t.adUnit,l=t.sizes,a=t.renderOutOfThePage,r=t.sizeMapping,d=t.adSenseAttributes,u=t.targetingArguments,f=t.slotShouldRefresh,c=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Object.prototype.hasOwnProperty.call(b,o)||(b[o]={slotId:o,sizes:l,renderOutOfThePage:a,dfpNetworkId:n,adUnit:i,adSenseAttributes:d,targetingArguments:u,sizeMapping:r,slotShouldRefresh:f,loading:!1},this.emit("slotRegistered",{slotId:o}),!0===c&&null!==s&&(s=s.catch().then((function(){var t=b[o];if(void 0!==t){var n=t.loading,i=t.gptSlot;!1!==n||i||e.load(o)}}))))},unregisterSlot:function(t){var e=t.slotId;this.destroyGPTSlots(e),delete b[e]},getRegisteredSlots:function(){return b},attachSlotRenderEnded:function(t){this.on("slotRenderEnded",t)},detachSlotRenderEnded:function(t){this.removeListener("slotRenderEnded",t)},attachSlotVisibilityChanged:function(t){this.on("slotVisibilityChanged",t)},detachSlotVisibilityChanged:function(t){this.removeListener("slotVisibilityChanged",t)},attachSlotIsViewable:function(t){this.on("impressionViewable",t)},detachSlotIsViewable:function(t){this.removeListener("impressionViewable",t)}});e.default=m},1311:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.Context=void 0;var n=a(o(2)),i=a(o(15)),l=a(o(1127));function a(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var p=n.default.createContext?n.default.createContext({dfpNetworkId:null,dfpAdUnit:null,dfpSizeMapping:null,dfpTargetingArguments:null,newSlotCallback:null}):null;e.Context=p;var g=function(t){function e(t){var o,n,i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=this,i=d(e).call(this,t),(o=!i||"object"!==r(i)&&"function"!=typeof i?f(n):i).loadAdsIfPossible=o.loadAdsIfPossible.bind(f(f(o))),o.newSlotCallback=o.newSlotCallback.bind(f(f(o))),o.applyConfigs=o.applyConfigs.bind(f(f(o))),o.shouldReloadConfig=o.shouldReloadConfig.bind(f(f(o))),o.attachLoadCallback=o.attachLoadCallback.bind(f(f(o))),o.getContextValue=o.getContextValue.bind(f(f(o))),o.loadAlreadyCalled=!1,o.loadCallbackAttached=!1,o.shouldReloadAds=!1,o.totalSlots=0,o.contextValue={},null===p&&(o.getChildContext=function(){return o.getContextValue()}),o}var o,i,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,t),o=e,(i=[{key:"componentDidMount",value:function(){this.applyConfigs(),this.props.autoLoad&&!this.loadAdsIfPossible()&&this.attachLoadCallback()}},{key:"shouldComponentUpdate",value:function(t){return this.shouldReloadAds=this.shouldReloadConfig(t),t.children!==this.props.children||!(!t.autoLoad||this.props.autoLoad)||this.shouldReloadAds}},{key:"componentDidUpdate",value:function(){this.applyConfigs(),this.props.autoLoad&&(this.loadAlreadyCalled?this.shouldReloadAds&&l.default.reload():this.loadAdsIfPossible()||this.attachLoadCallback()),this.shouldReloadAds=!1}},{key:"getContextValue",value:function(){var t=this.props,e=t.dfpNetworkId,o=t.adUnit,n=t.sizeMapping,i=t.targetingArguments,l=this.contextValue,a=l.dfpNetworkId,r=l.adUnit,s=l.sizeMapping,d=l.targetingArguments;return e===a&&o===r&&n===s&&i===d||(this.contextValue={dfpNetworkId:e,dfpAdUnit:o,dfpSizeMapping:n,dfpTargetingArguments:i,newSlotCallback:this.newSlotCallback}),this.contextValue}},{key:"applyConfigs",value:function(){l.default.configurePersonalizedAds(this.props.personalizedAds),l.default.configureCookieOption(this.props.cookieOption),l.default.configureSingleRequest(this.props.singleRequest),l.default.configureDisableInitialLoad(this.props.disableInitialLoad),l.default.configureLazyLoad(!!this.props.lazyLoad,"boolean"==typeof this.props.lazyLoad?null:this.props.lazyLoad),l.default.setAdSenseAttributes(this.props.adSenseAttributes),l.default.setCollapseEmptyDivs(this.props.collapseEmptyDivs)}},{key:"attachLoadCallback",value:function(){return!1===this.loadCallbackAttached&&(l.default.on("slotRegistered",this.loadAdsIfPossible),this.loadCallbackAttached=!0,!0)}},{key:"newSlotCallback",value:function(){this.totalSlots++}},{key:"loadAdsIfPossible",value:function(){var t=!1;return Object.keys(l.default.getRegisteredSlots()).length>=this.totalSlots&&(l.default.removeListener("slotRegistered",this.loadAdsIfPossible),l.default.load(),this.loadAlreadyCalled=!0,this.loadCallbackAttached=!1,t=!0),t}},{key:"shouldReloadConfig",value:function(t){var e=t.autoReload||this.props.autoReload;if((this.props.autoLoad||t.autoLoad)&&"object"===r(e)){var o=Object.keys(e);for(var n in o){var i=o[n];if(!0===e[i]&&this.props[i]!==t[i])return!0}}return!1}},{key:"render",value:function(){var t=this.props.children;return null===p?t:n.default.createElement(p.Provider,{value:this.getContextValue()},t)}}])&&s(o.prototype,i),a&&s(o,a),e}(n.default.Component);e.default=g,c(g,"propTypes",{children:i.default.oneOfType([i.default.element,i.default.array]).isRequired,autoLoad:i.default.bool,autoReload:i.default.shape({dfpNetworkId:i.default.bool,personalizedAds:i.default.bool,cookieOption:i.default.bool,singleRequest:i.default.bool,disableInitialLoad:i.default.bool,adUnit:i.default.bool,sizeMapping:i.default.bool,adSenseAttributes:i.default.bool,targetingArguments:i.default.bool,collapseEmptyDivs:i.default.bool,lazyLoad:i.default.bool}),dfpNetworkId:i.default.string.isRequired,personalizedAds:i.default.bool,cookieOption:i.default.bool,singleRequest:i.default.bool,disableInitialLoad:i.default.bool,adUnit:i.default.string,sizeMapping:i.default.arrayOf(i.default.object),adSenseAttributes:i.default.object,targetingArguments:i.default.object,collapseEmptyDivs:i.default.oneOfType([i.default.bool,i.default.object]),adSenseAttrs:i.default.object,lazyLoad:i.default.oneOfType([i.default.bool,i.default.shape({fetchMarginPercent:i.default.number,renderMarginPercent:i.default.number,mobileScaling:i.default.number})])}),c(g,"defaultProps",{autoLoad:!0,autoReload:{dfpNetworkId:!1,personalizedAds:!1,cookieOption:!1,singleRequest:!1,disableInitialLoad:!1,adUnit:!1,sizeMapping:!1,adSenseAttributes:!1,targetingArguments:!1,collapseEmptyDivs:!1,lazyLoad:!1},personalizedAds:!0,cookieOption:!0,singleRequest:!0,disableInitialLoad:!1,collapseEmptyDivs:null,lazyLoad:!1}),null===p&&(g.childContextTypes={dfpNetworkId:i.default.string,dfpAdUnit:i.default.string,dfpSizeMapping:i.default.arrayOf(i.default.object),dfpTargetingArguments:i.default.object,newSlotCallback:i.default.func})},1531:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.loadGPTScript=function(){return new Promise((function(t,e){!function(t,e){window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[];var o=document.createElement("script");o.src="".concat(document.location.protocol,"//securepubads.g.doubleclick.net/tag/js/gpt.js"),o.async=!0,o.type="text/javascript",o.onerror=function(t){e(t)},o.onload=function(){t(window.googletag)},document.getElementsByTagName("head")[0].appendChild(o)}(t,e)}))}},1532:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.AdSlot=void 0;var n=r(o(2)),i=r(o(15)),l=r(o(1127)),a=o(1311);function r(t){return t&&t.__esModule?t:{default:t}}function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(){return(d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t}).apply(this,arguments)}function u(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},n=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(o).filter((function(t){return Object.getOwnPropertyDescriptor(o,t).enumerable})))),n.forEach((function(e){h(t,e,o[e])}))}return t}function f(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var b=0,y=function(t){function e(t){var o,i,l;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),i=this,l=c(e).call(this,t),(o=!l||"object"!==s(l)&&"function"!=typeof l?g(i):l).doRegisterSlot=o.doRegisterSlot.bind(g(g(o))),o.generateSlotId=o.generateSlotId.bind(g(g(o))),o.getSlotId=o.getSlotId.bind(g(g(o))),o.mapContextToAdSlotProps=o.mapContextToAdSlotProps.bind(g(g(o))),o.slotShouldRefresh=o.slotShouldRefresh.bind(g(g(o))),o.slotRenderEnded=o.slotRenderEnded.bind(g(g(o))),o.slotRegisterCallback=o.slotRegisterCallback.bind(g(g(o))),o.slotIsViewable=o.slotIsViewable.bind(g(g(o))),o.slotVisibilityChanged=o.slotVisibilityChanged.bind(g(g(o))),o.getClasses=o.getClasses.bind(g(g(o))),o.state={slotId:o.props.slotId||null,className:o.props.className||""},o.adElementRef=n.default.createRef?n.default.createRef():function(t){o.adElementRef=t},o}var o,i,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,t),o=e,(i=[{key:"componentDidMount",value:function(){void 0!==this.context&&this.context.newSlotCallback&&this.context.newSlotCallback(),this.registerSlot()}},{key:"componentWillUnmount",value:function(){this.unregisterSlot()}},{key:"getSlotId",value:function(){return this.props.slotId||this.state.slotId}},{key:"getClasses",value:function(){var t=this.state.className.split(" ");return t.push("adunitContainer"),t}},{key:"generateSlotId",value:function(){return"adSlot-".concat(b++)}},{key:"mapContextToAdSlotProps",value:function(){var t=this.context,e={};return void 0!==t.dfpNetworkId&&(e.dfpNetworkId=t.dfpNetworkId),void 0!==t.dfpAdUnit&&(e.adUnit=t.dfpAdUnit),void 0!==t.dfpSizeMapping&&(e.sizeMapping=t.dfpSizeMapping),void 0!==t.dfpTargetingArguments&&(e.targetingArguments=t.dfpTargetingArguments),e}},{key:"doRegisterSlot",value:function(){l.default.registerSlot(u({},this.mapContextToAdSlotProps(),this.props,this.state,{slotShouldRefresh:this.slotShouldRefresh})),!0===this.props.fetchNow&&l.default.load(this.getSlotId()),l.default.attachSlotRenderEnded(this.slotRenderEnded),l.default.attachSlotIsViewable(this.slotIsViewable),l.default.attachSlotVisibilityChanged(this.slotVisibilityChanged),this.slotRegisterCallback()}},{key:"registerSlot",value:function(){null===this.state.slotId?this.setState({slotId:this.generateSlotId()},this.doRegisterSlot):this.doRegisterSlot()}},{key:"unregisterSlot",value:function(){l.default.unregisterSlot(u({},this.mapContextToAdSlotProps(),this.props,this.state)),l.default.detachSlotRenderEnded(this.slotRenderEnded),l.default.detachSlotIsViewable(this.slotIsViewable),l.default.detachSlotVisibilityChanged(this.slotVisibilityChanged)}},{key:"slotRenderEnded",value:function(t){if(t.slotId===this.getSlotId()&&void 0!==this.props.onSlotRender){var e=u({},t,{adElementRef:this.adElementRef});this.props.onSlotRender(e)}}},{key:"slotRegisterCallback",value:function(){"function"==typeof this.props.onSlotRegister&&this.props.onSlotRegister({slotId:this.getSlotId(),sizes:this.props.sizes,slotCount:b,adElementRef:this.adElementRef})}},{key:"slotIsViewable",value:function(t){t.slotId===this.getSlotId()&&void 0!==this.props.onSlotIsViewable&&this.props.onSlotIsViewable(t)}},{key:"slotVisibilityChanged",value:function(t){t.slotId===this.getSlotId()&&void 0!==this.props.onSlotVisibilityChanged&&this.props.onSlotVisibilityChanged(t)}},{key:"slotShouldRefresh",value:function(){var t=!0;return void 0!==this.props.shouldRefresh&&(t=this.props.shouldRefresh(u({},this.mapContextToAdSlotProps(),this.props,{slotId:this.getSlotId()}))),t}},{key:"render",value:function(){var t=this.state.slotId,e={className:"adBox"};return null!==t&&(e.id=t),n.default.createElement("div",{className:this.getClasses().join(" ").trim()},n.default.createElement("div",d({ref:this.adElementRef},e)))}}])&&f(o.prototype,i),a&&f(o,a),e}(n.default.Component);e.AdSlot=y,h(y,"propTypes",{dfpNetworkId:i.default.string,adUnit:i.default.string,sizes:i.default.arrayOf(i.default.oneOfType([i.default.arrayOf(i.default.number),i.default.string])),renderOutOfThePage:i.default.bool,sizeMapping:i.default.arrayOf(i.default.object),fetchNow:i.default.bool,adSenseAttributes:i.default.object,targetingArguments:i.default.object,onSlotRender:i.default.func,onSlotRegister:i.default.func,onSlotIsViewable:i.default.func,onSlotVisibilityChanged:i.default.func,shouldRefresh:i.default.func,slotId:i.default.string,className:i.default.string}),h(y,"defaultProps",{fetchNow:!1}),null===a.Context?y.contextTypes={dfpNetworkId:i.default.string,dfpAdUnit:i.default.string,dfpSizeMapping:i.default.arrayOf(i.default.object),dfpTargetingArguments:i.default.object,newSlotCallback:i.default.func}:y.contextType=a.Context;var v=y;e.default=v},810:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DFPSlotsProvider=e.AdSlot=e.DFPManager=void 0;var n=a(o(1127)),i=a(o(1532)),l=a(o(1311));function a(t){return t&&t.__esModule?t:{default:t}}var r=n.default;e.DFPManager=r;var s=i.default;e.AdSlot=s;var d=l.default;e.DFPSlotsProvider=d}}]);