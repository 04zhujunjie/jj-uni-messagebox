"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var pages_components_jjMessagebox_static_image = require("../static/image.js");
var common_vendor = require("../../../../common/vendor.js");
var pages_components_jjMessagebox_messageView_constant = require("./constant.js");
var pages_components_jjMessagebox_messageView_ref = require("./ref.js");
var pages_components_jjMessagebox_messageView_processor = require("./processor.js");
const _sfc_main = {
  name: "jj-loading",
  data() {
    return {
      type: "default",
      duration: 1.5,
      radius: 5,
      isShow: false,
      isClose: false,
      userInteractionEnabled: false,
      maskColor: "transparent",
      background: "rgba(0, 0, 0, 0.8)",
      padding: "15px 10px 10px 10px",
      width: "85px",
      imageSize: {
        width: "32px",
        height: "32px"
      },
      imageUrl: "",
      message: "",
      messageStyle: {},
      originalData: null
    };
  },
  computed: {
    setImageSize() {
      let size = {};
      size.width = this.imageSize.width || "32px";
      size.height = this.imageSize.height || "32px";
      return size;
    },
    imgUrl() {
      if ((this.imageUrl || "").length > 0) {
        return this.imageUrl;
      }
      if (this.type === "round") {
        return pages_components_jjMessagebox_static_image.loading_round_icon();
      } else if (this.type === "taichi") {
        return pages_components_jjMessagebox_static_image.loading_taichi_icon();
      }
      return pages_components_jjMessagebox_static_image.loading_icon();
    }
  },
  methods: {
    close() {
      this.quickClose();
    },
    quickClose() {
      this.isShow = false;
      this.$emit("close");
    },
    show(data = {}) {
      data["isShow"] = true;
      let orData = Object.assign({}, this.$data);
      delete orData["originalData"];
      this.$emit("show");
      if (this.originalData === null) {
        this.originalData = orData;
        Object.assign(this.$data, data);
      } else {
        Object.assign(this.$data, this.originalData, data);
      }
    },
    update(data = {}) {
      Object.assign(this.$data, data);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isShow
  }, $data.isShow ? common_vendor.e({
    b: $data.message.length > 0
  }, $data.message.length > 0 ? {
    c: common_vendor.s($options.setImageSize),
    d: common_vendor.s({
      "animation-duration": $data.duration + "s"
    }),
    e: $options.imgUrl,
    f: common_vendor.t($data.message),
    g: common_vendor.s($data.messageStyle),
    h: common_vendor.s({
      "padding": $data.padding
    })
  } : {
    i: common_vendor.s($options.setImageSize),
    j: common_vendor.s({
      "animation-duration": $data.duration + "s"
    }),
    k: $options.imgUrl
  }, {
    l: common_vendor.s({
      "width": $data.width,
      "minHeight": "85px",
      "background": $data.background,
      "border-radius": $data.radius + "px"
    }),
    m: common_vendor.o(() => {
    }),
    n: common_vendor.s({
      "background-color": $data.maskColor,
      "pointer-events": $data.userInteractionEnabled ? "none" : "auto"
    })
  }) : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0de08b90"], ["__file", "/Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/components/jj-messagebox/loading/jj-loading.vue"]]);
let getLoadingData = function(loadingData) {
  let data = {};
  if (loadingData === void 0 || loadingData === null)
    ;
  else {
    if (typeof loadingData === "object") {
      data = __spreadValues({}, loadingData);
    } else {
      data = {
        "message": loadingData + ""
      };
    }
  }
  return data;
};
let jj_loading = function(loadingData) {
  const data = getLoadingData(loadingData);
  let obj = pages_components_jjMessagebox_messageView_processor.processorObj(pages_components_jjMessagebox_messageView_constant.kLoading);
  obj.processDataFun = getLoadingData;
  obj.messageObj = showLoadingApp_MP(data);
  return obj;
};
let showLoadingApp_MP = function(data) {
  let loading = pages_components_jjMessagebox_messageView_ref.getRef(pages_components_jjMessagebox_messageView_constant.kLoading);
  if (loading !== void 0) {
    loading.isShow = false;
    let isClose = data["isClose"] || false;
    if (isClose) {
      loading.quickClose();
      return null;
    }
    loading.show(data);
    return loading;
  }
  return null;
};
exports.Component = Component;
exports.jj_loading = jj_loading;
