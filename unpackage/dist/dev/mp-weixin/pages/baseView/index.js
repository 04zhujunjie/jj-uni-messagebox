"use strict";
var common_vendor = require("../../common/vendor.js");
const messageView = () => "../components/jj-messagebox/messageView/index.js";
const _sfc_main = {
  name: "base-view",
  components: {
    messageView
  },
  data() {
    return {};
  },
  mounted() {
  },
  methods: {}
};
if (!Array) {
  const _component_message_view = common_vendor.resolveComponent("message-view");
  _component_message_view();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/baseView/index.vue"]]);
wx.createComponent(Component);
