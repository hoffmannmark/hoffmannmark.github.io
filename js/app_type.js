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

/***/ "./src/main.sass":
/*!***********************!*\
  !*** ./src/main.sass ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"css/main.css\");\n\n//# sourceURL=webpack://todolist/./src/main.sass?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.sass */ \"./src/main.sass\");\n\n\n// variables\nlet getLocalStorage = () => {\n    return JSON.parse(localStorage.getItem('toDoItem'));\n};\nlet html = function (value) {\n    return `\n        <label class=\"todo__item-label\">\n            <input class=\"todo__item-checkbox\" type=\"checkbox\">\n            ${value.title}\n        </label>\n        <div class=\"todo__item-icons\">\n            <img class=\"todo__item-icon todo__item-close\" src=\"https://raw.githubusercontent.com/hoffmannmark/toDoList/639d36b4c8566d86eaaa657cb64608f62e6060ad/img/trash.svg\" alt=\"\">\n        </div>`\n};\nlet addButtonAction = document.getElementById(\"addBtn\");\nlet close = document.getElementsByClassName(\"todo__item-close\");\nlet list = document.querySelector('ul');\nlet storage = JSON.parse(localStorage.getItem(\"toDoItem\"));\nlet input = document.getElementById(\"inputText\");\nlet item = document.getElementsByTagName('todo__list-label');\n\n// Enter button push action\ninput.addEventListener(\"keyup\", function (event) {\n    if (event.keyCode === 13) {\n        event.preventDefault();\n        document.getElementById(\"addBtn\").click();\n    }\n});\n\n// Create a new list item on click button\naddButtonAction.addEventListener('click', function (event) {\n    let addClassWarning = document.getElementById(\"inputText\");\n    let inputValue = document.getElementById(\"inputText\").value;\n\n    if (inputValue === '') {\n        addClassWarning.classList.add(\"todo__header-warning\");\n        setTimeout(() => addClassWarning.classList.remove(\"todo__header-warning\"), 2500);\n    } else {\n        addItem(inputValue);\n    }\n\n    document.getElementById(\"inputText\").value = \"\";\n});\n\n// init ToDoList when page is loaded\nwindow.addEventListener('DOMContentLoaded', function (event) {\n    initTodo();\n    watchCheckedStatus();\n});\n\n// Create list item\nfunction initTodo() {\n    document.querySelector('#itemsList').innerHTML = \"\";\n\n    if (getLocalStorage() === null) {\n        localStorage.setItem('toDoItem', '[]');\n    } else {\n        for (let i = 0; i < getLocalStorage().length; i++) {\n\n            let liCountId = document.querySelectorAll('#itemsList > li').length;\n            let itm = document.createElement(\"li\");\n\n            itm.setAttribute('data-id', liCountId);\n            list.appendChild(itm);\n            itm.className = 'todo__item';\n            itm.innerHTML = html(getLocalStorage()[i]);\n\n        }\n    }\n\n    deleteEventsTodoItem();\n}\n\n// Delete list item\nfunction deleteEventsTodoItem() {\n    for (let i = 0; i < close.length; i++) {\n        close[i].onclick = function () {\n\n            let element = this.parentElement.parentElement;\n            let countIndex = element.getAttribute('data-id');\n            let getLocalStorage = JSON.parse(localStorage.getItem(\"toDoItem\"));\n\n            element.remove();\n            getLocalStorage.splice(countIndex, 1);\n\n            localStorage.removeItem('toDoItem');\n            localStorage.setItem('toDoItem', JSON.stringify(getLocalStorage));\n\n            initTodo();\n        }\n    }\n}\n\n// Add list item to localStorage\nfunction addItem() {\n    let existingEntries = JSON.parse(localStorage.getItem(\"toDoItem\"));\n    let entryTitle = document.getElementById(\"inputText\").value;\n    let entry = {\n        \"title\": entryTitle,\n        \"checkedStatus\": false,\n    };\n\n    existingEntries.push(entry);\n    localStorage.setItem(\"toDoItem\", JSON.stringify(existingEntries));\n\n    initTodo();\n}\n\n// checked status when click\nonclick = function (ev) {\n\n        if (ev.target.tagName === 'LABEL') {\n            storage[0].checkedStatus = !storage[0].checkedStatus;\n            localStorage.setItem(\"toDoItem\", JSON.stringify(storage));\n        }\n\n    watchCheckedStatus();\n}\n\nfunction watchCheckedStatus() {\n\n    let checkBox = document.querySelector('.todo__item-checkbox');\n    let label = document.querySelector('.todo__item-label');\n\n    if (storage[0].checkedStatus === true) {\n        checkBox.checked = true;\n        label.classList.add('todo__item-checked');\n    } else {\n        label.classList.remove('todo__item-checked');\n        checkBox.checked = false;\n    }\n\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;