import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "VFieldView",
      component: () => import("@/views/VFieldView.vue")
    }
  ]
});
