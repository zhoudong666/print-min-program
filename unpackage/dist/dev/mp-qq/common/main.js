(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],[
/* 0 */
/*!****************************************************!*\
  !*** E:/online-project1/print-min-program/main.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createApp) {__webpack_require__(/*! uni-pages */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 6));

__webpack_require__(/*! ./utils/filters */ 18);

var _request = _interopRequireDefault(__webpack_require__(/*! ./utils/request.js */ 12));
var _login = __webpack_require__(/*! @/utils/login.js */ 19);




var _utils = __webpack_require__(/*! @/utils/utils.js */ 20);


var _api = _interopRequireDefault(__webpack_require__(/*! @/utils/api.js */ 14));

__webpack_require__(/*! ./assets/main.scss */ 21);
__webpack_require__(/*! ./assets/common.css */ 22);

var _urlConfig = __webpack_require__(/*! ./urlConfig */ 13);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;_vue.default.prototype.$goToUrl = _login.goToUrl;_vue.default.prototype.$checkIsLogin = _login.checkIsLogin;_vue.default.prototype.$goLogin = _login.goLogin;_vue.default.prototype.$wxOpenSetting = _utils.wxOpenSetting; // 接口
_vue.default.prototype.$Q = _request.default;
_vue.default.prototype.$prefix = _urlConfig.requestUrl;

// 用法 this.$api(url,params) // url:请求地址名称 params:拼接参数
_vue.default.prototype.$api = _api.default.getUrl;

_vue.default.config.productionTip = false;

_App.default.mpType = "app";

var app = new _vue.default(_objectSpread({}, _App.default));


createApp(app).$mount(); //为了兼容小程序及app端必须这样写才有效果
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["createApp"]))

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/*!****************************************************!*\
  !*** E:/online-project1/print-min-program/App.vue ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 7);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css& */ 15);
/* harmony import */ var _D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);
var render, staticRenderFns, recyclableRender, components
var renderjs





/* normalize component */

var component = Object(_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null,
  false,
  components,
  renderjs
)

