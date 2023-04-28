"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_collapse_item2 = common_vendor.resolveComponent("uni-collapse-item");
  const _easycom_uni_collapse2 = common_vendor.resolveComponent("uni-collapse");
  (_easycom_uni_section2 + _easycom_uni_collapse_item2 + _easycom_uni_collapse2)();
}
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_collapse_item = () => "../../uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.js";
const _easycom_uni_collapse = () => "../../uni_modules/uni-collapse/components/uni-collapse/uni-collapse.js";
if (!Math) {
  (_easycom_uni_section + _easycom_uni_collapse_item + _easycom_uni_collapse)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      title: "计划一",
      type: "line"
    }),
    b: common_vendor.p({
      title: "计划一"
    }),
    c: common_vendor.p({
      title: "计划一",
      type: "line"
    }),
    d: common_vendor.p({
      title: "计划二"
    }),
    e: common_vendor.p({
      title: "计划一",
      type: "line"
    }),
    f: common_vendor.p({
      title: "计划三"
    }),
    g: common_vendor.p({
      accordion: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Web_Project/Uniapp_Project/Plan Manage/pages/plan/plan.vue"]]);
wx.createPage(MiniProgramPage);
