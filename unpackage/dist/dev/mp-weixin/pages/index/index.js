"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_uni_section2 + _easycom_uni_card2)();
}
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_section + _easycom_uni_card)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const nowTask = common_vendor.ref({
      "2023/4/19": {
        "taskMessage": [
          {
            "Message": "任务1内容",
            "id": "任务1"
          },
          {
            "Message": "任务2内容",
            "id": "任务2"
          },
          {
            "Message": "任务3内容",
            "id": "任务3"
          }
        ],
        "numTask": 3,
        "numTaskConfirm": 3,
        "numTaskFinish": [0, 0, 0]
      }
    });
    onload = () => {
      console.log("onload");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(nowTask.value["2023/4/19"].taskMessage, (item, k0, i0) => {
          return {
            a: "02156071-0-" + i0,
            b: common_vendor.p({
              title: item.id,
              type: "line"
            }),
            c: common_vendor.t(item.Message),
            d: "02156071-1-" + i0,
            e: item.id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Web_Project/Uniapp_Project/Daily schedule/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
