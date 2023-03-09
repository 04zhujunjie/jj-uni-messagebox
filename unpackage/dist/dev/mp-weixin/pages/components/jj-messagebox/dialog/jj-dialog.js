"use strict";
var pages_components_jjMessagebox_static_image = require("../static/image.js");
var common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "jj-dialog",
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
    width: {
      type: String,
      default: "80%"
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
      },
      immediate: true
    }
  },
  data() {
    return {
      jj_visible: this.visible
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
      this.$emit("close");
      this.jj_visible = false;
    },
    mainClick(e) {
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
    m: common_vendor.o((...args) => $options.mainClick && $options.mainClick(...args)),
    n: common_vendor.s({
      "animation-duration": $props.duration + "s",
      "width": $props.width,
      "background": $props.background,
      "border-radius": $props.radius + "px"
    }),
    o: common_vendor.s({
      "background-color": $props.maskColor
    }),
    p: common_vendor.o(() => {
    }),
    q: common_vendor.o(($event) => $props.touchClose ? $options.close() : "")
  }) : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4259adc8"], ["__file", "/Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/components/jj-messagebox/dialog/jj-dialog.vue"]]);
wx.createComponent(Component);
