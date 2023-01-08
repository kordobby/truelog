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

/***/ "./morethan-log.config.js":
/*!********************************!*\
  !*** ./morethan-log.config.js ***!
  \********************************/
/***/ ((module) => {

"use strict";
eval("\nconst CONFIG = {\n    // profile setting (required)\n    profile: {\n        name: \"leetrue\",\n        image: \"/leetrue.jpeg\",\n        role: \"frontend developer\",\n        bio: \"I develop everything using node.\",\n        email: \"poordobby@naver.com\",\n        linkedin: \"\",\n        github: \"kordobby\",\n        instagram: \"yuniscells\"\n    },\n    projects: [\n        {\n            name: \"Untilled\",\n            href: \"https://untilled.web.app\"\n        }\n    ],\n    // blog setting (required)\n    blog: {\n        title: \"truelog\",\n        description: \"welcome to truelog!\",\n        theme: \"light\" // ['light', 'dark', 'auto']\n    },\n    // CONFIG configration (required)\n    link: \"https://morethan-log.vercel.app\",\n    since: 2023,\n    lang: \"en-US\",\n    ogImageGenerateURL: \"https://og-image-korean.vercel.app\",\n    seo: {\n        keywords: [\n            \"Blog\",\n            \"Website\",\n            \"Notion\"\n        ]\n    },\n    // notion configuration (required)\n    notionConfig: {\n        pageId: process.env.NOTION_PAGE_ID\n    },\n    // plugin configuration (optional)\n    googleAnalytics: {\n        enable: false,\n        config: {\n            measurementId: process.env.GOOGLE_MEASUREMENT_ID || \"\"\n        }\n    },\n    googleSearchConsole: {\n        enable: false,\n        config: {\n            siteVerification: process.env.GOOGLE_SITE_VERIFICATION || \"\"\n        }\n    },\n    utterances: {\n        enable: true,\n        config: {\n            repo: \"morethanmin/morethan-log\",\n            \"issue-term\": \"og:title\",\n            label: \"\\uD83D\\uDCAC Utterances\"\n        }\n    },\n    isProd: process.env.VERCEL_ENV === \"production\" // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)\n};\nmodule.exports = CONFIG;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tb3JldGhhbi1sb2cuY29uZmlnLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsTUFBTSxHQUFHO0lBQ2IsNkJBQTZCO0lBQzdCQyxPQUFPLEVBQUU7UUFDUEMsSUFBSSxFQUFFLFNBQVM7UUFDZkMsS0FBSyxFQUFFLGVBQWU7UUFDdEJDLElBQUksRUFBRSxvQkFBb0I7UUFDMUJDLEdBQUcsRUFBRSxrQ0FBa0M7UUFDdkNDLEtBQUssRUFBRSxxQkFBcUI7UUFDNUJDLFFBQVEsRUFBRSxFQUFFO1FBQ1pDLE1BQU0sRUFBRSxVQUFVO1FBQ2xCQyxTQUFTLEVBQUUsWUFBWTtLQUN4QjtJQUNEQyxRQUFRLEVBQUU7UUFDUjtZQUNFUixJQUFJLEVBQUUsVUFBVTtZQUNoQlMsSUFBSSxFQUFFLDBCQUEwQjtTQUNqQztLQUNGO0lBQ0QsMEJBQTBCO0lBQzFCQyxJQUFJLEVBQUU7UUFDSkMsS0FBSyxFQUFFLFNBQVM7UUFDaEJDLFdBQVcsRUFBRSxxQkFBcUI7UUFDbENDLEtBQUssRUFBRSxPQUFPLENBQUMsNEJBQTRCO0tBQzVDO0lBRUQsaUNBQWlDO0lBQ2pDQyxJQUFJLEVBQUUsaUNBQWlDO0lBQ3ZDQyxLQUFLLEVBQUUsSUFBSTtJQUNYQyxJQUFJLEVBQUUsT0FBTztJQUNiQyxrQkFBa0IsRUFBRSxvQ0FBb0M7SUFDeERDLEdBQUcsRUFBRTtRQUNIQyxRQUFRLEVBQUU7WUFBQyxNQUFNO1lBQUUsU0FBUztZQUFFLFFBQVE7U0FBQztLQUN4QztJQUVELGtDQUFrQztJQUNsQ0MsWUFBWSxFQUFFO1FBQ1pDLE1BQU0sRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGNBQWM7S0FDbkM7SUFFRCxrQ0FBa0M7SUFDbENDLGVBQWUsRUFBRTtRQUNmQyxNQUFNLEVBQUUsS0FBSztRQUNiQyxNQUFNLEVBQUU7WUFDTkMsYUFBYSxFQUFFTixPQUFPLENBQUNDLEdBQUcsQ0FBQ00scUJBQXFCLElBQUksRUFBRTtTQUN2RDtLQUNGO0lBQ0RDLG1CQUFtQixFQUFFO1FBQ25CSixNQUFNLEVBQUUsS0FBSztRQUNiQyxNQUFNLEVBQUU7WUFDTkksZ0JBQWdCLEVBQUVULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUyx3QkFBd0IsSUFBSSxFQUFFO1NBQzdEO0tBQ0Y7SUFDREMsVUFBVSxFQUFFO1FBQ1ZQLE1BQU0sRUFBRSxJQUFJO1FBQ1pDLE1BQU0sRUFBRTtZQUNOTyxJQUFJLEVBQUUsMEJBQTBCO1lBQ2hDLFlBQVksRUFBRSxVQUFVO1lBQ3hCQyxLQUFLLEVBQUUseUJBQWM7U0FDdEI7S0FDRjtJQUNEQyxNQUFNLEVBQUVkLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYyxVQUFVLEtBQUssWUFBWSxDQUFDLCtJQUErSTtDQUNoTTtBQUNEQyxNQUFNLENBQUNDLE9BQU8sR0FBR3pDLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3JldGhhbi1sb2cvLi9tb3JldGhhbi1sb2cuY29uZmlnLmpzPzVhMGUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ09ORklHID0ge1xuICAvLyBwcm9maWxlIHNldHRpbmcgKHJlcXVpcmVkKVxuICBwcm9maWxlOiB7XG4gICAgbmFtZTogJ2xlZXRydWUnLFxuICAgIGltYWdlOiAnL2xlZXRydWUuanBlZycsICAvLyBJZiB5b3Ugd2FudCB0byBjcmVhdGUgeW91ciBvd24gbm90aW9uIGF2YXRhciwgY2hlY2sgb3V0IGh0dHBzOi8vbm90aW9uLWF2YXRhci52ZXJjZWwuYXBwXG4gICAgcm9sZTogJ2Zyb250ZW5kIGRldmVsb3BlcicsXG4gICAgYmlvOiAnSSBkZXZlbG9wIGV2ZXJ5dGhpbmcgdXNpbmcgbm9kZS4nLFxuICAgIGVtYWlsOiAncG9vcmRvYmJ5QG5hdmVyLmNvbScsXG4gICAgbGlua2VkaW46ICcnLFxuICAgIGdpdGh1YjogJ2tvcmRvYmJ5JyxcbiAgICBpbnN0YWdyYW06ICd5dW5pc2NlbGxzJyxcbiAgfSxcbiAgcHJvamVjdHM6IFtcbiAgICB7XG4gICAgICBuYW1lOiAnVW50aWxsZWQnLFxuICAgICAgaHJlZjogJ2h0dHBzOi8vdW50aWxsZWQud2ViLmFwcCdcbiAgICB9XG4gIF0sXG4gIC8vIGJsb2cgc2V0dGluZyAocmVxdWlyZWQpXG4gIGJsb2c6IHtcbiAgICB0aXRsZTogJ3RydWVsb2cnLFxuICAgIGRlc2NyaXB0aW9uOiAnd2VsY29tZSB0byB0cnVlbG9nIScsXG4gICAgdGhlbWU6ICdsaWdodCcgLy8gWydsaWdodCcsICdkYXJrJywgJ2F1dG8nXVxuICB9LFxuXG4gIC8vIENPTkZJRyBjb25maWdyYXRpb24gKHJlcXVpcmVkKVxuICBsaW5rOiAnaHR0cHM6Ly9tb3JldGhhbi1sb2cudmVyY2VsLmFwcCcsXG4gIHNpbmNlOiAyMDIzLCAvLyBJZiBsZWF2ZSB0aGlzIGVtcHR5LCBjdXJyZW50IHllYXIgd2lsbCBiZSB1c2VkLlxuICBsYW5nOiAnZW4tVVMnLCAvLyBbJ2VuLVVTJywgJ3poLUNOJywgJ3poLUhLJywgJ3poLVRXJywgJ2phLUpQJywgJ2VzLUVTJywgJ2tvLUtSJ11cbiAgb2dJbWFnZUdlbmVyYXRlVVJMOiAnaHR0cHM6Ly9vZy1pbWFnZS1rb3JlYW4udmVyY2VsLmFwcCcsIC8vIFRoZSBsaW5rIHRvIGdlbmVyYXRlIE9HIGltYWdlLCBkb24ndCBlbmQgd2l0aCBhIHNsYXNoXG4gIHNlbzoge1xuICAgIGtleXdvcmRzOiBbJ0Jsb2cnLCAnV2Vic2l0ZScsICdOb3Rpb24nXSxcbiAgfSxcblxuICAvLyBub3Rpb24gY29uZmlndXJhdGlvbiAocmVxdWlyZWQpXG4gIG5vdGlvbkNvbmZpZzoge1xuICAgIHBhZ2VJZDogcHJvY2Vzcy5lbnYuTk9USU9OX1BBR0VfSUQsXG4gIH0sXG5cbiAgLy8gcGx1Z2luIGNvbmZpZ3VyYXRpb24gKG9wdGlvbmFsKVxuICBnb29nbGVBbmFseXRpY3M6IHtcbiAgICBlbmFibGU6IGZhbHNlLFxuICAgIGNvbmZpZzoge1xuICAgICAgbWVhc3VyZW1lbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX01FQVNVUkVNRU5UX0lEIHx8ICcnXG4gICAgfVxuICB9LFxuICBnb29nbGVTZWFyY2hDb25zb2xlOiB7XG4gICAgZW5hYmxlOiBmYWxzZSxcbiAgICBjb25maWc6IHtcbiAgICAgIHNpdGVWZXJpZmljYXRpb246IHByb2Nlc3MuZW52LkdPT0dMRV9TSVRFX1ZFUklGSUNBVElPTiB8fCAnJ1xuICAgIH1cbiAgfSxcbiAgdXR0ZXJhbmNlczoge1xuICAgIGVuYWJsZTogdHJ1ZSxcbiAgICBjb25maWc6IHtcbiAgICAgIHJlcG86ICdtb3JldGhhbm1pbi9tb3JldGhhbi1sb2cnLFxuICAgICAgJ2lzc3VlLXRlcm0nOiAnb2c6dGl0bGUnLFxuICAgICAgbGFiZWw6ICfwn5KsIFV0dGVyYW5jZXMnLFxuICAgIH1cbiAgfSxcbiAgaXNQcm9kOiBwcm9jZXNzLmVudi5WRVJDRUxfRU5WID09PSAncHJvZHVjdGlvbicgLy8gZGlzdGluZ3Vpc2ggYmV0d2VlbiBkZXZlbG9wbWVudCBhbmQgcHJvZHVjdGlvbiBlbnZpcm9ubWVudCAocmVmOiBodHRwczovL3ZlcmNlbC5jb20vZG9jcy9lbnZpcm9ubWVudC12YXJpYWJsZXMjc3lzdGVtLWVudmlyb25tZW50LXZhcmlhYmxlcylcbn1cbm1vZHVsZS5leHBvcnRzID0gQ09ORklHXG4iXSwibmFtZXMiOlsiQ09ORklHIiwicHJvZmlsZSIsIm5hbWUiLCJpbWFnZSIsInJvbGUiLCJiaW8iLCJlbWFpbCIsImxpbmtlZGluIiwiZ2l0aHViIiwiaW5zdGFncmFtIiwicHJvamVjdHMiLCJocmVmIiwiYmxvZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0aGVtZSIsImxpbmsiLCJzaW5jZSIsImxhbmciLCJvZ0ltYWdlR2VuZXJhdGVVUkwiLCJzZW8iLCJrZXl3b3JkcyIsIm5vdGlvbkNvbmZpZyIsInBhZ2VJZCIsInByb2Nlc3MiLCJlbnYiLCJOT1RJT05fUEFHRV9JRCIsImdvb2dsZUFuYWx5dGljcyIsImVuYWJsZSIsImNvbmZpZyIsIm1lYXN1cmVtZW50SWQiLCJHT09HTEVfTUVBU1VSRU1FTlRfSUQiLCJnb29nbGVTZWFyY2hDb25zb2xlIiwic2l0ZVZlcmlmaWNhdGlvbiIsIkdPT0dMRV9TSVRFX1ZFUklGSUNBVElPTiIsInV0dGVyYW5jZXMiLCJyZXBvIiwibGFiZWwiLCJpc1Byb2QiLCJWRVJDRUxfRU5WIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./morethan-log.config.js\n");

/***/ }),

