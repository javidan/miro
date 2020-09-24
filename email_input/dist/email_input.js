/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js?!./src/styles/index.less":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ref--4-2!./src/styles/index.less ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".jemail_input {\\n  border: 1px solid red;\\n  background: white;\\n  border-radius: 4px;\\n  border: 1px solid #C3C2CF;\\n  padding: 7px 8px;\\n  display: flex;\\n  align-content: flex-start;\\n  flex-wrap: wrap;\\n  min-height: 96px;\\n  box-sizing: border-box;\\n  font-size: 14px;\\n  overflow: scroll;\\n  max-height: 200px;\\n}\\n.jemail_input__email {\\n  display: flex;\\n  background-color: rgba(102, 153, 255, 0.2);\\n  border-radius: 100px;\\n  padding: 4px 10px;\\n  color: #050038;\\n  margin: 0 4px 4px 0px;\\n}\\n.jemail_input__email--invalid {\\n  padding: 4px 4px 0 4px;\\n  background-color: transparent;\\n  border-bottom: 1px dashed #D92929;\\n  border-radius: 0;\\n}\\n.jemail_input__text {\\n  margin-right: 10px;\\n}\\n.jemail_input__delete {\\n  display: flex;\\n  align-items: center;\\n  cursor: pointer;\\n}\\n.jemail_input__typer {\\n  flex: 1;\\n  border: 0;\\n  box-sizing: border-box;\\n  outline: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles/index.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ref--4-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/email.js":
/*!**********************!*\
  !*** ./src/email.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _icons_remove_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/remove.svg */ \"./src/icons/remove.svg\");\n/* harmony import */ var _icons_remove_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_icons_remove_svg__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Email{\n\n  constructor(emailAddress, onRemove, userConfig){\n    this.emailAddress = emailAddress\n    this.onRemove = onRemove\n\n    this.config = {\n      emailClass: 'jemail_input__email',\n      invalidEmailClass: 'jemail_input__email--invalid',\n      deleteButtonClass: \"jemail_input__delete\",\n      emailTextClass: \"jemail_input__text\",\n      ...userConfig\n    }\n\n    this.containerNode = this.buildContainerNode()\n    this.textNode = this.buildTextNode(this.emailAddress)\n    this.removeButtonNode = this.buildRemoveNode()\n  }\n\n  isValid(){\n    return this.emailAddress.indexOf('@') != -1\n  }\n\n  remove(){\n    this.containerNode.remove()\n  }\n\n  buildTextNode(address){\n    const textNode = document.createElement(\"div\")\n    textNode.setAttribute('class', this.config.emailTextClass)\n    textNode.innerHTML = address\n\n    return textNode\n  }\n\n  buildRemoveNode(){\n    const removeButtonNode = document.createElement('div')\n    removeButtonNode.setAttribute('class', this.config.deleteButtonClass)\n\n    // TODO: find better way\n    removeButtonNode.innerHTML = _icons_remove_svg__WEBPACK_IMPORTED_MODULE_0___default.a\n    removeButtonNode.firstChild.setAttribute('width', 8)\n    removeButtonNode.firstChild.setAttribute('height', 8)\n\n    return removeButtonNode\n  }\n\n  buildContainerNode(){\n    const className = [this.config.emailClass]\n\n    if(!this.isValid()){\n      className.push(this.config.invalidEmailClass)\n    }\n\n    const containerNode = document.createElement('div')\n    containerNode.setAttribute('class', className.join(' '))\n\n    return containerNode\n  }\n\n  build(){\n    const { containerNode, removeButtonNode, textNode } = this\n\n    removeButtonNode.addEventListener('click', e => this.onRemove(this))\n\n    containerNode.appendChild(textNode)\n    containerNode.appendChild(removeButtonNode)\n\n    return containerNode\n\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Email);\n\n//# sourceURL=webpack:///./src/email.js?");

/***/ }),

