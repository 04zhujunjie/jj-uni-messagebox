"use strict";
var pages_mine_request = require("./request.js");
var common_vendor = require("../../common/vendor.js");
const demoPage = () => "../demo/demo.js";
const _sfc_main = {
  components: { demoPage },
  data() {
    return {};
  },
  methods: {
    loadingUserInfo() {
      pages_mine_request.requsetUserInfo();
    }
  }
};
if (!Array) {
  const _component_demoPage = common_vendor.resolveComponent("demoPage");
  _component_demoPage();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.loadingUserInfo && $options.loadingUserInfo(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4bd6864f"], ["__file", "/Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/mine/index.vue"]]);
wx.createPage(MiniProgramPage);
