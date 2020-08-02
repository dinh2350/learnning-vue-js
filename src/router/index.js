import Vue from "vue";
import vueRouter from "vue-router";

Vue.use(vueRouter);

const routes = [];

const router = new vueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