/***/ "./src/emails_input_field.js":
/*!***********************************!*\
  !*** ./src/emails_input_field.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _email_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email.js */ \"./src/email.js\");\n\n\nclass EmailsInputField{\n  \n  constructor(container, userConfig={}){\n    this.emails = []\n\n    this.config = {\n      containerClass: 'jemail_input',\n      inputClass: 'jemail_input__typer',\n      inputPlaceholder: 'add more people...',\n      onAdd: (email) => {console.log(email, ' removed')},\n      onRemove: (email) => {console.log(email, ' added')},\n      prepopulate: [],\n      ...userConfig\n    }\n\n    this.container = container\n    this.input = document.createElement(\"input\")\n\n  }\n\n  removeEmail(email){\n    this.emails.splice(this.emails.indexOf(email), 1)\n    email.remove()\n    this.config.onRemove(email)\n  }\n\n  addEmail(address){\n    const {emails, input} = this\n\n    const addresses = address.split(',').map(address=> address.trim())\n\n    const list = addresses.map(address => {\n      if(address) return new _email_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](address, this.removeEmail.bind(this), this.config)\n    }).filter((email) => email )\n\n    this.emails = [...this.emails, ...list]\n\n    list.forEach((email)=>{\n      this.container.insertBefore(email.build(), this.input)\n      this.config.onAdd(email)\n    })\n\n    input.value = \"\"\n\n    return this\n  }\n\n  emailsCount(){\n    return this.emails.length\n  }\n\n  build(){\n    let {container, input} = this\n\n    if(!container){\n      console.log(\"Invalid container specified for EmailInput\")\n      return\n    }\n\n    this.setNodes()\n    this.setListeners()\n    \n    container.append(input)\n\n    this.config.prepopulate.forEach(address => this.addEmail(address))\n    return this\n  }\n\n  setNodes(){\n    let {container, input, config} = this\n\n    const classNames = [ container.getAttribute('class'), config.containerClass].filter(c=> c).join(' ')\n\n    container.setAttribute('class', classNames)\n    \n    input.setAttribute('class', config.inputClass)\n    input.setAttribute('placeHolder', config.inputPlaceholder)\n  }\n\n\n  setListeners(){\n    const { input } = this\n\n    input.addEventListener('keydown', e => {\n      if(e.key === 'Enter' || e.key === ',') {\n        this.addEmail(e.target.value)\n        e.preventDefault()\n      }\n    })\n\n    input.addEventListener('blur', e => this.addEmail(e.target.value))\n    input.addEventListener('paste', e => {\n      this.addEmail(e.clipboardData.getData('text'))\n      e.preventDefault()\n    })\n  }\n\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmailsInputField);\n\n//# sourceURL=webpack:///./src/emails_input_field.js?");

/***/ }),

/***/ "./src/icons/remove.svg":
/*!******************************!*\
  !*** ./src/icons/remove.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg viewBox=\\\"0 0 8 8\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\" d=\\\"M8 0.8L7.2 0L4 3.2L0.8 0L0 0.8L3.2 4L0 7.2L0.8 8L4 4.8L7.2 8L8 7.2L4.8 4L8 0.8Z\\\" fill=\\\"#050038\\\"></path></svg>\"\n\n//# sourceURL=webpack:///./src/icons/remove.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emails_input_field_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emails_input_field.js */ \"./src/emails_input_field.js\");\n/* harmony import */ var _styles_index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/index.less */ \"./src/styles/index.less\");\n/* harmony import */ var _styles_index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_index_less__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n// Autoscroll when adding emails\n\n\nwindow.EmailsInput = function(container, config){\n  let e = new _emails_input_field_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](container, config)\n  return e.build()\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles/index.less":
/*!*******************************!*\
  !*** ./src/styles/index.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js??ref--4-2!./index.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js?!./src/styles/index.less\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/index.less?");

/***/ })

/******/ });