/***/ "./src/components/Scripts.tsx":
/*!************************************!*\
  !*** ./src/components/Scripts.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/script */ \"next/script\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var morethan_log_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morethan-log.config */ \"./morethan-log.config.js\");\n/* harmony import */ var morethan_log_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(morethan_log_config__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Scripts = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: (morethan_log_config__WEBPACK_IMPORTED_MODULE_2___default())?.googleAnalytics?.enable === true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: `https://www.googletagmanager.com/gtag/js?id=${(morethan_log_config__WEBPACK_IMPORTED_MODULE_2___default().googleAnalytics.config.measurementId)}`\n                }, void 0, false, {\n                    fileName: \"/Users/faker/leetrueblog/truelog/src/components/Scripts.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    strategy: \"lazyOnload\",\n                    id: \"ga\",\n                    children: `window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '${(morethan_log_config__WEBPACK_IMPORTED_MODULE_2___default().googleAnalytics.config.measurementId)}', {\n              page_path: window.location.pathname,\n            });`\n                }, void 0, false, {\n                    fileName: \"/Users/faker/leetrueblog/truelog/src/components/Scripts.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false)\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scripts);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TY3JpcHRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBZ0M7QUFDUTtBQUV4QyxNQUFNRSxPQUFPLEdBQWEsa0JBQ3hCO2tCQUNHRCw0REFBTSxFQUFFRSxlQUFlLEVBQUVDLE1BQU0sS0FBSyxJQUFJLGtCQUN2Qzs7OEJBQ0UsOERBQUNKLG9EQUFNO29CQUNMSyxHQUFHLEVBQUUsQ0FBQyw0Q0FBNEMsRUFBRUosaUdBQTJDLENBQUMsQ0FBQzs7Ozs7NkJBQ2pHOzhCQUNGLDhEQUFDRCxvREFBTTtvQkFBQ1EsUUFBUSxFQUFDLFlBQVk7b0JBQUNDLEVBQUUsRUFBQyxJQUFJOzhCQUNsQyxDQUFDOzs7NEJBR2dCLEVBQUVSLGlHQUEyQyxDQUFDOztlQUUzRCxDQUFDOzs7Ozs2QkFDQzs7d0JBQ1I7cUJBRUo7QUFDSjtBQUVELGlFQUFlQyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9yZXRoYW4tbG9nLy4vc3JjL2NvbXBvbmVudHMvU2NyaXB0cy50c3g/YjZiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2NyaXB0IGZyb20gJ25leHQvc2NyaXB0J1xuaW1wb3J0IENPTkZJRyBmcm9tICdtb3JldGhhbi1sb2cuY29uZmlnJ1xuXG5jb25zdCBTY3JpcHRzOiBSZWFjdC5GQyA9ICgpID0+IChcbiAgPD5cbiAgICB7Q09ORklHPy5nb29nbGVBbmFseXRpY3M/LmVuYWJsZSA9PT0gdHJ1ZSAmJiAoXG4gICAgICA8PlxuICAgICAgICA8U2NyaXB0XG4gICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD0ke0NPTkZJRy5nb29nbGVBbmFseXRpY3MuY29uZmlnLm1lYXN1cmVtZW50SWR9YH1cbiAgICAgICAgLz5cbiAgICAgICAgPFNjcmlwdCBzdHJhdGVneT1cImxhenlPbmxvYWRcIiBpZD1cImdhXCI+XG4gICAgICAgICAge2B3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XG4gICAgICAgICAgICBndGFnKCdjb25maWcnLCAnJHtDT05GSUcuZ29vZ2xlQW5hbHl0aWNzLmNvbmZpZy5tZWFzdXJlbWVudElkfScsIHtcbiAgICAgICAgICAgICAgcGFnZV9wYXRoOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUsXG4gICAgICAgICAgICB9KTtgfVxuICAgICAgICA8L1NjcmlwdD5cbiAgICAgIDwvPlxuICAgICl9XG4gIDwvPlxuKVxuXG5leHBvcnQgZGVmYXVsdCBTY3JpcHRzXG4iXSwibmFtZXMiOlsiU2NyaXB0IiwiQ09ORklHIiwiU2NyaXB0cyIsImdvb2dsZUFuYWx5dGljcyIsImVuYWJsZSIsInNyYyIsImNvbmZpZyIsIm1lYXN1cmVtZW50SWQiLCJzdHJhdGVneSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Scripts.tsx\n");

