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

/***/ "(app-pages-browser)/./src/components/ProductDetails/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/ProductDetails/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _Lib_SmartPhone_smartphone_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Lib/SmartPhone/smartphone.actions */ \"(app-pages-browser)/./src/Lib/SmartPhone/smartphone.actions.tsx\");\n/* harmony import */ var _Lib_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Lib/hooks */ \"(app-pages-browser)/./src/Lib/hooks.tsx\");\n/* harmony import */ var _Lib_SmartPhone_smartphone_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Lib/SmartPhone/smartphone.selector */ \"(app-pages-browser)/./src/Lib/SmartPhone/smartphone.selector.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ProductDetails(param) {\n    let { params } = param;\n    _s();\n    const dispatch = (0,_Lib_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    console.log(\"pa\", params === null || params === void 0 ? void 0 : params.id);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        var _params_params;\n        dispatch((0,_Lib_SmartPhone_smartphone_actions__WEBPACK_IMPORTED_MODULE_2__.getProductById)(Number((_params_params = params.params) === null || _params_params === void 0 ? void 0 : _params_params.id)));\n    }, [\n        dispatch\n    ]);\n    const { products } = (0,_Lib_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(_Lib_SmartPhone_smartphone_selector__WEBPACK_IMPORTED_MODULE_4__.getAllProductSelector);\n    console.log(\"->\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: products === null || products === void 0 ? void 0 : products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col w-full md:flex-row gap-8 p-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 flex justify-center items-start\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: product.thumbnail,\n                            alt: product.title,\n                            width: 400,\n                            height: 400,\n                            className: \"object-contain\"\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-3xl font-semibold mb-4\",\n                                children: product.title\n                            }, void 0, false, {\n                                fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg text-gray-600 mb-4\",\n                                children: product.description\n                            }, void 0, false, {\n                                fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xl font-bold mb-4\",\n                                children: [\n                                    \"Price: $\",\n                                    product.price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-md text-gray-500\",\n                                children: [\n                                    \"SKU: \",\n                                    product.sku\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-md text-gray-500\",\n                                children: [\n                                    \"Brand: \",\n                                    product.brand\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-md text-gray-500\",\n                                children: [\n                                    \"Availability: \",\n                                    product.availabilityStatus\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-md text-gray-500\",\n                                children: [\n                                    \"Warranty: \",\n                                    product.warrantyInformation\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-md text-gray-500\",\n                                children: [\n                                    \"Shipping: \",\n                                    product.shippingInformation\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-2xl font-semibold mb-4\",\n                                children: \"Reviews\"\n                            }, void 0, false, {\n                                fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this),\n                            product.reviews.length > 0 ? product.reviews.map((review, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-4 p-4 border rounded-md shadow-sm\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-lg font-semibold\",\n                                            children: [\n                                                review.reviewerName,\n                                                \" - \",\n                                                review.rating,\n                                                \"⭐\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-md text-gray-600\",\n                                            children: review.comment\n                                        }, void 0, false, {\n                                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-sm text-gray-400\",\n                                            children: new Date(review.date).toLocaleDateString()\n                                        }, void 0, false, {\n                                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 17\n                                }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"No reviews yet.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this))\n    }, void 0, false);\n}\n_s(ProductDetails, \"pqxkpUG4fEf+6B9LTuGVY+qCvVo=\", false, function() {\n    return [\n        _Lib_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        _Lib_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = ProductDetails;\nvar _c;\n$RefreshReg$(_c, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3REZXRhaWxzL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQytCO0FBQ3NDO0FBQ1I7QUFDZ0I7QUFDM0M7QUFFbkIsU0FBU00sZUFBZSxLQUFlO1FBQWYsRUFBRUMsTUFBTSxFQUFPLEdBQWY7O0lBQ3JDLE1BQU1DLFdBQVdOLDBEQUFjQTtJQUMvQk8sUUFBUUMsR0FBRyxDQUFDLE1BQU1ILG1CQUFBQSw2QkFBQUEsT0FBUUksRUFBRTtJQUM1Qk4sZ0RBQVNBLENBQUM7WUFDdUJFO1FBQS9CQyxTQUFTUCxrRkFBY0EsQ0FBQ1csUUFBT0wsaUJBQUFBLE9BQU9BLE1BQU0sY0FBYkEscUNBQUFBLGVBQWVJLEVBQUU7SUFDbEQsR0FBRztRQUFDSDtLQUFTO0lBQ2IsTUFBTSxFQUFFSyxRQUFRLEVBQUUsR0FBR1YsMERBQWNBLENBQUNDLHNGQUFxQkE7SUFDekRLLFFBQVFDLEdBQUcsQ0FBQztJQUNaLHFCQUNFO2tCQUNHRyxxQkFBQUEsK0JBQUFBLFNBQVVDLEdBQUcsQ0FBQyxDQUFDQyx3QkFDZCw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUViLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ2pCLGtEQUFLQTs0QkFDSmtCLEtBQUtILFFBQVFJLFNBQVM7NEJBQ3RCQyxLQUFLTCxRQUFRTSxLQUFLOzRCQUNsQkMsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUk4sV0FBVTs7Ozs7Ozs7Ozs7a0NBS2QsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ087Z0NBQUdQLFdBQVU7MENBQStCRixRQUFRTSxLQUFLOzs7Ozs7MENBQzFELDhEQUFDSTtnQ0FBRVIsV0FBVTswQ0FBOEJGLFFBQVFXLFdBQVc7Ozs7OzswQ0FDOUQsOERBQUNEO2dDQUFFUixXQUFVOztvQ0FBeUI7b0NBQVNGLFFBQVFZLEtBQUs7Ozs7Ozs7MENBQzVELDhEQUFDRjtnQ0FBRVIsV0FBVTs7b0NBQXdCO29DQUFNRixRQUFRYSxHQUFHOzs7Ozs7OzBDQUN0RCw4REFBQ0g7Z0NBQUVSLFdBQVU7O29DQUF3QjtvQ0FBUUYsUUFBUWMsS0FBSzs7Ozs7OzswQ0FDMUQsOERBQUNKO2dDQUFFUixXQUFVOztvQ0FBd0I7b0NBQ3BCRixRQUFRZSxrQkFBa0I7Ozs7Ozs7MENBRTNDLDhEQUFDTDtnQ0FBRVIsV0FBVTs7b0NBQXdCO29DQUN4QkYsUUFBUWdCLG1CQUFtQjs7Ozs7OzswQ0FFeEMsOERBQUNOO2dDQUFFUixXQUFVOztvQ0FBd0I7b0NBQ3hCRixRQUFRaUIsbUJBQW1COzs7Ozs7Ozs7Ozs7O2tDQU0xQyw4REFBQ2hCO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ2dCO2dDQUFHaEIsV0FBVTswQ0FBOEI7Ozs7Ozs0QkFDM0NGLFFBQVFtQixPQUFPLENBQUNDLE1BQU0sR0FBRyxJQUN4QnBCLFFBQVFtQixPQUFPLENBQUNwQixHQUFHLENBQUMsQ0FBQ3NCLFFBQWFDLHNCQUNoQyw4REFBQ3JCO29DQUVDQyxXQUFVOztzREFFViw4REFBQ1E7NENBQUVSLFdBQVU7O2dEQUNWbUIsT0FBT0UsWUFBWTtnREFBQztnREFBSUYsT0FBT0csTUFBTTtnREFBQzs7Ozs7OztzREFFekMsOERBQUNkOzRDQUFFUixXQUFVO3NEQUF5Qm1CLE9BQU9JLE9BQU87Ozs7OztzREFDcEQsOERBQUNmOzRDQUFFUixXQUFVO3NEQUNWLElBQUl3QixLQUFLTCxPQUFPTSxJQUFJLEVBQUVDLGtCQUFrQjs7Ozs7OzttQ0FSdENOOzs7OzBEQWFULDhEQUFDWjswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9qQjtHQXBFd0JuQjs7UUFDTEosc0RBQWNBO1FBS1ZDLHNEQUFjQTs7O0tBTmJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3REZXRhaWxzL2luZGV4LnRzeD85NGJkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBnZXRQcm9kdWN0QnlJZCB9IGZyb20gXCJAL0xpYi9TbWFydFBob25lL3NtYXJ0cGhvbmUuYWN0aW9uc1wiO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIkAvTGliL2hvb2tzXCI7XG5pbXBvcnQgeyBnZXRBbGxQcm9kdWN0U2VsZWN0b3IgfSBmcm9tIFwiQC9MaWIvU21hcnRQaG9uZS9zbWFydHBob25lLnNlbGVjdG9yXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdERldGFpbHMoeyBwYXJhbXMgfTogYW55KSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgY29uc29sZS5sb2coXCJwYVwiLCBwYXJhbXM/LmlkKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChnZXRQcm9kdWN0QnlJZChOdW1iZXIocGFyYW1zLnBhcmFtcz8uaWQpKSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuICBjb25zdCB7IHByb2R1Y3RzIH0gPSB1c2VBcHBTZWxlY3RvcihnZXRBbGxQcm9kdWN0U2VsZWN0b3IpO1xuICBjb25zb2xlLmxvZyhcIi0+XCIpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cHJvZHVjdHM/Lm1hcCgocHJvZHVjdDogYW55KSA9PiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgbWQ6ZmxleC1yb3cgZ2FwLTggcC01XCI+XG4gICAgICAgICAgey8qIFNlY3Rpb24gMTogUHJvZHVjdCBJbWFnZSAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LnRodW1ibmFpbH1cbiAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgICAgICB3aWR0aD17NDAwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezQwMH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvbnRhaW5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBTZWN0aW9uIDI6IFByb2R1Y3QgRGV0YWlscyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGQgbWItNFwiPntwcm9kdWN0LnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS02MDAgbWItNFwiPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTRcIj5QcmljZTogJHtwcm9kdWN0LnByaWNlfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbWQgdGV4dC1ncmF5LTUwMFwiPlNLVToge3Byb2R1Y3Quc2t1fTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbWQgdGV4dC1ncmF5LTUwMFwiPkJyYW5kOiB7cHJvZHVjdC5icmFuZH08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW1kIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgQXZhaWxhYmlsaXR5OiB7cHJvZHVjdC5hdmFpbGFiaWxpdHlTdGF0dXN9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW1kIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgV2FycmFudHk6IHtwcm9kdWN0LndhcnJhbnR5SW5mb3JtYXRpb259XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW1kIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgU2hpcHBpbmc6IHtwcm9kdWN0LnNoaXBwaW5nSW5mb3JtYXRpb259XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICB7LyogQWRkIG1vcmUgZGV0YWlscyBhcyBuZWVkZWQgKi99XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogU2VjdGlvbiAzOiBQcm9kdWN0IFJldmlld3MgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTRcIj5SZXZpZXdzPC9oMj5cbiAgICAgICAgICAgIHtwcm9kdWN0LnJldmlld3MubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgcHJvZHVjdC5yZXZpZXdzLm1hcCgocmV2aWV3OiBhbnksIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNCBwLTQgYm9yZGVyIHJvdW5kZWQtbWQgc2hhZG93LXNtXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAge3Jldmlldy5yZXZpZXdlck5hbWV9IC0ge3Jldmlldy5yYXRpbmd94q2QXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW1kIHRleHQtZ3JheS02MDBcIj57cmV2aWV3LmNvbW1lbnR9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShyZXZpZXcuZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8cD5ObyByZXZpZXdzIHlldC48L3A+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiZ2V0UHJvZHVjdEJ5SWQiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiZ2V0QWxsUHJvZHVjdFNlbGVjdG9yIiwidXNlRWZmZWN0IiwiUHJvZHVjdERldGFpbHMiLCJwYXJhbXMiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJpZCIsIk51bWJlciIsInByb2R1Y3RzIiwibWFwIiwicHJvZHVjdCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsInRodW1ibmFpbCIsImFsdCIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJoMSIsInAiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwic2t1IiwiYnJhbmQiLCJhdmFpbGFiaWxpdHlTdGF0dXMiLCJ3YXJyYW50eUluZm9ybWF0aW9uIiwic2hpcHBpbmdJbmZvcm1hdGlvbiIsImgyIiwicmV2aWV3cyIsImxlbmd0aCIsInJldmlldyIsImluZGV4IiwicmV2aWV3ZXJOYW1lIiwicmF0aW5nIiwiY29tbWVudCIsIkRhdGUiLCJkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProductDetails/index.tsx\n"));

/***/ })

});