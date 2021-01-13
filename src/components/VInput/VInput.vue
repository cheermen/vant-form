<!--
 * @Author: your name
 * @Date: 2021-01-07 17:03:12
 * @LastEditTime: 2021-01-08 15:32:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-mobile\src\index\baseComp\vField.vue
-->
<template>
  <van-field 
  v-model="value"
  :name="item.key"
  :type="type"
  :readonly="readOnly"
  :disabled="disabled"
  :placeholder="placeholder"
  :rules="rules"
  :required="required"
  :maxlength="maxlength"
  >
    <template #label>
      <span class="custom-title">{{label}}<van-icon v-if="help" @click="showHelp"  name="question" /></span>
    </template>
  </van-field>
</template>

<script>
import VBase from "../mixin/VBase";
export default {
  name: "VInput",
  props: {
    item: {
      type: Object
    },
    formItemKey: {
      type: String
    }
  },
  extends: VBase,
  computed: {
    type: function () {
      if (this.$props.item.attrbute) {
        let attr = this.$props.item.attrbute;
        if (attr.type == "input") return "text";
        else if (attr.type == "phone") return "tel";
          else if (attr.type == "password") return "password";
          else if (attr.type == "number") return "number";
            else if (attr.type == "phone") return "tel";
            else return "text"
      } else return "text"
    },
    maxlength: function() {
      return this.$props.item.attrbute && this.$props.item.attrbute.maxLength ? this.$props.item.attrbute.maxLength : 'auto'
    }
  }
};
</script>

