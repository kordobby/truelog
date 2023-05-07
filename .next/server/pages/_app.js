/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./site.config.js":
/*!************************!*\
  !*** ./site.config.js ***!
  \************************/
/***/ ((module) => {

"use strict";
eval("\nconst CONFIG = {\n    // profile setting (required)\n    profile: {\n        name: \"leetrue\",\n        image: \"/leetrue.jpeg\",\n        role: \"frontend developer\",\n        bio: \"I love clean code\",\n        email: \"poordobby@naver.com\",\n        linkedin: \"\",\n        github: \"kordobby\",\n        instagram: \"yuniscells\"\n    },\n    projects: [\n        {\n            name: \"Secret\",\n            href: \"\"\n        }, \n    ],\n    // blog setting (required)\n    blog: {\n        title: \"truelog\",\n        description: \"welcome to truelog!\",\n        theme: \"auto\"\n    },\n    // CONFIG configration (required)\n    link: \"https://morethan-log.vercel.app\",\n    since: 2022,\n    lang: \"ko-KR\",\n    ogImageGenerateURL: \"https://og-image-korean.vercel.app\",\n    seo: {\n        keywords: [\n            \"Blog\",\n            \"Website\",\n            \"Notion\"\n        ]\n    },\n    // notion configuration (required)\n    notionConfig: {\n        pageId: \"c82b4d55012b4601b7a1021e75ed7594\"\n    },\n    // plugin configuration (optional)\n    googleAnalytics: {\n        enable: false,\n        config: {\n            measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || \"\"\n        }\n    },\n    googleSearchConsole: {\n        enable: false,\n        config: {\n            siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || \"\"\n        }\n    },\n    utterances: {\n        enable: true,\n        config: {\n            repo: \"kordobby/truelog\",\n            \"issue-term\": \"og:title\",\n            label: \"\\uD83D\\uDCAC Utterances\"\n        }\n    },\n    cusdis: {\n        enable: false,\n        config: {\n            host: \"https://cusdis.com\",\n            appid: \"\"\n        }\n    },\n    isProd: process.env.VERCEL_ENV === \"production\"\n};\nmodule.exports = {\n    CONFIG\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zaXRlLmNvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLE1BQU0sR0FBRztJQUNiLDZCQUE2QjtJQUM3QkMsT0FBTyxFQUFFO1FBQ1BDLElBQUksRUFBRSxTQUFTO1FBQ2ZDLEtBQUssRUFBRSxlQUFlO1FBQ3RCQyxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCQyxHQUFHLEVBQUUsbUJBQW1CO1FBQ3hCQyxLQUFLLEVBQUUscUJBQXFCO1FBQzVCQyxRQUFRLEVBQUUsRUFBRTtRQUNaQyxNQUFNLEVBQUUsVUFBVTtRQUNsQkMsU0FBUyxFQUFFLFlBQVk7S0FDeEI7SUFDREMsUUFBUSxFQUFFO1FBQ1I7WUFDRVIsSUFBSSxFQUFFLFFBQVE7WUFDZFMsSUFBSSxFQUFFLEVBQUU7U0FDVDtLQUNGO0lBQ0QsMEJBQTBCO0lBQzFCQyxJQUFJLEVBQUU7UUFDSkMsS0FBSyxFQUFFLFNBQVM7UUFDaEJDLFdBQVcsRUFBRSxxQkFBcUI7UUFDbENDLEtBQUssRUFBRSxNQUFNO0tBQ2Q7SUFFRCxpQ0FBaUM7SUFDakNDLElBQUksRUFBRSxpQ0FBaUM7SUFDdkNDLEtBQUssRUFBRSxJQUFJO0lBQ1hDLElBQUksRUFBRSxPQUFPO0lBQ2JDLGtCQUFrQixFQUFFLG9DQUFvQztJQUN4REMsR0FBRyxFQUFFO1FBQ0hDLFFBQVEsRUFBRTtZQUFDLE1BQU07WUFBRSxTQUFTO1lBQUUsUUFBUTtTQUFDO0tBQ3hDO0lBRUQsa0NBQWtDO0lBQ2xDQyxZQUFZLEVBQUU7UUFDWkMsTUFBTSxFQUFFQyxrQ0FBc0M7S0FDL0M7SUFFRCxrQ0FBa0M7SUFDbENHLGVBQWUsRUFBRTtRQUNmQyxNQUFNLEVBQUUsS0FBSztRQUNiQyxNQUFNLEVBQUU7WUFDTkMsYUFBYSxFQUFFTixPQUFPLENBQUNDLEdBQUcsQ0FBQ00saUNBQWlDLElBQUksRUFBRTtTQUNuRTtLQUNGO0lBQ0RDLG1CQUFtQixFQUFFO1FBQ25CSixNQUFNLEVBQUUsS0FBSztRQUNiQyxNQUFNLEVBQUU7WUFDTkksZ0JBQWdCLEVBQUVULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUyxvQ0FBb0MsSUFBSSxFQUFFO1NBQ3pFO0tBQ0Y7SUFDREMsVUFBVSxFQUFFO1FBQ1ZQLE1BQU0sRUFBRSxJQUFJO1FBQ1pDLE1BQU0sRUFBRTtZQUNOTyxJQUFJLEVBQUUsa0JBQWtCO1lBQ3hCLFlBQVksRUFBRSxVQUFVO1lBQ3hCQyxLQUFLLEVBQUUseUJBQWM7U0FDdEI7S0FDRjtJQUNEQyxNQUFNLEVBQUU7UUFDTlYsTUFBTSxFQUFFLEtBQUs7UUFDYkMsTUFBTSxFQUFFO1lBQ05VLElBQUksRUFBRSxvQkFBb0I7WUFDMUJDLEtBQUssRUFBRSxFQUFFO1NBQ1Y7S0FDRjtJQUNEQyxNQUFNLEVBQUVqQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2lCLFVBQVUsS0FBSyxZQUFZO0NBQ2hEO0FBRURDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0lBQUU1QyxNQUFNO0NBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3JldGhhbi1sb2cvLi9zaXRlLmNvbmZpZy5qcz9mZDk4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENPTkZJRyA9IHtcbiAgLy8gcHJvZmlsZSBzZXR0aW5nIChyZXF1aXJlZClcbiAgcHJvZmlsZToge1xuICAgIG5hbWU6IFwibGVldHJ1ZVwiLFxuICAgIGltYWdlOiBcIi9sZWV0cnVlLmpwZWdcIiwgLy8gSWYgeW91IHdhbnQgdG8gY3JlYXRlIHlvdXIgb3duIG5vdGlvbiBhdmF0YXIsIGNoZWNrIG91dCBodHRwczovL25vdGlvbi1hdmF0YXIudmVyY2VsLmFwcFxuICAgIHJvbGU6IFwiZnJvbnRlbmQgZGV2ZWxvcGVyXCIsXG4gICAgYmlvOiBcIkkgbG92ZSBjbGVhbiBjb2RlXCIsXG4gICAgZW1haWw6IFwicG9vcmRvYmJ5QG5hdmVyLmNvbVwiLFxuICAgIGxpbmtlZGluOiBcIlwiLFxuICAgIGdpdGh1YjogXCJrb3Jkb2JieVwiLFxuICAgIGluc3RhZ3JhbTogXCJ5dW5pc2NlbGxzXCIsXG4gIH0sXG4gIHByb2plY3RzOiBbXG4gICAge1xuICAgICAgbmFtZTogXCJTZWNyZXRcIixcbiAgICAgIGhyZWY6IFwiXCIsXG4gICAgfSxcbiAgXSxcbiAgLy8gYmxvZyBzZXR0aW5nIChyZXF1aXJlZClcbiAgYmxvZzoge1xuICAgIHRpdGxlOiBcInRydWVsb2dcIixcbiAgICBkZXNjcmlwdGlvbjogXCJ3ZWxjb21lIHRvIHRydWVsb2chXCIsXG4gICAgdGhlbWU6IFwiYXV0b1wiLCAvLyBbJ2xpZ2h0JywgJ2RhcmsnLCAnYXV0byddXG4gIH0sXG5cbiAgLy8gQ09ORklHIGNvbmZpZ3JhdGlvbiAocmVxdWlyZWQpXG4gIGxpbms6IFwiaHR0cHM6Ly9tb3JldGhhbi1sb2cudmVyY2VsLmFwcFwiLFxuICBzaW5jZTogMjAyMiwgLy8gSWYgbGVhdmUgdGhpcyBlbXB0eSwgY3VycmVudCB5ZWFyIHdpbGwgYmUgdXNlZC5cbiAgbGFuZzogXCJrby1LUlwiLCAvLyBbJ2VuLVVTJywgJ3poLUNOJywgJ3poLUhLJywgJ3poLVRXJywgJ2phLUpQJywgJ2VzLUVTJywgJ2tvLUtSJ11cbiAgb2dJbWFnZUdlbmVyYXRlVVJMOiBcImh0dHBzOi8vb2ctaW1hZ2Uta29yZWFuLnZlcmNlbC5hcHBcIiwgLy8gVGhlIGxpbmsgdG8gZ2VuZXJhdGUgT0cgaW1hZ2UsIGRvbid0IGVuZCB3aXRoIGEgc2xhc2hcbiAgc2VvOiB7XG4gICAga2V5d29yZHM6IFtcIkJsb2dcIiwgXCJXZWJzaXRlXCIsIFwiTm90aW9uXCJdLFxuICB9LFxuXG4gIC8vIG5vdGlvbiBjb25maWd1cmF0aW9uIChyZXF1aXJlZClcbiAgbm90aW9uQ29uZmlnOiB7XG4gICAgcGFnZUlkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19OT1RJT05fUEFHRV9JRCxcbiAgfSxcblxuICAvLyBwbHVnaW4gY29uZmlndXJhdGlvbiAob3B0aW9uYWwpXG4gIGdvb2dsZUFuYWx5dGljczoge1xuICAgIGVuYWJsZTogZmFsc2UsXG4gICAgY29uZmlnOiB7XG4gICAgICBtZWFzdXJlbWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfTUVBU1VSRU1FTlRfSUQgfHwgXCJcIixcbiAgICB9LFxuICB9LFxuICBnb29nbGVTZWFyY2hDb25zb2xlOiB7XG4gICAgZW5hYmxlOiBmYWxzZSxcbiAgICBjb25maWc6IHtcbiAgICAgIHNpdGVWZXJpZmljYXRpb246IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9TSVRFX1ZFUklGSUNBVElPTiB8fCBcIlwiLFxuICAgIH0sXG4gIH0sXG4gIHV0dGVyYW5jZXM6IHtcbiAgICBlbmFibGU6IHRydWUsXG4gICAgY29uZmlnOiB7XG4gICAgICByZXBvOiBcImtvcmRvYmJ5L3RydWVsb2dcIixcbiAgICAgIFwiaXNzdWUtdGVybVwiOiBcIm9nOnRpdGxlXCIsXG4gICAgICBsYWJlbDogXCLwn5KsIFV0dGVyYW5jZXNcIixcbiAgICB9LFxuICB9LFxuICBjdXNkaXM6IHtcbiAgICBlbmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZzoge1xuICAgICAgaG9zdDogXCJodHRwczovL2N1c2Rpcy5jb21cIixcbiAgICAgIGFwcGlkOiBcIlwiLCAvLyBFbWJlZCBDb2RlIC0+IGRhdGEtYXBwLWlkIHZhbHVlXG4gICAgfSxcbiAgfSxcbiAgaXNQcm9kOiBwcm9jZXNzLmVudi5WRVJDRUxfRU5WID09PSBcInByb2R1Y3Rpb25cIiwgLy8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBkZXZlbG9wbWVudCBhbmQgcHJvZHVjdGlvbiBlbnZpcm9ubWVudCAocmVmOiBodHRwczovL3ZlcmNlbC5jb20vZG9jcy9lbnZpcm9ubWVudC12YXJpYWJsZXMjc3lzdGVtLWVudmlyb25tZW50LXZhcmlhYmxlcylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7IENPTkZJRyB9XG4iXSwibmFtZXMiOlsiQ09ORklHIiwicHJvZmlsZSIsIm5hbWUiLCJpbWFnZSIsInJvbGUiLCJiaW8iLCJlbWFpbCIsImxpbmtlZGluIiwiZ2l0aHViIiwiaW5zdGFncmFtIiwicHJvamVjdHMiLCJocmVmIiwiYmxvZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0aGVtZSIsImxpbmsiLCJzaW5jZSIsImxhbmciLCJvZ0ltYWdlR2VuZXJhdGVVUkwiLCJzZW8iLCJrZXl3b3JkcyIsIm5vdGlvbkNvbmZpZyIsInBhZ2VJZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19OT1RJT05fUEFHRV9JRCIsImdvb2dsZUFuYWx5dGljcyIsImVuYWJsZSIsImNvbmZpZyIsIm1lYXN1cmVtZW50SWQiLCJORVhUX1BVQkxJQ19HT09HTEVfTUVBU1VSRU1FTlRfSUQiLCJnb29nbGVTZWFyY2hDb25zb2xlIiwic2l0ZVZlcmlmaWNhdGlvbiIsIk5FWFRfUFVCTElDX0dPT0dMRV9TSVRFX1ZFUklGSUNBVElPTiIsInV0dGVyYW5jZXMiLCJyZXBvIiwibGFiZWwiLCJjdXNkaXMiLCJob3N0IiwiYXBwaWQiLCJpc1Byb2QiLCJWRVJDRUxfRU5WIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./site.config.js\n");

/***/ }),

