import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "..//Login.vue";
import App from "../views/App.vue";
import Register from "../views/Register.vue";
// import View from "../View.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "default",
        component: Login,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/app",
        name: "app",
        component: App,
        children: [{
                path: "/home",
                name: "Home",
                component: Home,
            },
            {
                path: "/about",
                name: "About",
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "about" */ "../views/About.vue"),
            },
        ],
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

export default router;