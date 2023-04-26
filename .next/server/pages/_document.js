"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 7533:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const CONFIG = __webpack_require__(9313);
module.exports = function lang() {
    switch(CONFIG.lang.toLowerCase()){
        case "zh-cn":
        case "zh-sg":
            return "SC";
        case "zh":
        case "zh-hk":
        case "zh-tw":
            return "TC";
        case "ja":
        case "ja-jp":
            return "JP";
        case "ko":
        case "ko-kr":
            return "KR";
        default:
            return null;
    }
};


/***/ }),

/***/ 6284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6859);
/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9313);
/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(site_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _libs_cjk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7533);
/* harmony import */ var _libs_cjk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_libs_cjk__WEBPACK_IMPORTED_MODULE_3__);




class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1__["default"] {
    render() {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
            lang: (site_config__WEBPACK_IMPORTED_MODULE_2___default().lang),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                    rel: "preload",
                                    href: "/fonts/SourceSerif.var.woff2",
                                    as: "font",
                                    type: "font/woff2",
                                    crossOrigin: "anonymous"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                    rel: "preload",
                                    href: "/fonts/SourceSerif-Italic.var.woff2",
                                    as: "font",
                                    type: "font/woff2",
                                    crossOrigin: "anonymous"
                                })
                            ]
                        }),
                        [
                            "zh",
                            "ja",
                            "ko"
                        ].includes(site_config__WEBPACK_IMPORTED_MODULE_2___default().lang.slice(0, 2).toLocaleLowerCase()) && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                    rel: "preconnect",
                                    href: "https://fonts.gstatic.com",
                                    crossOrigin: "anonymous"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                    rel: "preload",
                                    as: "style",
                                    href: `https://fonts.googleapis.com/css2?family=Noto+Sans+${_libs_cjk__WEBPACK_IMPORTED_MODULE_3___default()()}:wght@400;500;700&display=swap`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                    rel: "stylesheet",
                                    href: `https://fonts.googleapis.com/css2?family=Noto+Sans+${_libs_cjk__WEBPACK_IMPORTED_MODULE_3___default()()}:wght@400;500;700&display=swap`
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("noscript", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                        rel: "stylesheet",
                                        href: `https://fonts.googleapis.com/css2?family=Noto+Sans+${_libs_cjk__WEBPACK_IMPORTED_MODULE_3___default()()}:wght@400;500;700&display=swap`
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "icon",
                            href: "/leetrue.jpeg"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "apple-touch-icon",
                            sizes: "192x192",
                            href: "/leetrue.jpeg"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                            rel: "alternate",
                            type: "application/rss+xml",
                            title: "RSS 2.0",
                            href: "/feed"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "theme-color",
                            content: "#f1f3f5"
                        }),
                        (site_config__WEBPACK_IMPORTED_MODULE_2___default().googleSearchConsole.enable) === true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "google-site-verification",
                                content: (site_config__WEBPACK_IMPORTED_MODULE_2___default().googleSearchConsole.config.siteVerification)
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("body", {
                    className: "bg-day dark:bg-night",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {})
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);


/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [505,859,313], () => (__webpack_exec__(6284)));
module.exports = __webpack_exports__;

})();