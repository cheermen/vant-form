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
      :placeholder="placeholder || '点击选择日期'"
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
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
import VBase from "../mixin/VBase";
import moment from "moment";
export default {
  name: "VDate",
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
    },
    title: function() {
      return "选择日期";
    }
  },
  methods: {
    moment,
    _click() {
      if (this.disabled || this.readonly) {
        this.showReadonlyTip();
        return;
      }
      this.showPicker = true;
    },
    onConfirm(text) {
      this.showPicker = false;
      let format = this.$props.item.attrBute && this.$props.item.attrBute.format ? this.$props.item.attrBute.format : "YYYY-MM-DD";
      this.$emit("input", this.moment(text).format(format))
      // if (this.type == "datetime") {
      //   this.$props.item[this.item.key] = parseTime(text);
      // } else if (this.type == "date") {
      //   this.$props.item[this.item.key] = parseTime(text, "{y}-{m}-{d}");
      // }
    },
    onCancel() {
      this.showPicker = false;
    }
  }
};
</script>
