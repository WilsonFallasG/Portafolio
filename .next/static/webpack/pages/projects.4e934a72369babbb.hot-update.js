"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projects",{

/***/ "./pages/projects.jsx":
/*!****************************!*\
  !*** ./pages/projects.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Carousel */ \"./node_modules/react-bootstrap/esm/Carousel.js\");\n/* harmony import */ var bootswatch_dist_minty_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootswatch/dist/minty/bootstrap.min.css */ \"./node_modules/bootswatch/dist/minty/bootstrap.min.css\");\n/* harmony import */ var bootswatch_dist_minty_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootswatch_dist_minty_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\nconst GitHubContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst useGitHubProjects = ()=>{\n    _s();\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"https://api.github.com/users/WilsonFallasG/repos\").then((response)=>response.json()).then((data)=>{\n            setProjects(data);\n        }).catch((error)=>{\n            console.error(\"Error fetching GitHub projects:\", error);\n        });\n    }, []);\n    return projects;\n};\n_s(useGitHubProjects, \"TSrpuQX6QU8EgjQSxaAzj2u9i4o=\");\nconst ProjectSlide = (param)=>{\n    let { id , name  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Item, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"github.png\",\n                alt: \"GitHub Logo\",\n                className: \"d-block w-100\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\pages\\\\projects.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4__[\"default\"].Caption, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            \"Id: \",\n                            id,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\pages\\\\projects.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined),\n                            \"Nombre: \",\n                            name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\pages\\\\projects.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Proyecto GitHub\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\pages\\\\projects.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\pages\\\\projects.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\pages\\\\projects.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProjectSlide;\nconst Projects = ()=>{\n    _s1();\n    const projects = useGitHubProjects();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Proyectos\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\pages\\\\projects.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: projects.map((param)=>/*#__PURE__*/ {\n                    let { id , name  } = param;\n                    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProjectSlide, {\n                        id: id,\n                        name: name\n                    }, id, false, {\n                        fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\pages\\\\projects.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\pages\\\\projects.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\pages\\\\projects.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(Projects, \"NPQfx+krtgiUbjyvASrw7XQVfwM=\", false, function() {\n    return [\n        useGitHubProjects\n    ];\n});\n_c1 = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c, _c1;\n$RefreshReg$(_c, \"ProjectSlide\");\n$RefreshReg$(_c1, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBOEU7QUFDcEM7QUFDTTtBQUNDO0FBRWpELE1BQU1PLDhCQUFnQk4sb0RBQWFBO0FBRW5DLE1BQU1PLG9CQUFvQixJQUFNOztJQUM5QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUUzQ0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkUSxNQUFNLG9EQUNIQyxJQUFJLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0MsSUFBSSxJQUNoQ0YsSUFBSSxDQUFDLENBQUNHLE9BQVM7WUFDZEwsWUFBWUs7UUFDZCxHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsUUFBVTtZQUNoQkMsUUFBUUQsS0FBSyxDQUFDLG1DQUFtQ0E7UUFDbkQ7SUFDSixHQUFHLEVBQUU7SUFFTCxPQUFPUjtBQUNUO0dBZk1EO0FBaUJOLE1BQU1XLGVBQWUsU0FBa0I7UUFBakIsRUFBRUMsR0FBRSxFQUFFQyxLQUFJLEVBQUU7SUFDaEMscUJBQ0UsOERBQUNmLHFFQUFhOzswQkFDWiw4REFBQ2lCO2dCQUFJQyxLQUFJO2dCQUFhQyxLQUFJO2dCQUFjQyxXQUFVOzs7Ozs7MEJBQ2xELDhEQUFDcEIsd0VBQWdCOztrQ0FDZiw4REFBQ3NCOzs0QkFBRzs0QkFDR1I7MENBQ0wsOERBQUNTOzs7Ozs0QkFBSzs0QkFDR1I7Ozs7Ozs7a0NBRVgsOERBQUNTO2tDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJWDtLQWRNWDtBQWdCTixNQUFNWSxXQUFXLElBQU07O0lBQ3JCLE1BQU10QixXQUFXRDtJQUVqQixxQkFDRSw4REFBQ0gsMERBQU1BOzswQkFDTCw4REFBQzJCOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUMxQixnRUFBUUE7MEJBQ05HLFNBQVN3QixHQUFHLENBQUMsdUJBQ1o7d0JBRGEsRUFBRWIsR0FBRSxFQUFFQyxLQUFJLEVBQUU7MkJBQ3pCLDhEQUFDRjt3QkFBc0JDLElBQUlBO3dCQUFJQyxNQUFNQTt1QkFBbEJEOzs7OztnQkFBeUI7Ozs7Ozs7Ozs7OztBQUt0RDtJQWJNVzs7UUFDYXZCOzs7TUFEYnVCO0FBZU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMuanN4PzI0YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Nhcm91c2VsJztcclxuaW1wb3J0ICdib290c3dhdGNoL2Rpc3QvbWludHkvYm9vdHN0cmFwLm1pbi5jc3MnOyBcclxuXHJcbmNvbnN0IEdpdEh1YkNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCB1c2VHaXRIdWJQcm9qZWN0cyA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL1dpbHNvbkZhbGxhc0cvcmVwb3MnKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBzZXRQcm9qZWN0cyhkYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIEdpdEh1YiBwcm9qZWN0czonLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIHByb2plY3RzO1xyXG59O1xyXG5cclxuY29uc3QgUHJvamVjdFNsaWRlID0gKHsgaWQsIG5hbWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2Fyb3VzZWwuSXRlbT5cclxuICAgICAgPGltZyBzcmM9XCJnaXRodWIucG5nXCIgYWx0PVwiR2l0SHViIExvZ29cIiBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCIgLz5cclxuICAgICAgPENhcm91c2VsLkNhcHRpb24+XHJcbiAgICAgICAgPGgzPlxyXG4gICAgICAgICAgSWQ6IHtpZH1cclxuICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgTm9tYnJlOiB7bmFtZX1cclxuICAgICAgICA8L2gzPlxyXG4gICAgICAgIDxwPlByb3llY3RvIEdpdEh1YjwvcD5cclxuICAgICAgPC9DYXJvdXNlbC5DYXB0aW9uPlxyXG4gICAgPC9DYXJvdXNlbC5JdGVtPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcclxuICBjb25zdCBwcm9qZWN0cyA9IHVzZUdpdEh1YlByb2plY3RzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8aDE+UHJveWVjdG9zPC9oMT5cclxuICAgICAgPENhcm91c2VsPlxyXG4gICAgICAgIHtwcm9qZWN0cy5tYXAoKHsgaWQsIG5hbWUgfSkgPT4gKFxyXG4gICAgICAgICAgPFByb2plY3RTbGlkZSBrZXk9e2lkfSBpZD17aWR9IG5hbWU9e25hbWV9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJMYXlvdXQiLCJDYXJvdXNlbCIsIkdpdEh1YkNvbnRleHQiLCJ1c2VHaXRIdWJQcm9qZWN0cyIsInByb2plY3RzIiwic2V0UHJvamVjdHMiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJQcm9qZWN0U2xpZGUiLCJpZCIsIm5hbWUiLCJJdGVtIiwiaW1nIiwic3JjIiwiYWx0IiwiY2xhc3NOYW1lIiwiQ2FwdGlvbiIsImgzIiwiYnIiLCJwIiwiUHJvamVjdHMiLCJoMSIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects.jsx\n"));

/***/ })

});