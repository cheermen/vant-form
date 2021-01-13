import VForm from "./VForm.vue";
// 为组件添加 install 方法，用于按需引入
VForm.install = function(Vue) {
  Vue.component(VForm.name, VForm);
};

export default VForm;