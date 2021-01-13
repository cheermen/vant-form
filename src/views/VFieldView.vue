<template>
  <v-form :formItemData="itembase" :ruleForm="ruleForm" @submit="submit" ></v-form>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "VField",
  data() {
    return {
      ruleForm: {},
      itembase: [
        {
          col: 24,
          labelName: "手机号",
          type: "input",
          key: "RY_JBXX__SJH",
          RY_JBXX__ZJH: "",
          labelwraperCol: [24, 24],
          attrbute: { type: "phone" },
          rules: {
            require: false,
            message: "手机号不能为空",
            triger: "blur"
          },
          placeholder: "请输入手机号",
          isShow: true,
          readOnly: false,
          validateStatus: "",
          helping: "",
          extra: {
            tips: "名词解释"
          }
        },
        {
          col: 24,
          labelName: "姓名",
          type: "input",
          key: "RY_JBXX__NAME",
          RY_JBXX__NAME: "",
          labelwraperCol: [24, 24],
          attrbute: { type: "input" },
          rules: {
            require: true,
            message: "用户名不能空",
            triger: "blur"
          },
          placeholder: "用户名不能空",
          isShow: true,
          readOnly: false,
          validateStatus: "",
          helping: ""
        },
        {
          col: 24,
          labelName: "密码",
          type: "input",
          key: "RY_JBXX__pass",
          RY_JBXX__pass: "",
          labelwraperCol: [24, 24],
          attrbute: { type: "password" },
          rules: {
            require: true,
            message: "密码",
            triger: "blur"
          },
          placeholder: "密码不能空",
          isShow: true,
          readOnly: false,
          validateStatus: "",
          helping: ""
        },
        {
          col: 24,
          labelName: "出生日期",
          type: "datepicker",
          key: "RY_JBXX__CHRQ",
          RY_JBXX__CHRQ: "",
          labelwraperCol: [24, 24],
          attrbute: { type: "date" },
          rules: {
            require: true,
            message: "选择生日",
            triger: "blur"
          },
          placeholder: "出生日期不能空",
          isShow: true,
          readOnly: false,
          validateStatus: "",
          helping: ""
        },
        {
          col: 24,
          labelName: "下班时间",
          type: "timepicker",
          key: "RY_JBXX__XBSJ",
          RY_JBXX__XBSJ: "",
          labelwraperCol: [24, 24],
          rules: {
            require: true,
            message: "选择生日",
            triger: "blur"
          },
          placeholder: "出生日期不能空",
          isShow: true,
          readOnly: false,
          validateStatus: "",
          helping: ""
        },
        {
          col: 24,
          labelName: "证件类型",
          type: "select",
          key: "RY_JBXX__ZJLX",
          RY_JBXX__ZJLX: "01",
          labelwraperCol: [24, 24],
          codeData: {
            code: "CT_0100",
            valueName: "code",
            labelName: "name"
          },
          placeholder: "出生日期不能空",
          isShow: true,
          readOnly: false,
          validateStatus: "",
          helping: ""
        },
        {
          col: 24,
          labelName: "工资",
          type: "number",
          key: "RY_JBXX__GZ",
          RY_JBXX__GZ: "155",
          labelwraperCol: [24, 24],
          placeholder: "工资",
          isShow: true,
          readOnly: false,
          validateStatus: "",
          helping: ""
        }
      ] // 数据格式见 Area 组件文档
    };
  },
  methods: {
    submit() {},
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    onConfirmTime(time) {
      this.valueTime = time;
      this.showTimePicker = false;
    },
    onConfirmArea(values) {
      this.valueArea = values
        .filter(item => !!item)
        .map(item => item.name)
        .join("/");
      this.showArea = false;
    },
    // 校验函数返回 true 表示校验通过，false 表示不通过
    validator(val) {
      return /1\d{10}/.test(val);
    },
    // 异步校验函数返回 Promise
    asyncValidator(val) {
      return new Promise(resolve => {
        Toast.loading("验证中...");

        setTimeout(() => {
          Toast.clear();
          resolve(/\d{6}/.test(val));
        }, 1000);
      });
    },
    onFailed(errorInfo) {
      console.log("failed", errorInfo);
    },
    onSubmit(values) {
      console.log("submit", values);
    }
  }
};
</script>