/***/ "./src/components/Scripts.tsx":
/*!************************************!*\
  !*** ./src/components/Scripts.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"next/script\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! site.config */ \"./site.config.js\");\n/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(site_config__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Scripts = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: site_config__WEBPACK_IMPORTED_MODULE_2__.CONFIG?.googleAnalytics?.enable === true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: `https://www.googletagmanager.com/gtag/js?id=${site_config__WEBPACK_IMPORTED_MODULE_2__.CONFIG.googleAnalytics.config.measurementId}`\n                }, void 0, false, {\n                    fileName: \"/Users/faker/truelog-1/src/components/Scripts.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    strategy: \"lazyOnload\",\n                    id: \"ga\",\n                    children: `window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '${site_config__WEBPACK_IMPORTED_MODULE_2__.CONFIG.googleAnalytics.config.measurementId}', {\n              page_path: window.location.pathname,\n            });`\n                }, void 0, false, {\n                    fileName: \"/Users/faker/truelog-1/src/components/Scripts.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false)\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scripts);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TY3JpcHRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBZ0M7QUFDSTtBQUVwQyxNQUFNRSxPQUFPLEdBQWEsa0JBQ3hCO2tCQUNHRCwrQ0FBTSxFQUFFRSxlQUFlLEVBQUVDLE1BQU0sS0FBSyxJQUFJLGtCQUN2Qzs7OEJBQ0UsOERBQUNKLG9EQUFNO29CQUNMSyxHQUFHLEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRUosb0ZBQTJDLENBQUMsQ0FBQzs7Ozs7NkJBQ2pHOzhCQUNGLDhEQUFDRCxvREFBTTtvQkFBQ1EsUUFBUSxFQUFDLFlBQVk7b0JBQUNDLEVBQUUsRUFBQyxJQUFJOzhCQUNsQyxDQUFDOzs7NEJBR2dCLEVBQUVSLG9GQUEyQyxDQUFDOztlQUUzRCxDQUFDOzs7Ozs2QkFDQzs7d0JBQ1I7cUJBRUo7QUFDSjtBQUVELGlFQUFlQyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9yZXRoYW4tbG9nLy4vc3JjL2NvbXBvbmVudHMvU2NyaXB0cy50c3g/YjZiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiXG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tIFwic2l0ZS5jb25maWdcIlxuXG5jb25zdCBTY3JpcHRzOiBSZWFjdC5GQyA9ICgpID0+IChcbiAgPD5cbiAgICB7Q09ORklHPy5nb29nbGVBbmFseXRpY3M/LmVuYWJsZSA9PT0gdHJ1ZSAmJiAoXG4gICAgICA8PlxuICAgICAgICA8U2NyaXB0XG4gICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD0ke0NPTkZJRy5nb29nbGVBbmFseXRpY3MuY29uZmlnLm1lYXN1cmVtZW50SWR9YH1cbiAgICAgICAgLz5cbiAgICAgICAgPFNjcmlwdCBzdHJhdGVneT1cImxhenlPbmxvYWRcIiBpZD1cImdhXCI+XG4gICAgICAgICAge2B3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG4gICAgICAgICAgICBndGFnKCdjb25maWcnLCAnJHtDT05GSUcuZ29vZ2xlQW5hbHl0aWNzLmNvbmZpZy5tZWFzdXJlbWVudElkfScsIHtcbiAgICAgICAgICAgICAgcGFnZV9wYXRoOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgICAgICB9KTtgfVxuICAgICAgICA8L1NjcmlwdD5cbiAgICAgIDwvPlxuICAgICl9XG4gIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTY3JpcHRzXG4iXSwibmFtZXMiOlsiU2NyaXB0IiwiQ09ORklHIiwiU2NyaXB0cyIsImdvb2dsZUFuYWx5dGljcyIsImVuYWJsZSIsInNyYyIsImNvbmZpZyIsIm1lYXN1cmVtZW50SWQiLCJzdHJhdGVneSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Scripts.tsx\n");

