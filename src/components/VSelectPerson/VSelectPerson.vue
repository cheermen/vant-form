<template>
  <div class="v-flow-step">
    <van-steps direction="vertical" :active="0">
      <van-step>
        <h3>【城市】物流状态1</h3>
        <p>2016-07-12 12:40</p>
      </van-step>
      <van-step>
        <h3>【城市】物流状态2</h3>
        <p>2016-07-11 10:00</p>
      </van-step>
      <van-step>
        <h3>快件已发货</h3>
        <p>2016-07-10 09:30</p>
      </van-step>
    </van-steps>
  </div>
</template>

<script>
import VBase from "../mixin/VBase";
export default {
  name: "VFlowStep",
  props: {
    item: {
      type: Object,
    }
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
