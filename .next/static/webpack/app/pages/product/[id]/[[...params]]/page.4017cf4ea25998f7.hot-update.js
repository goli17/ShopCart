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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductDetails; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _Lib_SmartPhone_smartphone_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Lib/SmartPhone/smartphone.actions */ \"(app-pages-browser)/./src/Lib/SmartPhone/smartphone.actions.tsx\");\n/* harmony import */ var _Lib_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Lib/hooks */ \"(app-pages-browser)/./src/Lib/hooks.tsx\");\n/* harmony import */ var _Lib_SmartPhone_smartphone_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Lib/SmartPhone/smartphone.selector */ \"(app-pages-browser)/./src/Lib/SmartPhone/smartphone.selector.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ProductDetails(param) {\n    let { params } = param;\n    _s();\n    const dispatch = (0,_Lib_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const debouncedDispatch = setTimeout(()=>{\n            if (params.params.id > 30) {\n                dispatch((0,_Lib_SmartPhone_smartphone_actions__WEBPACK_IMPORTED_MODULE_2__.getAllProduct)());\n            }\n        }, 300);\n        return ()=>clearTimeout(debouncedDispatch);\n    }, [\n        dispatch\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const debouncedDispatch = setTimeout(()=>{\n            if (params.params.id < 30) {\n                dispatch((0,_Lib_SmartPhone_smartphone_actions__WEBPACK_IMPORTED_MODULE_2__.getSmartPhone)());\n            }\n        }, 300);\n        return ()=>clearTimeout(debouncedDispatch);\n    }, [\n        dispatch\n    ]);\n    const { products } = (0,_Lib_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(_Lib_SmartPhone_smartphone_selector__WEBPACK_IMPORTED_MODULE_4__.getAllProductSelector);\n    const product = products === null || products === void 0 ? void 0 : products.find((product)=>product.id === Number(params.params.id));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: product ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"  flex flex-col w-full md:flex-row gap-8 p-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1 flex justify-center items-start\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: product.thumbnail,\n                        alt: product.title,\n                        width: 400,\n                        height: 400,\n                        className: \"object-contain\"\n                    }, void 0, false, {\n                        fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-3xl font-semibold mb-4\",\n                            children: product.title\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg text-gray-600 mb-4\",\n                            children: product.category.toUpperCase()\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-lg text-gray-600 mb-4\",\n                            children: product.description\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xl font-bold mb-4\",\n                                    children: [\n                                        \"Price: ₹ \",\n                                        (product.price * 83.89).toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-md p-1 text-white text-center font-bold bg-green-500 mb-4\",\n                                    children: [\n                                        product.discountPercentage,\n                                        \"% OFF\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-md text-gray-500\",\n                            children: [\n                                \"SKU: \",\n                                product.sku\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-md text-gray-500\",\n                            children: [\n                                \"Brand: \",\n                                product.brand\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-md text-gray-500\",\n                            children: [\n                                \"Availability: \",\n                                product.availabilityStatus\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-md text-gray-500\",\n                            children: [\n                                \"Warranty: \",\n                                product.warrantyInformation\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-md text-gray-500\",\n                            children: [\n                                \"Shipping: \",\n                                product.shippingInformation\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-md text-gray-500 flex items-center\",\n                            children: [\n                                \"Rating: \",\n                                product.rating.toFixed(0),\n                                \"+\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-semibold mb-4\",\n                            children: \"Reviews\"\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, this),\n                        product.reviews.length > 0 ? product.reviews.map((review, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-4 p-4 border rounded-md shadow-sm\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg font-semibold\",\n                                        children: [\n                                            review.reviewerName,\n                                            \" - \",\n                                            review.rating,\n                                            \"⭐\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-md text-gray-600\",\n                                        children: review.comment\n                                    }, void 0, false, {\n                                        fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 19\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm text-gray-400\",\n                                        children: new Date(review.date).toLocaleDateString()\n                                    }, void 0, false, {\n                                        fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                                lineNumber: 90,\n                                columnNumber: 17\n                            }, this)) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"No reviews yet.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n            lineNumber: 40,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Product not found.\"\n        }, void 0, false, {\n            fileName: \"/Users/saurabh/Desktop/ShopCart/ShopCart/src/components/ProductDetails/index.tsx\",\n            lineNumber: 109,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(ProductDetails, \"QQM+NheFzm+Nai4wp2+8pVuAyew=\", false, function() {\n    return [\n        _Lib_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        _Lib_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppSelector\n    ];\n});\n_c = ProductDetails;\nvar _c;\n$RefreshReg$(_c, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3REZXRhaWxzL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQytCO0FBSWM7QUFDZ0I7QUFDZ0I7QUFDM0M7QUFFbkIsU0FBU08sZUFBZSxLQUFlO1FBQWYsRUFBRUMsTUFBTSxFQUFPLEdBQWY7O0lBQ3JDLE1BQU1DLFdBQVdOLDBEQUFjQTtJQUMvQkcsZ0RBQVNBLENBQUM7UUFDUixNQUFNSSxvQkFBb0JDLFdBQVc7WUFDbkMsSUFBSUgsT0FBT0EsTUFBTSxDQUFDSSxFQUFFLEdBQUcsSUFBSTtnQkFDekJILFNBQVNSLGlGQUFhQTtZQUN4QjtRQUNGLEdBQUc7UUFFSCxPQUFPLElBQU1ZLGFBQWFIO0lBQzVCLEdBQUc7UUFBQ0Q7S0FBUztJQUNiSCxnREFBU0EsQ0FBQztRQUNSLE1BQU1JLG9CQUFvQkMsV0FBVztZQUNuQyxJQUFJSCxPQUFPQSxNQUFNLENBQUNJLEVBQUUsR0FBRyxJQUFJO2dCQUN6QkgsU0FBU1AsaUZBQWFBO1lBQ3hCO1FBQ0YsR0FBRztRQUVILE9BQU8sSUFBTVcsYUFBYUg7SUFDNUIsR0FBRztRQUFDRDtLQUFTO0lBRWIsTUFBTSxFQUFFSyxRQUFRLEVBQUUsR0FBR1YsMERBQWNBLENBQUNDLHNGQUFxQkE7SUFDekQsTUFBTVUsVUFBVUQscUJBQUFBLCtCQUFBQSxTQUFVRSxJQUFJLENBQzVCLENBQUNELFVBQWlCQSxRQUFRSCxFQUFFLEtBQUtLLE9BQU9ULE9BQU9BLE1BQU0sQ0FBQ0ksRUFBRTtJQUcxRCxxQkFDRTtrQkFDR0csd0JBQ0MsOERBQUNHO1lBQUlDLFdBQVU7OzhCQUViLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ25CLGtEQUFLQTt3QkFDSm9CLEtBQUtMLFFBQVFNLFNBQVM7d0JBQ3RCQyxLQUFLUCxRQUFRUSxLQUFLO3dCQUNsQkMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUk4sV0FBVTs7Ozs7Ozs7Ozs7OEJBS2QsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ087NEJBQUdQLFdBQVU7c0NBQStCSixRQUFRUSxLQUFLOzs7Ozs7c0NBQzFELDhEQUFDSTs0QkFBRVIsV0FBVTtzQ0FDVkosUUFBUWEsUUFBUSxDQUFDQyxXQUFXOzs7Ozs7c0NBRy9CLDhEQUFDRjs0QkFBRVIsV0FBVTtzQ0FBOEJKLFFBQVFlLFdBQVc7Ozs7OztzQ0FDOUQsOERBQUNaOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ1E7b0NBQUVSLFdBQVU7O3dDQUF5Qjt3Q0FDekJKLENBQUFBLFFBQVFnQixLQUFLLEdBQUcsS0FBSSxFQUFHQyxPQUFPLENBQUM7Ozs7Ozs7OENBRTVDLDhEQUFDTDtvQ0FBRVIsV0FBVTs7d0NBQ1ZKLFFBQVFrQixrQkFBa0I7d0NBQUM7Ozs7Ozs7Ozs7Ozs7c0NBSWhDLDhEQUFDTjs0QkFBRVIsV0FBVTs7Z0NBQXdCO2dDQUFNSixRQUFRbUIsR0FBRzs7Ozs7OztzQ0FDdEQsOERBQUNQOzRCQUFFUixXQUFVOztnQ0FBd0I7Z0NBQVFKLFFBQVFvQixLQUFLOzs7Ozs7O3NDQUMxRCw4REFBQ1I7NEJBQUVSLFdBQVU7O2dDQUF3QjtnQ0FDcEJKLFFBQVFxQixrQkFBa0I7Ozs7Ozs7c0NBRTNDLDhEQUFDVDs0QkFBRVIsV0FBVTs7Z0NBQXdCO2dDQUN4QkosUUFBUXNCLG1CQUFtQjs7Ozs7OztzQ0FFeEMsOERBQUNWOzRCQUFFUixXQUFVOztnQ0FBd0I7Z0NBQ3hCSixRQUFRdUIsbUJBQW1COzs7Ozs7O3NDQUV4Qyw4REFBQ1g7NEJBQUVSLFdBQVU7O2dDQUEwQztnQ0FDNUNKLFFBQVF3QixNQUFNLENBQUNQLE9BQU8sQ0FBQztnQ0FBRzs7Ozs7Ozs7Ozs7Ozs4QkFLdkMsOERBQUNkO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ3FCOzRCQUFHckIsV0FBVTtzQ0FBOEI7Ozs7Ozt3QkFDM0NKLFFBQVEwQixPQUFPLENBQUNDLE1BQU0sR0FBRyxJQUN4QjNCLFFBQVEwQixPQUFPLENBQUNFLEdBQUcsQ0FBQyxDQUFDQyxRQUFhQyxzQkFDaEMsOERBQUMzQjtnQ0FFQ0MsV0FBVTs7a0RBRVYsOERBQUNRO3dDQUFFUixXQUFVOzs0Q0FDVnlCLE9BQU9FLFlBQVk7NENBQUM7NENBQUlGLE9BQU9MLE1BQU07NENBQUM7Ozs7Ozs7a0RBRXpDLDhEQUFDWjt3Q0FBRVIsV0FBVTtrREFBeUJ5QixPQUFPRyxPQUFPOzs7Ozs7a0RBQ3BELDhEQUFDcEI7d0NBQUVSLFdBQVU7a0RBQ1YsSUFBSTZCLEtBQUtKLE9BQU9LLElBQUksRUFBRUMsa0JBQWtCOzs7Ozs7OytCQVJ0Q0w7Ozs7c0RBYVQsOERBQUNsQjtzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBS1QsOERBQUNBO3NCQUFFOzs7Ozs7O0FBSVg7R0F0R3dCcEI7O1FBQ0xKLHNEQUFjQTtRQW9CVkMsc0RBQWNBOzs7S0FyQmJHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3REZXRhaWxzL2luZGV4LnRzeD85NGJkIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQge1xuICBnZXRBbGxQcm9kdWN0LFxuICBnZXRTbWFydFBob25lLFxufSBmcm9tIFwiQC9MaWIvU21hcnRQaG9uZS9zbWFydHBob25lLmFjdGlvbnNcIjtcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL0xpYi9ob29rc1wiO1xuaW1wb3J0IHsgZ2V0QWxsUHJvZHVjdFNlbGVjdG9yIH0gZnJvbSBcIkAvTGliL1NtYXJ0UGhvbmUvc21hcnRwaG9uZS5zZWxlY3RvclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3REZXRhaWxzKHsgcGFyYW1zIH06IGFueSkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZGVib3VuY2VkRGlzcGF0Y2ggPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChwYXJhbXMucGFyYW1zLmlkID4gMzApIHtcbiAgICAgICAgZGlzcGF0Y2goZ2V0QWxsUHJvZHVjdCgpKTtcbiAgICAgIH1cbiAgICB9LCAzMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dChkZWJvdW5jZWREaXNwYXRjaCk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGRlYm91bmNlZERpc3BhdGNoID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAocGFyYW1zLnBhcmFtcy5pZCA8IDMwKSB7XG4gICAgICAgIGRpc3BhdGNoKGdldFNtYXJ0UGhvbmUoKSk7XG4gICAgICB9XG4gICAgfSwgMzAwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQoZGVib3VuY2VkRGlzcGF0Y2gpO1xuICB9LCBbZGlzcGF0Y2hdKTtcblxuICBjb25zdCB7IHByb2R1Y3RzIH0gPSB1c2VBcHBTZWxlY3RvcihnZXRBbGxQcm9kdWN0U2VsZWN0b3IpO1xuICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdHM/LmZpbmQoXG4gICAgKHByb2R1Y3Q6IGFueSkgPT4gcHJvZHVjdC5pZCA9PT0gTnVtYmVyKHBhcmFtcy5wYXJhbXMuaWQpXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3Byb2R1Y3QgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiICBmbGV4IGZsZXgtY29sIHctZnVsbCBtZDpmbGV4LXJvdyBnYXAtOCBwLTVcIj5cbiAgICAgICAgICB7LyogU2VjdGlvbiAxOiBQcm9kdWN0IEltYWdlICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QudGh1bWJuYWlsfVxuICAgICAgICAgICAgICBhbHQ9e3Byb2R1Y3QudGl0bGV9XG4gICAgICAgICAgICAgIHdpZHRoPXs0MDB9XG4gICAgICAgICAgICAgIGhlaWdodD17NDAwfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgey8qIFNlY3Rpb24gMjogUHJvZHVjdCBEZXRhaWxzICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1zZW1pYm9sZCBtYi00XCI+e3Byb2R1Y3QudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmF5LTYwMCBtYi00XCI+XG4gICAgICAgICAgICAgIHtwcm9kdWN0LmNhdGVnb3J5LnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgdGV4dC1ncmF5LTYwMCBtYi00XCI+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItNFwiPlxuICAgICAgICAgICAgICAgIFByaWNlOiDigrkgeyhwcm9kdWN0LnByaWNlICogODMuODkpLnRvRml4ZWQoMil9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tZCBwLTEgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBmb250LWJvbGQgYmctZ3JlZW4tNTAwIG1iLTRcIj5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5kaXNjb3VudFBlcmNlbnRhZ2V9JSBPRkZcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbWQgdGV4dC1ncmF5LTUwMFwiPlNLVToge3Byb2R1Y3Quc2t1fTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbWQgdGV4dC1ncmF5LTUwMFwiPkJyYW5kOiB7cHJvZHVjdC5icmFuZH08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW1kIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgQXZhaWxhYmlsaXR5OiB7cHJvZHVjdC5hdmFpbGFiaWxpdHlTdGF0dXN9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW1kIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgV2FycmFudHk6IHtwcm9kdWN0LndhcnJhbnR5SW5mb3JtYXRpb259XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW1kIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgU2hpcHBpbmc6IHtwcm9kdWN0LnNoaXBwaW5nSW5mb3JtYXRpb259XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW1kIHRleHQtZ3JheS01MDAgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgUmF0aW5nOiB7cHJvZHVjdC5yYXRpbmcudG9GaXhlZCgwKX0rXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogU2VjdGlvbiAzOiBQcm9kdWN0IFJldmlld3MgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTFcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIG1iLTRcIj5SZXZpZXdzPC9oMj5cbiAgICAgICAgICAgIHtwcm9kdWN0LnJldmlld3MubGVuZ3RoID4gMCA/IChcbiAgICAgICAgICAgICAgcHJvZHVjdC5yZXZpZXdzLm1hcCgocmV2aWV3OiBhbnksIGluZGV4OiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNCBwLTQgYm9yZGVyIHJvdW5kZWQtbWQgc2hhZG93LXNtXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAge3Jldmlldy5yZXZpZXdlck5hbWV9IC0ge3Jldmlldy5yYXRpbmd94q2QXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW1kIHRleHQtZ3JheS02MDBcIj57cmV2aWV3LmNvbW1lbnR9PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShyZXZpZXcuZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8cD5ObyByZXZpZXdzIHlldC48L3A+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxwPlByb2R1Y3Qgbm90IGZvdW5kLjwvcD5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJnZXRBbGxQcm9kdWN0IiwiZ2V0U21hcnRQaG9uZSIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJnZXRBbGxQcm9kdWN0U2VsZWN0b3IiLCJ1c2VFZmZlY3QiLCJQcm9kdWN0RGV0YWlscyIsInBhcmFtcyIsImRpc3BhdGNoIiwiZGVib3VuY2VkRGlzcGF0Y2giLCJzZXRUaW1lb3V0IiwiaWQiLCJjbGVhclRpbWVvdXQiLCJwcm9kdWN0cyIsInByb2R1Y3QiLCJmaW5kIiwiTnVtYmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwidGh1bWJuYWlsIiwiYWx0IiwidGl0bGUiLCJ3aWR0aCIsImhlaWdodCIsImgxIiwicCIsImNhdGVnb3J5IiwidG9VcHBlckNhc2UiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwidG9GaXhlZCIsImRpc2NvdW50UGVyY2VudGFnZSIsInNrdSIsImJyYW5kIiwiYXZhaWxhYmlsaXR5U3RhdHVzIiwid2FycmFudHlJbmZvcm1hdGlvbiIsInNoaXBwaW5nSW5mb3JtYXRpb24iLCJyYXRpbmciLCJoMiIsInJldmlld3MiLCJsZW5ndGgiLCJtYXAiLCJyZXZpZXciLCJpbmRleCIsInJldmlld2VyTmFtZSIsImNvbW1lbnQiLCJEYXRlIiwiZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProductDetails/index.tsx\n"));

/***/ })

});