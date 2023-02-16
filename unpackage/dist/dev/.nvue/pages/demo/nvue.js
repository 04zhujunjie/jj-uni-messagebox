import { resolveComponent, openBlock, createElementBlock, createVNode, withCtx, createElementVNode, createTextVNode } from "vue";
Object.freeze({});
Object.freeze([]);
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
function isDebugMode() {
  return typeof __channelId__ === "string" && __channelId__;
}
function jsonStringifyReplacer(k, p) {
  switch (toRawType(p)) {
    case "Function":
      return "function() { [native code] }";
    default:
      return p;
  }
}
function normalizeLog(type, filename, args) {
  if (isDebugMode()) {
    args.push(filename.replace("at ", "uni-app:///"));
    return console[type].apply(console, args);
  }
  const msgs = args.map(function(v) {
    const type2 = toTypeString(v).toLowerCase();
    if (["[object object]", "[object array]", "[object module]"].indexOf(type2) !== -1) {
      try {
        v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
      } catch (e) {
        v = type2;
      }
    } else {
      if (v === null) {
        v = "---NULL---";
      } else if (v === void 0) {
        v = "---UNDEFINED---";
      } else {
        const vType = toRawType(v).toUpperCase();
        if (vType === "NUMBER" || vType === "BOOLEAN") {
          v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  return msgs.join("---COMMA---") + " " + filename;
}
function formatAppLog(type, filename, ...args) {
  const res = normalizeLog(type, filename, args);
  res && console[type](res);
}
const logo = function() {
  return "data:image/png;base64,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UmVhZHlxyWU8AAADKmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzIgNzkuMTU5Mjg0LCAyMDE2LzA0LzE5LTEzOjEzOjQwICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGRkE0MjcxNTdEQzYxMUU4QkZBOERDOEVCQ0U0NTBGMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGRkE0MjcxNDdEQzYxMUU4QkZBOERDOEVCQ0U0NTBGMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNS41IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkE4RkFCN0M3REM1MTFFOEJGQThEQzhFQkNFNDUwRjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkE4RkFCN0Q3REM1MTFFOEJGQThEQzhFQkNFNDUwRjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5BZZ+3AAAB1ElEQVR42mJkAALtmZb/GfAAJkIKwIoYiAA4FV1JO0Ylk0hWxILLHTgV6cyywqoIIIAYiQinb8S4iYs036E7esgEJq6ABAGAACImMBmo5m6yDcLlR5gcNnnaumhADWIhJoOTbRC+9ILPa9+o4TWAAAIlyDVAOphCc1SYqGAICNwZxumIidi8NILz2qhBdCyPaOcicgq1wRnYAAFErRKSgZo+GzSOoWpQD1sHsRCjCDnzkpp90DM+If2jUTbqoFEHjZZDpJYroyFESeNmNFHTykEqg8g9bwACCNRiVAYyLgEx1wA7Zu3V9OMhVBt1opajBlsaCh7NZaMOGnXQgFeupHZjKO1CjUbZqINGHTTqoFEHjTpo1EGjDhqMgw342kejUTaahggpoOdg1WiUjTpoODoIvL7tzSBykB5AgPbtGIdBGIYCaBR16swROEQvzT06cxjm1lRFDC0LcpXC+xJzpIdJhOW8e4z359MVWSde1C32xRYasC0mCmascDZzrQz+7NgABAgQINnRY/iUrb5D9v9l9toqCBAgQIAAAQIESAABAgQIEKCD5ZK9QPaMigoCdIJP7NdjOyoIECBAgGQBGjB8zVDjam153T0OqInJbBAWfdg8AExKZVcA71uIAAAAAElFTkSuQmCC";
};
const loading_custom = function() {
  return "data:image/png;base64,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";
};
var _style_0 = { "flexColumnCenter": { "": { "display": "flex", "flexDirection": "column" } }, "flexRow": { "": { "display": "flex", "flexDirection": "row", "justifyContent": "center", "alignItems": "center", "flexWrap": "wrap" } }, "marginTopBottom": { "": { "marginTop": 10, "marginBottom": 10 } }, "marginLeftRight": { "": { "marginRight": 10, "marginLeft": 10 } }, "btn": { "": { "borderRadius": 5, "backgroundColor": "#2A8AFF", "borderColor": "#FFFFFF", "color": "#FFFFFF", "paddingTop": 0, "paddingRight": 20, "paddingBottom": 0, "paddingLeft": 20, "height": 44 } } };
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    showNormalAlert() {
      let alert = getApp().globalData.$jj_alert("\u63D0\u793A", "\u65F6\u95F4\u5C31\u50CF\u6D77\u7EF5\u91CC\u7684\u6C34,\n\u53EA\u8981\u613F\u6324\u603B\u8FD8\u662F\u6709\u7684\u3002", "\u77E5\u9053\u4E86");
      let loading = getApp().globalData.$jj_loading();
      setTimeout(function() {
        loading.close();
        getApp().globalData.$jj_toast("\u5DF2\u7ECF\u66F4\u65B0 Alert \u6570\u636E");
        alert.update({
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
              formatAppLog("log", "at pages/demo/nvue.nvue:65", "\u70B9\u51FB-----\u786E\u5B9A");
            }
          }]
        });
      }, 2e3);
    },
    showCustomAlert(type, isShowBtn = true) {
      let that = this;
      let alert = getApp().globalData.$jj_alert({
        type,
        width: "80%",
        padding: "20px 30px",
        maskColor: "rgba(0, 0, 0, 0.6)",
        touchClose: true,
        showClose: true,
        title: "\u63D0\u793A",
        titleStyle: {
          "color": "#fb2408",
          "font-size": "20px"
        },
        message: "\u4E8B\u5B9E\u4E0A\u786E\u5B9E\u662F\u5F53\u6211\u4EEC\u5931\u53BB\u7684\u65F6\u5019\uFF0C\u624D\u77E5\u9053\u81EA\u5DF1\u66FE\u7ECF\u62E5\u6709\uFF1B\u4F46\u6709\u6CA1\u6709\u6CE8\u610F\u5230\u5F53\u6709\u4E9B\u4E1C\u897F\u6765\u4E34\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5DF2\u9519\u8FC7\u3002",
        messageStyle: {
          "justify-content": "left",
          "display": "flex",
          "color": "#8a8a8a",
          "text-align": "left"
        },
        btns: isShowBtn === false ? [] : [{
          title: "Cancel",
          activeBackground: "#2A8AFF",
          activeColor: "#fff",
          click: () => {
            formatAppLog("log", "at pages/demo/nvue.nvue:119", "\u70B9\u51FBCancel");
          }
        }, {
          title: "Destructive",
          style: {
            "color": "red",
            "font-size": "15px"
          },
          click: () => {
            formatAppLog("log", "at pages/demo/nvue.nvue:128", "\u70B9\u51FBDestructive");
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
      getApp().globalData.$jj_toast("\u6309\u94AE\u88AB\u7981\u7528,\u7F51\u7EDC\u8BF7\u6C42\u4E2D...");
      btn.isDisable = true;
      formatAppLog("log", "at pages/demo/nvue.nvue:155", btn);
      if (this.count % 2 === 0) {
        setTimeout(function() {
          btn.isDisable = false;
          getApp().globalData.$jj_toast("\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u70B9\u51FB\u6309\u94AE\u91CD\u65B0\u8BF7\u6C42");
        }, 2e3);
      } else {
        setTimeout(function() {
          getApp().globalData.$jj_toast("\u7F51\u7EDC\u8BF7\u6C42\u6210\u529F");
          alert.close();
        }, 2e3);
      }
      this.count += 1;
    },
    showDialog() {
      this.isShowDialog = true;
    },
    showPopup() {
      uni.hideTabBar();
      this.isShowPopup = true;
    },
    closePopup() {
      uni.showTabBar();
      this.isShowPopup = false;
    },
    showLoading(type) {
      if (type === "default") {
        let loading = getApp().globalData.$jj_loading("\u52A0\u8F7D\u4E2D...");
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
          loadingData["imageUrl"] = loading_custom();
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
        let loading = getApp().globalData.$jj_loading(loadingData);
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
        toastData["imageUrl"] = logo();
        let toast = getApp().globalData.$jj_toast(toastData);
        setTimeout(function() {
          toast.close();
        }, 5e3);
      } else if (type.length > 0) {
        getApp().globalData.$jj_toast(type, type, 1);
      } else {
        getApp().globalData.$jj_toast(message);
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_button = resolveComponent("button");
  const _component_base_view = resolveComponent("base-view");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createVNode(_component_base_view, null, {
      default: withCtx(() => [
        createElementVNode("div", { class: "flexColumnCenter" }, [
          createElementVNode("div", { class: "flexRow marginTopBottom" }, [
            createVNode(_component_button, {
              class: "btn",
              onClick: $options.showNormalAlert
            }, {
              default: withCtx(() => [
                createTextVNode(" \u9ED8\u8BA4Alert ")
              ]),
              _: 1
            }, 8, ["onClick"]),
            createVNode(_component_button, {
              class: "btn",
              style: { "margin-left": "10px" },
              onClick: _cache[0] || (_cache[0] = ($event) => $options.showCustomAlert("alert", false))
            }, {
              default: withCtx(() => [
                createTextVNode(" \u6CA1\u6709\u6309\u94AE\u7684Alert ")
              ]),
              _: 1
            }),
            createVNode(_component_button, {
              class: "btn marginLeftRight",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.showCustomAlert("alert"))
            }, {
              default: withCtx(() => [
                createTextVNode(" \u81EA\u5B9A\u4E49Alert ")
              ]),
              _: 1
            }),
            createVNode(_component_button, {
              class: "btn",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.showCustomAlert("sheet"))
            }, {
              default: withCtx(() => [
                createTextVNode(" \u81EA\u5B9A\u4E49Sheet ")
              ]),
              _: 1
            })
          ]),
          createElementVNode("div", { class: "flexRow marginTopBottom" }, [
            createVNode(_component_button, {
              class: "btn",
              onClick: _cache[3] || (_cache[3] = ($event) => $options.showLoading("default"))
            }, {
              default: withCtx(() => [
                createTextVNode("Loading")
              ]),
              _: 1
            }),
            createVNode(_component_button, {
              class: "btn",
              style: { "margin-left": "10px" },
              onClick: _cache[4] || (_cache[4] = ($event) => $options.showLoading("round"))
            }, {
              default: withCtx(() => [
                createTextVNode("Loading-round")
              ]),
              _: 1
            }),
            createVNode(_component_button, {
              class: "btn marginLeftRight",
              onClick: _cache[5] || (_cache[5] = ($event) => $options.showLoading("taichi"))
            }, {
              default: withCtx(() => [
                createTextVNode("Loading-taichi")
              ]),
              _: 1
            }),
            createVNode(_component_button, {
              class: "btn",
              onClick: _cache[6] || (_cache[6] = ($event) => $options.showLoading("custom"))
            }, {
              default: withCtx(() => [
                createTextVNode("Loading-\u81EA\u5B9A\u4E49")
              ]),
              _: 1
            })
          ]),
          createElementVNode("div", { class: "flexRow marginTopBottom" }, [
            createVNode(_component_button, {
              class: "btn",
              onClick: _cache[7] || (_cache[7] = ($event) => $options.showToast(""))
            }, {
              default: withCtx(() => [
                createTextVNode("toast")
              ]),
              _: 1
            }),
            createVNode(_component_button, {
              class: "btn marginLeftRight",
              onClick: _cache[8] || (_cache[8] = ($event) => $options.showToast("success"))
            }, {
              default: withCtx(() => [
                createTextVNode("toast-success")
              ]),
              _: 1
            }),
            createVNode(_component_button, {
              class: "btn",
              onClick: _cache[9] || (_cache[9] = ($event) => $options.showToast("fail"))
            }, {
              default: withCtx(() => [
                createTextVNode("toast-fail")
              ]),
              _: 1
            }),
            createVNode(_component_button, {
              class: "btn marginLeftRight",
              onClick: _cache[10] || (_cache[10] = ($event) => $options.showToast("warn"))
            }, {
              default: withCtx(() => [
                createTextVNode("toast-warn")
              ]),
              _: 1
            }),
            createVNode(_component_button, {
              class: "btn",
              style: { "margin-left": "10px" },
              onClick: _cache[11] || (_cache[11] = ($event) => $options.showToast("custom"))
            }, {
              default: withCtx(() => [
                createTextVNode("toast-\u81EA\u5B9A\u4E49")
              ]),
              _: 1
            })
          ])
        ])
      ]),
      _: 1
    })
  ]);
}
var nvue = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/weiqu/Documents/GitApp/jj-uni-messagebox/pages/demo/nvue.nvue"]]);
export { nvue as default };
