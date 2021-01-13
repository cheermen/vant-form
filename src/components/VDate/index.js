
import VDate from "./VDate.vue";

// 为组件添加 install 方法，用于按需引入
VDate.install = function(Vue) {
  Vue.component(VDate.name, VDate);
};

export default VDate;