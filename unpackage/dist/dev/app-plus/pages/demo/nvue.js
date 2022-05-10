"use weex:vue";
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************************************************************************************!*\
  !*** /Users/weiqu/Documents/GitApp/jj-uni-messagebox/main.js?{"page":"pages%2Fdemo%2Fnvue"} ***!
  \**********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_demo_nvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/demo/nvue.nvue?mpType=page */ 5);\n\n        \n        \n        \n        \n        _pages_demo_nvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_demo_nvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/demo/nvue'\n        _pages_demo_nvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_demo_nvue_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBNEQ7QUFDNUQsUUFBUSx5RUFBRztBQUNYLFFBQVEseUVBQUc7QUFDWCxRQUFRLHlFQUFHO0FBQ1gsZ0JBQWdCLHlFQUFHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0ICd1bmktcG9seWZpbGwnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9kZW1vL252dWUubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvZGVtby9udnVlJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***********************************************************************************!*\
  !*** /Users/weiqu/Documents/GitApp/jj-uni-messagebox/main.js?{"type":"appStyle"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***********************************************************************************************!*\
  !*** /Users/weiqu/Documents/GitApp/jj-uni-messagebox/App.vue?vue&type=style&index=0&lang=css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/weiqu/Documents/GitApp/jj-uni-messagebox/App.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 5 */
