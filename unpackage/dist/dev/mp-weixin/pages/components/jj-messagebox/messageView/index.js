"use strict";
var pages_components_jjMessagebox_messageView_constant = require("./constant.js");
var pages_components_jjMessagebox_messageView_ref = require("./ref.js");
var common_vendor = require("../../../../common/vendor.js");
const jjToast = () => "../toast/jj-toast.js";
const jjAlert = () => "../alert/jj-alert.js";
const jjLoading = () => "../loading/jj-loading.js";
const _sfc_main = {
  name: "message-view",
  components: {
    jjToast,
    jjAlert,
    jjLoading
  },
  data() {
    return {
      ref: {
        kToast: pages_components_jjMessagebox_messageView_constant.kToast,
        kAlert: pages_components_jjMessagebox_messageView_constant.kAlert,
        kLoading: pages_components_jjMessagebox_messageView_constant.kLoading
      },
      route_uid: ""
    };
  },
  mounted() {
    this.addRef();
  },
  methods: {
    addRef() {
      let refKey = pages_components_jjMessagebox_messageView_ref.refRouteKey();
      let refObj = pages_components_jjMessagebox_messageView_ref.refMessageObj();
      if (refKey.length > 0 && refObj[refKey] !== void 0) {
        return;
      }
      this.route_uid = refKey;
      for (let key in this.ref) {
        let refValue = this.ref[key];
        let refV = this.$refs[refValue];
        refV.route_uid = refKey;
        pages_components_jjMessagebox_messageView_ref.addRefObj(refValue, refV);
      }
    },
    show(type) {
      this.$emit("show", type);
    },
    close(type) {
      this.$emit("close", type);
    }
  },
  beforeDestroy() {
    pages_components_jjMessagebox_messageView_ref.removeRefObj();
  },
  beforeUnmount() {
    pages_components_jjMessagebox_messageView_ref.removeRefObj();
  }
};
if (!Array) {
  const _component_jj_alert = common_vendor.resolveComponent("jj-alert");
  const _component_jj_toast = common_vendor.resolveComponent("jj-toast");
  const _component_jj_loading = common_vendor.resolveComponent("jj-loading");
  (_component_jj_alert + _component_jj_toast + _component_jj_loading)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.sr($data.ref.kAlert, "4c8616f5-0"),
    b: $data.ref.kAlert,
    c: common_vendor.o(($event) => $options.show($data.ref.kAlert)),
    d: common_vendor.o(($event) => $options.close($data.ref.kAlert)),
    e: common_vendor.sr($data.ref.kToast, "4c8616f5-1"),
    f: $data.ref.kToast,
    g: common_vendor.o(($event) => $options.show($data.ref.kToast)),
    h: common_vendor.o(($event) => $options.close($data.ref.kToast)),
    i: common_vendor.sr($data.ref.kLoading, "4c8616f5-2"),
    j: $data.ref.kLoading,
    k: common_vendor.o(($event) => $options.show($data.ref.kLoading)),
    l: common_vendor.o(($event) => $options.close($data.ref.kLoading))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/components/jj-messagebox/messageView/index.vue"]]);
wx.createComponent(Component);
