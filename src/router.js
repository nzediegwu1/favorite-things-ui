import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import FavouriteList from "./views/Favourites.vue";
import AuditLog from "./views/AuditLog.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/categories/:id",
      name: "favourites",
      component: FavouriteList
    },
    {
      path: "/:resource/:id/logs",
      name: "audit-log",
      component: AuditLog
    }
  ]
});
