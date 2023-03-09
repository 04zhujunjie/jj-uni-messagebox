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
  name: "jj-toast",
  data() {
    return {
      type: "",
      duration: 2.5,
      radius: 5,
      isShow: false,
      isClose: false,
      maskColor: "transparent",
      background: "rgba(0, 0, 0, 0.8)",
      padding: "12px",
      imageSize: {
        width: "32px",
        height: "32px"
      },
      imageUrl: "",
      maxWidth: "80%",
      minWidth: "85px",
      message: "",
      messageStyle: {},
      originalData: null
    };
  },
  mounted() {
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
      if (this.type === "success") {
        return pages_components_jjMessagebox_static_image.success_icon();
      } else if (this.type === "fail") {
        return pages_components_jjMessagebox_static_image.fail_icon();
      } else if (this.type === "warn") {
        return pages_components_jjMessagebox_static_image.warn_icon();
      }
      return "";
    }
  },
  methods: {
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
      if (this.duration > 0) {
        let that = this;
        this.jj_time = setTimeout(function() {
          that.jj_time = null;
          that.close();
        }, that.duration * 1e3);
      }
    },
    update(data = {}) {
      Object.assign(this.$data, data);
    },
    close() {
      this.quickClose();
    },
    quickClose() {
      this.isShow = false;
      this.$emit("close");
    }
  },
  beforeCreate() {
    if (this.jj_time !== null) {
      clearTimeout(this.jj_time);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isShow
  }, $data.isShow ? common_vendor.e({
    b: $options.imgUrl.length > 0
  }, $options.imgUrl.length > 0 ? {
    c: $options.imgUrl,
    d: common_vendor.s($options.setImageSize)
  } : {}, {
    e: common_vendor.t($data.message),
    f: common_vendor.s($data.messageStyle),
    g: common_vendor.s({
      "padding": $data.padding
    }),
    h: common_vendor.s({
      "width": "auto",
      "minWidth": $data.minWidth,
      "maxWidth": $data.maxWidth,
      "background": $data.background,
      "border-radius": $data.radius + "px"
    }),
    i: common_vendor.s({
      "background-color": $data.maskColor,
      "pointer-events": "none"
    }),
    j: common_vendor.o(() => {
    })
  }) : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0666c070"], ["__file", "/Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/components/jj-messagebox/toast/jj-toast.vue"]]);
let getData = function(toastData, type, duration) {
  let data = {};
  const isToastDataNull = toastData === void 0 || toastData === null;
  const isTypeNull = type === void 0 || type === null;
  const isDurationNull = duration === void 0 || duration === null;
  if (isToastDataNull && isTypeNull && isDurationNull) {
    return {};
  } else {
    if (!isToastDataNull) {
      if (typeof toastData === "object") {
        data = __spreadValues({}, toastData);
        return data;
      } else {
        data["message"] = toastData + "";
      }
    }
    if (!isTypeNull) {
      data["type"] = type + "";
    }
    if (!isDurationNull) {
      if (duration.constructor === Number) {
        data["duration"] = duration;
      }
    }
  }
  return data;
};
let jj_toast = function(toastData, type, duration) {
  const data = getData(toastData, type, duration);
  let obj = pages_components_jjMessagebox_messageView_processor.processorObj(pages_components_jjMessagebox_messageView_constant.kToast);
  obj.processDataFun = getData;
  obj.messageObj = showToastApp_MP(data);
  return obj;
};
let showToastApp_MP = function(data) {
  let toast = pages_components_jjMessagebox_messageView_ref.getRef(pages_components_jjMessagebox_messageView_constant.kToast);
  if (toast !== void 0) {
    if (toast.jj_time !== null) {
      clearTimeout(toast.jj_time);
      toast.jj_time = null;
    }
    toast.isShow = false;
    let isClose = data["isClose"] || false;
    if (isClose) {
      toast.quickClose();
      return null;
    }
    toast.show(data);
    return toast;
  }
  return null;
};
exports.Component = Component;
exports.jj_toast = jj_toast;
