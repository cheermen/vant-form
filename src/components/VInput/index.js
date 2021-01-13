/*
 * @Author: your name
 * @Date: 2021-01-07 17:20:24
 * @LastEditTime: 2021-01-08 13:13:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-mobile\src\index\baseComp\VInput\VInput.js
 */

import VInput from "./VInput.vue";

// 为组件添加 install 方法，用于按需引入
VInput.install = function(Vue) {
  Vue.component(VInput.name, VInput);
};

export default VInput;