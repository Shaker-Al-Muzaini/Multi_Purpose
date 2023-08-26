import './bootstrap';

import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import 'admin-lte/dist/js/adminlte.min.js';
import { createPinia } from 'pinia';
import { createApp } from 'vue/dist/vue.esm-bundler.js';
import { createRouter, createWebHistory } from 'vue-router';
import Login from './pages/auth/Login.vue'
import Routes from './routes.js';


const app = createApp();
const pinia = createPinia();
const router = createRouter({
    routes: Routes,
    history: createWebHistory(),
});
app.use(pinia);
app.use(router);
app.component('Login',Login);

app.mount('#app');
