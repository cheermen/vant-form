import VSelectPerson from "./VSelectPerson.vue";

// 为组件添加 install 方法，用于按需引入
VSelectPerson.install = function(Vue) {
  Vue.component(VSelectPerson.name, VSelectPerson);
};

export default VSelectPerson;