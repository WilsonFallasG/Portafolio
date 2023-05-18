"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Navbar = ()=>{\n    _s();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            if (window.scrollY > 0) {\n                setIsScrolled(true);\n            } else {\n                setIsScrolled(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-expand-lg navbar-dark bg-black \".concat(isScrolled ? \"scrolled\" : \"\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container max-width: 768px\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    className: \"navbar-brand\",\n                    href: \"/\",\n                    children: \"Wilson Fallas G\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\components\\\\Navbar.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"navbar-toggler\",\n                    type: \"button\",\n                    \"data-bs-toggle\": \"collapse\",\n                    \"data-bs-target\": \"#navbarNav\",\n                    \"aria-controls\": \"navbarNav\",\n                    \"aria-expanded\": \"false\",\n                    \"aria-label\": \"Toggle navigation\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"navbar-toggler-icon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\components\\\\Navbar.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\components\\\\Navbar.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"collapse navbar-collapse\",\n                    id: \"navbarNav\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"navbar-nav\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"nav-Linknk active\",\n                                \"aria-current\": \"page\",\n                                href: \"/\",\n                                children: \"Inicio\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\components\\\\Navbar.js\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"nav-item\",\n                                href: \"contacto\",\n                                children: \"Contacto\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\components\\\\Navbar.js\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"nav-item\",\n                                href: \"about\",\n                                children: \"About\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\components\\\\Navbar.js\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"nav-item\",\n                                href: \"github\",\n                                children: \"Github\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\components\\\\Navbar.js\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\components\\\\Navbar.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\components\\\\Navbar.js\",\n                    lineNumber: 40,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\components\\\\Navbar.js\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\wilso\\\\Desktop\\\\examen\\\\components\\\\Navbar.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"UCaI8lpZVGvPrsRoIFYRt2wv0+o=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkI7QUFDZTtBQUU1QyxNQUFNRyxTQUFTLElBQU07O0lBQ25CLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWxERCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTUssZUFBZSxJQUFNO1lBQ3pCLElBQUlDLE9BQU9DLE9BQU8sR0FBRyxHQUFHO2dCQUN0QkgsY0FBYyxJQUFJO1lBQ3BCLE9BQU87Z0JBQ0xBLGNBQWMsS0FBSztZQUNyQixDQUFDO1FBQ0g7UUFFQUUsT0FBT0UsZ0JBQWdCLENBQUMsVUFBVUg7UUFFbEMsT0FBTyxJQUFNO1lBQ1hDLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVKO1FBQ3ZDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNLO1FBQUlDLFdBQVcsZ0RBQTZFLE9BQTdCUixhQUFhLGFBQWEsRUFBRTtrQkFDMUYsNEVBQUNTO1lBQUlELFdBQVU7OzhCQUNiLDhEQUFDRTtvQkFBRUYsV0FBVTtvQkFBZUcsTUFBSzs4QkFBSTs7Ozs7OzhCQUdyQyw4REFBQ0M7b0JBQ0NKLFdBQVU7b0JBQ1ZLLE1BQUs7b0JBQ0xDLGtCQUFlO29CQUNmQyxrQkFBZTtvQkFDZkMsaUJBQWM7b0JBQ2RDLGlCQUFjO29CQUNkQyxjQUFXOzhCQUVYLDRFQUFDQzt3QkFBS1gsV0FBVTs7Ozs7Ozs7Ozs7OEJBRWQsOERBQUNDO29CQUFJRCxXQUFVO29CQUEyQlksSUFBRzs4QkFDekMsNEVBQUNDO3dCQUFHYixXQUFVOzswQ0FDViw4REFBQ1osa0RBQUlBO2dDQUFDWSxXQUFVO2dDQUFvQmMsZ0JBQWE7Z0NBQU9YLE1BQUs7MENBQUs7Ozs7OzswQ0FJbEUsOERBQUNmLGtEQUFJQTtnQ0FBQ1ksV0FBVTtnQ0FBV0csTUFBSzswQ0FBVzs7Ozs7OzBDQUczQyw4REFBQ2Ysa0RBQUlBO2dDQUFDWSxXQUFVO2dDQUFXRyxNQUFLOzBDQUFROzs7Ozs7MENBR3hDLDhEQUFDZixrREFBSUE7Z0NBQUNZLFdBQVU7Z0NBQVdHLE1BQUs7MENBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTM0Q7R0F6RElaO0tBQUFBO0FBNEROLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2YmFyLmpzP2ZiY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICBjb25zdCBbaXNTY3JvbGxlZCwgc2V0SXNTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDApIHtcclxuICAgICAgICBzZXRJc1Njcm9sbGVkKHRydWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldElzU2Nyb2xsZWQoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT17YG5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLWJsYWNrICR7aXNTY3JvbGxlZCA/ICdzY3JvbGxlZCcgOiAnJ31gfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbWF4LXdpZHRoOiA3NjhweFwiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICBXaWxzb24gRmFsbGFzIEdcclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgIGRhdGEtYnMtdGFyZ2V0PVwiI25hdmJhck5hdlwiXHJcbiAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyTmF2XCJcclxuICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJOYXZcIj5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LUxpbmtuayBhY3RpdmVcIiBhcmlhLWN1cnJlbnQ9XCJwYWdlXCIgaHJlZj0nLycgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIEluaWNpbyBcclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBocmVmPVwiY29udGFjdG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0b1xyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIGhyZWY9XCJhYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIEFib3V0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgaHJlZj1cImdpdGh1YlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIEdpdGh1YlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4pO1xyXG4gIH1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk5hdmJhciIsImlzU2Nyb2xsZWQiLCJzZXRJc1Njcm9sbGVkIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibmF2IiwiY2xhc3NOYW1lIiwiZGl2IiwiYSIsImhyZWYiLCJidXR0b24iLCJ0eXBlIiwiZGF0YS1icy10b2dnbGUiLCJkYXRhLWJzLXRhcmdldCIsImFyaWEtY29udHJvbHMiLCJhcmlhLWV4cGFuZGVkIiwiYXJpYS1sYWJlbCIsInNwYW4iLCJpZCIsInVsIiwiYXJpYS1jdXJyZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.js\n"));

/***/ })

});