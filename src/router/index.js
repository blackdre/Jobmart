import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import Job from "../views/Job.vue";
import Joblist from "../views/Joblist.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact-us",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/job",
    name: "Job",
    component: Job,
  },
  {
    path: "/jobs",
    name: "Joblist",
    component: Joblist,
  },
  {
    path: "/log-in",
    name: "Login",
    component: Login,
  },
  {
    path: "/sign-up",
    name: "Register",
    component: Register,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