/***/ }),

/***/ "./src/hooks/useGtagEffect.ts":
/*!************************************!*\
  !*** ./src/hooks/useGtagEffect.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_libs_plugin_gtag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/src/libs/plugin/gtag */ \"./src/libs/plugin/gtag.ts\");\n/* harmony import */ var _morethan_log_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/morethan-log.config */ \"./morethan-log.config.js\");\n/* harmony import */ var _morethan_log_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_morethan_log_config__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst useGtagEffect = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (!((_morethan_log_config__WEBPACK_IMPORTED_MODULE_3___default().isProd) && (_morethan_log_config__WEBPACK_IMPORTED_MODULE_3___default())?.googleAnalytics?.enable)) return;\n        const handleRouteChange = (url)=>{\n            _src_libs_plugin_gtag__WEBPACK_IMPORTED_MODULE_2__.pageview(url);\n        };\n        router.events.on(\"routeChangeComplete\", handleRouteChange);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return null;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useGtagEffect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlR3RhZ0VmZmVjdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNNO0FBQ087QUFDSjtBQUUxQyxNQUFNSSxhQUFhLEdBQUcsSUFBTTtJQUMxQixNQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFDMUJELGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUksQ0FBQyxDQUFDRyxvRUFBYSxJQUFJQSw2REFBTSxFQUFFSSxlQUFlLEVBQUVDLE1BQU0sQ0FBQyxFQUFFLE9BQU07UUFFL0QsTUFBTUMsaUJBQWlCLEdBQUcsQ0FBQ0MsR0FBUSxHQUFLO1lBQ3RDUiwyREFBYSxDQUFDUSxHQUFHLENBQUM7U0FDbkI7UUFDREwsTUFBTSxDQUFDTyxNQUFNLENBQUNDLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRUosaUJBQWlCLENBQUM7UUFDMUQsT0FBTyxJQUFNO1lBQ1hKLE1BQU0sQ0FBQ08sTUFBTSxDQUFDRSxHQUFHLENBQUMscUJBQXFCLEVBQUVMLGlCQUFpQixDQUFDO1NBQzVEO0tBQ0YsRUFBRTtRQUFDSixNQUFNLENBQUNPLE1BQU07S0FBQyxDQUFDO0lBQ25CLE9BQU8sSUFBSTtDQUNaO0FBQ0QsaUVBQWVSLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3JldGhhbi1sb2cvLi9zcmMvaG9va3MvdXNlR3RhZ0VmZmVjdC50cz84YjE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgKiBhcyBndGFnIGZyb20gJ0Avc3JjL2xpYnMvcGx1Z2luL2d0YWcnXG5pbXBvcnQgQ09ORklHIGZyb20gJ0AvbW9yZXRoYW4tbG9nLmNvbmZpZydcblxuY29uc3QgdXNlR3RhZ0VmZmVjdCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIShDT05GSUcuaXNQcm9kICYmIENPTkZJRz8uZ29vZ2xlQW5hbHl0aWNzPy5lbmFibGUpKSByZXR1cm5cblxuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybDogYW55KSA9PiB7XG4gICAgICBndGFnLnBhZ2V2aWV3KHVybClcbiAgICB9XG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKVxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKVxuICAgIH1cbiAgfSwgW3JvdXRlci5ldmVudHNdKVxuICByZXR1cm4gbnVsbFxufVxuZXhwb3J0IGRlZmF1bHQgdXNlR3RhZ0VmZmVjdFxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJvdXRlciIsImd0YWciLCJDT05GSUciLCJ1c2VHdGFnRWZmZWN0Iiwicm91dGVyIiwiaXNQcm9kIiwiZ29vZ2xlQW5hbHl0aWNzIiwiZW5hYmxlIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJwYWdldmlldyIsImV2ZW50cyIsIm9uIiwib2ZmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useGtagEffect.ts\n");

