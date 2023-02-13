"use strict";
var common_vendor = require("../../common/vendor.js");
var static_image = require("../../static/image.js");
const jjPopup = () => "../components/jj-messagebox/popup/jj-popup.js";
const _sfc_main = {
  components: {
    jjPopup
  },
  data() {
    return {
      isShowPopup: false,
      backgroundImg: static_image.background_image()
    };
  },
  mounted() {
    this.isShowPopup = true;
  },
  onLoad(options) {
    console.log("------\u4E0A\u4E00\u4E2A\u9875\u9762\u4F20\u8FC7\u6765\u7684\u53C2\u6570-----", options);
  },
  methods: {
    closePopup() {
      common_vendor.index.navigateBack({});
    }
  }
};
if (!Array) {
  const _component_jj_popup = common_vendor.resolveComponent("jj-popup");
  _component_jj_popup();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.backgroundImg,
    b: common_vendor.o($options.closePopup),
    c: common_vendor.p({
      visible: $data.isShowPopup,
      showClose: true,
      title: "\u8BF7\u9009\u62E9",
      titleStyle: {
        color: "red"
      },
      touchClose: false
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-01a1d68d"], ["__file", "/Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/app/popup-view.vue"]]);
wx.createPage(MiniProgramPage);
