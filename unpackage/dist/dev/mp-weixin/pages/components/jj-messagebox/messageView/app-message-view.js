"use strict";
var common_vendor = require("../../../../common/vendor.js");
var pages_components_jjMessagebox_messageView_ref = require("./ref.js");
const messageView = () => "./index.js";
const _sfc_main = {
  name: "app-message-view",
  components: {
    messageView
  },
  mounted() {
    this.setupRouteUid();
  },
  onBackPress(options) {
    if (options.from === "navigateBack") {
      return false;
    }
    return !this.isBack;
  },
  data() {
    return {
      route_uid: "",
      isBack: false
    };
  },
  methods: {
    setupRouteUid() {
      let routes = getCurrentPages() || [];
      let currentPage = routes[routes.length - 1];
      this.route_uid = pages_components_jjMessagebox_messageView_ref.route_uidKey(currentPage);
    },
    getCurrentIndex() {
      let routes = getCurrentPages() || [];
      for (let i = routes.length - 1; i >= 0; i--) {
        let page = routes[i];
        const route_uid = pages_components_jjMessagebox_messageView_ref.route_uidKey(page);
        if (this.route_uid === route_uid) {
          return i;
        }
      }
      return -99;
    },
    close(type) {
      let refList = pages_components_jjMessagebox_messageView_ref.getRefList(this.route_uid);
      let back = refList.every((item) => item.isShow === false);
      if (back) {
        this.backPage();
      }
    },
    backPage(completeFun) {
      if (this.isBack) {
        return;
      }
      this.isBack = true;
      let pages = getCurrentPages();
      let currentIndex = this.getCurrentIndex();
      let delta = pages.length - currentIndex;
      common_vendor.index.navigateBack({
        delta,
        animationDuration: 0,
        animationType: "fade-out",
        complete: () => {
          if (typeof completeFun === "function") {
            setTimeout(() => {
              completeFun();
            }, 250);
          }
        }
      });
    }
  },
  destroyed() {
  },
  unmounted() {
  }
};
if (!Array) {
  const _component_message_view = common_vendor.resolveComponent("message-view");
  _component_message_view();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.close)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/components/jj-messagebox/messageView/app-message-view.vue"]]);
wx.createPage(MiniProgramPage);
