"use strict";
let requsetUserInfo = function() {
  let load = getApp().globalData.$jj_loading();
  setTimeout(function() {
    load.close();
    getApp().globalData.$jj_toast("\u6210\u529F\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u3002\u3002\u3002\u3002\u3002\u3002\u54C8\u54C8\u{1F604}\u{1F604}");
  }, 3e3);
};
exports.requsetUserInfo = requsetUserInfo;
