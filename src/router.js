import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import FavouriteList from "./views/Favourites.vue";
import Attributes from "./views/Attributes.vue";
import ViewLogs from "./views/ViewLogs.vue";

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
      path: "/favourites",
      name: "favourites",
      component: FavouriteList
    },
    {
      path: "/attributes",
      name: "attributes",
      component: Attributes
    },
    {
      path: "/favouriteId/logs",
      name: "audit-log",
      component: ViewLogs
    }
  ]
});
