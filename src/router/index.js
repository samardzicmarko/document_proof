import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Natjecaj from "../views/Natjecaj";
import Obrazac from "../views/Obrazac";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/natjecaj",
    name: "Natjecaj",
    component: Natjecaj,
  },
  {
    path: "/obrazac",
    name: "Obrazac",
    component: Obrazac,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
