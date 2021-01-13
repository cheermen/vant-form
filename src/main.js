import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import "babel-polyfill";
import Es6Promise from "es6-promise";
Es6Promise.polyfill();

import Vant from "vant";
import "vant/lib/index.css";
import "@/plugins/lodash.js";
import "@/plugins/api.js";
import install from "./index.js";

Vue.use(install);
Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
