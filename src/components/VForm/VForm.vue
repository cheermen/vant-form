<template>
  <van-form ref="van-form" @submit="onSubmit" validate-first @failed="onFailed">
    <!-- formitem -->
    <template v-for="item in formItems">
      <v-input
        :ref="item.key"
        :key="item.key"
        v-model="item[item.key]"
        v-if="item.isShow && item.type == 'input'"
        :item="item"
        @validator="validator"
      />
      <v-number
        :ref="item.key"
        :key="item.key"
        v-model="item[item.key]"
        v-if="item.isShow && (item.type == 'number' || item.type == 'phone' || item.type == 'peopleCard')"
        :item="item"
        @validator="validator"
      />
      <v-time
        :ref="item.key"
        :key="item.key"
        v-model="item[item.key]"
        v-else-if="item.isShow && item.type == 'timepicker'"
        :item="item"
        @validator="validator"
      />
      <v-date
        :ref="item.key"
        :key="item.key"
        v-model="item[item.key]"
        v-else-if="item.isShow && (item.type == 'datepicker' || item.type == 'date')"
        :item="item"
        @validator="validator"
      />
      <v-select
        :ref="item.key"
        :key="item.key"
        :formItemKey="item.key"
        v-model="item[item.key]"
        v-else-if="item.isShow && item.type == 'select'"
        :item="item"
        :codeData="item.codeData.data ? item.codeData.data : null"
        :codeId="item.codeData.code ? item.codeData.code : null"
        :filter="item.codeData.filter ? item.codeData.filter : null"
        :valueName="item.codeData.valueName"
        :labelName="item.codeData.labelName"
        @validator="validator"
      />
    </template>
    <div style="margin: 16px;">
      <van-button round block type="info" native-type="submit">提交</van-button>
    </div>
  </van-form>
</template>

<script>
export default {
  name: "VForm",
  props: {
    templateId: {
      type: String
    },
    ruleForm: {
      default: null
    },
    filter: {
      type: String
    },
    formItemData: {
      type: Array
    },
    formSplice: {
      type: [Number, String],
      default: "all"
    },
    readOnly: {
      default: "0"
    }
  },
  data() {
    return {
      formItems: []
    };
  },
  computed: {
    capterFormItem() {
      if (this.formItemData && this.formItemData !== []) {
        return this._.cloneDeep(this.formItemData);
      } else return [];
    }
  },
  watch: {
    capterFormItem: {
      deep: true,
      immediate: true,
      handler(val) {
        if (val) {
          if (this.ruleForm) {
            this.formItems = this.$EgParseFormUtils.setFormItemDataWithRuleForm(this.ruleForm, this.formItemData);
          } else {
            this.formItems = this.capterFormItem;
          }
          if (this.formSplice !== "all") {
            this.formItems = this.formItems.slice(0, this.formSplice);
          }
          this.originalData = this._.cloneDeep(this.formItemData);
        }
      }
    },
    templateId: {
      immediate: true,
      handler(id) {
        if (id) {
          this.getFormDateWithTemplateid();
        }
      }
    }
  },
  methods: {
    onFailed(errorInfo) {
      this.$toast.fail(errorInfo);
    },
    onSubmit(values) {
      // 成功后
      this.$emit("update: ruleForm", values);
      this.$emit("submit", values);
    },
    getFormData() {
      if (this.fromItems) return this.$EgParseFormUtils.getFormDataWithFormItem(this.fromItems);
      else return {};
    },
    resetValidMessage(name) {
      this.$refs["van-form"].resetValidation(name);
    },
    validator(formVal, items) {
      let _this = this;
      this.$emit("validator", formVal, items, msg => {
        _this.$refs[items.key].validatorMsg = msg;
        _this.resetValidMessage(items);
      });
    },
    getFormDateWithTemplateid() {
      this.$request({
        serviceName: "plugin",
        servicePath: "metaDataJson",
        templateId: this.templateId,
        filter: this.filter,
        read: this.readOnly
      }).then(result => {
        if (result.status == "1") {
          if (result.msgDetail.formData.tbody.length > 0) {
            this.formItems = this.$EgParseFormUtils.setFormItemDataWithRuleForm(
              result.msgDetail.formData.tbody[0],
              result.msgDetail.formItem
            );
          } else {
            this.formItems = result.msgDetail.formItem;
          }
          if (this.formSplice !== "all") {
            this.formItems = this.formItems.slice(0, this.formSplice);
          }
          this.originalData = JSON.parse(JSON.stringify(this.formItems));
        }
      });
    }
  }
};
</script>