/***/ }),

/***/ "./src/hooks/useThemeEffect.ts":
/*!*************************************!*\
  !*** ./src/hooks/useThemeEffect.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getTheme\": () => (/* binding */ getTheme)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var morethan_log_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! morethan-log.config */ \"./morethan-log.config.js\");\n/* harmony import */ var morethan_log_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(morethan_log_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst getTheme = ()=>{\n    const themeConfig = (morethan_log_config__WEBPACK_IMPORTED_MODULE_1___default().blog.theme);\n    if (themeConfig !== \"auto\") return themeConfig;\n    if (localStorage.theme === \"dark\" || !(\"theme\" in localStorage) && window.matchMedia(\"(prefers-color-scheme: dark)\").matches) {\n        return \"dark\";\n    } else {\n        return \"light\";\n    }\n};\nconst useThemeEffect = ()=>{\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        if (typeof document !== \"object\") return;\n        if (getTheme() === \"dark\") {\n            document.documentElement.classList.add(\"dark\");\n        } else {\n            document.documentElement.classList.remove(\"dark\");\n        }\n    }, []);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useThemeEffect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlVGhlbWVFZmZlY3QudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlDO0FBQ087QUFJakMsTUFBTUUsUUFBUSxHQUFvQixJQUFNO0lBQzdDLE1BQU1DLFdBQVcsR0FBR0YsdUVBQWlCO0lBQ3JDLElBQUlFLFdBQVcsS0FBSyxNQUFNLEVBQUUsT0FBT0EsV0FBVztJQUM5QyxJQUNFRyxZQUFZLENBQUNELEtBQUssS0FBSyxNQUFNLElBQzVCLENBQUMsQ0FBQyxPQUFPLElBQUlDLFlBQVksQ0FBQyxJQUN6QkMsTUFBTSxDQUFDQyxVQUFVLENBQUMsOEJBQThCLENBQUMsQ0FBQ0MsT0FBTyxFQUMzRDtRQUNBLE9BQU8sTUFBTTtLQUNkLE1BQU07UUFDTCxPQUFPLE9BQU87S0FDZjtDQUNGO0FBRUQsTUFBTUMsY0FBYyxHQUFHLElBQU07SUFDM0JWLGdEQUFTLENBQUMsSUFBTTtRQUNkLElBQUksT0FBT1csUUFBUSxLQUFLLFFBQVEsRUFBRSxPQUFNO1FBQ3hDLElBQUlULFFBQVEsRUFBRSxLQUFLLE1BQU0sRUFBRTtZQUN6QlMsUUFBUSxDQUFDQyxlQUFlLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztTQUMvQyxNQUFNO1lBQ0xILFFBQVEsQ0FBQ0MsZUFBZSxDQUFDQyxTQUFTLENBQUNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDbEQ7S0FDRixFQUFFLEVBQUUsQ0FBQztDQUNQO0FBRUQsaUVBQWVMLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3JldGhhbi1sb2cvLi9zcmMvaG9va3MvdXNlVGhlbWVFZmZlY3QudHM/ZGJkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBDT05GSUcgZnJvbSAnbW9yZXRoYW4tbG9nLmNvbmZpZydcbmltcG9ydCB7IFRoZW1lVHlwZSB9IGZyb20gJ0BjdXN0ZW9tVHlwZXMvaW5kZXgnXG5cblxuZXhwb3J0IGNvbnN0IGdldFRoZW1lOiAoKSA9PiBUaGVtZVR5cGUgPSAoKSA9PiB7XG4gIGNvbnN0IHRoZW1lQ29uZmlnID0gQ09ORklHLmJsb2cudGhlbWUgYXMgJ2F1dG8nICYgVGhlbWVUeXBlXG4gIGlmICh0aGVtZUNvbmZpZyAhPT0gJ2F1dG8nKSByZXR1cm4gdGhlbWVDb25maWdcbiAgaWYgKFxuICAgIGxvY2FsU3RvcmFnZS50aGVtZSA9PT0gJ2RhcmsnIHx8XG4gICAgKCEoJ3RoZW1lJyBpbiBsb2NhbFN0b3JhZ2UpICYmXG4gICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXMpXG4gICkge1xuICAgIHJldHVybiAnZGFyaydcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJ2xpZ2h0J1xuICB9XG59XG5cbmNvbnN0IHVzZVRoZW1lRWZmZWN0ID0gKCkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICdvYmplY3QnKSByZXR1cm5cbiAgICBpZiAoZ2V0VGhlbWUoKSA9PT0gJ2RhcmsnKSB7XG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFyaycpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJylcbiAgICB9XG4gIH0sIFtdKVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VUaGVtZUVmZmVjdFxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIkNPTkZJRyIsImdldFRoZW1lIiwidGhlbWVDb25maWciLCJibG9nIiwidGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsInVzZVRoZW1lRWZmZWN0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useThemeEffect.ts\n");

