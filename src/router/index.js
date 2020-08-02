import Vue from "vue";
import vueRouter from "vue-router";
import HomeLayout from "../view/Home";
import About from "../view/Home/About.vue";
import Intro from "../view/Home/Intro.vue";
import Home from "../view/Home/Home.vue";
import Admin from "../view/Admin";
import User from "../view/Admin/User.vue";
import Dashboard from "../view/Admin/Dashboard.vue";
Vue.use(vueRouter);

const routes = [
  {
    path: "/",
    exact: true,
    component: HomeLayout,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "/about",
        component: About,
      },
      {
        path: "/intro",
        component: Intro,
      },
    ],
  },
  {
    path: "/admin",
    redirect: "/admin/dashboard",
  },
  {
    path: "/admin",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/user",
        component: User,
      },
    ],
  },
];

const router = new vueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
