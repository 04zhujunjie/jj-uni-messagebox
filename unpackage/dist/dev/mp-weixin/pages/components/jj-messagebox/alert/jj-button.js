"use strict";
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {
    btnObj: {
      type: Object,
      default: function() {
        return {
          title: "",
          activeBackground: "transparent",
          activeColor: "",
          style: {
            "color": "#000",
            "background": "#fff"
          },
          touchClose: true,
          isDisable: false,
          click: () => {
          }
        };
      }
    }
  },
  data() {
    return {
      isTouching: false
    };
  },
  methods: {
    click() {
      this.$emit("btnClick");
    },
    btnStyle() {
      let style = {
        background: "#fff",
        color: "#000"
      };
      if (typeof this.btnObj.style === "object") {
        Object.assign(style, this.btnObj.style);
      }
      const activeBackground = this.btnObj.activeBackground || "rgba(0, 0, 0, 0.1)";
      const activeColor = this.btnObj.activeColor || "";
      if (this.isTouching) {
        if (activeBackground.length > 0) {
          style.background = activeBackground;
        }
        if (activeColor.length > 0) {
          style.color = activeColor;
        }
      }
      return style;
    },
    touchstart() {
      this.isTouching = true;
    },
    touchend() {
      this.isTouching = false;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.btnObj.title),
    b: common_vendor.s($options.btnStyle()),
    c: common_vendor.o(($event) => $options.click()),
    d: common_vendor.o(($event) => $options.touchstart()),
    e: common_vendor.o(($event) => $options.touchend())
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6fd3b3a4"], ["__file", "/Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/components/jj-messagebox/alert/jj-button.vue"]]);
wx.createComponent(Component);
