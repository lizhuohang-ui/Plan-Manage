"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_calendar2 = common_vendor.resolveComponent("uni-calendar");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_calendar2 + _easycom_uni_section2 + _easycom_uni_easyinput2 + _easycom_uni_popup2)();
}
const _easycom_uni_calendar = () => "../../uni_modules/uni-calendar/components/uni-calendar/uni-calendar.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_calendar + _easycom_uni_section + _easycom_uni_easyinput + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "calendar",
  setup(__props) {
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
    const nowDate = common_vendor.ref(new Date());
    const startDate = common_vendor.ref(new Date(nowDate.value.getTime() - 15 * 24 * 60 * 60 * 1e3));
    const endDate = common_vendor.ref(new Date(nowDate.value.getTime() + 15 * 24 * 60 * 60 * 1e3));
    const selectedDate = common_vendor.ref(new Date().toISOString().substr(0, 10));
    const selected = common_vendor.ref([{ date: startDate.value.toISOString().substr(0, 10), info: "签到" }]);
    const calendarType = common_vendor.ref(1);
    common_vendor.ref("");
    const popup = common_vendor.ref(null);
    const show = common_vendor.ref(false);
    common_vendor.onLoad(() => {
      console.log("onLoad");
      const res = {
        "taskInformation": {
          "任务1": {
            "taskMessage": "任务1",
            "taskFinish": 0
          }
        },
        "taskNum": 1,
        "taskFinshNum": 0
      };
      task.value[selectedDate.value] = res;
    });
    const changeTaskCalendar = (e) => {
      selected.value.push({
        date: e.fulldate,
        info: "已制定"
      });
      console.log(selected.value);
      selectedDate.value = e.fulldate;
      if (task.value[selectedDate.value] == null) {
        const res = {
          "taskInformation": {
            "任务1": {
              "taskMessage": "任务1",
              "taskFinish": 0
            }
          },
          "taskNum": 1,
          "taskFinshNum": 0
        };
        task.value[selectedDate.value] = res;
      }
      popup.value.open();
      show.value = true;
      console.log(selectedDate.value);
    };
    const changePlanCalendar = (e) => {
      console.log(e);
    };
    const addTask = () => {
      console.log("add");
      let taskNum = task.value[selectedDate.value]["taskNum"];
      taskNum += 1;
      task.value[selectedDate.value]["taskInformation"][`任务${taskNum}`] = {
        "taskMessage": `任务${taskNum}`,
        "taskFinish": 0
      };
      taskNum = task.value[selectedDate.value]["taskNum"] = taskNum;
    };
    const deleteTask = () => {
      console.log("delete");
      let taskNum = task.value[selectedDate.value]["taskNum"];
      delete task.value[selectedDate.value]["taskInformation"][`任务${taskNum}`];
      task.value[selectedDate.value]["taskNum"] = taskNum - 1;
    };
    const confirmTask = () => {
      popup.value.close();
    };
    const switchCalendarMode = () => {
      if (calendarType.value == 1) {
        calendarType.value = 0;
      } else {
        calendarType.value = 1;
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: calendarType.value
      }, calendarType.value ? {
        b: common_vendor.o(changeTaskCalendar),
        c: common_vendor.p({
          insert: true,
          ["start-date"]: startDate.value.toISOString().substr(0, 10),
          ["end-date"]: endDate.value.toISOString().substr(0, 10),
          selected: selected.value
        })
      } : {
        d: common_vendor.o(changePlanCalendar),
        e: common_vendor.p({
          insert: true,
          ["start-date"]: startDate.value.toISOString().substr(0, 10),
          ["end-date"]: endDate.value.toISOString().substr(0, 10),
          range: true
        })
      }, {
        f: show.value
      }, show.value ? {
        g: common_vendor.t(selectedDate.value),
        h: common_vendor.f(task.value[selectedDate.value]["taskInformation"], (item, index, i0) => {
          return {
            a: "6e8913ab-3-" + i0 + ",6e8913ab-2",
            b: common_vendor.p({
              title: index,
              type: "line"
            }),
            c: "6e8913ab-4-" + i0 + ",6e8913ab-2",
            d: common_vendor.o(($event) => item["taskMessage"] = $event, index),
            e: common_vendor.p({
              type: "text",
              autoHeight: true,
              placeholder: "请输入内容",
              modelValue: item["taskMessage"]
            }),
            f: index
          };
        }),
        i: common_vendor.o(addTask),
        j: common_vendor.o(confirmTask),
        k: common_vendor.o(deleteTask)
      } : {}, {
        l: common_vendor.sr(popup, "6e8913ab-2", {
          "k": "popup"
        }),
        m: common_vendor.p({
          type: "bottom"
        }),
        n: common_vendor.o(switchCalendarMode)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6e8913ab"], ["__file", "D:/Web_Project/Uniapp_Project/Daily schedule/pages/calendar/calendar.vue"]]);
wx.createPage(MiniProgramPage);
