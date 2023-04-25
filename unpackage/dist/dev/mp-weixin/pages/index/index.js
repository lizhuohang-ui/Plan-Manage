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
    const nowDate = common_vendor.ref(new Date().toISOString().substr(0, 10));
    common_vendor.ref({});
    const task = common_vendor.ref({
      "日期": {
        "taskInformation": {
          "任务1": {
            "taskMessage": "任务1",
            "taskFinish": 0
          }
        },
        "taskNum": 1,
        "taskFinshNum": 0
      }
    });
    common_vendor.onShow(() => {
      console.log("onShow");
      try {
        const value = common_vendor.index.getStorageSync("task");
        if (value) {
          console.log(value);
          task.value = value;
        }
      } catch (e) {
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(task.value[nowDate.value]["taskInformation"], (item, index, i0) => {
          return {
            a: "7f5b03cf-0-" + i0,
            b: common_vendor.p({
              title: index,
              type: "line"
            }),
            c: common_vendor.t(item.taskMessage),
            d: "7f5b03cf-1-" + i0,
            e: item.id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "D:/Web_Project/Uniapp_Project/Plan Manage/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
