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
eval("\nconst CONFIG = {\n    // profile setting (required)\n    profile: {\n        name: \"leetrue\",\n        image: \"/leetrue.jpeg\",\n        role: \"frontend developer\",\n        bio: \"I love clean code\",\n        email: \"poordobby@naver.com\",\n        linkedin: \"\",\n        github: \"kordobby\",\n        instagram: \"yuniscells\"\n    },\n    projects: [\n        {\n            name: \"Secret\",\n            href: \"\"\n        }, \n    ],\n    // blog setting (required)\n    blog: {\n        title: \"truelog\",\n        description: \"welcome to truelog!\",\n        theme: \"auto\"\n    },\n    // CONFIG configration (required)\n    link: \"https://leetrue-log.vercel.app\",\n    since: 2022,\n    lang: \"en-US\",\n    ogImageGenerateURL: \"https://og-image-korean.vercel.app\",\n    seo: {\n        keywords: [\n            \"Blog\",\n            \"Website\",\n            \"Notion\"\n        ]\n    },\n    // notion configuration (required)\n    notionConfig: {\n        pageId: process.env.NOTION_PAGE_ID\n    },\n    // plugin configuration (optional)\n    googleAnalytics: {\n        enable: false,\n        config: {\n            measurementId: process.env.GOOGLE_MEASUREMENT_ID || \"\"\n        }\n    },\n    googleSearchConsole: {\n        enable: false,\n        config: {\n            siteVerification: process.env.GOOGLE_SITE_VERIFICATION || \"\"\n        }\n    },\n    utterances: {\n        enable: true,\n        config: {\n            repo: \"kordobby/truelog\",\n            \"issue-term\": \"og:title\",\n            label: \"\\uD83D\\uDCAC Utterances\"\n        }\n    },\n    isProd: process.env.VERCEL_ENV === \"production\"\n};\nmodule.exports = CONFIG;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zaXRlLmNvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLE1BQU0sR0FBRztJQUNiLDZCQUE2QjtJQUM3QkMsT0FBTyxFQUFFO1FBQ1BDLElBQUksRUFBRSxTQUFTO1FBQ2ZDLEtBQUssRUFBRSxlQUFlO1FBQ3RCQyxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCQyxHQUFHLEVBQUUsbUJBQW1CO1FBQ3hCQyxLQUFLLEVBQUUscUJBQXFCO1FBQzVCQyxRQUFRLEVBQUUsRUFBRTtRQUNaQyxNQUFNLEVBQUUsVUFBVTtRQUNsQkMsU0FBUyxFQUFFLFlBQVk7S0FDeEI7SUFDREMsUUFBUSxFQUFFO1FBQ1I7WUFDRVIsSUFBSSxFQUFFLFFBQVE7WUFDZFMsSUFBSSxFQUFFLEVBQUU7U0FDVDtLQUNGO0lBQ0QsMEJBQTBCO0lBQzFCQyxJQUFJLEVBQUU7UUFDSkMsS0FBSyxFQUFFLFNBQVM7UUFDaEJDLFdBQVcsRUFBRSxxQkFBcUI7UUFDbENDLEtBQUssRUFBRSxNQUFNO0tBQ2Q7SUFFRCxpQ0FBaUM7SUFDakNDLElBQUksRUFBRSxnQ0FBZ0M7SUFDdENDLEtBQUssRUFBRSxJQUFJO0lBQ1hDLElBQUksRUFBRSxPQUFPO0lBQ2JDLGtCQUFrQixFQUFFLG9DQUFvQztJQUN4REMsR0FBRyxFQUFFO1FBQ0hDLFFBQVEsRUFBRTtZQUFDLE1BQU07WUFBRSxTQUFTO1lBQUUsUUFBUTtTQUFDO0tBQ3hDO0lBRUQsa0NBQWtDO0lBQ2xDQyxZQUFZLEVBQUU7UUFDWkMsTUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsY0FBYztLQUNuQztJQUVELGtDQUFrQztJQUNsQ0MsZUFBZSxFQUFFO1FBQ2ZDLE1BQU0sRUFBRSxLQUFLO1FBQ2JDLE1BQU0sRUFBRTtZQUNOQyxhQUFhLEVBQUVOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxxQkFBcUIsSUFBSSxFQUFFO1NBQ3ZEO0tBQ0Y7SUFDREMsbUJBQW1CLEVBQUU7UUFDbkJKLE1BQU0sRUFBRSxLQUFLO1FBQ2JDLE1BQU0sRUFBRTtZQUNOSSxnQkFBZ0IsRUFBRVQsT0FBTyxDQUFDQyxHQUFHLENBQUNTLHdCQUF3QixJQUFJLEVBQUU7U0FDN0Q7S0FDRjtJQUNEQyxVQUFVLEVBQUU7UUFDVlAsTUFBTSxFQUFFLElBQUk7UUFDWkMsTUFBTSxFQUFFO1lBQ05PLElBQUksRUFBRSxrQkFBa0I7WUFDeEIsWUFBWSxFQUFFLFVBQVU7WUFDeEJDLEtBQUssRUFBRSx5QkFBYztTQUN0QjtLQUNGO0lBQ0RDLE1BQU0sRUFBRWQsT0FBTyxDQUFDQyxHQUFHLENBQUNjLFVBQVUsS0FBSyxZQUFZO0NBQ2hEO0FBQ0RDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHekMsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL21vcmV0aGFuLWxvZy8uL3NpdGUuY29uZmlnLmpzP2ZkOTgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ09ORklHID0ge1xuICAvLyBwcm9maWxlIHNldHRpbmcgKHJlcXVpcmVkKVxuICBwcm9maWxlOiB7XG4gICAgbmFtZTogXCJsZWV0cnVlXCIsXG4gICAgaW1hZ2U6IFwiL2xlZXRydWUuanBlZ1wiLCAvLyBJZiB5b3Ugd2FudCB0byBjcmVhdGUgeW91ciBvd24gbm90aW9uIGF2YXRhciwgY2hlY2sgb3V0IGh0dHBzOi8vbm90aW9uLWF2YXRhci52ZXJjZWwuYXBwXG4gICAgcm9sZTogXCJmcm9udGVuZCBkZXZlbG9wZXJcIixcbiAgICBiaW86IFwiSSBsb3ZlIGNsZWFuIGNvZGVcIixcbiAgICBlbWFpbDogXCJwb29yZG9iYnlAbmF2ZXIuY29tXCIsXG4gICAgbGlua2VkaW46IFwiXCIsXG4gICAgZ2l0aHViOiBcImtvcmRvYmJ5XCIsXG4gICAgaW5zdGFncmFtOiBcInl1bmlzY2VsbHNcIixcbiAgfSxcbiAgcHJvamVjdHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIlNlY3JldFwiLFxuICAgICAgaHJlZjogXCJcIixcbiAgICB9LFxuICBdLFxuICAvLyBibG9nIHNldHRpbmcgKHJlcXVpcmVkKVxuICBibG9nOiB7XG4gICAgdGl0bGU6IFwidHJ1ZWxvZ1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIndlbGNvbWUgdG8gdHJ1ZWxvZyFcIixcbiAgICB0aGVtZTogXCJhdXRvXCIsIC8vIFsnbGlnaHQnLCAnZGFyaycsICdhdXRvJ11cbiAgfSxcblxuICAvLyBDT05GSUcgY29uZmlncmF0aW9uIChyZXF1aXJlZClcbiAgbGluazogXCJodHRwczovL2xlZXRydWUtbG9nLnZlcmNlbC5hcHBcIixcbiAgc2luY2U6IDIwMjIsIC8vIElmIGxlYXZlIHRoaXMgZW1wdHksIGN1cnJlbnQgeWVhciB3aWxsIGJlIHVzZWQuXG4gIGxhbmc6IFwiZW4tVVNcIiwgLy8gWydlbi1VUycsICd6aC1DTicsICd6aC1ISycsICd6aC1UVycsICdqYS1KUCcsICdlcy1FUycsICdrby1LUiddXG4gIG9nSW1hZ2VHZW5lcmF0ZVVSTDogXCJodHRwczovL29nLWltYWdlLWtvcmVhbi52ZXJjZWwuYXBwXCIsIC8vIFRoZSBsaW5rIHRvIGdlbmVyYXRlIE9HIGltYWdlLCBkb24ndCBlbmQgd2l0aCBhIHNsYXNoXG4gIHNlbzoge1xuICAgIGtleXdvcmRzOiBbXCJCbG9nXCIsIFwiV2Vic2l0ZVwiLCBcIk5vdGlvblwiXSxcbiAgfSxcblxuICAvLyBub3Rpb24gY29uZmlndXJhdGlvbiAocmVxdWlyZWQpXG4gIG5vdGlvbkNvbmZpZzoge1xuICAgIHBhZ2VJZDogcHJvY2Vzcy5lbnYuTk9USU9OX1BBR0VfSUQsXG4gIH0sXG5cbiAgLy8gcGx1Z2luIGNvbmZpZ3VyYXRpb24gKG9wdGlvbmFsKVxuICBnb29nbGVBbmFseXRpY3M6IHtcbiAgICBlbmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZzoge1xuICAgICAgbWVhc3VyZW1lbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX01FQVNVUkVNRU5UX0lEIHx8IFwiXCIsXG4gICAgfSxcbiAgfSxcbiAgZ29vZ2xlU2VhcmNoQ29uc29sZToge1xuICAgIGVuYWJsZTogZmFsc2UsXG4gICAgY29uZmlnOiB7XG4gICAgICBzaXRlVmVyaWZpY2F0aW9uOiBwcm9jZXNzLmVudi5HT09HTEVfU0lURV9WRVJJRklDQVRJT04gfHwgXCJcIixcbiAgICB9LFxuICB9LFxuICB1dHRlcmFuY2VzOiB7XG4gICAgZW5hYmxlOiB0cnVlLFxuICAgIGNvbmZpZzoge1xuICAgICAgcmVwbzogXCJrb3Jkb2JieS90cnVlbG9nXCIsXG4gICAgICBcImlzc3VlLXRlcm1cIjogXCJvZzp0aXRsZVwiLFxuICAgICAgbGFiZWw6IFwi8J+SrCBVdHRlcmFuY2VzXCIsXG4gICAgfSxcbiAgfSxcbiAgaXNQcm9kOiBwcm9jZXNzLmVudi5WRVJDRUxfRU5WID09PSBcInByb2R1Y3Rpb25cIiwgLy8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBkZXZlbG9wbWVudCBhbmQgcHJvZHVjdGlvbiBlbnZpcm9ubWVudCAocmVmOiBodHRwczovL3ZlcmNlbC5jb20vZG9jcy9lbnZpcm9ubWVudC12YXJpYWJsZXMjc3lzdGVtLWVudmlyb25tZW50LXZhcmlhYmxlcylcbn1cbm1vZHVsZS5leHBvcnRzID0gQ09ORklHXG4iXSwibmFtZXMiOlsiQ09ORklHIiwicHJvZmlsZSIsIm5hbWUiLCJpbWFnZSIsInJvbGUiLCJiaW8iLCJlbWFpbCIsImxpbmtlZGluIiwiZ2l0aHViIiwiaW5zdGFncmFtIiwicHJvamVjdHMiLCJocmVmIiwiYmxvZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0aGVtZSIsImxpbmsiLCJzaW5jZSIsImxhbmciLCJvZ0ltYWdlR2VuZXJhdGVVUkwiLCJzZW8iLCJrZXl3b3JkcyIsIm5vdGlvbkNvbmZpZyIsInBhZ2VJZCIsInByb2Nlc3MiLCJlbnYiLCJOT1RJT05fUEFHRV9JRCIsImdvb2dsZUFuYWx5dGljcyIsImVuYWJsZSIsImNvbmZpZyIsIm1lYXN1cmVtZW50SWQiLCJHT09HTEVfTUVBU1VSRU1FTlRfSUQiLCJnb29nbGVTZWFyY2hDb25zb2xlIiwic2l0ZVZlcmlmaWNhdGlvbiIsIkdPT0dMRV9TSVRFX1ZFUklGSUNBVElPTiIsInV0dGVyYW5jZXMiLCJyZXBvIiwibGFiZWwiLCJpc1Byb2QiLCJWRVJDRUxfRU5WIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./site.config.js\n");

