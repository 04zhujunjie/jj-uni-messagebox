"use strict";
var pages_components_jjMessagebox_static_image = require("../static/image.js");
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "jj-popup",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 0.25
    },
    radius: {
      type: Number,
      default: 5
    },
    background: {
      type: String,
      default: "#fff"
    },
    maskColor: {
      type: String,
      default: "rgba(0, 0, 0, 0.35)"
    },
    touchClose: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeStyle: {
      type: Object,
      default: function() {
        return {};
      }
    },
    closeImageUrl: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    titleStyle: {
      type: Object,
      default: function() {
        return {};
      }
    },
    message: {
      type: String,
      default: ""
    },
    messageStyle: {
      type: Object,
      default: function() {
        return {};
      }
    },
    height: {
      type: String,
      default: "60%"
    },
    padding: {
      type: String,
      default: "20px"
    }
  },
  watch: {
    visible: {
      handler(newVal) {
        this.jj_visible = newVal;
        if (newVal && !this.isPopup) {
          this.isPopup = true;
        }
      },
      immediate: true
    }
  },
  data() {
    return {
      jj_visible: this.visible,
      isPopup: true
    };
  },
  computed: {
    closeImgUrl() {
      if ((this.closeImageUrl || "").length > 0) {
        return this.closeImageUrl;
      }
      return pages_components_jjMessagebox_static_image.close_icon();
    }
  },
  methods: {
    close() {
      if (!this.isPopup) {
        return;
      }
      this.isPopup = false;
    },
    animationend() {
      if (!this.isPopup) {
        this.$emit("close");
        this.isPopup = true;
        this.jj_visible = false;
      }
    },
    mainClick() {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.jj_visible
  }, $data.jj_visible ? common_vendor.e({
    b: $props.showClose
  }, $props.showClose ? {
    c: common_vendor.s($props.closeStyle),
    d: $options.closeImgUrl,
    e: common_vendor.o((...args) => $options.close && $options.close(...args))
  } : {}, {
    f: $props.title.length > 0
  }, $props.title.length > 0 ? {
    g: common_vendor.t($props.title),
    h: common_vendor.s($props.titleStyle)
  } : {}, {
    i: $props.message.length > 0
  }, $props.message.length > 0 ? {
    j: common_vendor.t($props.message),
    k: common_vendor.s($props.messageStyle)
  } : {}, {
    l: common_vendor.s({
      "padding": $props.padding
    }),
    m: common_vendor.o((...args) => $options.animationend && $options.animationend(...args)),
    n: common_vendor.o((...args) => $options.mainClick && $options.mainClick(...args)),
    o: common_vendor.n($data.isPopup ? "" : "fadelogOut"),
    p: common_vendor.s({
      "animation-duration": $props.duration + "s",
      "height": $props.height,
      "background": $props.background,
      "border-top-left-radius": $props.radius + "px",
      "border-top-right-radius": $props.radius + "px"
    }),
    q: common_vendor.n(!$data.isPopup ? "fadelogOutOpcity" : ""),
    r: common_vendor.s({
      "background-color": $props.maskColor
    }),
    s: common_vendor.o(() => {
    }),
    t: common_vendor.o(($event) => $props.touchClose ? $options.close() : "")
  }) : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2387f610"], ["__file", "/Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/components/jj-messagebox/popup/jj-popup.vue"]]);
wx.createComponent(Component);