component.options.__file = "App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 7 */
/*!*****************************************************************************!*\
  !*** E:/online-project1/print-min-program/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_softs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 8);
/* harmony import */ var _D_softs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_softs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_softs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/online-project1/print-min-program/App.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 9));
var _request = _interopRequireDefault(__webpack_require__(/*! ./utils/request.js */ 12));
var _api = _interopRequireDefault(__webpack_require__(/*! @/utils/api.js */ 14));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =
{
  globalData: {
    shopName: "", // 店铺名称  --共用
    shopCode: "", // 店铺code  --共用
    shopAddress: "", // 店铺地址  --共用
    shopLogo: "", // 店铺Logo  --共用
    deviceNo: "", // 打印机编号  --共用
    deviceName: "", // 打印机名字  --共用
    deviceMsg: "", // 打印机描述  --共用
    shopInfoList: ["shopName", "shopCode", "shopAddress"],
    deviceInfoList: ["deviceNo", "deviceName", "deviceMsg"],
    flowCode: "", // 打印任务流水号  --共用
    ossToPdfCode: "", // oss转pdf后生成的code
    setParamType: "", // 打印文件类型 wxFile wxImg localFile localImg
    wxFile: [], // 存储已选打印文件
    wxImg: [], // 存储已选打印图片
    localFile: [], // 存储已选打印文件
    localImg: [], // 存储已选打印图片
    printParams: [], // 存储选取文件默认参数
    allFile: [], // 所有已选文件
    fileParam: {}, // 打印文件修改参数
    fileParamIndex: 0, // 被修改文件参数的索引,
    printFilesSetting: {}, // 最终提交参数
    basketIds: [], // 预打印文件id
    isPrintOrCopyOrScan: "copy", // 判断入口是 打印 复印 还是 扫描
    isAuthCamera: false, // 用于中间的tabbar扫描时检测是否开启摄像头
    isNearShop: false, // 记录是否是从附近店铺进入的flag 用于跳过打印机选择页面
    isFromScanQcode: false, // 用于打印机选择页,通过扫描跳转来时,进行下一步操作
    isTabbarScan: "" // 用于记录是否从tabbar扫描进入到店铺详情页
  },
  onLaunch: function onLaunch() {},
  onShow: function onShow() {
    var tokenTime = uni.getStorageSync("setTokenTime");
    // if(!tokenTime) return;
    var disTime = +new Date() - tokenTime;
    // 每次显示, 每距离上次token保存时间, 相差10 分钟 检测一下token是否过期
    if (disTime < 10 * 60 * 1000) return;
    this.reloadToken();
  },
  onHide: function onHide() {},
  methods: {
    // 生成flowCode
    newFlowCode: function newFlowCode() {var _this = this;
      return new Promise( /*#__PURE__*/function () {var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(resolve) {var type;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                  type = _this.globalData.isPrintOrCopyOrScan;_context.next = 3;return (
                    _request.default.get({
                      url: _api.default.getUrl(type + "_taskFlowId") }));case 3:_this.globalData.flowCode = _context.sent;

                  resolve(true);case 5:case "end":return _context.stop();}}}, _callee);}));return function (_x) {return _ref.apply(this, arguments);};}());

    },
    // 刷新token
    reloadToken: function reloadToken() {
      uni.login({
        provider: "weixin",
        success: function success(res) {
          if (!res.code) return; //微信登录成功  已拿到code请求后台
          _request.default.post({
            url: _api.default.getUrl("login"),
            data: { principal: res.code }, //uni.login 登录成功后的code
            success: function success(re) {
              uni.setStorageSync("token", "bearer" + re.access_token);
              uni.setStorageSync("setTokenTime", +new Date());
            } });

        } });

    },
    // 再次打印 共用
    printAgain: function printAgain(orderNumber) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var res;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                  _request.default.get({
                    url: _api.default.getUrl("repeatTaskFlow"),
                    data: { orderNumber: orderNumber } }));case 2:res = _context2.sent;

                _this2.globalData.isPrintOrCopyOrScan = "print";
                _this2.globalData.flowCode = res;
                _this2.getPrintParams();case 6:case "end":return _context2.stop();}}}, _callee2);}))();
    },
    // 获取打印文件和设置参数
    getPrintParams: function getPrintParams() {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var data, printParams;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                data = {
                  flowCode: _this3.globalData.flowCode,
                  deviceNo: _this3.globalData.deviceNo };_context3.next = 3;return (

                  _request.default.put({
                    url: _api.default.getUrl("getPrintParams"),
                    data: data }));case 3:printParams = _context3.sent;

                _this3.globalData.printParams = printParams;
                _this3.$vm.$goToUrl("/pages/printSteps/setParams");case 6:case "end":return _context3.stop();}}}, _callee3);}))();
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/*!*************************************************************************************!*\
  !*** E:/online-project1/print-min-program/App.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_softs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=css& */ 16);
