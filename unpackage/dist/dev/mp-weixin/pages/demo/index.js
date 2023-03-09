"use strict";
var common_vendor = require("../../common/vendor.js");
const demoPage = () => "./demo.js";
const _sfc_main = {
  components: {
    demoPage
  }
};
if (!Array) {
  const _component_demo_page = common_vendor.resolveComponent("demo-page");
  _component_demo_page();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/demo/index.vue"]]);
wx.createPage(MiniProgramPage);
