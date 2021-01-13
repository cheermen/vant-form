import VSelect from "./VSelect.vue";

// 为组件添加 install 方法，用于按需引入
VSelect.install = function(Vue) {
  Vue.component(VSelect.name, VSelect);
};

export default VSelect;