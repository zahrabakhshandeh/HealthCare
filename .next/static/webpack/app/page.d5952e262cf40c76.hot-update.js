"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/MainButton/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/MainButton/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst MainButton = (props)=>{\n    _s();\n    const checkIcon = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        if (props.iconSrc) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(props.iconSrc, {}, void 0, false, {\n            fileName: \"/home/parsa/Desktop/code/next/HealthCare/src/components/MainButton/index.tsx\",\n            lineNumber: 8,\n            columnNumber: 31\n        }, undefined);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"\".concat(props.className, \" flex  \").concat(props.iconSrc && \"gap-2\", \" items-center justify-center  drop-shadow-md  p-2 rounded-lg h-12\"),\n        children: [\n            checkIcon(),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"!text-white font-semibold  text-2xl lg:text-xl \",\n                children: props.value\n            }, void 0, false, {\n                fileName: \"/home/parsa/Desktop/code/next/HealthCare/src/components/MainButton/index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/parsa/Desktop/code/next/HealthCare/src/components/MainButton/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MainButton, \"vU/OGyZCvuRU/NrqJT16GXPkWFk=\");\n_c = MainButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainButton);\nvar _c;\n$RefreshReg$(_c, \"MainButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01haW5CdXR0b24vaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUdvQztBQUVwQyxNQUFNQyxhQUFhLENBQUNDOztJQUNsQixNQUFNQyxZQUFZSCxrREFBV0EsQ0FBQztRQUM1QixJQUFJRSxNQUFNRSxPQUFPLEVBQUUscUJBQU8sOERBQUNGLE1BQU1FLE9BQU87Ozs7O0lBQzFDLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUNDQyxXQUFXLEdBQ1RKLE9BRFlBLE1BQU1JLFNBQVMsRUFBQyxXQUU3QixPQURDSixNQUFNRSxPQUFPLElBQUksU0FDbEI7O1lBRUFEOzBCQUNELDhEQUFDSTtnQkFBS0QsV0FBVTswQkFDYkosTUFBTU0sS0FBSzs7Ozs7Ozs7Ozs7O0FBSXBCO0dBakJNUDtLQUFBQTtBQWtCTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYWluQnV0dG9uL2luZGV4LnRzeD85YWMwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBUQnV0dG9uIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IE1haW5CdXR0b24gPSAocHJvcHM6IFRCdXR0b24pID0+IHtcbiAgY29uc3QgY2hlY2tJY29uID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmIChwcm9wcy5pY29uU3JjKSByZXR1cm4gPHByb3BzLmljb25TcmMgLz47XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT17YCR7cHJvcHMuY2xhc3NOYW1lfSBmbGV4ICAke1xuICAgICAgICBwcm9wcy5pY29uU3JjICYmIFwiZ2FwLTJcIlxuICAgICAgfSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgIGRyb3Atc2hhZG93LW1kICBwLTIgcm91bmRlZC1sZyBoLTEyYH1cbiAgICA+XG4gICAgICB7Y2hlY2tJY29uKCl9XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCIhdGV4dC13aGl0ZSBmb250LXNlbWlib2xkICB0ZXh0LTJ4bCBsZzp0ZXh0LXhsIFwiPlxuICAgICAgICB7cHJvcHMudmFsdWV9XG4gICAgICA8L3NwYW4+XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTWFpbkJ1dHRvbjsiXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJNYWluQnV0dG9uIiwicHJvcHMiLCJjaGVja0ljb24iLCJpY29uU3JjIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwic3BhbiIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/MainButton/index.tsx\n"));

/***/ })

});