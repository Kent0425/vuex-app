import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import View from "./View.vue";
// import Login from "./Login.vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(View),
}).$mount("#login");