/***/ }),

/***/ "./src/components/Scripts.tsx":
/*!************************************!*\
  !*** ./src/components/Scripts.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"next/script\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! site.config */ \"./site.config.js\");\n/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(site_config__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Scripts = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: (site_config__WEBPACK_IMPORTED_MODULE_2___default())?.googleAnalytics?.enable === true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: `https://www.googletagmanager.com/gtag/js?id=${(site_config__WEBPACK_IMPORTED_MODULE_2___default().googleAnalytics.config.measurementId)}`\n                }, void 0, false, {\n                    fileName: \"/Users/faker/truelog-1/src/components/Scripts.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    strategy: \"lazyOnload\",\n                    id: \"ga\",\n                    children: `window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '${(site_config__WEBPACK_IMPORTED_MODULE_2___default().googleAnalytics.config.measurementId)}', {\n              page_path: window.location.pathname,\n            });`\n                }, void 0, false, {\n                    fileName: \"/Users/faker/truelog-1/src/components/Scripts.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false)\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scripts);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TY3JpcHRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBZ0M7QUFDQTtBQUVoQyxNQUFNRSxPQUFPLEdBQWEsa0JBQ3hCO2tCQUNHRCxvREFBTSxFQUFFRSxlQUFlLEVBQUVDLE1BQU0sS0FBSyxJQUFJLGtCQUN2Qzs7OEJBQ0UsOERBQUNKLG9EQUFNO29CQUNMSyxHQUFHLEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRUoseUZBQTJDLENBQUMsQ0FBQzs7Ozs7NkJBQ2pHOzhCQUNGLDhEQUFDRCxvREFBTTtvQkFBQ1EsUUFBUSxFQUFDLFlBQVk7b0JBQUNDLEVBQUUsRUFBQyxJQUFJOzhCQUNsQyxDQUFDOzs7NEJBR2dCLEVBQUVSLHlGQUEyQyxDQUFDOztlQUUzRCxDQUFDOzs7Ozs2QkFDQzs7d0JBQ1I7cUJBRUo7QUFDSjtBQUVELGlFQUFlQyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9yZXRoYW4tbG9nLy4vc3JjL2NvbXBvbmVudHMvU2NyaXB0cy50c3g/YjZiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiXG5pbXBvcnQgQ09ORklHIGZyb20gXCJzaXRlLmNvbmZpZ1wiXG5cbmNvbnN0IFNjcmlwdHM6IFJlYWN0LkZDID0gKCkgPT4gKFxuICA8PlxuICAgIHtDT05GSUc/Lmdvb2dsZUFuYWx5dGljcz8uZW5hYmxlID09PSB0cnVlICYmIChcbiAgICAgIDw+XG4gICAgICAgIDxTY3JpcHRcbiAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPSR7Q09ORklHLmdvb2dsZUFuYWx5dGljcy5jb25maWcubWVhc3VyZW1lbnRJZH1gfVxuICAgICAgICAvPlxuICAgICAgICA8U2NyaXB0IHN0cmF0ZWd5PVwibGF6eU9ubG9hZFwiIGlkPVwiZ2FcIj5cbiAgICAgICAgICB7YHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgICAgICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxuICAgICAgICAgICAgZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgIGd0YWcoJ2NvbmZpZycsICcke0NPTkZJRy5nb29nbGVBbmFseXRpY3MuY29uZmlnLm1lYXN1cmVtZW50SWR9Jywge1xuICAgICAgICAgICAgICBwYWdlX3BhdGg6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSxcbiAgICAgICAgICAgIH0pO2B9XG4gICAgICAgIDwvU2NyaXB0PlxuICAgICAgPC8+XG4gICAgKX1cbiAgPC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IFNjcmlwdHNcbiJdLCJuYW1lcyI6WyJTY3JpcHQiLCJDT05GSUciLCJTY3JpcHRzIiwiZ29vZ2xlQW5hbHl0aWNzIiwiZW5hYmxlIiwic3JjIiwiY29uZmlnIiwibWVhc3VyZW1lbnRJZCIsInN0cmF0ZWd5IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Scripts.tsx\n");

