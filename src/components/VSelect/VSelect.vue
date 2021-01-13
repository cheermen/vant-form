<template>
  <div class="v-select">
    <van-field
      :ref="item.key"
      :value="filterName(value, sourceData, valueName, labelName)"
      :name="item.key"
      readonly
      clickable
      :disabled="disabled"
      :placeholder="placeholder"
      :rules="rules"
      :required="required"
      @click="_click"
    >
      <template #label>
        <span class="custom-title">{{ label }}<van-icon v-if="help" @click="showHelp" name="question"/></span>
      </template>
    </van-field>
    <van-popup position="bottom" v-model="showPicker">
      <van-picker
        show-toolbar
        :value-key="labelName"
        :columns="sourceData"
        @confirm="onConfirm"
        @cancel="onCancel"
      />
    </van-popup>
  </div>
</template>

<script>
import VBase from "../mixin/VBase";
export default {
  name: "VSelect",
  props: {
    formItemKey: {
      type: String,
    },
    codeId: {
      type: String,
    },
    codeData: {
      default: null,
    },
    valueName: {
      default: "code",
    },
    labelName: {
      default: "name",
    },
    filter: {
      default: "",
    },
    enabledField: {
      type: [Object, Array],
    },
    disabledField: {
      type: [Object, Array],
    },
  },
  extends: VBase,
  data() {
    return {
      sourceData: [],
      selectName: ""
    };
  },
  watch: {
    codeData: {
      immediate: true,
      handler(val) {
        this.codeData = val;
        this.sourceData = val;
      },
    },
  },
  mounted() {
    if (this.codeId) {
      this.loadData();
    }
  },
  methods: {
    filterName(value, sourceData, valueName, labelName) {
      // 将value 翻译成 name
      if (sourceData && sourceData.length > 0) {
        let text = "";
        sourceData.forEach(tree => {
          if (tree[valueName] == value) {
            text = tree[labelName]
          }
        });
        return text;
      } else return value;
    },
    loadData() {
      let par = {
        serviceName: "newPlugin",
        servicePath: "code",
        code: this.codeId,
        sync: "1",
        filter: this.filter ? this.filter : "",
        parentCode: "mock",
      };
      this.$request(par).then((res) => {
        if (res.status === "1") {
          this.setDateAndDefault(res.msgDetail);
        }
      });
    },
    /**
     * 初始化数据， dom渲染前执行
     * @function setDateAndDefault
     * @param {Array} selectData - 数据源
     * @description 设置默认旋蒸项
     */
    setDateAndDefault(selectData) {
      // 设置展开节点
      
      this.sourceData = selectData;
    },
    _click() {
      if (this.disabled || this.readonly) {
        this.showReadonlyTip();
        return;
      }
      this.showPicker = true;
    },
    onConfirm(value) {
      if (this.$props.item.disabled || this.$props.item.readonly) {
        this.$toast("此为不可编辑啊项！");
        return;
      }
      this.showPicker = false;
      this.$emit("input", value[this.valueName]);
    },
    onCancel() {
      this.showPicker = false;
    },
  },
};
</script>