/***/ }),

/***/ "./src/hooks/useGtagEffect.ts":
/*!************************************!*\
  !*** ./src/hooks/useGtagEffect.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _libs_gtag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @libs/gtag */ \"./src/libs/gtag.ts\");\n/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/site.config */ \"./site.config.js\");\n/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_site_config__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst useGtagEffect = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (!(_site_config__WEBPACK_IMPORTED_MODULE_3__.CONFIG.isProd && _site_config__WEBPACK_IMPORTED_MODULE_3__.CONFIG?.googleAnalytics?.enable)) return;\n        const handleRouteChange = (url)=>{\n            _libs_gtag__WEBPACK_IMPORTED_MODULE_2__.pageview(url);\n        };\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return null;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGtagEffect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlR3RhZ0VmZmVjdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNNO0FBQ0w7QUFDSTtBQUV0QyxNQUFNSSxhQUFhLEdBQUcsSUFBTTtJQUMxQixNQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFDMUJELGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUksQ0FBQyxDQUFDRyx1REFBYSxJQUFJQSxnREFBTSxFQUFFSSxlQUFlLEVBQUVDLE1BQU0sQ0FBQyxFQUFFLE9BQU07UUFFL0QsTUFBTUMsaUJBQWlCLEdBQUcsQ0FBQ0MsR0FBUSxHQUFLO1lBQ3RDUixnREFBYSxDQUFDUSxHQUFHLENBQUM7U0FDbkI7UUFDREwsTUFBTSxDQUFDTyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRUosaUJBQWlCLENBQUM7UUFDMUQsT0FBTyxJQUFNO1lBQ1hKLE1BQU0sQ0FBQ08sTUFBTSxDQUFDRSxHQUFHLENBQUMscUJBQXFCLEVBQUVMLGlCQUFpQixDQUFDO1NBQzVEO0tBQ0YsRUFBRTtRQUFDSixNQUFNLENBQUNPLE1BQU07S0FBQyxDQUFDO0lBQ25CLE9BQU8sSUFBSTtDQUNaO0FBQ0QsaUVBQWVSLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3JldGhhbi1sb2cvLi9zcmMvaG9va3MvdXNlR3RhZ0VmZmVjdC50cz84YjE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0ICogYXMgZ3RhZyBmcm9tIFwiQGxpYnMvZ3RhZ1wiXG5pbXBvcnQgeyBDT05GSUcgfSBmcm9tIFwiQC9zaXRlLmNvbmZpZ1wiXG5cbmNvbnN0IHVzZUd0YWdFZmZlY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCEoQ09ORklHLmlzUHJvZCAmJiBDT05GSUc/Lmdvb2dsZUFuYWx5dGljcz8uZW5hYmxlKSkgcmV0dXJuXG5cbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmw6IGFueSkgPT4ge1xuICAgICAgZ3RhZy5wYWdldmlldyh1cmwpXG4gICAgfVxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGhhbmRsZVJvdXRlQ2hhbmdlKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpXG4gICAgfVxuICB9LCBbcm91dGVyLmV2ZW50c10pXG4gIHJldHVybiBudWxsXG59XG5leHBvcnQgZGVmYXVsdCB1c2VHdGFnRWZmZWN0XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiZ3RhZyIsIkNPTkZJRyIsInVzZUd0YWdFZmZlY3QiLCJyb3V0ZXIiLCJpc1Byb2QiLCJnb29nbGVBbmFseXRpY3MiLCJlbmFibGUiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsInBhZ2V2aWV3IiwiZXZlbnRzIiwib24iLCJvZmYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useGtagEffect.ts\n");

