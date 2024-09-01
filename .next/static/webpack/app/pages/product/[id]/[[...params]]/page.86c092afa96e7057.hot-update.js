"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pages/product/[id]/[[...params]]/page",{

/***/ "(app-pages-browser)/./src/components/ProductDetails/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/ProductDetails/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _Lib_SmartPhone_smartphone_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Lib/SmartPhone/smartphone.actions */ \"(app-pages-browser)/./src/Lib/SmartPhone/smartphone.actions.tsx\");\n/* harmony import */ var _Lib_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Lib/hooks */ \"(app-pages-browser)/./src/Lib/hooks.tsx\");\n/* harmony import */ var _Lib_SmartPhone_smartphone_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Lib/SmartPhone/smartphone.selector */ \"(app-pages-browser)/./src/Lib/SmartPhone/smartphone.selector.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ProductDetails(param) {\n    let { params } = param;\n    _s();\n    const dispatch = (0,_Lib_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const debouncedDispatch = setTimeout(()=>{\n            if (params.params.id < 30) {\n                dispatch((0,_Lib_SmartPhone_smartphone_actions__WEBPACK_IMPORTED_MODULE_2__.getAllProduct)());\n            } else {\n                dispatch((0,_Lib_SmartPhone_smartphone_actions__WEBPACK_IMPORTED_MODULE_2__.getSmartPhone)());\n            }\n        }, 300);\n        return ()=>clearTimeout(debouncedDispatch);\n    }, [\n        dispatch\n    ]);\n    const { products } = (0,_Lib_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(_Lib_SmartPhone_smartphone_selector__WEBPACK_IMPORTED_MODULE_4__.getAllProductSelector);\n    const product = products === null || products === void 0 ? void 0 : products.find((product)=>product.id === Number(params.params.id));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: product ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"  flex flex-col w-full md:flex-row gap-8 p-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1 flex flex-col gap-5 justify-center items-start\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: product.thumbnail,\n                            alt: product.title,\n                            width: 400,\n                            height: 400,\n                            className: \"object-contain\"\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"flex items-center gap-2 justify-center m-auto\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    src: product.thumbnail,\n                                    alt: product.title,\n                                    width: 100,\n                                    height: 100,\n                                    className: \"object-contain border-2 \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    src: product.thumbnail,\n                                    alt: product.title,\n                                    width: 100,\n                                    height: 100,\n                                    className: \"object-contain border-2 \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl font-semibold mb-4\",\n                            children: product.title\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg text-gray-600 mb-4\",\n                            children: product.category.toUpperCase()\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg text-gray-600 mb-4\",\n                            children: product.description\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xl font-bold mb-4\",\n                                    children: [\n                                        \"Price: ₹ \",\n                                        (product.price * 83.89).toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-md p-1 text-white text-center font-bold bg-green-500 mb-4\",\n                                    children: [\n                                        product.discountPercentage,\n                                        \"% OFF\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-md text-gray-500\",\n                            children: [\n                                \"SKU: \",\n                                product.sku\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-md text-gray-500\",\n                            children: [\n                                \"Brand: \",\n                                product.brand\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-md text-gray-500\",\n                            children: [\n                                \"Availability: \",\n                                product.availabilityStatus\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-md text-gray-500\",\n                            children: [\n                                \"Warranty: \",\n                                product.warrantyInformation\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-md text-gray-500\",\n                            children: [\n                                \"Shipping: \",\n                                product.shippingInformation\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-md text-gray-500 flex items-center\",\n                            children: [\n                                \"Rating: \",\n                                product.rating.toFixed(0),\n                                \"+\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-semibold mb-4\",\n                            children: \"Reviews\"\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, this),\n                        product.reviews.length > 0 ? product.reviews.map((review, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4 p-4 border rounded-md shadow-sm\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg font-semibold\",\n                                        children: [\n                                            review.reviewerName,\n                                            \" - \",\n                                            review.rating,\n                                            \"⭐\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-md text-gray-600\",\n                                        children: review.comment\n                                    }, void 0, false, {\n                                        fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm text-gray-400\",\n                                        children: new Date(review.date).toLocaleDateString()\n                                    }, void 0, false, {\n                                        fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 17\n                            }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"No reviews yet.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n            lineNumber: 31,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Product not found.\"\n        }, void 0, false, {\n            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n            lineNumber: 116,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(ProductDetails, \"pqxkpUG4fEf+6B9LTuGVY+qCvVo=\", false, function() {\n    return [\n        _Lib_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        _Lib_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = ProductDetails;\nvar _c;\n$RefreshReg$(_c, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3REZXRhaWxzL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQytCO0FBSWM7QUFDZ0I7QUFDZ0I7QUFDM0M7QUFFbkIsU0FBU08sZUFBZSxLQUFlO1FBQWYsRUFBRUMsTUFBTSxFQUFPLEdBQWY7O0lBQ3JDLE1BQU1DLFdBQVdOLDBEQUFjQTtJQUMvQkcsZ0RBQVNBLENBQUM7UUFDUixNQUFNSSxvQkFBb0JDLFdBQVc7WUFDbkMsSUFBSUgsT0FBT0EsTUFBTSxDQUFDSSxFQUFFLEdBQUcsSUFBSTtnQkFDekJILFNBQVNSLGlGQUFhQTtZQUN4QixPQUFPO2dCQUNMUSxTQUFTUCxpRkFBYUE7WUFDeEI7UUFDRixHQUFHO1FBQ0gsT0FBTyxJQUFNVyxhQUFhSDtJQUM1QixHQUFHO1FBQUNEO0tBQVM7SUFDYixNQUFNLEVBQUVLLFFBQVEsRUFBRSxHQUFHViwwREFBY0EsQ0FBQ0Msc0ZBQXFCQTtJQUN6RCxNQUFNVSxVQUFVRCxxQkFBQUEsK0JBQUFBLFNBQVVFLElBQUksQ0FDNUIsQ0FBQ0QsVUFBaUJBLFFBQVFILEVBQUUsS0FBS0ssT0FBT1QsT0FBT0EsTUFBTSxDQUFDSSxFQUFFO0lBRzFELHFCQUNFO2tCQUNHRyx3QkFDQyw4REFBQ0c7WUFBSUMsV0FBVTs7OEJBRWIsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ25CLGtEQUFLQTs0QkFDSm9CLEtBQUtMLFFBQVFNLFNBQVM7NEJBQ3RCQyxLQUFLUCxRQUFRUSxLQUFLOzRCQUNsQkMsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUk4sV0FBVTs7Ozs7O3NDQUVaLDhEQUFDTzs0QkFBRVAsV0FBVTs7OENBQ1gsOERBQUNuQixrREFBS0E7b0NBQ0pvQixLQUFLTCxRQUFRTSxTQUFTO29DQUN0QkMsS0FBS1AsUUFBUVEsS0FBSztvQ0FDbEJDLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JOLFdBQVU7Ozs7Ozs4Q0FFWiw4REFBQ25CLGtEQUFLQTtvQ0FDSm9CLEtBQUtMLFFBQVFNLFNBQVM7b0NBQ3RCQyxLQUFLUCxRQUFRUSxLQUFLO29DQUNsQkMsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUk4sV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU1oQiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDUTs0QkFBR1IsV0FBVTtzQ0FBK0JKLFFBQVFRLEtBQUs7Ozs7OztzQ0FDMUQsOERBQUNHOzRCQUFFUCxXQUFVO3NDQUNWSixRQUFRYSxRQUFRLENBQUNDLFdBQVc7Ozs7OztzQ0FHL0IsOERBQUNIOzRCQUFFUCxXQUFVO3NDQUE4QkosUUFBUWUsV0FBVzs7Ozs7O3NDQUM5RCw4REFBQ1o7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDTztvQ0FBRVAsV0FBVTs7d0NBQXlCO3dDQUN6QkosQ0FBQUEsUUFBUWdCLEtBQUssR0FBRyxLQUFJLEVBQUdDLE9BQU8sQ0FBQzs7Ozs7Ozs4Q0FFNUMsOERBQUNOO29DQUFFUCxXQUFVOzt3Q0FDVkosUUFBUWtCLGtCQUFrQjt3Q0FBQzs7Ozs7Ozs7Ozs7OztzQ0FJaEMsOERBQUNQOzRCQUFFUCxXQUFVOztnQ0FBd0I7Z0NBQU1KLFFBQVFtQixHQUFHOzs7Ozs7O3NDQUN0RCw4REFBQ1I7NEJBQUVQLFdBQVU7O2dDQUF3QjtnQ0FBUUosUUFBUW9CLEtBQUs7Ozs7Ozs7c0NBQzFELDhEQUFDVDs0QkFBRVAsV0FBVTs7Z0NBQXdCO2dDQUNwQkosUUFBUXFCLGtCQUFrQjs7Ozs7OztzQ0FFM0MsOERBQUNWOzRCQUFFUCxXQUFVOztnQ0FBd0I7Z0NBQ3hCSixRQUFRc0IsbUJBQW1COzs7Ozs7O3NDQUV4Qyw4REFBQ1g7NEJBQUVQLFdBQVU7O2dDQUF3QjtnQ0FDeEJKLFFBQVF1QixtQkFBbUI7Ozs7Ozs7c0NBRXhDLDhEQUFDWjs0QkFBRVAsV0FBVTs7Z0NBQTBDO2dDQUM1Q0osUUFBUXdCLE1BQU0sQ0FBQ1AsT0FBTyxDQUFDO2dDQUFHOzs7Ozs7Ozs7Ozs7OzhCQUt2Qyw4REFBQ2Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDcUI7NEJBQUdyQixXQUFVO3NDQUE4Qjs7Ozs7O3dCQUMzQ0osUUFBUTBCLE9BQU8sQ0FBQ0MsTUFBTSxHQUFHLElBQ3hCM0IsUUFBUTBCLE9BQU8sQ0FBQ0UsR0FBRyxDQUFDLENBQUNDLFFBQWFDLHNCQUNoQyw4REFBQzNCO2dDQUVDQyxXQUFVOztrREFFViw4REFBQ087d0NBQUVQLFdBQVU7OzRDQUNWeUIsT0FBT0UsWUFBWTs0Q0FBQzs0Q0FBSUYsT0FBT0wsTUFBTTs0Q0FBQzs7Ozs7OztrREFFekMsOERBQUNiO3dDQUFFUCxXQUFVO2tEQUF5QnlCLE9BQU9HLE9BQU87Ozs7OztrREFDcEQsOERBQUNyQjt3Q0FBRVAsV0FBVTtrREFDVixJQUFJNkIsS0FBS0osT0FBT0ssSUFBSSxFQUFFQyxrQkFBa0I7Ozs7Ozs7K0JBUnRDTDs7OztzREFhVCw4REFBQ25CO3NDQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztpQ0FLVCw4REFBQ0E7c0JBQUU7Ozs7Ozs7QUFJWDtHQTdHd0JuQjs7UUFDTEosc0RBQWNBO1FBV1ZDLHNEQUFjQTs7O0tBWmJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3REZXRhaWxzL2luZGV4LnRzeD85NGJkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQge1xuICBnZXRBbGxQcm9kdWN0LFxuICBnZXRTbWFydFBob25lLFxufSBmcm9tIFwiQC9MaWIvU21hcnRQaG9uZS9zbWFydHBob25lLmFjdGlvbnNcIjtcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL0xpYi9ob29rc1wiO1xuaW1wb3J0IHsgZ2V0QWxsUHJvZHVjdFNlbGVjdG9yIH0gZnJvbSBcIkAvTGliL1NtYXJ0UGhvbmUvc21hcnRwaG9uZS5zZWxlY3RvclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3REZXRhaWxzKHsgcGFyYW1zIH06IGFueSkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGVib3VuY2VkRGlzcGF0Y2ggPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChwYXJhbXMucGFyYW1zLmlkIDwgMzApIHtcbiAgICAgICAgZGlzcGF0Y2goZ2V0QWxsUHJvZHVjdCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BhdGNoKGdldFNtYXJ0UGhvbmUoKSk7XG4gICAgICB9XG4gICAgfSwgMzAwKTtcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGRlYm91bmNlZERpc3BhdGNoKTtcbiAgfSwgW2Rpc3BhdGNoXSk7XG4gIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHVzZUFwcFNlbGVjdG9yKGdldEFsbFByb2R1Y3RTZWxlY3Rvcik7XG4gIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0cz8uZmluZChcbiAgICAocHJvZHVjdDogYW55KSA9PiBwcm9kdWN0LmlkID09PSBOdW1iZXIocGFyYW1zLnBhcmFtcy5pZClcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cHJvZHVjdCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgIGZsZXggZmxleC1jb2wgdy1mdWxsIG1kOmZsZXgtcm93IGdhcC04IHAtNVwiPlxuICAgICAgICAgIHsvKiBTZWN0aW9uIDE6IFByb2R1Y3QgSW1hZ2UgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBmbGV4LWNvbCBnYXAtNSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17cHJvZHVjdC50aHVtYm5haWx9XG4gICAgICAgICAgICAgIGFsdD17cHJvZHVjdC50aXRsZX1cbiAgICAgICAgICAgICAgd2lkdGg9ezQwMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs0MDB9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBqdXN0aWZ5LWNlbnRlciBtLWF1dG9cIj5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LnRodW1ibmFpbH1cbiAgICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpbiBib3JkZXItMiBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QudGh1bWJuYWlsfVxuICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC50aXRsZX1cbiAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluIGJvcmRlci0yIFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogU2VjdGlvbiAyOiBQcm9kdWN0IERldGFpbHMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNlbWlib2xkIG1iLTRcIj57cHJvZHVjdC50aXRsZX08L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktNjAwIG1iLTRcIj5cbiAgICAgICAgICAgICAge3Byb2R1Y3QuY2F0ZWdvcnkudG9VcHBlckNhc2UoKX1cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LWdyYXktNjAwIG1iLTRcIj57cHJvZHVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XCI+XG4gICAgICAgICAgICAgICAgUHJpY2U6IOKCuSB7KHByb2R1Y3QucHJpY2UgKiA4My44OSkudG9GaXhlZCgyKX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW1kIHAtMSB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIGZvbnQtYm9sZCBiZy1ncmVlbi01MDAgbWItNFwiPlxuICAgICAgICAgICAgICAgIHtwcm9kdWN0LmRpc2NvdW50UGVyY2VudGFnZX0lIE9GRlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tZCB0ZXh0LWdyYXktNTAwXCI+U0tVOiB7cHJvZHVjdC5za3V9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tZCB0ZXh0LWdyYXktNTAwXCI+QnJhbmQ6IHtwcm9kdWN0LmJyYW5kfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbWQgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICBBdmFpbGFiaWxpdHk6IHtwcm9kdWN0LmF2YWlsYWJpbGl0eVN0YXR1c31cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbWQgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICBXYXJyYW50eToge3Byb2R1Y3Qud2FycmFudHlJbmZvcm1hdGlvbn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbWQgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICBTaGlwcGluZzoge3Byb2R1Y3Quc2hpcHBpbmdJbmZvcm1hdGlvbn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbWQgdGV4dC1ncmF5LTUwMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICBSYXRpbmc6IHtwcm9kdWN0LnJhdGluZy50b0ZpeGVkKDApfStcbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBTZWN0aW9uIDM6IFByb2R1Y3QgUmV2aWV3cyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItNFwiPlJldmlld3M8L2gyPlxuICAgICAgICAgICAge3Byb2R1Y3QucmV2aWV3cy5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICBwcm9kdWN0LnJldmlld3MubWFwKChyZXZpZXc6IGFueSwgaW5kZXg6IG51bWJlcikgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi00IHAtNCBib3JkZXIgcm91bmRlZC1tZCBzaGFkb3ctc21cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICB7cmV2aWV3LnJldmlld2VyTmFtZX0gLSB7cmV2aWV3LnJhdGluZ33irZBcbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbWQgdGV4dC1ncmF5LTYwMFwiPntyZXZpZXcuY29tbWVudH08L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKHJldmlldy5kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoKX1cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxwPk5vIHJldmlld3MgeWV0LjwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPHA+UHJvZHVjdCBub3QgZm91bmQuPC9wPlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsImdldEFsbFByb2R1Y3QiLCJnZXRTbWFydFBob25lIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsImdldEFsbFByb2R1Y3RTZWxlY3RvciIsInVzZUVmZmVjdCIsIlByb2R1Y3REZXRhaWxzIiwicGFyYW1zIiwiZGlzcGF0Y2giLCJkZWJvdW5jZWREaXNwYXRjaCIsInNldFRpbWVvdXQiLCJpZCIsImNsZWFyVGltZW91dCIsInByb2R1Y3RzIiwicHJvZHVjdCIsImZpbmQiLCJOdW1iZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJ0aHVtYm5haWwiLCJhbHQiLCJ0aXRsZSIsIndpZHRoIiwiaGVpZ2h0IiwicCIsImgxIiwiY2F0ZWdvcnkiLCJ0b1VwcGVyQ2FzZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJ0b0ZpeGVkIiwiZGlzY291bnRQZXJjZW50YWdlIiwic2t1IiwiYnJhbmQiLCJhdmFpbGFiaWxpdHlTdGF0dXMiLCJ3YXJyYW50eUluZm9ybWF0aW9uIiwic2hpcHBpbmdJbmZvcm1hdGlvbiIsInJhdGluZyIsImgyIiwicmV2aWV3cyIsImxlbmd0aCIsIm1hcCIsInJldmlldyIsImluZGV4IiwicmV2aWV3ZXJOYW1lIiwiY29tbWVudCIsIkRhdGUiLCJkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProductDetails/index.tsx\n"));

/***/ })

});