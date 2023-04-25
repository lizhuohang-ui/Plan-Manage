"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "person",
  setup(__props) {
    common_vendor.index.login({
      provider: "weixin",
      success: (loginRes) => {
        console.log(loginRes);
        common_vendor.index.getUserInfo({
          provider: "weixin",
          success: function(infoRes) {
            console.log("用户昵称为：" + infoRes.userInfo.nickName);
          }
        });
      }
    });
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Web_Project/Uniapp_Project/Plan Manage/pages/person/person.vue"]]);
wx.createPage(MiniProgramPage);
