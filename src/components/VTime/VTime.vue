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
      v-model="value"
      :name="item.key"
      readonly
      clickable
      :disabled="disabled"
      :placeholder="placeholder || '点击选择时间'"
      :rules="rules"
      :required="required"
      @click="_click"
    >
      <template #label>
        <span class="custom-title">{{ label }}<van-icon v-if="help" @click="showHelp" name="question"/></span>
      </template>
      <!-- <template #right-icon>
        <div class="iconfont">&#xe67f;</div>
      </template> -->
    </van-field>
    <van-popup position="bottom" v-model="showPicker">
      <van-datetime-picker
        :title="title"
        :type="type"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
import VBase from "../mixin/VBase";
export default {
  name: "VTime",
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
      return "time";
    },
    title: function() {
      return "请选择时间";
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
    onConfirm(text) {
      this.showPicker = false;
      this.$emit("input", text)
    },
    onCancel() {
      this.showPicker = false;
    }
  }
};
</script>
