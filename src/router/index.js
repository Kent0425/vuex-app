import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import Login from "..//Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Register from "../views/Register.vue";
import Add from "../views/Add.vue";
import Delete from "../views/Delete.vue";
import Update from "../views/Update.vue";
import Crud from "../views/Crud.vue";
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
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
    },
    {
        path: "/crud",
        name: "crud",
        component: Crud,
    },
    {
        path: "/add",
        name: "add",
        component: Add,
    },
    {
        path: "/delete",
        name: "delete",
        component: Delete,
    },
    {
        path: "/update",
        name: "update",
        component: Update,
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