/***/ }),

/***/ "./src/hooks/useGtagEffect.ts":
/*!************************************!*\
  !*** ./src/hooks/useGtagEffect.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_libs_plugin_gtag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/libs/plugin/gtag */ \"./src/libs/plugin/gtag.ts\");\n/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/site.config */ \"./site.config.js\");\n/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_site_config__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst useGtagEffect = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (!((_site_config__WEBPACK_IMPORTED_MODULE_3___default().isProd) && (_site_config__WEBPACK_IMPORTED_MODULE_3___default())?.googleAnalytics?.enable)) return;\n        const handleRouteChange = (url)=>{\n            _src_libs_plugin_gtag__WEBPACK_IMPORTED_MODULE_2__.pageview(url);\n        };\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return null;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGtagEffect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlR3RhZ0VmZmVjdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNNO0FBQ087QUFDWjtBQUVsQyxNQUFNSSxhQUFhLEdBQUcsSUFBTTtJQUMxQixNQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFDMUJELGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUksQ0FBQyxDQUFDRyw0REFBYSxJQUFJQSxxREFBTSxFQUFFSSxlQUFlLEVBQUVDLE1BQU0sQ0FBQyxFQUFFLE9BQU07UUFFL0QsTUFBTUMsaUJBQWlCLEdBQUcsQ0FBQ0MsR0FBUSxHQUFLO1lBQ3RDUiwyREFBYSxDQUFDUSxHQUFHLENBQUM7U0FDbkI7UUFDREwsTUFBTSxDQUFDTyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRUosaUJBQWlCLENBQUM7UUFDMUQsT0FBTyxJQUFNO1lBQ1hKLE1BQU0sQ0FBQ08sTUFBTSxDQUFDRSxHQUFHLENBQUMscUJBQXFCLEVBQUVMLGlCQUFpQixDQUFDO1NBQzVEO0tBQ0YsRUFBRTtRQUFDSixNQUFNLENBQUNPLE1BQU07S0FBQyxDQUFDO0lBQ25CLE9BQU8sSUFBSTtDQUNaO0FBQ0QsaUVBQWVSLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3JldGhhbi1sb2cvLi9zcmMvaG9va3MvdXNlR3RhZ0VmZmVjdC50cz84YjE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0ICogYXMgZ3RhZyBmcm9tIFwiQC9zcmMvbGlicy9wbHVnaW4vZ3RhZ1wiXG5pbXBvcnQgQ09ORklHIGZyb20gXCJAL3NpdGUuY29uZmlnXCJcblxuY29uc3QgdXNlR3RhZ0VmZmVjdCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIShDT05GSUcuaXNQcm9kICYmIENPTkZJRz8uZ29vZ2xlQW5hbHl0aWNzPy5lbmFibGUpKSByZXR1cm5cblxuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybDogYW55KSA9PiB7XG4gICAgICBndGFnLnBhZ2V2aWV3KHVybClcbiAgICB9XG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgaGFuZGxlUm91dGVDaGFuZ2UpXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSlcbiAgICB9XG4gIH0sIFtyb3V0ZXIuZXZlbnRzXSlcbiAgcmV0dXJuIG51bGxcbn1cbmV4cG9ydCBkZWZhdWx0IHVzZUd0YWdFZmZlY3RcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJndGFnIiwiQ09ORklHIiwidXNlR3RhZ0VmZmVjdCIsInJvdXRlciIsImlzUHJvZCIsImdvb2dsZUFuYWx5dGljcyIsImVuYWJsZSIsImhhbmRsZVJvdXRlQ2hhbmdlIiwidXJsIiwicGFnZXZpZXciLCJldmVudHMiLCJvbiIsIm9mZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useGtagEffect.ts\n");