/***/ }),

/***/ "./src/hooks/useThemeEffect.ts":
/*!*************************************!*\
  !*** ./src/hooks/useThemeEffect.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getTheme\": () => (/* binding */ getTheme)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! site.config */ \"./site.config.js\");\n/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(site_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst getTheme = ()=>{\n    const themeConfig = site_config__WEBPACK_IMPORTED_MODULE_1__.CONFIG.blog.theme;\n    if (themeConfig !== \"auto\") return themeConfig;\n    if (localStorage.theme === \"dark\" || !(\"theme\" in localStorage) && window.matchMedia(\"(prefers-color-scheme: dark)\").matches) {\n        return \"dark\";\n    } else {\n        return \"light\";\n    }\n};\nconst useThemeEffect = ()=>{\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (typeof document !== \"object\") return;\n        if (getTheme() === \"dark\") {\n            document.documentElement.classList.add(\"dark\");\n        } else {\n            document.documentElement.classList.remove(\"dark\");\n        }\n    }, []);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useThemeEffect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlVGhlbWVFZmZlY3QudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlDO0FBQ0c7QUFHN0IsTUFBTUUsUUFBUSxHQUFvQixJQUFNO0lBQzdDLE1BQU1DLFdBQVcsR0FBR0YsMERBQWlCO0lBQ3JDLElBQUlFLFdBQVcsS0FBSyxNQUFNLEVBQUUsT0FBT0EsV0FBVztJQUM5QyxJQUNFRyxZQUFZLENBQUNELEtBQUssS0FBSyxNQUFNLElBQzVCLENBQUMsQ0FBQyxPQUFPLElBQUlDLFlBQVksQ0FBQyxJQUN6QkMsTUFBTSxDQUFDQyxVQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQ0MsT0FBTyxFQUMzRDtRQUNBLE9BQU8sTUFBTTtLQUNkLE1BQU07UUFDTCxPQUFPLE9BQU87S0FDZjtDQUNGO0FBRUQsTUFBTUMsY0FBYyxHQUFHLElBQU07SUFDM0JWLGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUksT0FBT1csUUFBUSxLQUFLLFFBQVEsRUFBRSxPQUFNO1FBQ3hDLElBQUlULFFBQVEsRUFBRSxLQUFLLE1BQU0sRUFBRTtZQUN6QlMsUUFBUSxDQUFDQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztTQUMvQyxNQUFNO1lBQ0xILFFBQVEsQ0FBQ0MsZUFBZSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDbEQ7S0FDRixFQUFFLEVBQUUsQ0FBQztDQUNQO0FBRUQsaUVBQWVMLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3JldGhhbi1sb2cvLi9zcmMvaG9va3MvdXNlVGhlbWVFZmZlY3QudHM/ZGJkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgQ09ORklHIH0gZnJvbSBcInNpdGUuY29uZmlnXCJcbmltcG9ydCB7IFRoZW1lVHlwZSB9IGZyb20gXCJAY3VzdG9tVHlwZXMvaW5kZXhcIlxuXG5leHBvcnQgY29uc3QgZ2V0VGhlbWU6ICgpID0+IFRoZW1lVHlwZSA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWVDb25maWcgPSBDT05GSUcuYmxvZy50aGVtZSBhcyBcImF1dG9cIiAmIFRoZW1lVHlwZVxuICBpZiAodGhlbWVDb25maWcgIT09IFwiYXV0b1wiKSByZXR1cm4gdGhlbWVDb25maWdcbiAgaWYgKFxuICAgIGxvY2FsU3RvcmFnZS50aGVtZSA9PT0gXCJkYXJrXCIgfHxcbiAgICAoIShcInRoZW1lXCIgaW4gbG9jYWxTdG9yYWdlKSAmJlxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXMpXG4gICkge1xuICAgIHJldHVybiBcImRhcmtcIlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBcImxpZ2h0XCJcbiAgfVxufVxuXG5jb25zdCB1c2VUaGVtZUVmZmVjdCA9ICgpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSByZXR1cm5cbiAgICBpZiAoZ2V0VGhlbWUoKSA9PT0gXCJkYXJrXCIpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIilcbiAgICB9XG4gIH0sIFtdKVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VUaGVtZUVmZmVjdFxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIkNPTkZJRyIsImdldFRoZW1lIiwidGhlbWVDb25maWciLCJibG9nIiwidGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInVzZVRoZW1lRWZmZWN0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useThemeEffect.ts\n");

