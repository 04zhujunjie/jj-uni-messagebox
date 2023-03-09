"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var common_vendor = require("./common/vendor.js");
var pages_components_jjMessagebox_messageView_toast = require("./pages/components/jj-messagebox/messageView/toast.js");
var pages_components_jjMessagebox_messageView_alert = require("./pages/components/jj-messagebox/messageView/alert.js");
var pages_components_jjMessagebox_messageView_loading = require("./pages/components/jj-messagebox/messageView/loading.js");
require("./pages/components/jj-messagebox/static/image.js");
require("./pages/components/jj-messagebox/messageView/constant.js");
require("./pages/components/jj-messagebox/messageView/ref.js");
require("./pages/components/jj-messagebox/messageView/processor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/mine/index.js";
  "./pages/app/index.js";
  "./pages/demo/index.js";
  "./pages/demo/nvue.js";
  "./pages/mp/test1.js";
  "./pages/mp/test2.js";
  "./pages/components/jj-messagebox/messageView/app-message-view.js";
  "./pages/app/popup-view.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
var App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/weiqu/Documents/GitApp/jj-uni-messagebox/App.vue"]]);
let installPlugin_Vue3 = function(app, appUrl) {
  app.config.globalProperties.$jj_loading = pages_components_jjMessagebox_messageView_loading.jj_loading;
  app.config.globalProperties.$jj_alert = pages_components_jjMessagebox_messageView_alert.jj_alert;
  app.config.globalProperties.$jj_toast = pages_components_jjMessagebox_messageView_toast.jj_toast;
  setupGlobalData(appUrl);
};
let setupGlobalData = function(appUrl) {
  setTimeout(function() {
    getApp().globalData.$jj_app_message_url = appUrl || "";
    getApp().globalData.$jj_loading = pages_components_jjMessagebox_messageView_loading.jj_loading;
    getApp().globalData.$jj_alert = pages_components_jjMessagebox_messageView_alert.jj_alert;
    getApp().globalData.$jj_toast = pages_components_jjMessagebox_messageView_toast.jj_toast;
  }, 0);
};
const baseView = () => "./pages/baseView/index.js";
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.component("base-view", baseView);
  installPlugin_Vue3(app, "/pages/components/jj-messagebox/messageView/app-message-view");
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
