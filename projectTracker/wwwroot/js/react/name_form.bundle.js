/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"name_form": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./react/NameForm.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./react/NameForm.js":
/*!***************************!*\
  !*** ./react/NameForm.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _table_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-list */ \"./react/table-list.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar NameForm =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(NameForm, _React$Component);\n\n  function NameForm(props) {\n    var _this;\n\n    _classCallCheck(this, NameForm);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(NameForm).call(this, props));\n\n    _this.onSubmit = function (e) {\n      e.preventDefault();\n      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_this.source.api, {\n        name: _this.state.name\n      }).then(function (res) {\n        _this.setState({\n          displayForm: false,\n          name: '',\n          items: [].concat(_toConsumableArray(_this.state.items), [res.data])\n        });\n      });\n    };\n\n    _this.onAddNew = function (e) {\n      _this.setState({\n        displayForm: true\n      });\n    };\n\n    _this.onCancel = function (e) {\n      _this.setState({\n        displayForm: false\n      });\n    };\n\n    _this.onChange = function (e) {\n      _this.setState(_defineProperty({}, e.target.name, e.target.value));\n    };\n\n    _this.state = {\n      displayForm: false,\n      items: [],\n      name: ''\n    };\n    _this.source = sources[_this.props.source];\n    return _this;\n  }\n\n  _createClass(NameForm, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(this.source.api).then(function (res) {\n        _this2.setState({\n          items: res.data\n        });\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var showForm = this.state.displayForm;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"name-form-container\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        onClick: this.onAddNew,\n        className: \"ui positive basic button \" + (showForm ? \"hid\" : \"\")\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n        className: \"plus icon\"\n      }), \" Add new\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n        className: showForm ? \"ui form scale-in-ver-top\" : \"ui form hid\",\n        method: \"post\",\n        onSubmit: this.onSubmit\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"field\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Name\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n        type: \"text\",\n        name: \"name\",\n        value: this.state.name,\n        onChange: this.onChange,\n        maxLength: \"200\",\n        placeholder: this.source.placeholder\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"ui positive basic button\",\n        type: \"submit\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n        className: \"save icon\"\n      }), \"Save\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        className: \"ui secondary basic button\",\n        type: \"button\",\n        onClick: this.onCancel\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n        className: \"close icon\"\n      }), \"Cancel\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_table_list__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        items: this.state.items\n      }));\n    }\n  }]);\n\n  return NameForm;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nvar sources = {\n  campus: {\n    placeholder: \"Campus\",\n    api: \"/api/campus\"\n  },\n  status: {\n    placeholder: \"Status\",\n    api: \"/api/status\"\n  },\n  category: {\n    placeholder: \"Category\",\n    api: \"/api/category\"\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (NameForm);\nvar domContainer = document.querySelector('#name-form');\nvar source = domContainer.dataset.source;\nvar onSubmitted = domContainer.dataset.submitted;\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NameForm, {\n  source: source,\n  onSubmitted: onSubmitted\n}), domContainer);\n\n//# sourceURL=webpack:///./react/NameForm.js?");

/***/ }),

/***/ "./react/table-list.js":
/*!*****************************!*\
  !*** ./react/table-list.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar TableList =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(TableList, _React$Component);\n\n  function TableList() {\n    _classCallCheck(this, TableList);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(TableList).apply(this, arguments));\n  }\n\n  _createClass(TableList, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n        className: \"ui celled table\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Name\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"Actions\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, this.props.items.map(function (item) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", {\n          key: item.id\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n          \"data-label\": \"Name\"\n        }, item.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", {\n          \"data-label\": \"Actions\",\n          className: \"right collapsing aligned\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n          className: \"ui vertical primary basic animated mini button\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n          className: \"hidden content\"\n        }, \"Edit\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"visible content\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"pencil alternate icon\"\n        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n          className: \"ui vertical negative basic animated mini button\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"hidden content\"\n        }, \"Delete\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n          className: \"visible content\"\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"i\", {\n          className: \"trash alternate icon\"\n        })))));\n      })));\n    }\n  }]);\n\n  return TableList;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableList);\n\n//# sourceURL=webpack:///./react/table-list.js?");

/***/ })

/******/ });