/***/ }),

/***/ "./src/hooks/useThemeEffect.ts":
/*!*************************************!*\
  !*** ./src/hooks/useThemeEffect.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getTheme\": () => (/* binding */ getTheme)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! site.config */ \"./site.config.js\");\n/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(site_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst getTheme = ()=>{\n    const themeConfig = (site_config__WEBPACK_IMPORTED_MODULE_1___default().blog.theme);\n    if (themeConfig !== \"auto\") return themeConfig;\n    if (localStorage.theme === \"dark\" || !(\"theme\" in localStorage) && window.matchMedia(\"(prefers-color-scheme: dark)\").matches) {\n        return \"dark\";\n    } else {\n        return \"light\";\n    }\n};\nconst useThemeEffect = ()=>{\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (typeof document !== \"object\") return;\n        if (getTheme() === \"dark\") {\n            document.documentElement.classList.add(\"dark\");\n        } else {\n            document.documentElement.classList.remove(\"dark\");\n        }\n    }, []);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useThemeEffect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlVGhlbWVFZmZlY3QudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlDO0FBQ0Q7QUFHekIsTUFBTUUsUUFBUSxHQUFvQixJQUFNO0lBQzdDLE1BQU1DLFdBQVcsR0FBR0YsK0RBQWlCO0lBQ3JDLElBQUlFLFdBQVcsS0FBSyxNQUFNLEVBQUUsT0FBT0EsV0FBVztJQUM5QyxJQUNFRyxZQUFZLENBQUNELEtBQUssS0FBSyxNQUFNLElBQzVCLENBQUMsQ0FBQyxPQUFPLElBQUlDLFlBQVksQ0FBQyxJQUN6QkMsTUFBTSxDQUFDQyxVQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQ0MsT0FBTyxFQUMzRDtRQUNBLE9BQU8sTUFBTTtLQUNkLE1BQU07UUFDTCxPQUFPLE9BQU87S0FDZjtDQUNGO0FBRUQsTUFBTUMsY0FBYyxHQUFHLElBQU07SUFDM0JWLGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUksT0FBT1csUUFBUSxLQUFLLFFBQVEsRUFBRSxPQUFNO1FBQ3hDLElBQUlULFFBQVEsRUFBRSxLQUFLLE1BQU0sRUFBRTtZQUN6QlMsUUFBUSxDQUFDQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztTQUMvQyxNQUFNO1lBQ0xILFFBQVEsQ0FBQ0MsZUFBZSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDbEQ7S0FDRixFQUFFLEVBQUUsQ0FBQztDQUNQO0FBRUQsaUVBQWVMLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3JldGhhbi1sb2cvLi9zcmMvaG9va3MvdXNlVGhlbWVFZmZlY3QudHM/ZGJkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IENPTkZJRyBmcm9tIFwic2l0ZS5jb25maWdcIlxuaW1wb3J0IHsgVGhlbWVUeXBlIH0gZnJvbSBcIkBjdXN0ZW9tVHlwZXMvaW5kZXhcIlxuXG5leHBvcnQgY29uc3QgZ2V0VGhlbWU6ICgpID0+IFRoZW1lVHlwZSA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWVDb25maWcgPSBDT05GSUcuYmxvZy50aGVtZSBhcyBcImF1dG9cIiAmIFRoZW1lVHlwZVxuICBpZiAodGhlbWVDb25maWcgIT09IFwiYXV0b1wiKSByZXR1cm4gdGhlbWVDb25maWdcbiAgaWYgKFxuICAgIGxvY2FsU3RvcmFnZS50aGVtZSA9PT0gXCJkYXJrXCIgfHxcbiAgICAoIShcInRoZW1lXCIgaW4gbG9jYWxTdG9yYWdlKSAmJlxuICAgICAgd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXMpXG4gICkge1xuICAgIHJldHVybiBcImRhcmtcIlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBcImxpZ2h0XCJcbiAgfVxufVxuXG5jb25zdCB1c2VUaGVtZUVmZmVjdCA9ICgpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSByZXR1cm5cbiAgICBpZiAoZ2V0VGhlbWUoKSA9PT0gXCJkYXJrXCIpIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIilcbiAgICB9XG4gIH0sIFtdKVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VUaGVtZUVmZmVjdFxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIkNPTkZJRyIsImdldFRoZW1lIiwidGhlbWVDb25maWciLCJibG9nIiwidGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInVzZVRoZW1lRWZmZWN0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useThemeEffect.ts\n");

