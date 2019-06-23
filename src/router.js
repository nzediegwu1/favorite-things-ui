import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import FavouriteList from "./views/FavouriteList.vue";

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
      path: "/favourite-list",
      name: "favourite-list",
      component: FavouriteList
      // use the followign for route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // () => import(/* webpackChunkName: "about" */ "./views/FavouriteList.vue")
    }
  ]
});
