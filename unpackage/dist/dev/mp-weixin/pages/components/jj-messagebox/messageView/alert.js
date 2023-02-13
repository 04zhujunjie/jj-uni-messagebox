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
var pages_components_jjMessagebox_messageView_constant = require("./constant.js");
var pages_components_jjMessagebox_messageView_ref = require("./ref.js");
var pages_components_jjMessagebox_messageView_processor = require("./processor.js");
var pages_components_jjMessagebox_static_image = require("../static/image.js");
var common_vendor = require("../../../../common/vendor.js");
const jjButton = () => "../alert/jj-button.js";
const customAlert = () => "../alert/custom-alert.js";
const _sfc_main = {
  name: "jj-alert",
  components: {
    jjButton,
    customAlert
  },
  data() {
    return {
      type: "alert",
      position: "center",
      btnDirection: "row",
      priority: 0,
      maxHeight: "80%",
      duration: 0.25,
      radius: 5,
      maskColor: "rgba(0, 0, 0, 0.35)",
      background: "#fff",
      touchClose: false,
      isShow: false,
      isClose: false,
      isQuickClose: false,
      isUseHTMLString: false,
      closeStyle: {},
      closeImageUrl: "",
      showClose: false,
      width: "",
      padding: "20px",
      title: "",
      titleStyle: {},
      message: "",
      messageStyle: {},
      btns: [{
        title: "\u786E\u8BA4",
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
      }],
      isCloseAlert: false,
      originalData: null,
      customDataObj: {}
    };
  },
  computed: {
    closeImgUrl() {
      if ((this.closeImageUrl || "").length > 0) {
        return this.closeImageUrl;
      }
      return pages_components_jjMessagebox_static_image.close_icon();
    },
    isCustomType() {
      if (this.type === "alert" || this.type === "sheet") {
        return false;
      }
      return true;
    },
    customData() {
      let data = this.$data;
      return data;
    },
    buttonDirection() {
      if (this.type === "sheet") {
        return "column";
      }
      if (this.btnDirection.length > 0 && (this.btnDirection === "row" || this.btnDirection === "column")) {
        return this.btnDirection;
      }
      return "row";
    },
    alertWidth() {
      if (this.type === "sheet") {
        return "100%";
      }
      if (this.width.length > 0) {
        return this.width;
      } else {
        if (this.position === "bottom") {
          return "100%";
        } else {
          return "85%";
        }
      }
    }
  },
  methods: {
    moveHandle() {
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
    },
    close() {
      if (this.isQuickClose) {
        this.quickClose();
        return;
      }
      if (this.isCloseAlert) {
        return;
      }
      this.isCloseAlert = true;
    },
    animationend() {
      if (this.isCloseAlert) {
        this.quickClose();
      }
    },
    quickClose() {
      this.isShow = false;
      this.isCloseAlert = false;
      this.$emit("close");
    },
    mainClick() {
    },
    btnStyle(btn) {
      let length = this.btns.length;
      let style = {};
      style["width"] = 100 / length + "%";
      if (typeof btn.style === "object") {
        Object.assign(style, btn.style);
      }
      if (this.buttonDirection === "column") {
        style["flex-direction"] = "column";
        style["width"] = "100%";
        style["border-right"] = "0px";
      }
      return style;
    },
    clickCustomAlertBtn(index) {
      let btn = this.btns[index];
      if (btn !== void 0) {
        this.clickFn(btn);
      }
    },
    clickFn(btn) {
      if (btn.isDisable === true) {
        return;
      }
      if (btn.touchClose != false) {
        this.close();
      }
      if (btn.click !== void 0) {
        if (typeof btn.click === "function") {
          btn.click();
        } else {
          console.warn("\u8BF7\u4F20\u5165\u56DE\u8C03\u51FD\u6570");
        }
      }
    }
  }
};
if (!Array) {
  const _component_jj_button = common_vendor.resolveComponent("jj-button");
  const _component_custom_alert = common_vendor.resolveComponent("custom-alert");
  (_component_jj_button + _component_custom_alert)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.isShow
  }, $data.isShow ? common_vendor.e({
    b: $data.position === "bottom" || $data.type === "sheet"
  }, $data.position === "bottom" || $data.type === "sheet" ? common_vendor.e({
    c: !$options.isCustomType
  }, !$options.isCustomType ? common_vendor.e({
    d: $data.title.length > 0
  }, $data.title.length > 0 ? {
    e: common_vendor.t($data.title),
    f: common_vendor.s($data.titleStyle)
  } : {}, {
    g: $data.message.length > 0
  }, $data.message.length > 0 ? common_vendor.e({
    h: !$data.isUseHTMLString
  }, !$data.isUseHTMLString ? {
    i: common_vendor.t($data.message)
  } : {
    j: $data.message
  }, {
    k: common_vendor.s($data.messageStyle)
  }) : {}) : {}, {
    l: $data.showClose
  }, $data.showClose ? {
    m: common_vendor.s($data.closeStyle),
    n: $options.closeImgUrl,
    o: common_vendor.o((...args) => $options.close && $options.close(...args))
  } : {}, {
    p: common_vendor.s({
      "padding": $data.padding
    }),
    q: !$options.isCustomType
  }, !$options.isCustomType ? common_vendor.e({
    r: $options.buttonDirection === "row"
  }, $options.buttonDirection === "row" ? {
    s: common_vendor.f($data.btns, (btn, index, i0) => {
      return {
        a: index,
        b: common_vendor.s($options.btnStyle(btn)),
        c: common_vendor.o(($event) => $options.clickFn(btn)),
        d: "432dbc10-0-" + i0,
        e: common_vendor.p({
          btnObj: btn
        })
      };
    })
  } : {
    t: common_vendor.f($data.btns, (btn, index, i0) => {
      return {
        a: common_vendor.s($options.btnStyle(btn)),
        b: common_vendor.o(($event) => $options.clickFn(btn)),
        c: "432dbc10-1-" + i0,
        d: common_vendor.p({
          btnObj: btn
        }),
        e: index
      };
    })
  }) : {
    v: common_vendor.o($options.clickCustomAlertBtn),
    w: common_vendor.p({
      customData: $options.customData
    })
  }, {
    x: common_vendor.o((...args) => $options.mainClick && $options.mainClick(...args)),
    y: common_vendor.s({
      "width": $options.alertWidth,
      "background": $data.background,
      "border-top-left-radius": $data.radius + "px",
      "border-top-right-radius": $data.radius + "px"
    }),
    z: common_vendor.n($data.isCloseAlert ? "fadelogOut" : ""),
    A: common_vendor.s({
      "animation-duration": $data.duration + "s",
      "width": "100%",
      "max-height": $data.maxHeight
    }),
    B: common_vendor.o((...args) => $options.animationend && $options.animationend(...args)),
    C: common_vendor.n($data.isCloseAlert ? "fadelogOutOpcity" : ""),
    D: common_vendor.s({
      "background-color": $data.maskColor
    }),
    E: common_vendor.o(() => {
    }),
    F: common_vendor.o(($event) => $data.touchClose ? $options.close() : "")
  }) : common_vendor.e({
    G: !$options.isCustomType
  }, !$options.isCustomType ? common_vendor.e({
    H: $data.title.length > 0
  }, $data.title.length > 0 ? {
    I: common_vendor.t($data.title),
    J: common_vendor.s($data.titleStyle)
  } : {}, {
    K: $data.message.length > 0
  }, $data.message.length > 0 ? common_vendor.e({
    L: !$data.isUseHTMLString
  }, !$data.isUseHTMLString ? {
    M: common_vendor.t($data.message)
  } : {
    N: $data.message
  }, {
    O: common_vendor.s($data.messageStyle)
  }) : {}) : {}, {
    P: $data.showClose
  }, $data.showClose ? {
    Q: common_vendor.s($data.closeStyle),
    R: $options.closeImgUrl,
    S: common_vendor.o((...args) => $options.close && $options.close(...args))
  } : {}, {
    T: common_vendor.s({
      "padding": !$options.isCustomType ? $data.padding : "0"
    }),
    U: !$options.isCustomType
  }, !$options.isCustomType ? common_vendor.e({
    V: $options.buttonDirection === "row"
  }, $options.buttonDirection === "row" ? {
    W: common_vendor.f($data.btns, (btn, index, i0) => {
      return {
        a: index,
        b: common_vendor.s($options.btnStyle(btn)),
        c: common_vendor.o(($event) => $options.clickFn(btn)),
        d: "432dbc10-3-" + i0,
        e: common_vendor.p({
          btnObj: btn
        })
      };
    })
  } : {
    X: common_vendor.f($data.btns, (btn, index, i0) => {
      return {
        a: common_vendor.s($options.btnStyle(btn)),
        b: common_vendor.o(($event) => $options.clickFn(btn)),
        c: "432dbc10-4-" + i0,
        d: common_vendor.p({
          btnObj: btn
        }),
        e: index
      };
    })
  }) : {
    Y: common_vendor.o($options.clickCustomAlertBtn),
    Z: common_vendor.p({
      customData: $options.customData
    })
  }, {
    aa: common_vendor.o((...args) => $options.animationend && $options.animationend(...args)),
    ab: common_vendor.n($data.isCloseAlert ? "popOut" : ""),
    ac: common_vendor.o((...args) => $options.mainClick && $options.mainClick(...args)),
    ad: common_vendor.s({
      "animation-duration": $data.duration + "s",
      "width": $options.alertWidth,
      "border-radius": $data.radius + "px",
      "background": $data.background
    }),
    ae: common_vendor.n($data.isCloseAlert ? "fadelogOutOpcity" : ""),
    af: $data.maskColor,
    ag: common_vendor.o(() => {
    }),
    ah: common_vendor.o(($event) => $data.touchClose ? $options.close() : "")
  })) : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-432dbc10"], ["__file", "/Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/components/jj-messagebox/alert/jj-alert.vue"]]);
