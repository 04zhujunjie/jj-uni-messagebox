"use strict";
require("../../../../common/vendor.js");
let refMessageObj = function() {
  let obj = getApp().globalData.$jj_refMessageObj;
  if (obj !== void 0) {
    return obj;
  }
  getApp().globalData.$jj_refMessageObj = {};
  return getApp().globalData.$jj_refMessageObj;
};
let jj_app_message_url = function() {
  return getApp().globalData.$jj_app_message_url || "";
};
let refRouteKey = function() {
  let routes = getCurrentPages();
  if (routes.length === 0) {
    return "";
  }
  let rKey = route_uidKey(routes[routes.length - 1]);
  return rKey;
};
let route_uidKey = function(page) {
  let uid = 0;
  uid = page.$page.id;
  return page.route + "/" + uid;
};
let getRef = function(refId) {
  let refKey = refRouteKey();
  let refObj = refMessageObj();
  let currentObj = refObj[refKey];
  if (currentObj !== void 0) {
    let ref = currentObj[refId];
    if (ref !== void 0) {
      return ref;
    }
  }
  return currentObj;
};
let addRefObj = function(refId, ref) {
  let refKey = refRouteKey();
  let refObj = refMessageObj();
  let currentObj = refObj[refKey];
  if (currentObj !== void 0) {
    currentObj[refId] = ref;
  } else {
    let obj = {};
    obj[refId] = ref;
    refObj[refKey] = obj;
  }
};
let removeRefObj = function() {
  let refKey = refRouteKey();
  let refObj = refMessageObj();
  let currentObj = refObj[refKey];
  if (currentObj !== void 0) {
    delete refObj[refKey];
  }
};
let getRefList = function(route_uid) {
  let refList = [];
  let refKey = route_uid;
  if (refKey === void 0) {
    refKey = refRouteKey();
  }
  let currentObj = refMessageObj()[refKey];
  if (currentObj !== void 0) {
    let refObj = refMessageObj()[refKey];
    for (let key in refObj) {
      refList.push(refObj[key]);
    }
  }
  return refList;
};
exports.addRefObj = addRefObj;
exports.getRef = getRef;
exports.getRefList = getRefList;
exports.jj_app_message_url = jj_app_message_url;
exports.refMessageObj = refMessageObj;
exports.refRouteKey = refRouteKey;
exports.removeRefObj = removeRefObj;
exports.route_uidKey = route_uidKey;
