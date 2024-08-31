"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/products/page",{

/***/ "(app-pages-browser)/./src/components/Cards/ProductCard/index.tsx":
/*!****************************************************!*\
  !*** ./src/components/Cards/ProductCard/index.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _ProductCard_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProductCard.scss */ \"(app-pages-browser)/./src/components/Cards/ProductCard/ProductCard.scss\");\n\n\n\n\nfunction ProductCard(param) {\n    let { image, title, description, price, brand } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-sm flex flex-col gap-2 bg-white  rounded-lg shadow-xl dark:border-gray-300\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: \"#\",\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        className: \"h-[200px] w-[200px] object-fit items-center\",\n                        src: image,\n                        alt: \"\",\n                        width: 400,\n                        height: 300\n                    }, void 0, false, {\n                        fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/Cards/ProductCard/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/Cards/ProductCard/index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/Cards/ProductCard/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-5 flex flex-col items-start gap-2 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"flex text-[20px] h-[30px]  line-clamp-1\",\n                        children: [\n                            \" \",\n                            title\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/Cards/ProductCard/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[15px] font-normal text-gray-700 dark:text-gray-900\",\n                        children: brand\n                    }, void 0, false, {\n                        fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/Cards/ProductCard/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" text-[15px] font-normal text-gray-700 dark:text-gray-400 h-[50px] overflow-hidden text-ellipsis line-clamp-2\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/Cards/ProductCard/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[18px] font-bold\",\n                        children: [\n                            \"Price: $\",\n                            price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/Cards/ProductCard/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800\",\n                        children: \"More Details\"\n                    }, void 0, false, {\n                        fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/Cards/ProductCard/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/Cards/ProductCard/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/Cards/ProductCard/index.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_c = ProductCard;\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NhcmRzL1Byb2R1Y3RDYXJkL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0I7QUFDRjtBQUNEO0FBVWIsU0FBU0UsWUFBWSxLQU1qQjtRQU5pQixFQUNsQ0MsS0FBSyxFQUNMQyxLQUFLLEVBQ0xDLFdBQVcsRUFDWEMsS0FBSyxFQUNMQyxLQUFLLEVBQ1ksR0FOaUI7SUFPbEMscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDUixpREFBSUE7Z0JBQUNTLE1BQUs7Z0JBQUlELFdBQVU7MEJBQ3ZCLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ1Qsa0RBQUtBO3dCQUNKUyxXQUFVO3dCQUNWRSxLQUFLUjt3QkFDTFMsS0FBSTt3QkFDSkMsT0FBTzt3QkFDUEMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7OzswQkFJZCw4REFBQ047Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDTTt3QkFBR04sV0FBVTs7NEJBQTBDOzRCQUFFTDs7Ozs7OztrQ0FDMUQsOERBQUNZO3dCQUFFUCxXQUFVO2tDQUNWRjs7Ozs7O2tDQUVILDhEQUFDUzt3QkFBRVAsV0FBVTtrQ0FDVko7Ozs7OztrQ0FFSCw4REFBQ1c7d0JBQUVQLFdBQVU7OzRCQUF3Qjs0QkFBU0g7Ozs7Ozs7a0NBQzlDLDhEQUFDVTt3QkFBRVAsV0FBVTtrQ0FBNlA7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sUjtLQW5Dd0JQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhcmRzL1Byb2R1Y3RDYXJkL2luZGV4LnRzeD85MjcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFwiLi9Qcm9kdWN0Q2FyZC5zY3NzXCI7XG5cbmludGVyZmFjZSBQcm9kdWN0Q2FyZFByb3BzIHtcbiAgaW1hZ2U6IGFueTtcbiAgdGl0bGU6IGFueTtcbiAgcHJpY2U6IGFueTtcbiAgYnJhbmQ6IGFueTtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdENhcmQoe1xuICBpbWFnZSxcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBwcmljZSxcbiAgYnJhbmQsXG59OiBQcm9kdWN0Q2FyZFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zbSBmbGV4IGZsZXgtY29sIGdhcC0yIGJnLXdoaXRlICByb3VuZGVkLWxnIHNoYWRvdy14bCBkYXJrOmJvcmRlci1ncmF5LTMwMFwiPlxuICAgICAgPExpbmsgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1bMjAwcHhdIHctWzIwMHB4XSBvYmplY3QtZml0IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgIHdpZHRoPXs0MDB9XG4gICAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC01IGZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQgZ2FwLTIgXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJmbGV4IHRleHQtWzIwcHhdIGgtWzMwcHhdICBsaW5lLWNsYW1wLTFcIj4ge3RpdGxlfTwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzE1cHhdIGZvbnQtbm9ybWFsIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAge2JyYW5kfVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIiB0ZXh0LVsxNXB4XSBmb250LW5vcm1hbCB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMCBoLVs1MHB4XSBvdmVyZmxvdy1oaWRkZW4gdGV4dC1lbGxpcHNpcyBsaW5lLWNsYW1wLTJcIj5cbiAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMThweF0gZm9udC1ib2xkXCI+UHJpY2U6ICR7cHJpY2V9PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtMyBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBiZy1ibHVlLTcwMCByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTMwMCBkYXJrOmJnLWJsdWUtNjAwIGRhcms6aG92ZXI6YmctYmx1ZS03MDAgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwXCI+XG4gICAgICAgICAgTW9yZSBEZXRhaWxzXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsIlByb2R1Y3RDYXJkIiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJicmFuZCIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Cards/ProductCard/index.tsx\n"));

/***/ })

});