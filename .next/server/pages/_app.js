"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "g": () => (/* binding */ getTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9313);
/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(site_config__WEBPACK_IMPORTED_MODULE_1__);


const getTheme = ()=>{
    const themeConfig = site_config__WEBPACK_IMPORTED_MODULE_1__.CONFIG.blog.theme;
    if (themeConfig !== "auto") return themeConfig;
    if (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
    } else {
        return "light";
    }
};
const useThemeEffect = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (typeof document !== "object") return;
        if (getTheme() === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useThemeEffect);


/***/ }),

/***/ 4695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/hooks/useThemeEffect.ts
var useThemeEffect = __webpack_require__(185);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./site.config.js
var site_config = __webpack_require__(9313);
;// CONCATENATED MODULE: ./src/libs/gtag.ts

const GA_TRACKING_ID = site_config.CONFIG.googleAnalytics.config.measurementId;
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = (url)=>{
    if (true) return;
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url
    });
};
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const gtag_event = ({ action , category , label , value  })=>{
    if (true) return;
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value
    });
};

;// CONCATENATED MODULE: ./src/hooks/useGtagEffect.ts




const useGtagEffect = ()=>{
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        if (!(site_config.CONFIG.isProd && site_config.CONFIG?.googleAnalytics?.enable)) return;
        const handleRouteChange = (url)=>{
            pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [
        router.events
    ]);
    return null;
};
/* harmony default export */ const hooks_useGtagEffect = (useGtagEffect);

;// CONCATENATED MODULE: external "next/script"
const script_namespaceObject = require("next/script");
var script_default = /*#__PURE__*/__webpack_require__.n(script_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Scripts.tsx



const Scripts = ()=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: site_config.CONFIG?.googleAnalytics?.enable === true && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                    src: `https://www.googletagmanager.com/gtag/js?id=${site_config.CONFIG.googleAnalytics.config.measurementId}`
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                    strategy: "lazyOnload",
                    id: "ga",
                    children: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${site_config.CONFIG.googleAnalytics.config.measurementId}', {
              page_path: window.location.pathname,
            });`
                })
            ]
        })
    })
;
/* harmony default export */ const components_Scripts = (Scripts);

;// CONCATENATED MODULE: ./src/pages/_app.tsx









function MyApp({ Component , pageProps  }) {
    const getLayout = Component.getLayout || ((page)=>page
    );
    (0,useThemeEffect/* default */.Z)();
    hooks_useGtagEffect();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Scripts, {}),
            getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }))
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [313], () => (__webpack_exec__(4695)));
module.exports = __webpack_exports__;

})();