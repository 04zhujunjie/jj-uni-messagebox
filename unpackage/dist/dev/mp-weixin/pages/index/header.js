"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var static_image = require("../../static/image.js");
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  methods: {
    showToast(type) {
      let message = "\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u3002\u3002\u3002";
      if (type.length > 0) {
        this.$jj_toast(message, type, 1);
      } else {
        this.$jj_toast(message);
      }
    },
    updateVersion() {
      let btnStyle = {
        "padding": "0px 15px",
        "border": "1px solid #C0C0C0",
        "font-size": "15px",
        "border-radius": "10px"
      };
      let customDataObj = {
        title: "\u53D1\u73B0\u65B0\u7248\u672C1.2.6",
        contentTitle: "\u66F4\u65B0\u5185\u5BB9:",
        backgroundImgUrl: static_image.bg_custom_update(),
        contentList: [
          "1\u3001\u4FEE\u590D\u90E8\u5206bug",
          "2\u3001\u65B0\u589E\u65B0\u73A9\u6CD5",
          "3\u3001\u4F18\u5316"
        ]
      };
      let updateAlert = this.$jj_alert({
        type: "updateVersion",
        width: "280px",
        background: "transparent",
        priority: 1e3,
        customDataObj,
        btns: [
          {
            title: "\u4EE5\u540E\u518D\u8BF4",
            style: __spreadValues({}, btnStyle),
            click: () => {
              console.log("\u4EE5\u540E\u518D\u8BF4");
            }
          },
          {
            title: "\u7ACB\u5373\u66F4\u65B0",
            touchClose: false,
            activeBackground: "#2A8AFF",
            activeColor: "#fff",
            style: __spreadValues({
              "background": "transparent",
              "color": "#2A8AFF"
            }, btnStyle),
            click: () => {
              console.log("\u7ACB\u5373\u66F4\u65B0");
              customDataObj.title = "\u6B63\u5728\u66F4\u65B0 \u2018\u7248\u672C1.2.6\u2019 ";
              updateAlert.update({ customDataObj });
              let loading = this.$jj_loading({
                message: "\u52A0\u8F7D 0 %",
                width: "110px"
              });
              let count = 0;
              let interval = setInterval(function() {
                count += Math.round(Math.random() * 10);
                if (count > 100) {
                  count = 100;
                }
                let message = "\u52A0\u8F7D" + count + "%";
                loading.update(message);
                if (count === 100) {
                  clearInterval(interval);
                  setTimeout(function() {
                    loading.close();
                    updateAlert.close();
                    getApp().globalData.$jj_toast("\u66F4\u65B0\u5B8C\u6210");
                  }, 500);
                }
              }, 200);
            }
          }
        ]
      });
      this.$jj_alert({
        message: "\u5C1D\u8BD5\u8986\u76D6\u6389\u5DF2\u6709\u7684\u5F39\u7A97"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.showToast("")),
    b: common_vendor.o(($event) => $options.showToast("success")),
    c: common_vendor.o((...args) => $options.updateVersion && $options.updateVersion(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-050a3a63"], ["__file", "/Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/index/header.vue"]]);
wx.createComponent(Component);