/*!****************************************************************************************!*\
  !*** /Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/demo/nvue.nvue?mpType=page ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nvue_nvue_vue_type_template_id_29ae6a73_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nvue.nvue?vue&type=template&id=29ae6a73&scoped=true&mpType=page */ 6);\n/* harmony import */ var _nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nvue.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 15);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./nvue.nvue?vue&type=style&index=0&id=29ae6a73&scoped=true&lang=css&mpType=page */ 13).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./nvue.nvue?vue&type=style&index=0&id=29ae6a73&scoped=true&lang=css&mpType=page */ 13).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _nvue_nvue_vue_type_template_id_29ae6a73_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _nvue_nvue_vue_type_template_id_29ae6a73_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"29ae6a73\",\n  \"4c036f74\",\n  false,\n  _nvue_nvue_vue_type_template_id_29ae6a73_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/demo/nvue.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHlGQUFpRjtBQUNySSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMseUZBQWlGO0FBQzFJOztBQUVBOztBQUVBO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9udnVlLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjlhZTZhNzMmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL252dWUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9udnVlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL252dWUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI5YWU2YTczJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL252dWUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI5YWU2YTczJnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjlhZTZhNzNcIixcbiAgXCI0YzAzNmY3NFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9kZW1vL252dWUubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!**********************************************************************************************************************************!*\
  !*** /Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/demo/nvue.nvue?vue&type=template&id=29ae6a73&scoped=true&mpType=page ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_template_id_29ae6a73_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./nvue.nvue?vue&type=template&id=29ae6a73&scoped=true&mpType=page */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_template_id_29ae6a73_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_template_id_29ae6a73_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_template_id_29ae6a73_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_template_id_29ae6a73_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/demo/nvue.nvue?vue&type=template&id=29ae6a73&scoped=true&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c("base-view", [
        _c("div", { staticClass: ["flexColumnCenter"] }, [
          _c(
            "div",
            { staticClass: ["flexRow", "marginTopBottom"] },
            [
              _c(
                "button",
                { staticClass: ["btn"], on: { click: _vm.showNormalAlert } },
                [_vm._v("默认Alert")]
              ),
              _c(
                "button",
                {
                  staticClass: ["btn"],
                  staticStyle: { marginLeft: "10px" },
                  on: {
                    click: function($event) {
                      _vm.showCustomAlert("alert", false)
                    }
                  }
                },
                [_vm._v("没有按钮的Alert")]
              ),
              _c(
                "button",
                {
                  staticClass: ["btn", "marginLeftRight"],
                  on: {
                    click: function($event) {
                      _vm.showCustomAlert("alert")
                    }
                  }
                },
                [_vm._v("自定义Alert")]
              ),
              _c(
                "button",
                {
                  staticClass: ["btn"],
                  on: {
                    click: function($event) {
                      _vm.showCustomAlert("sheet")
                    }
                  }
                },
                [_vm._v("自定义Sheet")]
              )
            ],
            1
          ),
          _c(
            "div",
            { staticClass: ["flexRow", "marginTopBottom"] },
            [
              _c(
                "button",
                {
                  staticClass: ["btn"],
                  on: {
                    click: function($event) {
                      _vm.showLoading("default")
                    }
                  }
                },
                [_vm._v("Loading")]
              ),
              _c(
                "button",
                {
                  staticClass: ["btn"],
                  staticStyle: { marginLeft: "10px" },
                  on: {
                    click: function($event) {
                      _vm.showLoading("round")
                    }
                  }
                },
                [_vm._v("Loading-round")]
              ),
              _c(
                "button",
                {
                  staticClass: ["btn", "marginLeftRight"],
                  on: {
                    click: function($event) {
                      _vm.showLoading("taichi")
                    }
                  }
                },
                [_vm._v("Loading-taichi")]
              ),
              _c(
                "button",
                {
                  staticClass: ["btn"],
                  on: {
                    click: function($event) {
                      _vm.showLoading("custom")
                    }
                  }
                },
                [_vm._v("Loading-自定义")]
              )
            ],
            1
          ),
          _c(
            "div",
            { staticClass: ["flexRow", "marginTopBottom"] },
            [
              _c(
                "button",
                {
                  staticClass: ["btn"],
                  on: {
                    click: function($event) {
                      _vm.showToast("")
                    }
                  }
                },
                [_vm._v("toast")]
              ),
              _c(
                "button",
                {
                  staticClass: ["btn", "marginLeftRight"],
                  on: {
                    click: function($event) {
                      _vm.showToast("success")
                    }
                  }
                },
                [_vm._v("toast-success")]
              ),
              _c(
                "button",
                {
                  staticClass: ["btn"],
                  on: {
                    click: function($event) {
                      _vm.showToast("fail")
                    }
                  }
                },
                [_vm._v("toast-fail")]
              ),
              _c(
                "button",
                {
                  staticClass: ["btn", "marginLeftRight"],
                  on: {
                    click: function($event) {
                      _vm.showToast("warn")
                    }
                  }
                },
                [_vm._v("toast-warn")]
              ),
              _c(
                "button",
                {
                  staticClass: ["btn"],
                  staticStyle: { marginLeft: "10px" },
                  on: {
                    click: function($event) {
                      _vm.showToast("custom")
                    }
                  }
                },
                [_vm._v("toast-自定义")]
              )
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!****************************************************************************************************************!*\
  !*** /Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/demo/nvue.nvue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./nvue.nvue?vue&type=script&lang=js&mpType=page */ 9);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNqQixDQUFnQixna0JBQUcsRUFBQyIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL252dWUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbnZ1ZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/demo/nvue.nvue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n\n  data: function data() {\n    return {};\n\n  },\n  methods: {\n    showNormalAlert: function showNormalAlert() {\n      var alert = getApp().globalData.$jj_alert('提示', '时间就像海绵里的水,\\n只要愿挤总还是有的。', '知道了');\n      var loading = getApp().globalData.$jj_loading();\n      setTimeout(function () {\n        loading.close();\n        getApp().globalData.$jj_toast('已经更新 Alert 数据');\n        //更新数据\n        alert.update({\n          titleStyle: {\n            'color': 'red',\n            'font-size': '18px' },\n\n          btns: [{\n            title: \"确定\",\n            activeBackground: '#2A8AFF',\n            activeColor: \"#fff\",\n            style: {\n              'color': '#4CD964' },\n\n            click: function click() {\n              __f__(\"log\", \"点击-----确定\", \" at pages/demo/nvue.nvue:65\");\n            } }] });\n\n\n      }, 2000);\n    },\n    showCustomAlert: function showCustomAlert(type) {var isShowBtn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      var that = this;\n      var confirmBtn = {\n        title: \"Confirm\",\n        activeBackground: '#2f2',\n        style: {\n          'background': '#2A8AFF',\n          'color': '#fff' },\n\n        touchClose: false, //点击按钮时，是否自动关闭弹窗\n        click: function click() {\n          /*\n                                 有时候需要进行网络请求处理后，在是否进行关闭弹窗\n                                 这时候可以选择手动关闭弹窗\n                                 注意：click这个方法，不要使用箭头函数=>方法，使用function方法，这时候this表示的当前按钮对象\n                                 */\n          that.simulateNetworkRequest(this);\n        } };\n\n      var alert = getApp().globalData.$jj_alert({\n        type: type, //弹窗的类型有alert和sheet\n        width: '70%', //设置弹窗的宽度\n        padding: '20px 30px', //设置内容的上下左右偏移\n        maskColor: \"rgba(0, 0, 0, 0.6)\", //遮罩层的背景颜色\n        touchClose: true, //点击背景图层，是否关闭弹框\n        showClose: true, //是否显示右上角的关闭按钮\n        // position:'bottom',\n        // closeStyle: {\n        // \t'height': '0.85rem',\n        // \t'width': '0.85rem'\n        // },\n        title: '提示', //标题\n        titleStyle: {\n          'color': '#fb2408',\n          'font-size': '20px' },\n        //标题的样式\n        message: '事实上确实是当我们失去的时候，才知道自己曾经拥有；但有没有注意到当有些东西来临的时候，我们已错过。', //内容\n        messageStyle: {\n          \"justify-content\": 'left',\n          \"display\": \"flex\",\n          \"color\": '#8a8a8a',\n          'text-align': 'left' },\n        //内容的样式\n        btns: isShowBtn === false ? [] : [{\n          title: \"Cancel\",\n          activeBackground: '#2A8AFF',\n          activeColor: \"#fff\",\n          click: function click() {\n            __f__(\"log\", \"点击Cancel\", \" at pages/demo/nvue.nvue:119\");\n          } },\n        {\n          title: \"Destructive\",\n          style: {\n            'color': 'red',\n            'font-size': '15px' },\n\n          click: function click() {\n            __f__(\"log\", \"点击Destructive\", \" at pages/demo/nvue.nvue:128\");\n          } },\n        {\n          title: \"Confirm\",\n          activeBackground: '#2f2',\n          style: {\n            'background': '#2A8AFF',\n            'color': '#fff' },\n\n          touchClose: false, //点击按钮时，是否自动关闭弹窗\n          click: function click() {\n            /*\n                                   有时候需要进行网络请求处理后，在是否进行关闭弹窗\n                                   这时候可以选择手动关闭弹窗\n                                   注意：click这个方法，不要使用箭头函数=>方法，使用function方法，这时候this表示的当前按钮对象\n                                   */\n            that.simulateNetworkRequest(this, alert);\n          } }] });\n\n\n    },\n\n    simulateNetworkRequest: function simulateNetworkRequest(btn, alert) {\n      //进行网络模拟，请求网络时候，禁止按钮再次点击，等结果回来后，在考虑是否启用按钮点击事件和是否关闭弹框\n      this.count = this.count || 0;\n      getApp().globalData.$jj_toast('按钮被禁用,网络请求中...');\n      btn.isDisable = true;\n      __f__(\"log\", btn, \" at pages/demo/nvue.nvue:155\");\n      var that = this;\n      if (this.count % 2 === 0) {\n        setTimeout(function () {\n          //启用按钮点击事件\n          btn.isDisable = false;\n          getApp().globalData.$jj_toast('请求失败，请点击按钮重新请求');\n        }, 2000);\n      } else {\n        setTimeout(function () {\n          getApp().globalData.$jj_toast('网络请求成功');\n          //关闭弹窗\n          alert.close();\n          // uni.navigateTo({\n          //     url: '/pages/demo/index'\n          // })\n        }, 2000);\n      }\n      this.count += 1;\n    },\n    showDialog: function showDialog() {\n      this.isShowDialog = true;\n    },\n    showPopup: function showPopup() {\n      uni.hideTabBar();\n      this.isShowPopup = true;\n    },\n    closePopup: function closePopup() {\n      uni.showTabBar();\n      this.isShowPopup = false;\n    },\n    showLoading: function showLoading(type) {\n\n      if (type === 'default') {\n        var loading = getApp().globalData.$jj_loading('加载中...');\n\n        setTimeout(function () {\n          loading.update('Update...');\n        }, 2000);\n        setTimeout(function () {\n          loading.close();\n        }, 4000);\n      } else {\n        var loadingData = {\n          imageSize: {\n            width: '32px',\n            height: '32px' },\n          //设置图片的大小\n          userInteractionEnabled: true, //是否启用用户交互，默认是false,启用后，遮罩层下的图层事件允许点击\n          type: type //设置加载框的类型，有default、round、taichi三种\n        };\n        if (type === 'custom') {\n          loadingData['imageUrl'] = __webpack_require__(/*! ../../static/loading_custom.png */ 11); //图片链接\n          loadingData['background'] = '#fff'; //设置弹框内容的背景色\n          loadingData['width'] = '120px';\n          loadingData['message'] = '自定义Loading'; //自定义文本\n          loadingData['messageStyle'] = {\n            color: '#2A8AFF',\n            'font-size': '14px' };\n          //修改文本样式\n          loadingData['maskColor'] = 'rgba(0, 0, 0, 0.5)'; //设置遮罩层的背景色\n        } else if (type === 'round') {\n          loadingData['message'] = 'round...';\n        } else if (type === 'taichi') {\n          loadingData['message'] = 'taichi...';\n        }\n        var _loading = getApp().globalData.$jj_loading(loadingData);\n        setTimeout(function () {\n          _loading.close();\n        }, 5000);\n      }\n    },\n    showToast: function showToast(type) {\n      var message = '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈。。。';\n      var toastData = {\n        duration: -1, //不自动关闭，需要手动关闭\n        radius: 3 };\n\n      if (type === 'custom') {\n        //自定义\n        toastData['message'] = message;\n        toastData['background'] = '#f24';\n        toastData['maxWidth'] = '60%';\n        toastData['messageStyle'] = {\n          'color': '#fe2',\n          'text-align': 'center' };\n\n        toastData['padding'] = '20px';\n        toastData[\"imageSize\"] = {\n          width: '60px',\n          height: '60px' };\n\n        toastData[\"imageUrl\"] = __webpack_require__(/*! ../../static/logo.png */ 12);\n        var toast = getApp().globalData.$jj_toast(toastData);\n        setTimeout(function () {\n          toast.close();\n        }, 5000);\n\n      } else if (type.length > 0) {\n\n        //第一个参数为提示信息文本，第二个参数为提示类型，第三个参数为显示的时长\n        getApp().globalData.$jj_toast(type, type, 1);\n      } else {\n        getApp().globalData.$jj_toast(message);\n      }\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZGVtby9udnVlLm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFDQTs7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7O0FBRUEsR0FMQTtBQU1BO0FBQ0EsbUJBREEsNkJBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSwrQkFGQSxFQURBOztBQUtBO0FBQ0EsdUJBREE7QUFFQSx1Q0FGQTtBQUdBLCtCQUhBO0FBSUE7QUFDQSxnQ0FEQSxFQUpBOztBQU9BO0FBQ0E7QUFDQSxhQVRBLEdBTEE7OztBQWlCQSxPQXJCQSxFQXFCQSxJQXJCQTtBQXNCQSxLQTFCQTtBQTJCQSxtQkEzQkEsMkJBMkJBLElBM0JBLEVBMkJBO0FBQ0E7QUFDQTtBQUNBLHdCQURBO0FBRUEsZ0NBRkE7QUFHQTtBQUNBLGlDQURBO0FBRUEseUJBRkEsRUFIQTs7QUFPQSx5QkFQQSxFQU9BO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBLFNBZkE7O0FBaUJBO0FBQ0Esa0JBREEsRUFDQTtBQUNBLG9CQUZBLEVBRUE7QUFDQSw0QkFIQSxFQUdBO0FBQ0EsdUNBSkEsRUFJQTtBQUNBLHdCQUxBLEVBS0E7QUFDQSx1QkFOQSxFQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQVpBLEVBWUE7QUFDQTtBQUNBLDRCQURBO0FBRUEsNkJBRkEsRUFiQTtBQWdCQTtBQUNBLG9FQWpCQSxFQWlCQTtBQUNBO0FBQ0EsbUNBREE7QUFFQSwyQkFGQTtBQUdBLDRCQUhBO0FBSUEsOEJBSkEsRUFsQkE7QUF1QkE7QUFDQTtBQUNBLHlCQURBO0FBRUEscUNBRkE7QUFHQSw2QkFIQTtBQUlBO0FBQ0E7QUFDQSxXQU5BO0FBT0E7QUFDQSw4QkFEQTtBQUVBO0FBQ0EsMEJBREE7QUFFQSwrQkFGQSxFQUZBOztBQU1BO0FBQ0E7QUFDQSxXQVJBLEVBUEE7QUFnQkE7QUFDQSwwQkFEQTtBQUVBLGtDQUZBO0FBR0E7QUFDQSxtQ0FEQTtBQUVBLDJCQUZBLEVBSEE7O0FBT0EsMkJBUEEsRUFPQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQSxXQWZBLEVBaEJBLENBeEJBOzs7QUEwREEsS0F4R0E7O0FBMEdBLDBCQTFHQSxrQ0EwR0EsR0ExR0EsRUEwR0EsS0ExR0EsRUEwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FKQSxFQUlBLElBSkE7QUFLQSxPQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBUEEsRUFPQSxJQVBBO0FBUUE7QUFDQTtBQUNBLEtBbElBO0FBbUlBLGNBbklBLHdCQW1JQTtBQUNBO0FBQ0EsS0FySUE7QUFzSUEsYUF0SUEsdUJBc0lBO0FBQ0E7QUFDQTtBQUNBLEtBeklBO0FBMElBLGNBMUlBLHdCQTBJQTtBQUNBO0FBQ0E7QUFDQSxLQTdJQTtBQThJQSxlQTlJQSx1QkE4SUEsSUE5SUEsRUE4SUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FGQSxFQUVBLElBRkE7QUFHQTtBQUNBO0FBQ0EsU0FGQSxFQUVBLElBRkE7QUFHQSxPQVRBLE1BU0E7QUFDQTtBQUNBO0FBQ0EseUJBREE7QUFFQSwwQkFGQSxFQURBO0FBSUE7QUFDQSxzQ0FMQSxFQUtBO0FBQ0Esb0JBTkEsQ0FNQTtBQU5BO0FBUUE7QUFDQSxtR0FEQSxDQUNBO0FBQ0EsNkNBRkEsQ0FFQTtBQUNBO0FBQ0EsZ0RBSkEsQ0FJQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSwrQkFGQTtBQUdBO0FBQ0EsMERBVEEsQ0FTQTtBQUNBLFNBVkEsTUFVQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsRUFFQSxJQUZBO0FBR0E7QUFDQSxLQXRMQTtBQXVMQSxhQXZMQSxxQkF1TEEsSUF2TEEsRUF1TEE7QUFDQTtBQUNBO0FBQ0Esb0JBREEsRUFDQTtBQUNBLGlCQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUEsZ0NBRkE7O0FBSUE7QUFDQTtBQUNBLHVCQURBO0FBRUEsd0JBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLEVBRUEsSUFGQTs7QUFJQSxPQXBCQSxNQW9CQTs7QUFFQTtBQUNBO0FBQ0EsT0FKQSxNQUlBO0FBQ0E7QUFDQTs7QUFFQSxLQXpOQSxFQU5BLEUiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8YmFzZS12aWV3PlxyXG5cdFx0PGRpdiBjbGFzcz1cImZsZXhDb2x1bW5DZW50ZXJcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImZsZXhSb3cgbWFyZ2luVG9wQm90dG9tXCI+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0blwiIEBjbGljaz1cInNob3dOb3JtYWxBbGVydFwiPlxyXG5cdFx0XHRcdFx06buY6K6kQWxlcnRcclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogMTBweDtcIiBAY2xpY2s9XCJzaG93Q3VzdG9tQWxlcnQoJ2FsZXJ0JyxmYWxzZSlcIj5cclxuXHRcdFx0XHRcdOayoeacieaMiemSrueahEFsZXJ0XHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBtYXJnaW5MZWZ0UmlnaHRcIiBAY2xpY2s9XCJzaG93Q3VzdG9tQWxlcnQoJ2FsZXJ0JylcIj5cclxuXHRcdFx0XHRcdOiHquWumuS5iUFsZXJ0XHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0blwiIEBjbGljaz1cInNob3dDdXN0b21BbGVydCgnc2hlZXQnKVwiPlxyXG5cdFx0XHRcdFx06Ieq5a6a5LmJU2hlZXRcclxuXHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleFJvdyBtYXJnaW5Ub3BCb3R0b21cIj5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuXCIgQGNsaWNrPVwic2hvd0xvYWRpbmcoJ2RlZmF1bHQnKVwiPkxvYWRpbmc8L2J1dHRvbj5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogMTBweDtcIiBAY2xpY2s9XCJzaG93TG9hZGluZygncm91bmQnKVwiPkxvYWRpbmctcm91bmQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIG1hcmdpbkxlZnRSaWdodFwiIEBjbGljaz1cInNob3dMb2FkaW5nKCd0YWljaGknKVwiPkxvYWRpbmctdGFpY2hpPC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0blwiIEBjbGljaz1cInNob3dMb2FkaW5nKCdjdXN0b20nKVwiPkxvYWRpbmct6Ieq5a6a5LmJPC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImZsZXhSb3cgbWFyZ2luVG9wQm90dG9tXCI+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0blwiIEBjbGljaz1cInNob3dUb2FzdCgnJylcIj50b2FzdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4gbWFyZ2luTGVmdFJpZ2h0XCIgQGNsaWNrPVwic2hvd1RvYXN0KCdzdWNjZXNzJylcIj50b2FzdC1zdWNjZXNzPC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0blwiIEBjbGljaz1cInNob3dUb2FzdCgnZmFpbCcpXCI+dG9hc3QtZmFpbDwvYnV0dG9uPlxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3M9XCJidG4gbWFyZ2luTGVmdFJpZ2h0XCIgQGNsaWNrPVwic2hvd1RvYXN0KCd3YXJuJylcIj50b2FzdC13YXJuPC9idXR0b24+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ0blwiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDEwcHg7XCIgQGNsaWNrPVwic2hvd1RvYXN0KCdjdXN0b20nKVwiPnRvYXN0LeiHquWumuS5iTwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvYmFzZS12aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0c2hvd05vcm1hbEFsZXJ0KCkge1xyXG5cdFx0XHRcdGxldCBhbGVydCA9IGdldEFwcCgpLmdsb2JhbERhdGEuJGpqX2FsZXJ0KCfmj5DnpLonLCAn5pe26Ze05bCx5YOP5rW357u16YeM55qE5rC0LFxcbuWPquimgeaEv+aMpOaAu+i/mOaYr+acieeahOOAgicsICfnn6XpgZPkuoYnKVxyXG5cdFx0XHRcdGxldCBsb2FkaW5nID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YS4kampfbG9hZGluZygpXHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGxvYWRpbmcuY2xvc2UoKVxuXHRcdFx0XHRcdGdldEFwcCgpLmdsb2JhbERhdGEuJGpqX3RvYXN0KCflt7Lnu4/mm7TmlrAgQWxlcnQg5pWw5o2uJylcblx0XHRcdFx0XHQvL+abtOaWsOaVsOaNrlxyXG5cdFx0XHRcdFx0YWxlcnQudXBkYXRlKHtcclxuXHRcdFx0XHRcdFx0dGl0bGVTdHlsZToge1xyXG5cdFx0XHRcdFx0XHRcdCdjb2xvcic6ICdyZWQnLFxyXG5cdFx0XHRcdFx0XHRcdCdmb250LXNpemUnOiAnMThweCdcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0YnRuczogW3tcclxuXHRcdFx0XHRcdFx0XHR0aXRsZTogXCLnoa7lrppcIixcclxuXHRcdFx0XHRcdFx0XHRhY3RpdmVCYWNrZ3JvdW5kOiAnIzJBOEFGRicsXHJcblx0XHRcdFx0XHRcdFx0YWN0aXZlQ29sb3I6IFwiI2ZmZlwiLFxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlOiB7XHJcblx0XHRcdFx0XHRcdFx0XHQnY29sb3InOiAnIzRDRDk2NCcsXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLngrnlh7stLS0tLeehruWumlwiKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fV1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSwgMjAwMClcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd0N1c3RvbUFsZXJ0KHR5cGUsIGlzU2hvd0J0biA9IHRydWUpIHtcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHRsZXQgY29uZmlybUJ0biA9IHtcclxuXHRcdFx0XHRcdHRpdGxlOiBcIkNvbmZpcm1cIixcclxuXHRcdFx0XHRcdGFjdGl2ZUJhY2tncm91bmQ6ICcjMmYyJyxcclxuXHRcdFx0XHRcdHN0eWxlOiB7XHJcblx0XHRcdFx0XHRcdCdiYWNrZ3JvdW5kJzogJyMyQThBRkYnLFxyXG5cdFx0XHRcdFx0XHQnY29sb3InOiAnI2ZmZidcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR0b3VjaENsb3NlOiBmYWxzZSwgLy/ngrnlh7vmjInpkq7ml7bvvIzmmK/lkKboh6rliqjlhbPpl63lvLnnqpdcclxuXHRcdFx0XHRcdGNsaWNrOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0LypcclxuXHRcdFx0XHRcdFx05pyJ5pe25YCZ6ZyA6KaB6L+b6KGM572R57uc6K+35rGC5aSE55CG5ZCO77yM5Zyo5piv5ZCm6L+b6KGM5YWz6Zet5by556qXXHJcblx0XHRcdFx0XHRcdOi/meaXtuWAmeWPr+S7pemAieaLqeaJi+WKqOWFs+mXreW8ueeql1xyXG5cdFx0XHRcdFx0XHTms6jmhI/vvJpjbGlja+i/meS4quaWueazle+8jOS4jeimgeS9v+eUqOeureWktOWHveaVsD0+5pa55rOV77yM5L2/55SoZnVuY3Rpb27mlrnms5XvvIzov5nml7blgJl0aGlz6KGo56S655qE5b2T5YmN5oyJ6ZKu5a+56LGhXHJcblx0XHRcdFx0XHRcdCovXHJcblx0XHRcdFx0XHRcdHRoYXQuc2ltdWxhdGVOZXR3b3JrUmVxdWVzdCh0aGlzKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgYWxlcnQgPSBnZXRBcHAoKS5nbG9iYWxEYXRhLiRqal9hbGVydCh7XHJcblx0XHRcdFx0XHR0eXBlOiB0eXBlLCAvL+W8ueeql+eahOexu+Wei+aciWFsZXJ05ZKMc2hlZXRcclxuXHRcdFx0XHRcdHdpZHRoOiAnNzAlJywgLy/orr7nva7lvLnnqpfnmoTlrr3luqZcclxuXHRcdFx0XHRcdHBhZGRpbmc6ICcyMHB4IDMwcHgnLCAvL+iuvue9ruWGheWuueeahOS4iuS4i+W3puWPs+WBj+enu1xyXG5cdFx0XHRcdFx0bWFza0NvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC42KVwiLCAvL+mBrue9qeWxgueahOiDjOaZr+minOiJslxyXG5cdFx0XHRcdFx0dG91Y2hDbG9zZTogdHJ1ZSwgLy/ngrnlh7vog4zmma/lm77lsYLvvIzmmK/lkKblhbPpl63lvLnmoYZcclxuXHRcdFx0XHRcdHNob3dDbG9zZTogdHJ1ZSwgLy/mmK/lkKbmmL7npLrlj7PkuIrop5LnmoTlhbPpl63mjInpkq5cblx0XHRcdFx0XHQvLyBwb3NpdGlvbjonYm90dG9tJyxcclxuXHRcdFx0XHRcdC8vIGNsb3NlU3R5bGU6IHtcclxuXHRcdFx0XHRcdC8vIFx0J2hlaWdodCc6ICcwLjg1cmVtJyxcclxuXHRcdFx0XHRcdC8vIFx0J3dpZHRoJzogJzAuODVyZW0nXHJcblx0XHRcdFx0XHQvLyB9LFxyXG5cdFx0XHRcdFx0dGl0bGU6ICfmj5DnpLonLCAvL+agh+mimFxyXG5cdFx0XHRcdFx0dGl0bGVTdHlsZToge1xyXG5cdFx0XHRcdFx0XHQnY29sb3InOiAnI2ZiMjQwOCcsXHJcblx0XHRcdFx0XHRcdCdmb250LXNpemUnOiAnMjBweCdcclxuXHRcdFx0XHRcdH0sIC8v5qCH6aKY55qE5qC35byPXHJcblx0XHRcdFx0XHRtZXNzYWdlOiAn5LqL5a6e5LiK56Gu5a6e5piv5b2T5oiR5Lus5aSx5Y6755qE5pe25YCZ77yM5omN55+l6YGT6Ieq5bex5pu+57uP5oul5pyJ77yb5L2G5pyJ5rKh5pyJ5rOo5oSP5Yiw5b2T5pyJ5Lqb5Lic6KW/5p2l5Li055qE5pe25YCZ77yM5oiR5Lus5bey6ZSZ6L+H44CCJywgLy/lhoXlrrlcclxuXHRcdFx0XHRcdG1lc3NhZ2VTdHlsZToge1xyXG5cdFx0XHRcdFx0XHRcImp1c3RpZnktY29udGVudFwiOiAnbGVmdCcsXHJcblx0XHRcdFx0XHRcdFwiZGlzcGxheVwiOiBcImZsZXhcIixcclxuXHRcdFx0XHRcdFx0XCJjb2xvclwiOiAnIzhhOGE4YScsXHJcblx0XHRcdFx0XHRcdCd0ZXh0LWFsaWduJzogJ2xlZnQnXHJcblx0XHRcdFx0XHR9LCAvL+WGheWuueeahOagt+W8j1xyXG5cdFx0XHRcdFx0YnRuczogaXNTaG93QnRuID09PSBmYWxzZSA/IFtdIDogW3tcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiQ2FuY2VsXCIsXHJcblx0XHRcdFx0XHRcdGFjdGl2ZUJhY2tncm91bmQ6ICcjMkE4QUZGJyxcclxuXHRcdFx0XHRcdFx0YWN0aXZlQ29sb3I6IFwiI2ZmZlwiLFxyXG5cdFx0XHRcdFx0XHRjbGljazogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi54K55Ye7Q2FuY2VsXCIpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6IFwiRGVzdHJ1Y3RpdmVcIixcclxuXHRcdFx0XHRcdFx0c3R5bGU6IHtcclxuXHRcdFx0XHRcdFx0XHQnY29sb3InOiAncmVkJyxcclxuXHRcdFx0XHRcdFx0XHQnZm9udC1zaXplJzogJzE1cHgnXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdGNsaWNrOiAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLngrnlh7tEZXN0cnVjdGl2ZVwiKVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiBcIkNvbmZpcm1cIixcclxuXHRcdFx0XHRcdFx0YWN0aXZlQmFja2dyb3VuZDogJyMyZjInLFxyXG5cdFx0XHRcdFx0XHRzdHlsZToge1xyXG5cdFx0XHRcdFx0XHRcdCdiYWNrZ3JvdW5kJzogJyMyQThBRkYnLFxyXG5cdFx0XHRcdFx0XHRcdCdjb2xvcic6ICcjZmZmJyxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0dG91Y2hDbG9zZTogZmFsc2UsIC8v54K55Ye75oyJ6ZKu5pe277yM5piv5ZCm6Ieq5Yqo5YWz6Zet5by556qXXHJcblx0XHRcdFx0XHRcdGNsaWNrOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHQvKlxyXG5cdFx0XHRcdFx0XHRcdOacieaXtuWAmemcgOimgei/m+ihjOe9kee7nOivt+axguWkhOeQhuWQju+8jOWcqOaYr+WQpui/m+ihjOWFs+mXreW8ueeql1xyXG5cdFx0XHRcdFx0XHRcdOi/meaXtuWAmeWPr+S7pemAieaLqeaJi+WKqOWFs+mXreW8ueeql1xyXG5cdFx0XHRcdFx0XHRcdOazqOaEj++8mmNsaWNr6L+Z5Liq5pa55rOV77yM5LiN6KaB5L2/55So566t5aS05Ye95pWwPT7mlrnms5XvvIzkvb/nlKhmdW5jdGlvbuaWueazle+8jOi/meaXtuWAmXRoaXPooajnpLrnmoTlvZPliY3mjInpkq7lr7nosaFcclxuXHRcdFx0XHRcdFx0XHQqL1xyXG5cdFx0XHRcdFx0XHRcdHRoYXQuc2ltdWxhdGVOZXR3b3JrUmVxdWVzdCh0aGlzLCBhbGVydClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fV1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0c2ltdWxhdGVOZXR3b3JrUmVxdWVzdChidG4sIGFsZXJ0KSB7XHJcblx0XHRcdFx0Ly/ov5vooYznvZHnu5zmqKHmi5/vvIzor7fmsYLnvZHnu5zml7blgJnvvIznpoHmraLmjInpkq7lho3mrKHngrnlh7vvvIznrYnnu5Pmnpzlm57mnaXlkI7vvIzlnKjogIPomZHmmK/lkKblkK/nlKjmjInpkq7ngrnlh7vkuovku7blkozmmK/lkKblhbPpl63lvLnmoYZcclxuXHRcdFx0XHR0aGlzLmNvdW50ID0gdGhpcy5jb3VudCB8fCAwXHJcblx0XHRcdFx0Z2V0QXBwKCkuZ2xvYmFsRGF0YS4kampfdG9hc3QoJ+aMiemSruiiq+emgeeUqCznvZHnu5zor7fmsYLkuK0uLi4nKVxyXG5cdFx0XHRcdGJ0bi5pc0Rpc2FibGUgPSB0cnVlXHJcblx0XHRcdFx0Y29uc29sZS5sb2coYnRuKVxyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdGlmICh0aGlzLmNvdW50ICUgMiA9PT0gMCkge1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0Ly/lkK/nlKjmjInpkq7ngrnlh7vkuovku7ZcclxuXHRcdFx0XHRcdFx0YnRuLmlzRGlzYWJsZSA9IGZhbHNlXHJcblx0XHRcdFx0XHRcdGdldEFwcCgpLmdsb2JhbERhdGEuJGpqX3RvYXN0KCfor7fmsYLlpLHotKXvvIzor7fngrnlh7vmjInpkq7ph43mlrDor7fmsYInKVxyXG5cdFx0XHRcdFx0fSwgMjAwMClcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0Z2V0QXBwKCkuZ2xvYmFsRGF0YS4kampfdG9hc3QoJ+e9kee7nOivt+axguaIkOWKnycpXHJcblx0XHRcdFx0XHRcdC8v5YWz6Zet5by556qXXHJcblx0XHRcdFx0XHRcdGFsZXJ0LmNsb3NlKClcclxuXHRcdFx0XHRcdFx0Ly8gdW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHQvLyAgICAgdXJsOiAnL3BhZ2VzL2RlbW8vaW5kZXgnXHJcblx0XHRcdFx0XHRcdC8vIH0pXHJcblx0XHRcdFx0XHR9LCAyMDAwKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLmNvdW50ICs9IDFcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd0RpYWxvZygpIHtcclxuXHRcdFx0XHR0aGlzLmlzU2hvd0RpYWxvZyA9IHRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd1BvcHVwKCkge1xyXG5cdFx0XHRcdHVuaS5oaWRlVGFiQmFyKClcclxuXHRcdFx0XHR0aGlzLmlzU2hvd1BvcHVwID0gdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbG9zZVBvcHVwKCkge1xyXG5cdFx0XHRcdHVuaS5zaG93VGFiQmFyKClcclxuXHRcdFx0XHR0aGlzLmlzU2hvd1BvcHVwID0gZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd0xvYWRpbmcodHlwZSkge1xyXG5cclxuXHRcdFx0XHRpZiAodHlwZSA9PT0gJ2RlZmF1bHQnKSB7XHJcblx0XHRcdFx0XHRsZXQgbG9hZGluZyA9IGdldEFwcCgpLmdsb2JhbERhdGEuJGpqX2xvYWRpbmcoJ+WKoOi9veS4rS4uLicpXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGxvYWRpbmcudXBkYXRlKCdVcGRhdGUuLi4nKVxuXHRcdFx0XHRcdH0sIDIwMDApXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRsb2FkaW5nLmNsb3NlKClcclxuXHRcdFx0XHRcdH0sIDQwMDApXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNvbnN0IGxvYWRpbmdEYXRhID0ge1xyXG5cdFx0XHRcdFx0XHRpbWFnZVNpemU6IHtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogJzMycHgnLFxyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogJzMycHgnXHJcblx0XHRcdFx0XHRcdH0sIC8v6K6+572u5Zu+54mH55qE5aSn5bCPXHJcblx0XHRcdFx0XHRcdHVzZXJJbnRlcmFjdGlvbkVuYWJsZWQ6IHRydWUsIC8v5piv5ZCm5ZCv55So55So5oi35Lqk5LqS77yM6buY6K6k5pivZmFsc2Us5ZCv55So5ZCO77yM6YGu572p5bGC5LiL55qE5Zu+5bGC5LqL5Lu25YWB6K6454K55Ye7XHJcblx0XHRcdFx0XHRcdHR5cGU6IHR5cGUgLy/orr7nva7liqDovb3moYbnmoTnsbvlnovvvIzmnIlkZWZhdWx044CBcm91bmTjgIF0YWljaGnkuInnp41cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICh0eXBlID09PSAnY3VzdG9tJykge1xyXG5cdFx0XHRcdFx0XHRsb2FkaW5nRGF0YVsnaW1hZ2VVcmwnXSA9IHJlcXVpcmUoJy4uLy4uL3N0YXRpYy9sb2FkaW5nX2N1c3RvbS5wbmcnKSAvL+WbvueJh+mTvuaOpVxyXG5cdFx0XHRcdFx0XHRsb2FkaW5nRGF0YVsnYmFja2dyb3VuZCddID0gJyNmZmYnIC8v6K6+572u5by55qGG5YaF5a6555qE6IOM5pmv6ImyXHJcblx0XHRcdFx0XHRcdGxvYWRpbmdEYXRhWyd3aWR0aCddID0gJzEyMHB4J1xyXG5cdFx0XHRcdFx0XHRsb2FkaW5nRGF0YVsnbWVzc2FnZSddID0gJ+iHquWumuS5iUxvYWRpbmcnIC8v6Ieq5a6a5LmJ5paH5pysXHJcblx0XHRcdFx0XHRcdGxvYWRpbmdEYXRhWydtZXNzYWdlU3R5bGUnXSA9IHtcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogJyMyQThBRkYnLFxyXG5cdFx0XHRcdFx0XHRcdCdmb250LXNpemUnOiAnMTRweCdcclxuXHRcdFx0XHRcdFx0fSAvL+S/ruaUueaWh+acrOagt+W8j1xyXG5cdFx0XHRcdFx0XHRsb2FkaW5nRGF0YVsnbWFza0NvbG9yJ10gPSAncmdiYSgwLCAwLCAwLCAwLjUpJyAvL+iuvue9rumBrue9qeWxgueahOiDjOaZr+iJslxyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlID09PSAncm91bmQnKSB7XHJcblx0XHRcdFx0XHRcdGxvYWRpbmdEYXRhWydtZXNzYWdlJ10gPSAncm91bmQuLi4nXHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGUgPT09ICd0YWljaGknKSB7XHJcblx0XHRcdFx0XHRcdGxvYWRpbmdEYXRhWydtZXNzYWdlJ10gPSAndGFpY2hpLi4uJ1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0bGV0IGxvYWRpbmcgPSBnZXRBcHAoKS5nbG9iYWxEYXRhLiRqal9sb2FkaW5nKGxvYWRpbmdEYXRhKVxyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGxvYWRpbmcuY2xvc2UoKVxyXG5cdFx0XHRcdFx0fSwgNTAwMClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dUb2FzdCh0eXBlKSB7XHJcblx0XHRcdFx0bGV0IG1lc3NhZ2UgPSAn5ZOI5ZOI5ZOI5ZOI5ZOI5ZOI5ZOI5ZOI5ZOI5ZOI5ZOI5ZOI5ZOI5ZOI5ZOI5ZOI5ZOI44CC44CC44CCJ1xyXG5cdFx0XHRcdGNvbnN0IHRvYXN0RGF0YSA9IHtcclxuXHRcdFx0XHRcdGR1cmF0aW9uOiAtMSwgLy/kuI3oh6rliqjlhbPpl63vvIzpnIDopoHmiYvliqjlhbPpl61cclxuXHRcdFx0XHRcdHJhZGl1czogM1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAodHlwZSA9PT0gJ2N1c3RvbScpIHtcclxuXHRcdFx0XHRcdC8v6Ieq5a6a5LmJXHJcblx0XHRcdFx0XHR0b2FzdERhdGFbJ21lc3NhZ2UnXSA9IG1lc3NhZ2VcclxuXHRcdFx0XHRcdHRvYXN0RGF0YVsnYmFja2dyb3VuZCddID0gJyNmMjQnXHJcblx0XHRcdFx0XHR0b2FzdERhdGFbJ21heFdpZHRoJ10gPSAnNjAlJ1xyXG5cdFx0XHRcdFx0dG9hc3REYXRhWydtZXNzYWdlU3R5bGUnXSA9IHtcclxuXHRcdFx0XHRcdFx0J2NvbG9yJzogJyNmZTInLFxyXG5cdFx0XHRcdFx0XHQndGV4dC1hbGlnbic6ICdjZW50ZXInXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0b2FzdERhdGFbJ3BhZGRpbmcnXSA9ICcyMHB4J1xyXG5cdFx0XHRcdFx0dG9hc3REYXRhW1wiaW1hZ2VTaXplXCJdID0ge1xyXG5cdFx0XHRcdFx0XHR3aWR0aDogJzYwcHgnLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6ICc2MHB4J1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dG9hc3REYXRhW1wiaW1hZ2VVcmxcIl0gPSByZXF1aXJlKCcuLi8uLi9zdGF0aWMvbG9nby5wbmcnKVxyXG5cdFx0XHRcdFx0bGV0IHRvYXN0ID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YS4kampfdG9hc3QodG9hc3REYXRhKVxyXG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0dG9hc3QuY2xvc2UoKVxyXG5cdFx0XHRcdFx0fSwgNTAwMClcclxuXHJcblx0XHRcdFx0fSBlbHNlIGlmICh0eXBlLmxlbmd0aCA+IDApIHtcclxuXHJcblx0XHRcdFx0XHQvL+esrOS4gOS4quWPguaVsOS4uuaPkOekuuS/oeaBr+aWh+acrO+8jOesrOS6jOS4quWPguaVsOS4uuaPkOekuuexu+Wei++8jOesrOS4ieS4quWPguaVsOS4uuaYvuekuueahOaXtumVv1xyXG5cdFx0XHRcdFx0Z2V0QXBwKCkuZ2xvYmFsRGF0YS4kampfdG9hc3QodHlwZSwgdHlwZSwgMSlcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Z2V0QXBwKCkuZ2xvYmFsRGF0YS4kampfdG9hc3QobWVzc2FnZSlcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LmZsZXhDb2x1bW5DZW50ZXIge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG5cclxuXHQuZmxleFJvdyB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGZsZXgtd3JhcDogd3JhcDtcclxuXHR9XHJcblxyXG5cdC5tYXJnaW5Ub3BCb3R0b20ge1xyXG5cdFx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblx0fVxyXG5cclxuXHQubWFyZ2luTGVmdFJpZ2h0IHtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cdH1cclxuXHJcblx0LmJ0biB7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMkE4QUZGO1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0XHRwYWRkaW5nOiAwcHggMjBweDtcclxuXHRcdGhlaWdodDogNDRweDtcclxuXHR9XHJcblxyXG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;}

}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 11 */
/*!*********************************************************************************!*\
  !*** /Users/weiqu/Documents/GitApp/jj-uni-messagebox/static/loading_custom.png ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/loading_custom.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvbG9hZGluZ19jdXN0b20ucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!***********************************************************************!*\
  !*** /Users/weiqu/Documents/GitApp/jj-uni-messagebox/static/logo.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/logo.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjEyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvbG9nby5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!************************************************************************************************************************************************!*\
  !*** /Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/demo/nvue.nvue?vue&type=style&index=0&id=29ae6a73&scoped=true&lang=css&mpType=page ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_style_index_0_id_29ae6a73_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./nvue.nvue?vue&type=style&index=0&id=29ae6a73&scoped=true&lang=css&mpType=page */ 14);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_style_index_0_id_29ae6a73_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_style_index_0_id_29ae6a73_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_style_index_0_id_29ae6a73_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_style_index_0_id_29ae6a73_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_nvue_nvue_vue_type_style_index_0_id_29ae6a73_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 14 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/demo/nvue.nvue?vue&type=style&index=0&id=29ae6a73&scoped=true&lang=css&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".flexColumnCenter": {
    "": {
      "display": [
        "flex",
        0,
        0,
        0
      ],
      "flexDirection": [
        "column",
        0,
        0,
        0
      ]
    }
  },
  ".flexRow": {
    "": {
      "display": [
        "flex",
        0,
        0,
        1
      ],
      "flexDirection": [
        "row",
        0,
        0,
        1
      ],
      "justifyContent": [
        "center",
        0,
        0,
        1
      ],
      "alignItems": [
        "center",
        0,
        0,
        1
      ],
      "flexWrap": [
        "wrap",
        0,
        0,
        1
      ]
    }
  },
  ".marginTopBottom": {
    "": {
      "marginTop": [
        "10",
        0,
        0,
        2
      ],
      "marginBottom": [
        "10",
        0,
        0,
        2
      ]
    }
  },
  ".marginLeftRight": {
    "": {
      "marginRight": [
        "10",
        0,
        0,
        3
      ],
      "marginLeft": [
        "10",
        0,
        0,
        3
      ]
    }
  },
  ".btn": {
    "": {
      "borderRadius": [
        "5",
        0,
        0,
        4
      ],
      "backgroundColor": [
        "#2A8AFF",
        0,
        0,
        4
      ],
      "borderColor": [
        "#FFFFFF",
        0,
        0,
        4
      ],
      "color": [
        "#FFFFFF",
        0,
        0,
        4
      ],
      "paddingTop": [
        "0",
        0,
        0,
        4
      ],
      "paddingRight": [
        "20",
        0,
        0,
        4
      ],
      "paddingBottom": [
        "0",
        0,
        0,
        4
      ],
      "paddingLeft": [
        "20",
        0,
        0,
        4
      ],
      "height": [
        "44",
        0,
        0,
        4
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 15 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);