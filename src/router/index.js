import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import HtmlCss from "../views/HtmlCss.vue";
import Javascript from "../views/Javascript.vue";
import Bootstrap from "../views/Bootstrap.vue";
import Projects from "../views/Projects.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/htmlcss",
    name: "HtmlCss",
    component: HtmlCss,
  },
  {
    path: "/javascript",
    name: "Javascript",
    component: Javascript,
  },
  {
    path: "/bootstrap",
    name: "Bootstrap",
    component: Bootstrap,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
