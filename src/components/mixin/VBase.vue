<template>
  <div></div>
</template>
<script>
import { Toast } from "vant";

export default {
  name: "VBase",
  props: ["item", "value"],
  data() {
    return {
      validatorMsg: "",
      showPicker: false
    };
  },
  computed: {
    label: function() {
      return this.$props.item.labelName;
    },
    help: function() {
      let extra = this.$props.item.extra;
      if (extra && extra.tips) {
        return true;
      } else return false;
    },
    readOnly: function() {
      return this.$props.item.readOnly;
    },
    disabled: function() {
      if (this.$props.item.attrbute) {
        return this.$props.item.attrbute.disabled;
      } else return false;
    },
    rules: function() {
      if (this.$props.item.rules) {
        return [
          {
            required: this.$props.item.rules.require,
            message: this.$props.item.rules.message,
            trigger: this.$props.item.rules.triger == "blur" ? "onBlur" : "onChange"
          },
          {
            validator: this.validator,
            message: this.validatorMsg
          }
        ];
      } else {
        return [];
      }
    },
    // 是否显示*
    required: function() {
      if (this.$props.item.rules) {
        return this.$props.item.rules.require;
      } else {
        return false;
      }
    },
    placeholder: function() {
      return this.$props.item.placeholder;
    }
  },
  methods: {
    showHelp() {
      Toast({
        message: this.$props.item.extra.tips
      });
    },
    showReadonlyTip() {
      Toast.fail("此为只读项，不可修改！");
    },
    validator(val) {
      this.$emit("validator", val, this.$props.item);
      return true;
    }
  }
};
</script>
