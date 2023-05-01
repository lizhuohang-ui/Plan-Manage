"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "login",
  setup(__props) {
    const account = common_vendor.ref();
    const password = common_vendor.ref();
    const login = () => {
      console.log(account.value);
      console.log(password.value);
      common_vendor.index.request({
        url: "http://127.0.0.1:8000/test",
        method: "GET",
        data: { "用户": account.value, "密码": password.value },
        success: (res) => {
        },
        fail: () => {
        },
        complete: () => {
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: account.value,
        b: common_vendor.o(($event) => account.value = $event.detail.value),
        c: password.value,
        d: common_vendor.o(($event) => password.value = $event.detail.value),
        e: common_vendor.o(login)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"], ["__file", "D:/Web_Project/Uniapp_Project/Plan Manage/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
