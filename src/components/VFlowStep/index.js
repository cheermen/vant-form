import VFlowStep from "./VFlowStep.vue";

// 为组件添加 install 方法，用于按需引入
VFlowStep.install = function(Vue) {
  Vue.component(VFlowStep.name, VFlowStep);
};

export default VFlowStep;