/* harmony import */ var _D_softs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_softs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_softs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_softs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 16 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/online-project1/print-min-program/App.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })
],[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsbnVsbCwid2VicGFjazovLy9FOi9vbmxpbmUtcHJvamVjdDEvcHJpbnQtbWluLXByb2dyYW0vQXBwLnZ1ZT82ZDBlIiwidW5pLWFwcDovLy9BcHAudnVlIiwid2VicGFjazovLy9FOi9vbmxpbmUtcHJvamVjdDEvcHJpbnQtbWluLXByb2dyYW0vQXBwLnZ1ZT9iODExIiwid2VicGFjazovLy9FOi9vbmxpbmUtcHJvamVjdDEvcHJpbnQtbWluLXByb2dyYW0vQXBwLnZ1ZT8xNmZkIl0sIm5hbWVzIjpbInd4IiwiX193ZWJwYWNrX3JlcXVpcmVfVU5JX01QX1BMVUdJTl9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIlZ1ZSIsInByb3RvdHlwZSIsIiRnb1RvVXJsIiwiZ29Ub1VybCIsIiRjaGVja0lzTG9naW4iLCJjaGVja0lzTG9naW4iLCIkZ29Mb2dpbiIsImdvTG9naW4iLCIkd3hPcGVuU2V0dGluZyIsInd4T3BlblNldHRpbmciLCIkUSIsInJlcXVlc3QiLCIkcHJlZml4IiwicmVxdWVzdFVybCIsIiRhcGkiLCJhcGkiLCJnZXRVcmwiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7aURBQUE7O0FBRTJEO0FBQzNEOztBQUVBOztBQUVBO0FBQ0E7Ozs7O0FBS0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUEsNEQseW5DQXBCQTtBQUNBQSxFQUFFLENBQUNDLGlDQUFILEdBQXVDQyxtQkFBdkMsQ0FPQUMsYUFBSUMsU0FBSixDQUFjQyxRQUFkLEdBQXlCQyxjQUF6QixDQUNBSCxhQUFJQyxTQUFKLENBQWNHLGFBQWQsR0FBOEJDLG1CQUE5QixDQUNBTCxhQUFJQyxTQUFKLENBQWNLLFFBQWQsR0FBeUJDLGNBQXpCLENBR0FQLGFBQUlDLFNBQUosQ0FBY08sY0FBZCxHQUErQkMsb0JBQS9CLEMsQ0FDQTtBQVFBVCxhQUFJQyxTQUFKLENBQWNTLEVBQWQsR0FBbUJDLGdCQUFuQjtBQUNBWCxhQUFJQyxTQUFKLENBQWNXLE9BQWQsR0FBd0JDLHFCQUF4Qjs7QUFFQTtBQUNBYixhQUFJQyxTQUFKLENBQWNhLElBQWQsR0FBcUJDLGFBQUlDLE1BQXpCOztBQUVBaEIsYUFBSWlCLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlyQixZQUFKLG1CQUFhbUIsWUFBYixFQUFaOzs7QUFHQSxVQUFBRSxHQUFHLEVBQUNDLE1BQUosRyxDQUFjLHVCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMO0FBQ2E7OztBQUcvRDtBQUM0SztBQUM1SyxnQkFBZ0IscUxBQVU7QUFDMUIsRUFBRSx5RUFBTTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQWdvQixDQUFnQixxcEJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNDcHBCO0FBQ0EsaUY7QUFDQTtBQUNBO0FBQ0EsZ0JBREEsRUFDQTtBQUNBLGdCQUZBLEVBRUE7QUFDQSxtQkFIQSxFQUdBO0FBQ0EsZ0JBSkEsRUFJQTtBQUNBLGdCQUxBLEVBS0E7QUFDQSxrQkFOQSxFQU1BO0FBQ0EsaUJBUEEsRUFPQTtBQUNBLHlEQVJBO0FBU0EsMkRBVEE7QUFVQSxnQkFWQSxFQVVBO0FBQ0Esb0JBWEEsRUFXQTtBQUNBLG9CQVpBLEVBWUE7QUFDQSxjQWJBLEVBYUE7QUFDQSxhQWRBLEVBY0E7QUFDQSxpQkFmQSxFQWVBO0FBQ0EsZ0JBaEJBLEVBZ0JBO0FBQ0EsbUJBakJBLEVBaUJBO0FBQ0EsZUFsQkEsRUFrQkE7QUFDQSxpQkFuQkEsRUFtQkE7QUFDQSxxQkFwQkEsRUFvQkE7QUFDQSx5QkFyQkEsRUFxQkE7QUFDQSxpQkF0QkEsRUFzQkE7QUFDQSwrQkF2QkEsRUF1QkE7QUFDQSx1QkF4QkEsRUF3QkE7QUFDQSxxQkF6QkEsRUF5QkE7QUFDQSwwQkExQkEsRUEwQkE7QUFDQSxvQkEzQkEsQ0EyQkE7QUEzQkEsR0FEQTtBQThCQSxrQ0E5QkE7QUErQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXRDQTtBQXVDQSw4QkF2Q0E7QUF3Q0E7QUFDQTtBQUNBLGVBRkEseUJBRUE7QUFDQTtBQUNBLHNCQURBLEdBQ0Esb0NBREE7QUFFQTtBQUNBLG9FQURBLEdBRkEsU0FFQSx5QkFGQTs7QUFLQSxnQ0FMQTs7QUFPQSxLQVZBO0FBV0E7QUFDQSxlQVpBLHlCQVlBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBO0FBQ0EsZ0NBREEsQ0FDQTtBQUNBO0FBQ0EsNkNBREE7QUFFQSx5Q0FGQSxFQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFOQTs7QUFRQSxTQVpBOztBQWNBLEtBM0JBO0FBNEJBO0FBQ0EsY0E3QkEsc0JBNkJBLFdBN0JBLEVBNkJBO0FBQ0E7QUFDQSw4REFEQTtBQUVBLHNEQUZBLEdBREEsU0FDQSxHQURBOztBQUtBO0FBQ0E7QUFDQSx3Q0FQQTtBQVFBLEtBckNBO0FBc0NBO0FBQ0Esa0JBdkNBLDRCQXVDQTtBQUNBLG9CQURBLEdBQ0E7QUFDQSxzREFEQTtBQUVBLHNEQUZBLEVBREE7O0FBS0E7QUFDQSw4REFEQTtBQUVBLDhCQUZBLEdBTEEsU0FLQSxXQUxBOztBQVNBO0FBQ0EsbUVBVkE7QUFXQSxLQWxEQSxFQXhDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFnNkIsQ0FBZ0IsMDVCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0FwN0I7QUFDQSxPQUFPLEtBQVUsRUFBRSxrQkFLZCIsImZpbGUiOiJjb21tb24vbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcclxuLy8gQHRzLWlnbm9yZVxyXG53eC5fX3dlYnBhY2tfcmVxdWlyZV9VTklfTVBfUExVR0lOX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fO2ltcG9ydCBWdWUgZnJvbSBcInZ1ZVwiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcFwiO1xyXG5cclxuaW1wb3J0IFwiLi91dGlscy9maWx0ZXJzXCI7XHJcbi8vIOivt+axgiByZXF1ZXN0IOiuvue9rlxyXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi91dGlscy9yZXF1ZXN0LmpzXCI7XHJcbmltcG9ydCB7IGdvVG9VcmwsIGNoZWNrSXNMb2dpbiwgZ29Mb2dpbiB9IGZyb20gXCJAL3V0aWxzL2xvZ2luLmpzXCI7XHJcblZ1ZS5wcm90b3R5cGUuJGdvVG9VcmwgPSBnb1RvVXJsO1xyXG5WdWUucHJvdG90eXBlLiRjaGVja0lzTG9naW4gPSBjaGVja0lzTG9naW47XHJcblZ1ZS5wcm90b3R5cGUuJGdvTG9naW4gPSBnb0xvZ2luO1xyXG5cclxuaW1wb3J0IHsgd3hPcGVuU2V0dGluZyB9IGZyb20gXCJAL3V0aWxzL3V0aWxzLmpzXCI7XHJcblZ1ZS5wcm90b3R5cGUuJHd4T3BlblNldHRpbmcgPSB3eE9wZW5TZXR0aW5nO1xyXG4vLyDmjqXlj6NcclxuaW1wb3J0IGFwaSBmcm9tIFwiQC91dGlscy9hcGkuanNcIjtcclxuXHJcbmltcG9ydCBcIi4vYXNzZXRzL21haW4uc2Nzc1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9jb21tb24uY3NzXCI7XHJcblxyXG5pbXBvcnQgeyByZXF1ZXN0VXJsIH0gZnJvbSBcIi4vdXJsQ29uZmlnXCI7XHJcblxyXG5WdWUucHJvdG90eXBlLiRRID0gcmVxdWVzdDtcclxuVnVlLnByb3RvdHlwZS4kcHJlZml4ID0gcmVxdWVzdFVybDtcclxuXHJcbi8vIOeUqOazlSB0aGlzLiRhcGkodXJsLHBhcmFtcykgLy8gdXJsOuivt+axguWcsOWdgOWQjeensCBwYXJhbXM65ou85o6l5Y+C5pWwXHJcblZ1ZS5wcm90b3R5cGUuJGFwaSA9IGFwaS5nZXRVcmw7XHJcblxyXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZTtcclxuXHJcbkFwcC5tcFR5cGUgPSBcImFwcFwiO1xyXG5cclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7IC4uLkFwcCB9KTtcclxuXHJcblxyXG5hcHAuJG1vdW50KCk7IC8v5Li65LqG5YW85a655bCP56iL5bqP5Y+KYXBw56uv5b+F6aG76L+Z5qC35YaZ5omN5pyJ5pWI5p6cIiwidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXHNvZnRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcc29mdHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcyFEOlxcXFxzb2Z0c1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tMTItMSFEOlxcXFxzb2Z0c1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcd2VicGFjay11bmktbXAtbG9hZGVyXFxcXGxpYlxcXFxzY3JpcHQuanMhRDpcXFxcc29mdHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXHNvZnRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxzb2Z0c1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXHNvZnRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xMi0xIUQ6XFxcXHNvZnRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHNjcmlwdC5qcyFEOlxcXFxzb2Z0c1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcc29mdHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHNjcmlwdD5cclxuaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vdXRpbHMvcmVxdWVzdC5qc1wiO1xyXG5pbXBvcnQgYXBpIGZyb20gXCJAL3V0aWxzL2FwaS5qc1wiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZ2xvYmFsRGF0YToge1xyXG4gICAgc2hvcE5hbWU6IFwiXCIsIC8vIOW6l+mTuuWQjeensCAgLS3lhbHnlKhcclxuICAgIHNob3BDb2RlOiBcIlwiLCAvLyDlupfpk7pjb2RlICAtLeWFseeUqFxyXG4gICAgc2hvcEFkZHJlc3M6IFwiXCIsIC8vIOW6l+mTuuWcsOWdgCAgLS3lhbHnlKhcclxuICAgIHNob3BMb2dvOiBcIlwiLCAvLyDlupfpk7pMb2dvICAtLeWFseeUqFxyXG4gICAgZGV2aWNlTm86IFwiXCIsIC8vIOaJk+WNsOacuue8luWPtyAgLS3lhbHnlKhcclxuICAgIGRldmljZU5hbWU6IFwiXCIsIC8vIOaJk+WNsOacuuWQjeWtlyAgLS3lhbHnlKhcclxuICAgIGRldmljZU1zZzogXCJcIiwgLy8g5omT5Y2w5py65o+P6L+wICAtLeWFseeUqFxyXG4gICAgc2hvcEluZm9MaXN0OiBbXCJzaG9wTmFtZVwiLCBcInNob3BDb2RlXCIsIFwic2hvcEFkZHJlc3NcIl0sXHJcbiAgICBkZXZpY2VJbmZvTGlzdDogW1wiZGV2aWNlTm9cIiwgXCJkZXZpY2VOYW1lXCIsIFwiZGV2aWNlTXNnXCJdLFxyXG4gICAgZmxvd0NvZGU6IFwiXCIsIC8vIOaJk+WNsOS7u+WKoea1geawtOWPtyAgLS3lhbHnlKhcclxuICAgIG9zc1RvUGRmQ29kZTogXCJcIiwgLy8gb3Nz6L2scGRm5ZCO55Sf5oiQ55qEY29kZVxyXG4gICAgc2V0UGFyYW1UeXBlOiBcIlwiLCAvLyDmiZPljbDmlofku7bnsbvlnosgd3hGaWxlIHd4SW1nIGxvY2FsRmlsZSBsb2NhbEltZ1xyXG4gICAgd3hGaWxlOiBbXSwgLy8g5a2Y5YKo5bey6YCJ5omT5Y2w5paH5Lu2XHJcbiAgICB3eEltZzogW10sIC8vIOWtmOWCqOW3sumAieaJk+WNsOWbvueJh1xyXG4gICAgbG9jYWxGaWxlOiBbXSwgLy8g5a2Y5YKo5bey6YCJ5omT5Y2w5paH5Lu2XHJcbiAgICBsb2NhbEltZzogW10sIC8vIOWtmOWCqOW3sumAieaJk+WNsOWbvueJh1xyXG4gICAgcHJpbnRQYXJhbXM6IFtdLCAvLyDlrZjlgqjpgInlj5bmlofku7bpu5jorqTlj4LmlbBcclxuICAgIGFsbEZpbGU6IFtdLCAvLyDmiYDmnInlt7LpgInmlofku7ZcclxuICAgIGZpbGVQYXJhbToge30sIC8vIOaJk+WNsOaWh+S7tuS/ruaUueWPguaVsFxyXG4gICAgZmlsZVBhcmFtSW5kZXg6IDAsIC8vIOiiq+S/ruaUueaWh+S7tuWPguaVsOeahOe0ouW8lSxcclxuICAgIHByaW50RmlsZXNTZXR0aW5nOiB7fSwgLy8g5pyA57uI5o+Q5Lqk5Y+C5pWwXHJcbiAgICBiYXNrZXRJZHM6IFtdLCAvLyDpooTmiZPljbDmlofku7ZpZFxyXG4gICAgaXNQcmludE9yQ29weU9yU2NhbjogXCJjb3B5XCIsIC8vIOWIpOaWreWFpeWPo+aYryDmiZPljbAg5aSN5Y2wIOi/mOaYryDmiavmj49cclxuICAgIGlzQXV0aENhbWVyYTogZmFsc2UsIC8vIOeUqOS6juS4remXtOeahHRhYmJhcuaJq+aPj+aXtuajgOa1i+aYr+WQpuW8gOWQr+aRhOWDj+WktFxyXG4gICAgaXNOZWFyU2hvcDogZmFsc2UsIC8vIOiusOW9leaYr+WQpuaYr+S7jumZhOi/keW6l+mTuui/m+WFpeeahGZsYWcg55So5LqO6Lez6L+H5omT5Y2w5py66YCJ5oup6aG16Z2iXHJcbiAgICBpc0Zyb21TY2FuUWNvZGU6IGZhbHNlLCAvLyDnlKjkuo7miZPljbDmnLrpgInmi6npobUs6YCa6L+H5omr5o+P6Lez6L2s5p2l5pe2LOi/m+ihjOS4i+S4gOatpeaTjeS9nFxyXG4gICAgaXNUYWJiYXJTY2FuOiBcIlwiLCAvLyDnlKjkuo7orrDlvZXmmK/lkKbku450YWJiYXLmiavmj4/ov5vlhaXliLDlupfpk7ror6bmg4XpobVcclxuICB9LFxyXG4gIG9uTGF1bmNoOiBmdW5jdGlvbiAoKSB7fSxcclxuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0b2tlblRpbWUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoXCJzZXRUb2tlblRpbWVcIik7XHJcbiAgICAvLyBpZighdG9rZW5UaW1lKSByZXR1cm47XHJcbiAgICB2YXIgZGlzVGltZSA9ICtuZXcgRGF0ZSgpIC0gdG9rZW5UaW1lO1xyXG4gICAgLy8g5q+P5qyh5pi+56S6LCDmr4/ot53nprvkuIrmrKF0b2tlbuS/neWtmOaXtumXtCwg55u45beuMTAg5YiG6ZKfIOajgOa1i+S4gOS4i3Rva2Vu5piv5ZCm6L+H5pyfXHJcbiAgICBpZiAoZGlzVGltZSA8IDEwICogNjAgKiAxMDAwKSByZXR1cm47XHJcbiAgICB0aGlzLnJlbG9hZFRva2VuKCk7XHJcbiAgfSxcclxuICBvbkhpZGU6IGZ1bmN0aW9uICgpIHt9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC8vIOeUn+aIkGZsb3dDb2RlXHJcbiAgICBuZXdGbG93Q29kZSgpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2xvYmFsRGF0YS5pc1ByaW50T3JDb3B5T3JTY2FuO1xyXG4gICAgICAgIHRoaXMuZ2xvYmFsRGF0YS5mbG93Q29kZSA9IGF3YWl0IHJlcXVlc3QuZ2V0KHtcclxuICAgICAgICAgIHVybDogYXBpLmdldFVybCh0eXBlICsgXCJfdGFza0Zsb3dJZFwiKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvLyDliLfmlrB0b2tlblxyXG4gICAgcmVsb2FkVG9rZW4oKSB7XHJcbiAgICAgIHVuaS5sb2dpbih7XHJcbiAgICAgICAgcHJvdmlkZXI6IFwid2VpeGluXCIsXHJcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgaWYgKCFyZXMuY29kZSkgcmV0dXJuOyAvL+W+ruS/oeeZu+W9leaIkOWKnyAg5bey5ou/5YiwY29kZeivt+axguWQjuWPsFxyXG4gICAgICAgICAgcmVxdWVzdC5wb3N0KHtcclxuICAgICAgICAgICAgdXJsOiBhcGkuZ2V0VXJsKFwibG9naW5cIiksXHJcbiAgICAgICAgICAgIGRhdGE6IHsgcHJpbmNpcGFsOiByZXMuY29kZSB9LCAvL3VuaS5sb2dpbiDnmbvlvZXmiJDlip/lkI7nmoRjb2RlXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhcInRva2VuXCIsIFwiYmVhcmVyXCIgKyByZS5hY2Nlc3NfdG9rZW4pO1xyXG4gICAgICAgICAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhcInNldFRva2VuVGltZVwiLCArbmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvLyDlho3mrKHmiZPljbAg5YWx55SoXHJcbiAgICBhc3luYyBwcmludEFnYWluKG9yZGVyTnVtYmVyKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlcXVlc3QuZ2V0KHtcclxuICAgICAgICB1cmw6IGFwaS5nZXRVcmwoXCJyZXBlYXRUYXNrRmxvd1wiKSxcclxuICAgICAgICBkYXRhOiB7IG9yZGVyTnVtYmVyIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmdsb2JhbERhdGEuaXNQcmludE9yQ29weU9yU2NhbiA9IFwicHJpbnRcIjtcclxuICAgICAgdGhpcy5nbG9iYWxEYXRhLmZsb3dDb2RlID0gcmVzO1xyXG4gICAgICB0aGlzLmdldFByaW50UGFyYW1zKCk7XHJcbiAgICB9LFxyXG4gICAgLy8g6I635Y+W5omT5Y2w5paH5Lu25ZKM6K6+572u5Y+C5pWwXHJcbiAgICBhc3luYyBnZXRQcmludFBhcmFtcygpIHtcclxuICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgZmxvd0NvZGU6IHRoaXMuZ2xvYmFsRGF0YS5mbG93Q29kZSxcclxuICAgICAgICBkZXZpY2VObzogdGhpcy5nbG9iYWxEYXRhLmRldmljZU5vLFxyXG4gICAgICB9O1xyXG4gICAgICBjb25zdCBwcmludFBhcmFtcyA9IGF3YWl0IHJlcXVlc3QucHV0KHtcclxuICAgICAgICB1cmw6IGFwaS5nZXRVcmwoXCJnZXRQcmludFBhcmFtc1wiKSxcclxuICAgICAgICBkYXRhLFxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5nbG9iYWxEYXRhLnByaW50UGFyYW1zID0gcHJpbnRQYXJhbXM7XHJcbiAgICAgIHRoaXMuJHZtLiRnb1RvVXJsKFwiL3BhZ2VzL3ByaW50U3RlcHMvc2V0UGFyYW1zXCIpO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuLyrmr4/kuKrpobXpnaLlhazlhbFjc3MgKi9cclxuXHJcbi8qICDph43lhpkgcmFkaW8g5qC35byPICAqL1xyXG4vKiDmnKrpgInkuK3nmoQg6IOM5pmv5qC35byPICovXHJcbnJhZGlvIC53eC1yYWRpby1pbnB1dCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlOyAvKiDlnIbop5IgKi9cclxuICB3aWR0aDogNDBycHg7XHJcbiAgaGVpZ2h0OiA0MHJweDtcclxuICBib3JkZXI6IDJycHggc29saWQgI2ZmOTk2NjtcclxufVxyXG4vKiDov5nph4zlpoLmnpzkuI3og73kv67mlLnog4zmma/popzoibLvvIzlnKjpgInkuK3lkI7nmoTmoLflvI/kuK3mt7vliqBiYWNrZ3JvdW5kLWNvbG9yICovXHJcbi8qIOmAieS4reWQjueahCDog4zmma/moLflvI8g77yI57qi6Imy6IOM5pmvIOaXoOi+ueahhiDlj6/moLnmja5VSemcgOaxguiHquW3seS/ruaUue+8iSAqL1xyXG5yYWRpbyAud3gtcmFkaW8taW5wdXQud3gtcmFkaW8taW5wdXQtY2hlY2tlZCB7XHJcbiAgYm9yZGVyOiAycnB4IHNvbGlkICNmZjk5NjY7XHJcbiAgYmFja2dyb3VuZDogI2ZmOTk2NjtcclxufVxyXG4vKiDpgInkuK3lkI7nmoQg5a+55Yu+5qC35byPIO+8iOeZveiJsuWvueWLviDlj6/moLnmja5VSemcgOaxguiHquW3seS/ruaUue+8iSAqL1xyXG5yYWRpbyAud3gtcmFkaW8taW5wdXQud3gtcmFkaW8taW5wdXQtY2hlY2tlZDo6YmVmb3JlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7IC8qIOWchuinkiAqL1xyXG4gIHdpZHRoOiA0MHJweDsgLyog6YCJ5Lit5ZCO5a+55Yu+5aSn5bCP77yM5LiN6KaB6LaF6L+H6IOM5pmv55qE5bC65a+4ICovXHJcbiAgaGVpZ2h0OiA0MHJweDsgLyog6YCJ5Lit5ZCO5a+55Yu+5aSn5bCP77yM5LiN6KaB6LaF6L+H6IOM5pmv55qE5bC65a+4ICovXHJcbiAgbGluZS1oZWlnaHQ6IDQwcnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDMwcnB4OyAvKiDlr7nli77lpKflsI8gMzBycHggKi9cclxuICBjb2xvcjogI2ZmZjsgLyog5a+55Yu+6aKc6ImyIOeZveiJsiAqL1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XHJcbn1cclxuXHJcbi8qIOmHjeWGmSBjaGVja2JveCDmoLflvI8gKi9cclxuLyog5pyq6YCJ5Lit55qEIOiDjOaZr+agt+W8jyAqL1xyXG5jaGVja2JveCAud3gtY2hlY2tib3gtaW5wdXQge1xyXG4gIC8qIGJvcmRlci1yYWRpdXM6IDUwJTsgKi8gLyog5ZyG6KeSICovXHJcbiAgYm9yZGVyOiAycnB4IHNvbGlkICNmZjk5NjY7XHJcbiAgd2lkdGg6IDQwcnB4OyAvKiDog4zmma/nmoTlrr0gKi9cclxuICBoZWlnaHQ6IDQwcnB4OyAvKiDog4zmma/nmoTpq5ggKi9cclxufVxyXG4vKiDov5nph4zlpoLmnpzkuI3og73kv67mlLnog4zmma/popzoibLvvIzlnKjpgInkuK3lkI7nmoTmoLflvI/kuK3mt7vliqBiYWNrZ3JvdW5kLWNvbG9yICovXHJcbi8qIOmAieS4reWQjueahCDog4zmma/moLflvI8g77yI57qi6Imy6IOM5pmvIOaXoOi+ueahhiDlj6/moLnmja5VSemcgOaxguiHquW3seS/ruaUue+8iSAqL1xyXG5jaGVja2JveCAud3gtY2hlY2tib3gtaW5wdXQud3gtY2hlY2tib3gtaW5wdXQtY2hlY2tlZCB7XHJcbiAgYm9yZGVyOiAycnB4IHNvbGlkICNmZjk5NjY7XHJcbiAgYmFja2dyb3VuZDogI2ZmOTk2NjtcclxufVxyXG4vKiDpgInkuK3lkI7nmoQg5a+55Yu+5qC35byPIO+8iOeZveiJsuWvueWLviDlj6/moLnmja5VSemcgOaxguiHquW3seS/ruaUue+8iSAqL1xyXG5jaGVja2JveCAud3gtY2hlY2tib3gtaW5wdXQud3gtY2hlY2tib3gtaW5wdXQtY2hlY2tlZDo6YmVmb3JlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7IC8qIOWchuinkiAqL1xyXG4gIHdpZHRoOiA0MHJweDsgLyog6YCJ5Lit5ZCO5a+55Yu+5aSn5bCP77yM5LiN6KaB6LaF6L+H6IOM5pmv55qE5bC65a+4ICovXHJcbiAgaGVpZ2h0OiA0MHJweDsgLyog6YCJ5Lit5ZCO5a+55Yu+5aSn5bCP77yM5LiN6KaB6LaF6L+H6IOM5pmv55qE5bC65a+4ICovXHJcbiAgbGluZS1oZWlnaHQ6IDQwcnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDMwcnB4OyAvKiDlr7nli77lpKflsI8gMzBycHggKi9cclxuICBjb2xvcjogI2ZmZjsgLyog5a+55Yu+6aKc6ImyIOeZveiJsiAqL1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxzb2Z0c1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxcXFxkaXN0XFxcXGxvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCFEOlxcXFxzb2Z0c1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxjc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIUQ6XFxcXHNvZnRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZVBvc3RMb2FkZXIuanMhRDpcXFxcc29mdHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIUQ6XFxcXHNvZnRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyFEOlxcXFxzb2Z0c1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcc29mdHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hRDpcXFxcc29mdHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cXFxcZGlzdFxcXFxsb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhRDpcXFxcc29mdHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcY3NzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSFEOlxcXFxzb2Z0c1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcc3R5bGVQb3N0TG9hZGVyLmpzIUQ6XFxcXHNvZnRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiFEOlxcXFxzb2Z0c1xcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhRDpcXFxcc29mdHNcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXHNvZnRzXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY2NTY2OTc0Mjg5NVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9zb2Z0cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=