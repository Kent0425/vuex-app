// import "./firebase";
// import VueFire from "vuefire";
// import App from "./App.vue";
// import Login from "./Login.vue";
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import view from "./View.vue";
import axios from "axios";

// Vue.use(VueFire);

Vue.use(axios);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    view,
    render: (h) => h(view),
}).$mount("#login");