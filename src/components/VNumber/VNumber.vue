<!--
 * @Author: your name
 * @Date: 2021-01-07 17:03:12
 * @LastEditTime: 2021-01-08 15:32:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-mobile\src\index\baseComp\vField.vue
-->
<template>
  <div class="v-datepicker">
    <van-field
      :value="value"
      :name="item.key"
      readonly
      clickable
      :disabled="disabled"
      :placeholder="placeholder"
      :rules="rules"
      :required="required"
      @click="_click"
      @touchstart.native.stop="showPicker = true"
    >
      <template #label>
        <span class="custom-title">{{ label }}<van-icon v-if="help" @click="showHelp" name="question"/></span>
      </template>
    </van-field>
    <van-number-keyboard
      v-model="value"
      :title="value"
      theme="custom"
      :maxlength="item.attrbute && item.attrbute.maxLength ? item.attrbute.maxLength : null"
      extra-key="."
      close-button-text="完成"
      :show="showPicker"
      @blur="onBlur"
    />
  </div>
</template>

<script>
import VBase from "../mixin/VBase";
export default {
  name: "VNumber",
  props: ["item"],
  extends: VBase,
  data() {
    return {
      minDate: null,
      maxDate: null
    }
  },
  computed: {
    type: function() {
      if (this.$props.item.attrbute) {
        let attr = this.$props.item.attrbute;
        if (attr.type == "datepicker" || attr.type == "date") return "date";
        else return "datetime";
      } else return "datetime";
    }
  },
  methods: {
    _click() {
      if (this.disabled || this.readonly) {
        this.showReadonlyTip();
        return;
      }
      this.showPicker = true;
    },
    onBlur() {
      this.showPicker = false;
    }
  }
};
</script>