/***/ }),

/***/ "./src/libs/gtag.ts":
/*!**************************!*\
  !*** ./src/libs/gtag.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GA_TRACKING_ID\": () => (/* binding */ GA_TRACKING_ID),\n/* harmony export */   \"event\": () => (/* binding */ event),\n/* harmony export */   \"pageview\": () => (/* binding */ pageview)\n/* harmony export */ });\n/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! site.config */ \"./site.config.js\");\n/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(site_config__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GA_TRACKING_ID = site_config__WEBPACK_IMPORTED_MODULE_0__.CONFIG.googleAnalytics.config.measurementId;\n// https://developers.google.com/analytics/devguides/collection/gtagjs/pages\nconst pageview = (url)=>{\n    if (true) return;\n    window.gtag(\"config\", GA_TRACKING_ID, {\n        page_path: url\n    });\n};\n// https://developers.google.com/analytics/devguides/collection/gtagjs/events\nconst event = ({ action , category , label , value  })=>{\n    if (true) return;\n    window.gtag(\"event\", action, {\n        event_category: category,\n        event_label: label,\n        value: value\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9ndGFnLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9DO0FBQzdCLE1BQU1DLGNBQWMsR0FBR0Qsb0ZBQTJDO0FBRXpFLDRFQUE0RTtBQUNyRSxNQUFNSyxRQUFRLEdBQUcsQ0FBQ0MsR0FBUSxHQUFLO0lBQ3BDLElBQUksSUFBMEIsRUFBRSxPQUFNO0lBQ3RDQyxNQUFNLENBQUNDLElBQUksQ0FBQyxRQUFRLEVBQUVQLGNBQWMsRUFBRTtRQUNwQ1EsU0FBUyxFQUFFSCxHQUFHO0tBQ2YsQ0FBQztDQUNIO0FBRUQsNkVBQTZFO0FBQ3RFLE1BQU1JLEtBQUssR0FBRyxDQUFDLEVBQ3BCQyxNQUFNLEdBQ05DLFFBQVEsR0FDUkMsS0FBSyxHQUNMQyxLQUFLLEdBTU4sR0FBSztJQUNKLElBQUksSUFBMEIsRUFBRSxPQUFNO0lBQ3RDUCxNQUFNLENBQUNDLElBQUksQ0FBQyxPQUFPLEVBQUVHLE1BQU0sRUFBRTtRQUMzQkksY0FBYyxFQUFFSCxRQUFRO1FBQ3hCSSxXQUFXLEVBQUVILEtBQUs7UUFDbEJDLEtBQUssRUFBRUEsS0FBSztLQUNiLENBQUM7Q0FDSCIsInNvdXJjZXMiOlsid2VicGFjazovL21vcmV0aGFuLWxvZy8uL3NyYy9saWJzL2d0YWcudHM/MTBhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDT05GSUcgfSBmcm9tIFwic2l0ZS5jb25maWdcIlxuZXhwb3J0IGNvbnN0IEdBX1RSQUNLSU5HX0lEID0gQ09ORklHLmdvb2dsZUFuYWx5dGljcy5jb25maWcubWVhc3VyZW1lbnRJZFxuXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ3RhZ2pzL3BhZ2VzXG5leHBvcnQgY29uc3QgcGFnZXZpZXcgPSAodXJsOiBhbnkpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwib2JqZWN0XCIpIHJldHVyblxuICB3aW5kb3cuZ3RhZyhcImNvbmZpZ1wiLCBHQV9UUkFDS0lOR19JRCwge1xuICAgIHBhZ2VfcGF0aDogdXJsLFxuICB9KVxufVxuXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ3RhZ2pzL2V2ZW50c1xuZXhwb3J0IGNvbnN0IGV2ZW50ID0gKHtcbiAgYWN0aW9uLFxuICBjYXRlZ29yeSxcbiAgbGFiZWwsXG4gIHZhbHVlLFxufToge1xuICBhY3Rpb246IGFueVxuICBjYXRlZ29yeTogYW55XG4gIGxhYmVsOiBhbnlcbiAgdmFsdWU6IGFueVxufSkgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJvYmplY3RcIikgcmV0dXJuXG4gIHdpbmRvdy5ndGFnKFwiZXZlbnRcIiwgYWN0aW9uLCB7XG4gICAgZXZlbnRfY2F0ZWdvcnk6IGNhdGVnb3J5LFxuICAgIGV2ZW50X2xhYmVsOiBsYWJlbCxcbiAgICB2YWx1ZTogdmFsdWUsXG4gIH0pXG59XG4iXSwibmFtZXMiOlsiQ09ORklHIiwiR0FfVFJBQ0tJTkdfSUQiLCJnb29nbGVBbmFseXRpY3MiLCJjb25maWciLCJtZWFzdXJlbWVudElkIiwicGFnZXZpZXciLCJ1cmwiLCJ3aW5kb3ciLCJndGFnIiwicGFnZV9wYXRoIiwiZXZlbnQiLCJhY3Rpb24iLCJjYXRlZ29yeSIsImxhYmVsIiwidmFsdWUiLCJldmVudF9jYXRlZ29yeSIsImV2ZW50X2xhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/gtag.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs/themes/prism.css */ \"./node_modules/prismjs/themes/prism.css\");\n/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! katex/dist/katex.min.css */ \"./node_modules/katex/dist/katex.min.css\");\n/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_notion_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styles/notion.css */ \"./src/styles/notion.css\");\n/* harmony import */ var _styles_notion_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_notion_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_useThemeEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hooks/useThemeEffect */ \"./src/hooks/useThemeEffect.ts\");\n/* harmony import */ var _hooks_useGtagEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hooks/useGtagEffect */ \"./src/hooks/useGtagEffect.ts\");\n/* harmony import */ var _components_Scripts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Scripts */ \"./src/components/Scripts.tsx\");\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const getLayout = Component.getLayout || ((page)=>page\n    );\n    (0,_hooks_useThemeEffect__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    (0,_hooks_useGtagEffect__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Scripts__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/faker/truelog-1/src/pages/_app.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/faker/truelog-1/src/pages/_app.tsx\",\n                lineNumber: 29,\n                columnNumber: 18\n            }, this))\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFpQztBQUNLO0FBQ0w7QUFDTDtBQUNEO0FBQ3VCO0FBQ0Y7QUFDUDtBQWF6QyxTQUFTRyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQXNCLEVBQUU7SUFDM0QsTUFBTUMsU0FBUyxHQUFHRixTQUFTLENBQUNFLFNBQVMsSUFBSSxDQUFDLENBQUNDLElBQUksR0FBS0EsSUFBSTtJQUFBLENBQUM7SUFDekRQLGlFQUFjLEVBQUU7SUFDaEJDLGdFQUFhLEVBQUU7SUFFZixxQkFDRTs7MEJBQ0UsOERBQUNDLDJEQUFPOzs7O29CQUFHO1lBQ1ZJLFNBQVMsZUFBQyw4REFBQ0YsU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSSxDQUFDOztvQkFDdkMsQ0FDSjtDQUNGO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3JldGhhbi1sb2cvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJwcmlzbWpzL3RoZW1lcy9wcmlzbS5jc3NcIlxuaW1wb3J0IFwicmVhY3Qtbm90aW9uLXgvc3JjL3N0eWxlcy5jc3NcIlxuaW1wb3J0IFwia2F0ZXgvZGlzdC9rYXRleC5taW4uY3NzXCJcbmltcG9ydCBcIkBzdHlsZXMvZ2xvYmFscy5jc3NcIlxuaW1wb3J0IFwiQHN0eWxlcy9ub3Rpb24uY3NzXCJcbmltcG9ydCB1c2VUaGVtZUVmZmVjdCBmcm9tIFwiQGhvb2tzL3VzZVRoZW1lRWZmZWN0XCJcbmltcG9ydCB1c2VHdGFnRWZmZWN0IGZyb20gXCJAaG9va3MvdXNlR3RhZ0VmZmVjdFwiXG5pbXBvcnQgU2NyaXB0cyBmcm9tIFwiQGNvbXBvbmVudHMvU2NyaXB0c1wiXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCJcbmltcG9ydCB7IFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCJcblxuZXhwb3J0IHR5cGUgTmV4dFBhZ2VXaXRoTGF5b3V0PFBhZ2VQcm9wcyA9IHt9PiA9IE5leHRQYWdlPFBhZ2VQcm9wcz4gJiB7XG4gIGdldExheW91dD86IChwYWdlOiBSZWFjdEVsZW1lbnQpID0+IFJlYWN0Tm9kZVxufVxuXG50eXBlIEFwcFByb3BzV2l0aExheW91dCA9IEFwcFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRQYWdlV2l0aExheW91dFxufVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzV2l0aExheW91dCkge1xuICBjb25zdCBnZXRMYXlvdXQgPSBDb21wb25lbnQuZ2V0TGF5b3V0IHx8ICgocGFnZSkgPT4gcGFnZSlcbiAgdXNlVGhlbWVFZmZlY3QoKVxuICB1c2VHdGFnRWZmZWN0KClcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2NyaXB0cyAvPlxuICAgICAge2dldExheW91dCg8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+KX1cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbInVzZVRoZW1lRWZmZWN0IiwidXNlR3RhZ0VmZmVjdCIsIlNjcmlwdHMiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldExheW91dCIsInBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/katex/dist/katex.min.css":
/*!***********************************************!*\
  !*** ./node_modules/katex/dist/katex.min.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/prismjs/themes/prism.css":
/*!***********************************************!*\
  !*** ./node_modules/prismjs/themes/prism.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/notion.css":
/*!*******************************!*\
  !*** ./src/styles/notion.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "next/script":
/*!******************************!*\
  !*** external "next/script" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/script");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();