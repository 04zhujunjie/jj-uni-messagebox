"use strict";
var pages_components_jjMessagebox_messageView_constant = require("./constant.js");
var pages_components_jjMessagebox_messageView_ref = require("./ref.js");
require("../../../../common/vendor.js");
require("./loading.js");
require("./toast.js");
require("./alert.js");
let processorObj = function(type) {
  let obj = new Object();
  obj.type = type;
  obj.isClose = false;
  obj.messageObj = null;
  obj.processDataFun = null;
  obj.updateData = {};
  obj.close = function(isAnimation = true) {
    if (obj.isClose) {
      return;
    }
    if (obj.messageObj !== null) {
      removeData(isAnimation);
    } else {
      obj.isClose = true;
    }
  };
  obj.closeAll = function(fun) {
    if (obj.messageObj !== null) {
      quickCloseVmFun();
      if (typeof fun === "function") {
        fun();
      }
    }
  };
  let quickCloseVmFun = function() {
    let refList = pages_components_jjMessagebox_messageView_ref.getRefList(obj.messageObj.route_uid);
    for (let i = 0; i < refList.length; i++) {
      const ref = refList[i];
      ref.quickClose();
    }
  };
  let removeData = function(isAnimation) {
    obj.isClose = true;
    if (isAnimation) {
      obj.messageObj.close();
    } else {
      obj.messageObj.quickClose();
    }
    obj.messageObj = null;
  };
  obj.update = function(param1, param2, param3) {
    if (obj.isClose) {
      return;
    }
    if (obj.processDataFun !== null) {
      let updateData = updateDataFun(param1, param2, param3);
      if (obj.messageObj !== null) {
        obj.messageObj.update(updateData);
      } else {
        obj.updateData = updateData;
      }
    }
  };
  let updateDataFun = function(param1, param2, param3) {
    let data = {};
    if (obj.type === pages_components_jjMessagebox_messageView_constant.kAlert) {
      data = obj.processDataFun(param1, param2, param3);
    } else if (obj.type === pages_components_jjMessagebox_messageView_constant.kLoading) {
      data = obj.processDataFun(param1);
    } else if (obj.type === pages_components_jjMessagebox_messageView_constant.kToast) {
      data = obj.processDataFun(param1, param2, param3);
    }
    return data;
  };
  return obj;
};
exports.processorObj = processorObj;
