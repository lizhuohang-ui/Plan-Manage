"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "person",
  setup(__props) {
    const login = () => {
      common_vendor.index.navigateTo({
        url: "/pages/login/login",
        success: (res) => {
          console.log("success");
        },
        fail: () => {
        },
        complete: () => {
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(login)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-23e4402d"], ["__file", "D:/Web_Project/Uniapp_Project/Plan Manage/pages/person/person.vue"]]);
wx.createPage(MiniProgramPage);
