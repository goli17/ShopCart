"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/smartphones/page",{

/***/ "(app-pages-browser)/./src/components/SmartPhones/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/SmartPhones/index.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SmartPhones; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Lib_SmartPhone_smartphone_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Lib/SmartPhone/smartphone.actions */ \"(app-pages-browser)/./src/Lib/SmartPhone/smartphone.actions.tsx\");\n/* harmony import */ var _Lib_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Lib/hooks */ \"(app-pages-browser)/./src/Lib/hooks.tsx\");\n/* harmony import */ var _Lib_SmartPhone_smartphone_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Lib/SmartPhone/smartphone.selector */ \"(app-pages-browser)/./src/Lib/SmartPhone/smartphone.selector.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Cards_ProductCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Cards/ProductCard */ \"(app-pages-browser)/./src/components/Cards/ProductCard/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SmartPhones() {\n    _s();\n    const dispatch = (0,_Lib_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        dispatch((0,_Lib_SmartPhone_smartphone_actions__WEBPACK_IMPORTED_MODULE_1__.getSmartPhone)());\n    }, [\n        dispatch\n    ]);\n    const { products } = (0,_Lib_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(_Lib_SmartPhone_smartphone_selector__WEBPACK_IMPORTED_MODULE_3__.getAllProductSelector);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-wrap items-center justify-center p-2 gap-2 max-sm:grid max-sm:grid-cols-2\",\n        children: products && (products === null || products === void 0 ? void 0 : products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards_ProductCard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    image: product.images[0],\n                    title: product.title,\n                    description: product.description,\n                    price: product.price,\n                    brand: product.brand,\n                    id: product.id\n                }, void 0, false, {\n                    fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/SmartPhones/index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                }, this)\n            }, product.id, false, {\n                fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/SmartPhones/index.tsx\",\n                lineNumber: 18,\n                columnNumber: 11\n            }, this)))\n    }, void 0, false, {\n        fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/SmartPhones/index.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(SmartPhones, \"pqxkpUG4fEf+6B9LTuGVY+qCvVo=\", false, function() {\n    return [\n        _Lib_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _Lib_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = SmartPhones;\nvar _c;\n$RefreshReg$(_c, \"SmartPhones\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NtYXJ0UGhvbmVzL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ29FO0FBQ1A7QUFDZ0I7QUFDM0M7QUFDYTtBQUNoQyxTQUFTTTs7SUFDdEIsTUFBTUMsV0FBV04sMERBQWNBO0lBQy9CRyxnREFBU0EsQ0FBQztRQUNSRyxTQUFTUCxpRkFBYUE7SUFDeEIsR0FBRztRQUFDTztLQUFTO0lBRWIsTUFBTSxFQUFFQyxRQUFRLEVBQUUsR0FBR04sMERBQWNBLENBQUNDLHNGQUFxQkE7SUFDekQscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVU7a0JBQ1pGLGFBQ0NBLHFCQUFBQSwrQkFBQUEsU0FBVUcsR0FBRyxDQUFDLENBQUNDLHdCQUNiLDhEQUFDSDtnQkFBcUJDLFdBQVU7MEJBQzlCLDRFQUFDTCwwREFBV0E7b0JBQ1ZRLE9BQU9ELFFBQVFFLE1BQU0sQ0FBQyxFQUFFO29CQUN4QkMsT0FBT0gsUUFBUUcsS0FBSztvQkFDcEJDLGFBQWFKLFFBQVFJLFdBQVc7b0JBQ2hDQyxPQUFPTCxRQUFRSyxLQUFLO29CQUNwQkMsT0FBT04sUUFBUU0sS0FBSztvQkFDcEJDLElBQUlQLFFBQVFPLEVBQUU7Ozs7OztlQVBSUCxRQUFRTyxFQUFFOzs7Ozs7Ozs7O0FBYTlCO0dBeEJ3QmI7O1FBQ0xMLHNEQUFjQTtRQUtWQyxzREFBY0E7OztLQU5iSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TbWFydFBob25lcy9pbmRleC50c3g/NTJhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IGdldFNtYXJ0UGhvbmUgfSBmcm9tIFwiQC9MaWIvU21hcnRQaG9uZS9zbWFydHBob25lLmFjdGlvbnNcIjtcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL0xpYi9ob29rc1wiO1xuaW1wb3J0IHsgZ2V0QWxsUHJvZHVjdFNlbGVjdG9yIH0gZnJvbSBcIkAvTGliL1NtYXJ0UGhvbmUvc21hcnRwaG9uZS5zZWxlY3RvclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIi4uL0NhcmRzL1Byb2R1Y3RDYXJkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbWFydFBob25lcygpIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGdldFNtYXJ0UGhvbmUoKSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHVzZUFwcFNlbGVjdG9yKGdldEFsbFByb2R1Y3RTZWxlY3Rvcik7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0yIGdhcC0yIG1heC1zbTpncmlkIG1heC1zbTpncmlkLWNvbHMtMlwiPlxuICAgICAge3Byb2R1Y3RzICYmXG4gICAgICAgIHByb2R1Y3RzPy5tYXAoKHByb2R1Y3Q6IGFueSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0LmlkfSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgPFByb2R1Y3RDYXJkXG4gICAgICAgICAgICAgIGltYWdlPXtwcm9kdWN0LmltYWdlc1swXX1cbiAgICAgICAgICAgICAgdGl0bGU9e3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9kdWN0LmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICBwcmljZT17cHJvZHVjdC5wcmljZX1cbiAgICAgICAgICAgICAgYnJhbmQ9e3Byb2R1Y3QuYnJhbmR9XG4gICAgICAgICAgICAgIGlkPXtwcm9kdWN0LmlkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiZ2V0U21hcnRQaG9uZSIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJnZXRBbGxQcm9kdWN0U2VsZWN0b3IiLCJ1c2VFZmZlY3QiLCJQcm9kdWN0Q2FyZCIsIlNtYXJ0UGhvbmVzIiwiZGlzcGF0Y2giLCJwcm9kdWN0cyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInByb2R1Y3QiLCJpbWFnZSIsImltYWdlcyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImJyYW5kIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SmartPhones/index.tsx\n"));

/***/ })

});