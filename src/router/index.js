import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: { title: "E-Wallet" },
  },
  {
    path: "/AddCard",
    name: "AddCard",
    component: () => import("@/views/AddCard.vue"),
    meta: { title: "ADD A NEW BANK CARD" },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