/***/ }),

/***/ "./src/libs/plugin/gtag.ts":
/*!*********************************!*\
  !*** ./src/libs/plugin/gtag.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GA_TRACKING_ID\": () => (/* binding */ GA_TRACKING_ID),\n/* harmony export */   \"event\": () => (/* binding */ event),\n/* harmony export */   \"pageview\": () => (/* binding */ pageview)\n/* harmony export */ });\n/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! site.config */ \"./site.config.js\");\n/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(site_config__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GA_TRACKING_ID = (site_config__WEBPACK_IMPORTED_MODULE_0___default().googleAnalytics.config.measurementId);\n// https://developers.google.com/analytics/devguides/collection/gtagjs/pages\nconst pageview = (url)=>{\n    if (true) return;\n    window.gtag(\"config\", GA_TRACKING_ID, {\n        page_path: url\n    });\n};\n// https://developers.google.com/analytics/devguides/collection/gtagjs/events\nconst event = ({ action , category , label , value  })=>{\n    if (true) return;\n    window.gtag(\"event\", action, {\n        event_category: category,\n        event_label: label,\n        value: value\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9wbHVnaW4vZ3RhZy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUN6QixNQUFNQyxjQUFjLEdBQUdELHlGQUEyQztBQUV6RSw0RUFBNEU7QUFDckUsTUFBTUssUUFBUSxHQUFHLENBQUNDLEdBQVEsR0FBSztJQUNwQyxJQUFJLElBQTBCLEVBQUUsT0FBTTtJQUN0Q0MsTUFBTSxDQUFDQyxJQUFJLENBQUMsUUFBUSxFQUFFUCxjQUFjLEVBQUU7UUFDcENRLFNBQVMsRUFBRUgsR0FBRztLQUNmLENBQUM7Q0FDSDtBQUVELDZFQUE2RTtBQUN0RSxNQUFNSSxLQUFLLEdBQUcsQ0FBQyxFQUNwQkMsTUFBTSxHQUNOQyxRQUFRLEdBQ1JDLEtBQUssR0FDTEMsS0FBSyxHQU1OLEdBQUs7SUFDSixJQUFJLElBQTBCLEVBQUUsT0FBTTtJQUN0Q1AsTUFBTSxDQUFDQyxJQUFJLENBQUMsT0FBTyxFQUFFRyxNQUFNLEVBQUU7UUFDM0JJLGNBQWMsRUFBRUgsUUFBUTtRQUN4QkksV0FBVyxFQUFFSCxLQUFLO1FBQ2xCQyxLQUFLLEVBQUVBLEtBQUs7S0FDYixDQUFDO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3JldGhhbi1sb2cvLi9zcmMvbGlicy9wbHVnaW4vZ3RhZy50cz8xMTE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDT05GSUcgZnJvbSBcInNpdGUuY29uZmlnXCJcbmV4cG9ydCBjb25zdCBHQV9UUkFDS0lOR19JRCA9IENPTkZJRy5nb29nbGVBbmFseXRpY3MuY29uZmlnLm1lYXN1cmVtZW50SWRcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2d0YWdqcy9wYWdlc1xuZXhwb3J0IGNvbnN0IHBhZ2V2aWV3ID0gKHVybDogYW55KSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcIm9iamVjdFwiKSByZXR1cm5cbiAgd2luZG93Lmd0YWcoXCJjb25maWdcIiwgR0FfVFJBQ0tJTkdfSUQsIHtcbiAgICBwYWdlX3BhdGg6IHVybCxcbiAgfSlcbn1cblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2d0YWdqcy9ldmVudHNcbmV4cG9ydCBjb25zdCBldmVudCA9ICh7XG4gIGFjdGlvbixcbiAgY2F0ZWdvcnksXG4gIGxhYmVsLFxuICB2YWx1ZSxcbn06IHtcbiAgYWN0aW9uOiBhbnlcbiAgY2F0ZWdvcnk6IGFueVxuICBsYWJlbDogYW55XG4gIHZhbHVlOiBhbnlcbn0pID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwib2JqZWN0XCIpIHJldHVyblxuICB3aW5kb3cuZ3RhZyhcImV2ZW50XCIsIGFjdGlvbiwge1xuICAgIGV2ZW50X2NhdGVnb3J5OiBjYXRlZ29yeSxcbiAgICBldmVudF9sYWJlbDogbGFiZWwsXG4gICAgdmFsdWU6IHZhbHVlLFxuICB9KVxufVxuIl0sIm5hbWVzIjpbIkNPTkZJRyIsIkdBX1RSQUNLSU5HX0lEIiwiZ29vZ2xlQW5hbHl0aWNzIiwiY29uZmlnIiwibWVhc3VyZW1lbnRJZCIsInBhZ2V2aWV3IiwidXJsIiwid2luZG93IiwiZ3RhZyIsInBhZ2VfcGF0aCIsImV2ZW50IiwiYWN0aW9uIiwiY2F0ZWdvcnkiLCJsYWJlbCIsInZhbHVlIiwiZXZlbnRfY2F0ZWdvcnkiLCJldmVudF9sYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/plugin/gtag.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs/themes/prism.css */ \"./node_modules/prismjs/themes/prism.css\");\n/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! katex/dist/katex.min.css */ \"./node_modules/katex/dist/katex.min.css\");\n/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_notion_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styles/notion.css */ \"./src/styles/notion.css\");\n/* harmony import */ var _styles_notion_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_notion_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_useThemeEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hooks/useThemeEffect */ \"./src/hooks/useThemeEffect.ts\");\n/* harmony import */ var _hooks_useGtagEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hooks/useGtagEffect */ \"./src/hooks/useGtagEffect.ts\");\n/* harmony import */ var _components_Scripts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Scripts */ \"./src/components/Scripts.tsx\");\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const getLayout = Component.getLayout || ((page)=>page\n    );\n    (0,_hooks_useThemeEffect__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    (0,_hooks_useGtagEffect__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Scripts__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/faker/truelog-1/src/pages/_app.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/faker/truelog-1/src/pages/_app.tsx\",\n                lineNumber: 29,\n                columnNumber: 18\n            }, this))\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFpQztBQUNLO0FBQ0w7QUFDTDtBQUNEO0FBQ3VCO0FBQ0Y7QUFDUDtBQWF6QyxTQUFTRyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQXNCLEVBQUU7SUFDM0QsTUFBTUMsU0FBUyxHQUFHRixTQUFTLENBQUNFLFNBQVMsSUFBSSxDQUFDLENBQUNDLElBQUksR0FBS0EsSUFBSTtJQUFBLENBQUM7SUFDekRQLGlFQUFjLEVBQUU7SUFDaEJDLGdFQUFhLEVBQUU7SUFFZixxQkFDRTs7MEJBQ0UsOERBQUNDLDJEQUFPOzs7O29CQUFHO1lBQ1ZJLFNBQVMsZUFBQyw4REFBQ0YsU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSSxDQUFDOztvQkFDdkMsQ0FDSjtDQUNGO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3JldGhhbi1sb2cvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3ByaXNtanMvdGhlbWVzL3ByaXNtLmNzcydcbmltcG9ydCAncmVhY3Qtbm90aW9uLXgvc3JjL3N0eWxlcy5jc3MnXG5pbXBvcnQgJ2thdGV4L2Rpc3Qva2F0ZXgubWluLmNzcydcbmltcG9ydCAnQHN0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCAnQHN0eWxlcy9ub3Rpb24uY3NzJ1xuaW1wb3J0IHVzZVRoZW1lRWZmZWN0IGZyb20gJ0Bob29rcy91c2VUaGVtZUVmZmVjdCdcbmltcG9ydCB1c2VHdGFnRWZmZWN0IGZyb20gJ0Bob29rcy91c2VHdGFnRWZmZWN0J1xuaW1wb3J0IFNjcmlwdHMgZnJvbSAnQGNvbXBvbmVudHMvU2NyaXB0cydcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuXG5leHBvcnQgdHlwZSBOZXh0UGFnZVdpdGhMYXlvdXQ8UGFnZVByb3BzID0ge30+ID0gTmV4dFBhZ2U8UGFnZVByb3BzPiAmIHtcbiAgZ2V0TGF5b3V0PzogKHBhZ2U6IFJlYWN0RWxlbWVudCkgPT4gUmVhY3ROb2RlXG59XG5cbnR5cGUgQXBwUHJvcHNXaXRoTGF5b3V0ID0gQXBwUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dFBhZ2VXaXRoTGF5b3V0XG59XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHNXaXRoTGF5b3V0KSB7XG4gIGNvbnN0IGdldExheW91dCA9IENvbXBvbmVudC5nZXRMYXlvdXQgfHwgKChwYWdlKSA9PiBwYWdlKVxuICB1c2VUaGVtZUVmZmVjdCgpXG4gIHVzZUd0YWdFZmZlY3QoKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTY3JpcHRzIC8+XG4gICAgICB7Z2V0TGF5b3V0KDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz4pfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsidXNlVGhlbWVFZmZlY3QiLCJ1c2VHdGFnRWZmZWN0IiwiU2NyaXB0cyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2V0TGF5b3V0IiwicGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

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