"use strict";
var common_vendor = require("../../common/vendor.js");
const headerView = () => "./header.js";
const _sfc_main = {
  components: {
    headerView
  },
  data() {
    return {};
  },
  mounted() {
  },
  onLoad() {
  },
  methods: {
    goDemo() {
      common_vendor.index.navigateTo({
        url: "/pages/demo/index"
      });
    }
  }
};
if (!Array) {
  const _component_header_view = common_vendor.resolveComponent("header-view");
  const _component_base_view = common_vendor.resolveComponent("base-view");
  (_component_header_view + _component_base_view)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.goDemo())
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
