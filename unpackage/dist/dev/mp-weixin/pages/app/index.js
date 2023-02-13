"use strict";
var pages_components_jjMessagebox_messageView_ref = require("../components/jj-messagebox/messageView/ref.js");
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  mounted() {
  },
  onLoad() {
  },
  computed: {
    isShowMap() {
      return pages_components_jjMessagebox_messageView_ref.jj_app_message_url().length;
    }
  },
  methods: {
    showAlert() {
    },
    showPopup() {
    }
  }
};
if (!Array) {
  const _component_base_view = common_vendor.resolveComponent("base-view");
  _component_base_view();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $options.showAlert && $options.showAlert(...args)),
    b: common_vendor.o((...args) => $options.showPopup && $options.showPopup(...args)),
    c: $options.isShowMap
  }, $options.isShowMap ? {} : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-24378d3b"], ["__file", "/Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/app/index.vue"]]);
wx.createPage(MiniProgramPage);
