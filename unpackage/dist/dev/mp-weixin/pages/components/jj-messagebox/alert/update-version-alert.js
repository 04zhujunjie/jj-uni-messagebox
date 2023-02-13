"use strict";
var common_vendor = require("../../../../common/vendor.js");
const jjButton = () => "./jj-button.js";
const _sfc_main = {
  props: {
    customData: {
      type: Object,
      default: function() {
        return { type: "" };
      }
    }
  },
  components: {
    jjButton
  },
  computed: {
    btnsList() {
      return this.customData.btns || [];
    },
    customDataObj() {
      return this.customData.customDataObj || {};
    },
    contentList() {
      return this.customDataObj.contentList || [];
    },
    backgroundImgUrl() {
      return this.customDataObj.backgroundImgUrl || "";
    }
  },
  mounted() {
  },
  data() {
    return {};
  },
  methods: {
    clickFn(index) {
      this.$emit("clickBtn", index);
    }
  }
};
if (!Array) {
  const _component_jj_button = common_vendor.resolveComponent("jj-button");
  _component_jj_button();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.backgroundImgUrl.length > 0
  }, $options.backgroundImgUrl.length > 0 ? {
    b: $options.backgroundImgUrl
  } : {}, {
    c: common_vendor.t($options.customDataObj.title),
    d: common_vendor.s({
      "margin-top": $options.backgroundImgUrl.length > 0 ? "100px" : "0"
    }),
    e: common_vendor.t($options.customDataObj.contentTitle),
    f: common_vendor.f($options.contentList, (content, index, i0) => {
      return {
        a: common_vendor.t(content),
        b: content
      };
    }),
    g: common_vendor.f($options.btnsList, (btn, index, i0) => {
      return {
        a: common_vendor.o(($event) => $options.clickFn(index)),
        b: "52dc9024-0-" + i0,
        c: common_vendor.p({
          btnObj: btn
        }),
        d: index
      };
    })
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-52dc9024"], ["__file", "/Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/components/jj-messagebox/alert/update-version-alert.vue"]]);
wx.createComponent(Component);