/***/ }),

/***/ "./src/libs/plugin/gtag.ts":
/*!*********************************!*\
  !*** ./src/libs/plugin/gtag.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GA_TRACKING_ID\": () => (/* binding */ GA_TRACKING_ID),\n/* harmony export */   \"event\": () => (/* binding */ event),\n/* harmony export */   \"pageview\": () => (/* binding */ pageview)\n/* harmony export */ });\n/* harmony import */ var morethan_log_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! morethan-log.config */ \"./morethan-log.config.js\");\n/* harmony import */ var morethan_log_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(morethan_log_config__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GA_TRACKING_ID = (morethan_log_config__WEBPACK_IMPORTED_MODULE_0___default().googleAnalytics.config.measurementId);\n// https://developers.google.com/analytics/devguides/collection/gtagjs/pages\nconst pageview = (url)=>{\n    if (true) return;\n    window.gtag(\"config\", GA_TRACKING_ID, {\n        page_path: url\n    });\n};\n// https://developers.google.com/analytics/devguides/collection/gtagjs/events\nconst event = ({ action , category , label , value  })=>{\n    if (true) return;\n    window.gtag(\"event\", action, {\n        event_category: category,\n        event_label: label,\n        value: value\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9wbHVnaW4vZ3RhZy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNqQyxNQUFNQyxjQUFjLEdBQUdELGlHQUEyQztBQUV6RSw0RUFBNEU7QUFDckUsTUFBTUssUUFBUSxHQUFHLENBQUNDLEdBQVEsR0FBSztJQUNwQyxJQUFJLElBQTBCLEVBQUUsT0FBTTtJQUN0Q0MsTUFBTSxDQUFDQyxJQUFJLENBQUMsUUFBUSxFQUFFUCxjQUFjLEVBQUU7UUFDcENRLFNBQVMsRUFBRUgsR0FBRztLQUNmLENBQUM7Q0FDSDtBQUVELDZFQUE2RTtBQUN0RSxNQUFNSSxLQUFLLEdBQUcsQ0FBQyxFQUNwQkMsTUFBTSxHQUNOQyxRQUFRLEdBQ1JDLEtBQUssR0FDTEMsS0FBSyxHQU1OLEdBQUs7SUFDSixJQUFJLElBQTBCLEVBQUUsT0FBTTtJQUN0Q1AsTUFBTSxDQUFDQyxJQUFJLENBQUMsT0FBTyxFQUFFRyxNQUFNLEVBQUU7UUFDM0JJLGNBQWMsRUFBRUgsUUFBUTtRQUN4QkksV0FBVyxFQUFFSCxLQUFLO1FBQ2xCQyxLQUFLLEVBQUVBLEtBQUs7S0FDYixDQUFDO0NBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3JldGhhbi1sb2cvLi9zcmMvbGlicy9wbHVnaW4vZ3RhZy50cz8xMTE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDT05GSUcgZnJvbSAnbW9yZXRoYW4tbG9nLmNvbmZpZydcbmV4cG9ydCBjb25zdCBHQV9UUkFDS0lOR19JRCA9IENPTkZJRy5nb29nbGVBbmFseXRpY3MuY29uZmlnLm1lYXN1cmVtZW50SWRcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2d0YWdqcy9wYWdlc1xuZXhwb3J0IGNvbnN0IHBhZ2V2aWV3ID0gKHVybDogYW55KSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAnb2JqZWN0JykgcmV0dXJuXG4gIHdpbmRvdy5ndGFnKCdjb25maWcnLCBHQV9UUkFDS0lOR19JRCwge1xuICAgIHBhZ2VfcGF0aDogdXJsLFxuICB9KVxufVxuXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ3RhZ2pzL2V2ZW50c1xuZXhwb3J0IGNvbnN0IGV2ZW50ID0gKHtcbiAgYWN0aW9uLFxuICBjYXRlZ29yeSxcbiAgbGFiZWwsXG4gIHZhbHVlLFxufToge1xuICBhY3Rpb246IGFueVxuICBjYXRlZ29yeTogYW55XG4gIGxhYmVsOiBhbnlcbiAgdmFsdWU6IGFueVxufSkgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ29iamVjdCcpIHJldHVyblxuICB3aW5kb3cuZ3RhZygnZXZlbnQnLCBhY3Rpb24sIHtcbiAgICBldmVudF9jYXRlZ29yeTogY2F0ZWdvcnksXG4gICAgZXZlbnRfbGFiZWw6IGxhYmVsLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgfSlcbn1cbiJdLCJuYW1lcyI6WyJDT05GSUciLCJHQV9UUkFDS0lOR19JRCIsImdvb2dsZUFuYWx5dGljcyIsImNvbmZpZyIsIm1lYXN1cmVtZW50SWQiLCJwYWdldmlldyIsInVybCIsIndpbmRvdyIsImd0YWciLCJwYWdlX3BhdGgiLCJldmVudCIsImFjdGlvbiIsImNhdGVnb3J5IiwibGFiZWwiLCJ2YWx1ZSIsImV2ZW50X2NhdGVnb3J5IiwiZXZlbnRfbGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/plugin/gtag.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismjs/themes/prism.css */ \"./node_modules/prismjs/themes/prism.css\");\n/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! katex/dist/katex.min.css */ \"./node_modules/katex/dist/katex.min.css\");\n/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_notion_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @styles/notion.css */ \"./src/styles/notion.css\");\n/* harmony import */ var _styles_notion_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_notion_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_useThemeEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hooks/useThemeEffect */ \"./src/hooks/useThemeEffect.ts\");\n/* harmony import */ var _hooks_useGtagEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hooks/useGtagEffect */ \"./src/hooks/useGtagEffect.ts\");\n/* harmony import */ var _components_Scripts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Scripts */ \"./src/components/Scripts.tsx\");\n\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    const getLayout = Component.getLayout || ((page)=>page\n    );\n    (0,_hooks_useThemeEffect__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    (0,_hooks_useGtagEffect__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Scripts__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/faker/leetrueblog/truelog/src/pages/_app.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/faker/leetrueblog/truelog/src/pages/_app.tsx\",\n                lineNumber: 29,\n                columnNumber: 18\n            }, this))\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFpQztBQUNLO0FBQ0w7QUFDTDtBQUNEO0FBQ3VCO0FBQ0Y7QUFDUDtBQWF6QyxTQUFTRyxLQUFLLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQXNCLEVBQUU7SUFDM0QsTUFBTUMsU0FBUyxHQUFHRixTQUFTLENBQUNFLFNBQVMsSUFBSSxDQUFDLENBQUNDLElBQUksR0FBS0EsSUFBSTtJQUFBLENBQUM7SUFDekRQLGlFQUFjLEVBQUU7SUFDaEJDLGdFQUFhLEVBQUU7SUFFZixxQkFDRTs7MEJBQ0UsOERBQUNDLDJEQUFPOzs7O29CQUFHO1lBQ1ZJLFNBQVMsZUFBQyw4REFBQ0YsU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSSxDQUFDOztvQkFDdkMsQ0FDSjtDQUNGO0FBRUQsaUVBQWVGLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb3JldGhhbi1sb2cvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3ByaXNtanMvdGhlbWVzL3ByaXNtLmNzcydcbmltcG9ydCAncmVhY3Qtbm90aW9uLXgvc3JjL3N0eWxlcy5jc3MnXG5pbXBvcnQgJ2thdGV4L2Rpc3Qva2F0ZXgubWluLmNzcydcbmltcG9ydCAnQHN0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCAnQHN0eWxlcy9ub3Rpb24uY3NzJ1xuaW1wb3J0IHVzZVRoZW1lRWZmZWN0IGZyb20gJ0Bob29rcy91c2VUaGVtZUVmZmVjdCdcbmltcG9ydCB1c2VHdGFnRWZmZWN0IGZyb20gJ0Bob29rcy91c2VHdGFnRWZmZWN0J1xuaW1wb3J0IFNjcmlwdHMgZnJvbSAnQGNvbXBvbmVudHMvU2NyaXB0cydcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IFJlYWN0RWxlbWVudCwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuXG5leHBvcnQgdHlwZSBOZXh0UGFnZVdpdGhMYXlvdXQ8UGFnZVByb3BzID0ge30+ID0gTmV4dFBhZ2U8UGFnZVByb3BzPiAmIHtcbiAgZ2V0TGF5b3V0PzogKHBhZ2U6IFJlYWN0RWxlbWVudCkgPT4gUmVhY3ROb2RlXG59XG5cbnR5cGUgQXBwUHJvcHNXaXRoTGF5b3V0ID0gQXBwUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dFBhZ2VXaXRoTGF5b3V0XG59XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHNXaXRoTGF5b3V0KSB7XG4gIGNvbnN0IGdldExheW91dCA9IENvbXBvbmVudC5nZXRMYXlvdXQgfHwgKChwYWdlKSA9PiBwYWdlKVxuICB1c2VUaGVtZUVmZmVjdCgpXG4gIHVzZUd0YWdFZmZlY3QoKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxTY3JpcHRzIC8+XG4gICAgICB7Z2V0TGF5b3V0KDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz4pfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsidXNlVGhlbWVFZmZlY3QiLCJ1c2VHdGFnRWZmZWN0IiwiU2NyaXB0cyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2V0TGF5b3V0IiwicGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

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