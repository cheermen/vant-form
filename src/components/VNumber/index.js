import VNumber from "./VNumber.vue";

// 为组件添加 install 方法，用于按需引入
VNumber.install = function(Vue) {
  Vue.component(VNumber.name, VNumber);
};

export default VNumber;