let jj_alert = function(alertData, message, btnTitle) {
  const data = getData(alertData, message, btnTitle);
  let obj = pages_components_jjMessagebox_messageView_processor.processorObj(pages_components_jjMessagebox_messageView_constant.kAlert);
  obj.processDataFun = getData;
  obj.messageObj = showAlertApp_MP(data);
  return obj;
};
let showAlertApp_MP = function(data) {
  let alert = pages_components_jjMessagebox_messageView_ref.getRef(pages_components_jjMessagebox_messageView_constant.kAlert);
  if (alert !== void 0) {
    let isClose = data["isClose"] || false;
    if (isClose) {
      alert.quickClose();
      return null;
    }
    let priority = data["priority"] || 0;
    let alertPriority = alert.priority;
    if (alertPriority > priority && alert.isShow) {
      return null;
    }
    alert.isCloseAlert = false;
    alert.isShow = false;
    alert.show(data);
    return alert;
  }
  return null;
};
let getData = function(alertData, message, btnTitle) {
  let data = {};
  const isAlertDataNull = alertData === void 0 || alertData === null;
  const isMessageNull = message === void 0 || message === null;
  const isBtnTitileNull = btnTitle === void 0 || btnTitle === null;
  if (isAlertDataNull && isMessageNull && isBtnTitileNull) {
    return {};
  } else {
    if (!isAlertDataNull) {
      if (typeof alertData === "object") {
        data = __spreadValues({}, alertData);
        return data;
      } else {
        data["title"] = alertData + "";
      }
    }
    if (!isMessageNull) {
      data["message"] = message + "";
    }
    if (!isBtnTitileNull) {
      data["btns"] = [{
        "title": btnTitle
      }];
    }
  }
  return data;
};
exports.Component = Component;
exports.jj_alert = jj_alert;
