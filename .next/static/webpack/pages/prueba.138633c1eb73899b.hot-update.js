"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/prueba",{

/***/ "./pages/prueba.jsx":
/*!**************************!*\
  !*** ./pages/prueba.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootswatch_dist_cosmo_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootswatch/dist/cosmo/bootstrap.min.css */ \"./node_modules/bootswatch/dist/cosmo/bootstrap.min.css\");\n/* harmony import */ var bootswatch_dist_cosmo_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootswatch_dist_cosmo_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Projects = ()=>{\n    _s();\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"https://api.github.com/users/WilsonFallasG/repos\").then((response)=>response.json()).then((data)=>{\n            setProjects(data);\n        }).catch((error)=>{\n            console.error(\"Error fetching GitHub projects:\", error);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mt-4 text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Proyectos de GitHub\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\pages\\\\prueba.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel, {\n                className: \"w-50 mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"gg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\pages\\\\prueba.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    projects.map((param)=>/*#__PURE__*/ {\n                        let { id , name , description , html_url  } = param;\n                        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Item, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"github.png\",\n                                    alt: \"GitHub Logo\",\n                                    className: \"d-block w-100\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\pages\\\\prueba.jsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.Carousel.Caption, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-primary\",\n                                            children: name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\pages\\\\prueba.jsx\",\n                                            lineNumber: 29,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: description\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\pages\\\\prueba.jsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: html_url,\n                                            target: \"_blank\",\n                                            rel: \"noopener noreferrer\",\n                                            children: \"Ver en GitHub\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\pages\\\\prueba.jsx\",\n                                            lineNumber: 31,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\pages\\\\prueba.jsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, id, true, {\n                            fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\pages\\\\prueba.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\pages\\\\prueba.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\pages\\\\prueba.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Projects, \"TSrpuQX6QU8EgjQSxaAzj2u9i4o=\");\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcnVlYmEuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE0QztBQUNEO0FBQ0c7QUFDRztBQUVqRCxNQUFNRyxXQUFXLElBQU07O0lBQ3JCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RNLE1BQU0sb0RBQ0hDLElBQUksQ0FBQyxDQUFDQyxXQUFhQSxTQUFTQyxJQUFJLElBQ2hDRixJQUFJLENBQUMsQ0FBQ0csT0FBUztZQUNkTCxZQUFZSztRQUNkLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQyxRQUFVO1lBQ2hCQyxRQUFRRCxLQUFLLENBQUMsbUNBQW1DQTtRQUNuRDtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ2QscURBQVFBO2dCQUFDYSxXQUFVOztrQ0FDbEIsOERBQUNFO2tDQUFHOzs7Ozs7b0JBQ0hiLFNBQVNjLEdBQUcsQ0FBQyx1QkFDWjs0QkFEYSxFQUFFQyxHQUFFLEVBQUVDLEtBQUksRUFBRUMsWUFBVyxFQUFFQyxTQUFRLEVBQUU7K0JBQ2hELDhEQUFDcEIsMERBQWE7OzhDQUNaLDhEQUFDc0I7b0NBQUlDLEtBQUk7b0NBQWFDLEtBQUk7b0NBQWNYLFdBQVU7Ozs7Ozs4Q0FDbEQsOERBQUNiLDZEQUFnQjs7c0RBQ2YsOERBQUMwQjs0Q0FBR2IsV0FBVTtzREFBZ0JLOzs7Ozs7c0RBQzlCLDhEQUFDUztzREFBR1I7Ozs7OztzREFDSiw4REFBQ1M7NENBQUVDLE1BQU1UOzRDQUFVVSxRQUFPOzRDQUFTQyxLQUFJO3NEQUFzQjs7Ozs7Ozs7Ozs7OzsyQkFMN0NkOzs7OztvQkFPTDs7Ozs7Ozs7Ozs7OztBQUt6QjtHQWhDTWhCO0tBQUFBO0FBa0NOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BydWViYS5qc3g/MTc1NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0ICdib290c3dhdGNoL2Rpc3QvY29zbW8vYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5cclxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9XaWxzb25GYWxsYXNHL3JlcG9zJylcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0UHJvamVjdHMoZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBHaXRIdWIgcHJvamVjdHM6JywgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC00IHRleHQtY2VudGVyXCI+XHJcbiAgICAgIDxoMT5Qcm95ZWN0b3MgZGUgR2l0SHViPC9oMT5cclxuICAgICAgPENhcm91c2VsIGNsYXNzTmFtZT1cInctNTAgbXgtYXV0b1wiPlxyXG4gICAgICAgIDxoMj5nZzwvaDI+XHJcbiAgICAgICAge3Byb2plY3RzLm1hcCgoeyBpZCwgbmFtZSwgZGVzY3JpcHRpb24sIGh0bWxfdXJsIH0pID0+IChcclxuICAgICAgICAgIDxDYXJvdXNlbC5JdGVtIGtleT17aWR9PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImdpdGh1Yi5wbmdcIiBhbHQ9XCJHaXRIdWIgTG9nb1wiIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDBcIiAvPlxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWwuQ2FwdGlvbj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+e25hbWV9PC9oMz5cclxuICAgICAgICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9e2h0bWxfdXJsfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+VmVyIGVuIEdpdEh1YjwvYT5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0Nhcm91c2VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDYXJvdXNlbCIsIlByb2plY3RzIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0cyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDIiLCJtYXAiLCJpZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImh0bWxfdXJsIiwiSXRlbSIsImltZyIsInNyYyIsImFsdCIsIkNhcHRpb24iLCJoMyIsInAiLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/prueba.jsx\n"));

/***/ })

});