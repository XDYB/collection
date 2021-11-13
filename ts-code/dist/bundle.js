/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isMale = exports.fun1 = exports.fun = exports.add = void 0;\nvar add = function (a, b, c) {\n    console.log(a + b);\n    return a + b;\n};\nexports.add = add;\n(0, exports.add)(1, 2);\nvar fun = function (s, a) {\n    console.log(s);\n};\nexports.fun = fun;\nvar fun1 = function (arg1) {\n    console.log(arg1);\n};\nexports.fun1 = fun1;\n(0, exports.fun1)(123);\n// 枚举\nvar Gender;\n(function (Gender) {\n    Gender[Gender[\"Male\"] = 0] = \"Male\";\n    Gender[Gender[\"Female\"] = 1] = \"Female\";\n})(Gender || (Gender = {}));\nexports.isMale = Gender.Male === 0;\n\n\n//# sourceURL=webpack://ts-code/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;