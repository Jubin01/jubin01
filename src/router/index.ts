import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/tictactoe",
    name: "tictactoe",
    // route level code-splitting
    // this generates a separate chunk (tictactoe.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "tictactoe" */ "../views/tictactoe.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/about.vue"),
  },
  {
    path: "/notes",
    name: "notes",
    component: () =>
      import(/* webpackChunkName: "notes" */ "../views/notes/notes.vue"),
  },  
  {
    path: "/blog",
    name: "blog",
    component: () =>
      import(/* webpackChunkName: "blog" */ "../views/blog/blog.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
