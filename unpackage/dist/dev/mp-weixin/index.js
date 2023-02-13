"use strict";
var common_vendor = require("./common/vendor.js");
var static_image = require("./static/image.js");
const jjDialog = () => "./pages/components/jj-messagebox/dialog/jj-dialog.js";
const jjPopup = () => "./pages/components/jj-messagebox/popup/jj-popup.js";
const _sfc_main = {
  components: {
    jjPopup,
    jjDialog
  },
  data() {
    return {
      isShowDialog: false,
      innerVisible: false,
      isShowPopup: false
    };
  },
  computed: {
    backgroundImg() {
      return static_image.background_image();
    }
  },
  methods: {
    showNormalAlert() {
      let alert = this.$jj_alert("\u63D0\u793A", "\u65F6\u95F4\u5C31\u50CF\u6D77\u7EF5\u91CC\u7684\u6C34,\n\u53EA\u8981\u613F\u6324\u603B\u8FD8\u662F\u6709\u7684\u3002", "\u77E5\u9053\u4E86");
      let loading = this.$jj_loading();
      let that = this;
      setTimeout(function() {
        loading.close();
        that.$jj_toast("\u5DF2\u7ECF\u66F4\u65B0 Alert \u6570\u636E");
        alert.update({
          isQuickClose: true,
          titleStyle: {
            "color": "red",
            "font-size": "18px"
          },
          btns: [{
            title: "\u786E\u5B9A",
            activeBackground: "#2A8AFF",
            activeColor: "#fff",
            style: {
              "color": "#4CD964"
            },
            click: () => {
              console.log("\u70B9\u51FB-----\u786E\u5B9A");
            }
          }]
        });
      }, 2e3);
    },
    showCustomAlert(type, isShowBtn = true, btnDirection = "row", position = "center") {
      let isUseHTMLString = false;
      let message = "\u4E8B\u5B9E\u4E0A\u786E\u5B9E\u662F\u5F53\u6211\u4EEC\u5931\u53BB\u7684\u65F6\u5019\uFF0C\u624D\u77E5\u9053\u81EA\u5DF1\u66FE\u7ECF\u62E5\u6709\uFF1B\u4F46\u6709\u6CA1\u6709\u6CE8\u610F\u5230\u5F53\u6709\u4E9B\u4E1C\u897F\u6765\u4E34\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5DF2\u9519\u8FC7\u3002";
      if (type === "sheet") {
        isUseHTMLString = true;
        message = "<strong>\u8FD9\u662F <i id='test11'>HTML</i> \u7247\u6BB5</strong>";
      } else {
        if (btnDirection !== "row") {
          message += message;
        }
      }
      let that = this;
      let alert = this.$jj_alert({
        type,
        position,
        btnDirection,
        width: "90%",
        padding: "12px 15px",
        maskColor: "rgba(0, 0, 0, 0.6)",
        touchClose: true,
        showClose: true,
        radius: 10,
        title: "\u63D0\u793A",
        titleStyle: {
          "color": "#fb2408",
          "font-size": "20px"
        },
        isUseHTMLString,
        message,
        messageStyle: {
          "justify-content": "left",
          "display": "flex",
          "color": "#8a8a8a",
          "text-align": "left",
          "maxHeight": "100px",
          "overflow": "auto"
        },
        btns: isShowBtn === false ? [] : [{
          title: "Cancel",
          activeBackground: "#2A8AFF",
          activeColor: "#fff",
          click: () => {
            console.log("\u70B9\u51FBCancel");
          }
        }, {
          title: "Destructive",
          style: {
            "color": "red",
            "font-size": "15px"
          },
          touchClose: false,
          click: () => {
            console.log("\u70B9\u51FBDestructive");
            alert.close(false);
            common_vendor.index.switchTab({
              url: "/pages/index/index",
              animationDuration: 0
            });
          }
        }, {
          title: "Confirm",
          activeBackground: "#2f2",
          style: {
            "background": "#2A8AFF",
            "color": "#fff"
          },
          touchClose: false,
          click: function() {
            that.simulateNetworkRequest(this, alert);
          }
        }]
      });
    },
    simulateNetworkRequest(btn, alert) {
      this.count = this.count || 0;
      this.$jj_toast("\u6309\u94AE\u88AB\u7981\u7528,\u7F51\u7EDC\u8BF7\u6C42\u4E2D...");
      btn.isDisable = true;
      let that = this;
      if (this.count % 2 === 0) {
        setTimeout(function() {
          btn.isDisable = false;
          that.$jj_toast("\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u70B9\u51FB\u6309\u94AE\u91CD\u65B0\u8BF7\u6C42");
        }, 2e3);
      } else {
        setTimeout(function() {
          that.$jj_toast("\u7F51\u7EDC\u8BF7\u6C42\u6210\u529F");
          alert.closeAll(function() {
            common_vendor.index.navigateTo({
              url: "/pages/demo/index",
              animationDuration: 0
            });
          });
        }, 2e3);
      }
      this.count += 1;
    },
    showDialog() {
      this.isShowDialog = true;
    },
    showPopup() {
      common_vendor.index.hideTabBar();
      this.isShowPopup = true;
    },
    closePopup() {
      common_vendor.index.showTabBar();
      this.isShowPopup = false;
    },
    showLoading(type) {
      if (type === "default") {
        let loading = this.$jj_loading("\u52A0\u8F7D\u4E2D...");
        setTimeout(function() {
          loading.update("Update...");
        }, 2e3);
        setTimeout(function() {
          loading.close();
        }, 4e3);
      } else {
        const loadingData = {
          imageSize: {
            width: "32px",
            height: "32px"
          },
          userInteractionEnabled: true,
          type
        };
        if (type === "custom") {
          loadingData["imageUrl"] = static_image.loading_custom();
          loadingData["background"] = "#fff";
          loadingData["width"] = "120px";
          loadingData["message"] = "\u81EA\u5B9A\u4E49Loading";
          loadingData["messageStyle"] = {
            color: "#2A8AFF",
            "font-size": "14px"
          };
          loadingData["maskColor"] = "rgba(0, 0, 0, 0.5)";
        } else if (type === "round") {
          loadingData["message"] = "round...";
        } else if (type === "taichi") {
          loadingData["message"] = "taichi...";
        }
        let loading = this.$jj_loading(loadingData);
        setTimeout(() => {
          loading.close();
        }, 5e3);
      }
    },
    showToast(type) {
      let message = "\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u54C8\u3002\u3002\u3002";
      const toastData = {
        duration: -1,
        radius: 3
      };
      if (type === "custom") {
        toastData["message"] = message;
        toastData["background"] = "#f24";
        toastData["maxWidth"] = "60%";
        toastData["messageStyle"] = {
          "color": "#fe2",
          "text-align": "center"
        };
        toastData["padding"] = "20px";
        toastData["imageSize"] = {
          width: "60px",
          height: "60px"
        };
        toastData["imageUrl"] = static_image.logo();
        let toast = this.$jj_toast(toastData);
        setTimeout(function() {
          toast.close();
        }, 5e3);
      } else if (type.length > 0) {
        this.$jj_toast(type, type, 1);
      } else {
        this.$jj_toast(message);
      }
    }
  }
};
if (!Array) {
  const _component_jj_dialog = common_vendor.resolveComponent("jj-dialog");
  const _component_jj_popup = common_vendor.resolveComponent("jj-popup");
  const _component_base_view = common_vendor.resolveComponent("base-view");
  (_component_jj_dialog + _component_jj_popup + _component_base_view)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.showNormalAlert && $options.showNormalAlert(...args)),
    b: common_vendor.o(($event) => $options.showCustomAlert("alert", false)),
    c: common_vendor.o(($event) => $options.showCustomAlert("alert")),
    d: common_vendor.o(($event) => $options.showCustomAlert("alert", true, "column")),
    e: common_vendor.o(($event) => $options.showCustomAlert("alert", true, "column", "bottom")),
    f: common_vendor.o(($event) => $options.showCustomAlert("sheet")),
    g: common_vendor.o((...args) => $options.showDialog && $options.showDialog(...args)),
    h: common_vendor.o((...args) => $options.showPopup && $options.showPopup(...args)),
    i: common_vendor.o(($event) => $options.showLoading("default")),
    j: common_vendor.o(($event) => $options.showLoading("round")),
    k: common_vendor.o(($event) => $options.showLoading("taichi")),
    l: common_vendor.o(($event) => $options.showLoading("custom")),
    m: common_vendor.o(($event) => $options.showToast("")),
    n: common_vendor.o(($event) => $options.showToast("success")),
    o: common_vendor.o(($event) => $options.showToast("fail")),
    p: common_vendor.o(($event) => $options.showToast("warn")),
    q: common_vendor.o(($event) => $options.showToast("custom")),
    r: $options.backgroundImg,
    s: common_vendor.o(($event) => $data.innerVisible = false),
    t: common_vendor.p({
      width: "60%",
      title: "\u5185\u5C42Dialog",
      visible: $data.innerVisible
    }),
    v: common_vendor.o(($event) => $data.innerVisible = true),
    w: common_vendor.o(($event) => $data.isShowDialog = false),
    x: common_vendor.p({
      visible: $data.isShowDialog,
      titleStyle: {
        "color": "red"
      },
      title: "\u63D0\u793A",
      message: "\u5916\u5C42Dialog"
    }),
    y: $options.backgroundImg,
    z: common_vendor.o($options.closePopup),
    A: common_vendor.p({
      visible: $data.isShowPopup,
      showClose: true,
      title: "\u8BF7\u9009\u62E9",
      touchClose: false
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6a3babdf"], ["__file", "/Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/demo/index.vue"]]);
exports.Component = Component;
