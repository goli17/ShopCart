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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _Lib_SmartPhone_smartphone_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Lib/SmartPhone/smartphone.actions */ \"(app-pages-browser)/./src/Lib/SmartPhone/smartphone.actions.tsx\");\n/* harmony import */ var _Lib_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Lib/hooks */ \"(app-pages-browser)/./src/Lib/hooks.tsx\");\n/* harmony import */ var _Lib_SmartPhone_smartphone_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Lib/SmartPhone/smartphone.selector */ \"(app-pages-browser)/./src/Lib/SmartPhone/smartphone.selector.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ProductDetails(param) {\n    let { params } = param;\n    _s();\n    const dispatch = (0,_Lib_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const debouncedDispatch = setTimeout(()=>{\n            if (params.params.id < 30) {\n                dispatch((0,_Lib_SmartPhone_smartphone_actions__WEBPACK_IMPORTED_MODULE_2__.getAllProduct)());\n            } else {\n                dispatch((0,_Lib_SmartPhone_smartphone_actions__WEBPACK_IMPORTED_MODULE_2__.getSmartPhone)());\n            }\n        }, 300);\n        return ()=>clearTimeout(debouncedDispatch);\n    }, [\n        dispatch,\n        params.params.id\n    ]);\n    const { products } = (0,_Lib_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(_Lib_SmartPhone_smartphone_selector__WEBPACK_IMPORTED_MODULE_4__.getAllProductSelector);\n    const product = products === null || products === void 0 ? void 0 : products.find((product)=>product.id === Number(params.params.id));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: product ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col w-full md:flex-row gap-8 p-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1 flex flex-col gap-5 justify-center items-start\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: product.thumbnail,\n                            alt: product.title,\n                            width: 400,\n                            height: 400,\n                            className: \"object-contain border-2\"\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"w-full  flex items-center gap-2 justify-center\",\n                            children: product.images.slice(1, 3).map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    src: image,\n                                    alt: product.title,\n                                    width: 100,\n                                    height: 200,\n                                    className: \"object-cover border-2\"\n                                }, index, false, {\n                                    fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 19\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl font-semibold mb-4\",\n                            children: product.title\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg text-gray-600 mb-4\",\n                            children: product.category.toUpperCase()\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg text-gray-600 mb-4\",\n                            children: product.description\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xl font-bold mb-4\",\n                                    children: [\n                                        \"Price: ₹ \",\n                                        (product.price * 83.89).toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-md p-1 text-white text-center font-bold bg-green-500 mb-4\",\n                                    children: [\n                                        product.discountPercentage,\n                                        \"% OFF\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-md text-gray-500\",\n                            children: [\n                                \"SKU: \",\n                                product.sku\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-md text-gray-500\",\n                            children: [\n                                \"Brand: \",\n                                product.brand\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-md text-gray-500\",\n                            children: [\n                                \"Availability: \",\n                                product.availabilityStatus\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-md text-gray-500\",\n                            children: [\n                                \"Warranty: \",\n                                product.warrantyInformation\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 81,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-md text-gray-500\",\n                            children: [\n                                \"Shipping: \",\n                                product.shippingInformation\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-md text-gray-500 flex items-center\",\n                            children: [\n                                \"Rating: \",\n                                product.rating.toFixed(0),\n                                \"+\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-semibold mb-4\",\n                            children: \"Reviews\"\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 13\n                        }, this),\n                        product.reviews.length > 0 ? product.reviews.map((review, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4 p-4 border rounded-md shadow-sm\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg font-semibold\",\n                                        children: [\n                                            review.reviewerName,\n                                            \" - \",\n                                            review.rating,\n                                            \"⭐\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                        lineNumber: 101,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-md text-gray-600\",\n                                        children: review.comment\n                                    }, void 0, false, {\n                                        fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm text-gray-400\",\n                                        children: new Date(review.date).toLocaleDateString()\n                                    }, void 0, false, {\n                                        fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 17\n                            }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"No reviews yet.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 111,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Product not found.\"\n        }, void 0, false, {\n            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n            lineNumber: 116,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(ProductDetails, \"pqxkpUG4fEf+6B9LTuGVY+qCvVo=\", false, function() {\n    return [\n        _Lib_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        _Lib_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = ProductDetails;\nvar _c;\n$RefreshReg$(_c, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3REZXRhaWxzL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQytCO0FBSWM7QUFDZ0I7QUFDZ0I7QUFDM0M7QUFFbkIsU0FBU08sZUFBZSxLQUFlO1FBQWYsRUFBRUMsTUFBTSxFQUFPLEdBQWY7O0lBQ3JDLE1BQU1DLFdBQVdOLDBEQUFjQTtJQUUvQkcsZ0RBQVNBLENBQUM7UUFDUixNQUFNSSxvQkFBb0JDLFdBQVc7WUFDbkMsSUFBSUgsT0FBT0EsTUFBTSxDQUFDSSxFQUFFLEdBQUcsSUFBSTtnQkFDekJILFNBQVNSLGlGQUFhQTtZQUN4QixPQUFPO2dCQUNMUSxTQUFTUCxpRkFBYUE7WUFDeEI7UUFDRixHQUFHO1FBQ0gsT0FBTyxJQUFNVyxhQUFhSDtJQUM1QixHQUFHO1FBQUNEO1FBQVVELE9BQU9BLE1BQU0sQ0FBQ0ksRUFBRTtLQUFDO0lBRS9CLE1BQU0sRUFBRUUsUUFBUSxFQUFFLEdBQUdWLDBEQUFjQSxDQUFDQyxzRkFBcUJBO0lBQ3pELE1BQU1VLFVBQVVELHFCQUFBQSwrQkFBQUEsU0FBVUUsSUFBSSxDQUM1QixDQUFDRCxVQUFpQkEsUUFBUUgsRUFBRSxLQUFLSyxPQUFPVCxPQUFPQSxNQUFNLENBQUNJLEVBQUU7SUFHMUQscUJBQ0U7a0JBQ0dHLHdCQUNDLDhEQUFDRztZQUFJQyxXQUFVOzs4QkFFYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDbkIsa0RBQUtBOzRCQUNKb0IsS0FBS0wsUUFBUU0sU0FBUzs0QkFDdEJDLEtBQUtQLFFBQVFRLEtBQUs7NEJBQ2xCQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSTixXQUFVOzs7Ozs7c0NBRVosOERBQUNPOzRCQUFFUCxXQUFVO3NDQUNWSixRQUFRWSxNQUFNLENBQ1pDLEtBQUssQ0FBQyxHQUFHLEdBQ1RDLEdBQUcsQ0FBQyxDQUFDQyxPQUFlQyxzQkFDbkIsOERBQUMvQixrREFBS0E7b0NBRUpvQixLQUFLVTtvQ0FDTFIsS0FBS1AsUUFBUVEsS0FBSztvQ0FDbEJDLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JOLFdBQVU7bUNBTExZOzs7Ozs7Ozs7Ozs7Ozs7OzhCQVlmLDhEQUFDYjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNhOzRCQUFHYixXQUFVO3NDQUErQkosUUFBUVEsS0FBSzs7Ozs7O3NDQUMxRCw4REFBQ0c7NEJBQUVQLFdBQVU7c0NBQ1ZKLFFBQVFrQixRQUFRLENBQUNDLFdBQVc7Ozs7OztzQ0FHL0IsOERBQUNSOzRCQUFFUCxXQUFVO3NDQUE4QkosUUFBUW9CLFdBQVc7Ozs7OztzQ0FDOUQsOERBQUNqQjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNPO29DQUFFUCxXQUFVOzt3Q0FBeUI7d0NBQ3pCSixDQUFBQSxRQUFRcUIsS0FBSyxHQUFHLEtBQUksRUFBR0MsT0FBTyxDQUFDOzs7Ozs7OzhDQUU1Qyw4REFBQ1g7b0NBQUVQLFdBQVU7O3dDQUNWSixRQUFRdUIsa0JBQWtCO3dDQUFDOzs7Ozs7Ozs7Ozs7O3NDQUloQyw4REFBQ1o7NEJBQUVQLFdBQVU7O2dDQUF3QjtnQ0FBTUosUUFBUXdCLEdBQUc7Ozs7Ozs7c0NBQ3RELDhEQUFDYjs0QkFBRVAsV0FBVTs7Z0NBQXdCO2dDQUFRSixRQUFReUIsS0FBSzs7Ozs7OztzQ0FDMUQsOERBQUNkOzRCQUFFUCxXQUFVOztnQ0FBd0I7Z0NBQ3BCSixRQUFRMEIsa0JBQWtCOzs7Ozs7O3NDQUUzQyw4REFBQ2Y7NEJBQUVQLFdBQVU7O2dDQUF3QjtnQ0FDeEJKLFFBQVEyQixtQkFBbUI7Ozs7Ozs7c0NBRXhDLDhEQUFDaEI7NEJBQUVQLFdBQVU7O2dDQUF3QjtnQ0FDeEJKLFFBQVE0QixtQkFBbUI7Ozs7Ozs7c0NBRXhDLDhEQUFDakI7NEJBQUVQLFdBQVU7O2dDQUEwQztnQ0FDNUNKLFFBQVE2QixNQUFNLENBQUNQLE9BQU8sQ0FBQztnQ0FBRzs7Ozs7Ozs7Ozs7Ozs4QkFLdkMsOERBQUNuQjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUMwQjs0QkFBRzFCLFdBQVU7c0NBQThCOzs7Ozs7d0JBQzNDSixRQUFRK0IsT0FBTyxDQUFDQyxNQUFNLEdBQUcsSUFDeEJoQyxRQUFRK0IsT0FBTyxDQUFDakIsR0FBRyxDQUFDLENBQUNtQixRQUFhakIsc0JBQ2hDLDhEQUFDYjtnQ0FFQ0MsV0FBVTs7a0RBRVYsOERBQUNPO3dDQUFFUCxXQUFVOzs0Q0FDVjZCLE9BQU9DLFlBQVk7NENBQUM7NENBQUlELE9BQU9KLE1BQU07NENBQUM7Ozs7Ozs7a0RBRXpDLDhEQUFDbEI7d0NBQUVQLFdBQVU7a0RBQXlCNkIsT0FBT0UsT0FBTzs7Ozs7O2tEQUNwRCw4REFBQ3hCO3dDQUFFUCxXQUFVO2tEQUNWLElBQUlnQyxLQUFLSCxPQUFPSSxJQUFJLEVBQUVDLGtCQUFrQjs7Ozs7OzsrQkFSdEN0Qjs7OztzREFhVCw4REFBQ0w7c0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUtULDhEQUFDQTtzQkFBRTs7Ozs7OztBQUlYO0dBN0d3Qm5COztRQUNMSixzREFBY0E7UUFhVkMsc0RBQWNBOzs7S0FkYkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdERldGFpbHMvaW5kZXgudHN4Pzk0YmQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7XG4gIGdldEFsbFByb2R1Y3QsXG4gIGdldFNtYXJ0UGhvbmUsXG59IGZyb20gXCJAL0xpYi9TbWFydFBob25lL3NtYXJ0cGhvbmUuYWN0aW9uc1wiO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIkAvTGliL2hvb2tzXCI7XG5pbXBvcnQgeyBnZXRBbGxQcm9kdWN0U2VsZWN0b3IgfSBmcm9tIFwiQC9MaWIvU21hcnRQaG9uZS9zbWFydHBob25lLnNlbGVjdG9yXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdERldGFpbHMoeyBwYXJhbXMgfTogYW55KSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRlYm91bmNlZERpc3BhdGNoID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAocGFyYW1zLnBhcmFtcy5pZCA8IDMwKSB7XG4gICAgICAgIGRpc3BhdGNoKGdldEFsbFByb2R1Y3QoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwYXRjaChnZXRTbWFydFBob25lKCkpO1xuICAgICAgfVxuICAgIH0sIDMwMCk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChkZWJvdW5jZWREaXNwYXRjaCk7XG4gIH0sIFtkaXNwYXRjaCwgcGFyYW1zLnBhcmFtcy5pZF0pO1xuXG4gIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHVzZUFwcFNlbGVjdG9yKGdldEFsbFByb2R1Y3RTZWxlY3Rvcik7XG4gIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0cz8uZmluZChcbiAgICAocHJvZHVjdDogYW55KSA9PiBwcm9kdWN0LmlkID09PSBOdW1iZXIocGFyYW1zLnBhcmFtcy5pZClcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7cHJvZHVjdCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBtZDpmbGV4LXJvdyBnYXAtOCBwLTVcIj5cbiAgICAgICAgICB7LyogU2VjdGlvbiAxOiBQcm9kdWN0IEltYWdlICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggZmxleC1jb2wgZ2FwLTUganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QudGh1bWJuYWlsfVxuICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICAgIHdpZHRoPXs0MDB9XG4gICAgICAgICAgICAgIGhlaWdodD17NDAwfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpbiBib3JkZXItMlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidy1mdWxsICBmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICB7cHJvZHVjdC5pbWFnZXNcbiAgICAgICAgICAgICAgICAuc2xpY2UoMSwgMylcbiAgICAgICAgICAgICAgICAubWFwKChpbWFnZTogc3RyaW5nLCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH0gLy8gRml4ZWQgaGVpZ2h0IGZvciBjb25zaXN0ZW5jeVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgYm9yZGVyLTJcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBTZWN0aW9uIDI6IFByb2R1Y3QgRGV0YWlscyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGQgbWItNFwiPntwcm9kdWN0LnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS02MDAgbWItNFwiPlxuICAgICAgICAgICAgICB7cHJvZHVjdC5jYXRlZ29yeS50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIHRleHQtZ3JheS02MDAgbWItNFwiPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTRcIj5cbiAgICAgICAgICAgICAgICBQcmljZTog4oK5IHsocHJvZHVjdC5wcmljZSAqIDgzLjg5KS50b0ZpeGVkKDIpfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbWQgcC0xIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgZm9udC1ib2xkIGJnLWdyZWVuLTUwMCBtYi00XCI+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3QuZGlzY291bnRQZXJjZW50YWdlfSUgT0ZGXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW1kIHRleHQtZ3JheS01MDBcIj5TS1U6IHtwcm9kdWN0LnNrdX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW1kIHRleHQtZ3JheS01MDBcIj5CcmFuZDoge3Byb2R1Y3QuYnJhbmR9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tZCB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgIEF2YWlsYWJpbGl0eToge3Byb2R1Y3QuYXZhaWxhYmlsaXR5U3RhdHVzfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tZCB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgIFdhcnJhbnR5OiB7cHJvZHVjdC53YXJyYW50eUluZm9ybWF0aW9ufVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tZCB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgIFNoaXBwaW5nOiB7cHJvZHVjdC5zaGlwcGluZ0luZm9ybWF0aW9ufVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tZCB0ZXh0LWdyYXktNTAwIGZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgIFJhdGluZzoge3Byb2R1Y3QucmF0aW5nLnRvRml4ZWQoMCl9K1xuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFNlY3Rpb24gMzogUHJvZHVjdCBSZXZpZXdzICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi00XCI+UmV2aWV3czwvaDI+XG4gICAgICAgICAgICB7cHJvZHVjdC5yZXZpZXdzLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICAgIHByb2R1Y3QucmV2aWV3cy5tYXAoKHJldmlldzogYW55LCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTQgcC00IGJvcmRlciByb3VuZGVkLW1kIHNoYWRvdy1zbVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgIHtyZXZpZXcucmV2aWV3ZXJOYW1lfSAtIHtyZXZpZXcucmF0aW5nfeKtkFxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tZCB0ZXh0LWdyYXktNjAwXCI+e3Jldmlldy5jb21tZW50fTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUocmV2aWV3LmRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZygpfVxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHA+Tm8gcmV2aWV3cyB5ZXQuPC9wPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8cD5Qcm9kdWN0IG5vdCBmb3VuZC48L3A+XG4gICAgICApfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiZ2V0QWxsUHJvZHVjdCIsImdldFNtYXJ0UGhvbmUiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiZ2V0QWxsUHJvZHVjdFNlbGVjdG9yIiwidXNlRWZmZWN0IiwiUHJvZHVjdERldGFpbHMiLCJwYXJhbXMiLCJkaXNwYXRjaCIsImRlYm91bmNlZERpc3BhdGNoIiwic2V0VGltZW91dCIsImlkIiwiY2xlYXJUaW1lb3V0IiwicHJvZHVjdHMiLCJwcm9kdWN0IiwiZmluZCIsIk51bWJlciIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsInRodW1ibmFpbCIsImFsdCIsInRpdGxlIiwid2lkdGgiLCJoZWlnaHQiLCJwIiwiaW1hZ2VzIiwic2xpY2UiLCJtYXAiLCJpbWFnZSIsImluZGV4IiwiaDEiLCJjYXRlZ29yeSIsInRvVXBwZXJDYXNlIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsInRvRml4ZWQiLCJkaXNjb3VudFBlcmNlbnRhZ2UiLCJza3UiLCJicmFuZCIsImF2YWlsYWJpbGl0eVN0YXR1cyIsIndhcnJhbnR5SW5mb3JtYXRpb24iLCJzaGlwcGluZ0luZm9ybWF0aW9uIiwicmF0aW5nIiwiaDIiLCJyZXZpZXdzIiwibGVuZ3RoIiwicmV2aWV3IiwicmV2aWV3ZXJOYW1lIiwiY29tbWVudCIsIkRhdGUiLCJkYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProductDetails/index.tsx\n"));

/***/ })

});