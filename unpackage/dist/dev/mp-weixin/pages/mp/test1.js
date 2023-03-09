"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  mounted() {
    this.$jj_alert({
      title: "\u63D0\u793A",
      isUseHTMLString: true,
      message: "<span>\u8BE5\u9875\u9762\u80FD\u663E\u793A\u5F39\u7A97,\u662F\u56E0\u4E3A\u5728<span style='color:red;margin:0px 5px'>vue.config.js</span>\u914D\u7F6E\u6587\u4EF6\uFF0C\u52A8\u6001\u63D2\u5165<span style='color:red;margin:0px 5px'>messageView</span>\u89C6\u56FE</span>"
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/mp/test1.vue"]]);
wx.createPage(MiniProgramPage);
