import App from "./App.vue";
import { createApp } from "vue";
import router from "./router";
import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js"
import "./assets/css/main.css";

createApp(App).use(router).mount("#app");





