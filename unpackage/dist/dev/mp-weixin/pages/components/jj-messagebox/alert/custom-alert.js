"use strict";
var common_vendor = require("../../../../common/vendor.js");
const updateVersion = () => "./update-version-alert.js";
const _sfc_main = {
  components: {
    updateVersion
  },
  props: {
    type: {
      type: String,
      default: ""
    },
    customData: {
      type: Object,
      default: function() {
        return { type: "" };
      }
    }
  },
  mounted() {
  },
  methods: {
    clickBtn(index) {
      this.$emit("clickBtn", index);
    }
  }
};
if (!Array) {
  const _component_update_version = common_vendor.resolveComponent("update-version");
  _component_update_version();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.customData.type === "updateVersion"
  }, $props.customData.type === "updateVersion" ? {
    b: common_vendor.o($options.clickBtn),
    c: common_vendor.p({
      customData: $props.customData
    })
  } : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/components/jj-messagebox/alert/custom-alert.vue"]]);
wx.createComponent(Component);
