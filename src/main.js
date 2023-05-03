import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import { createRouter, createWebHistory } from "vue-router";
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import RegisterJur from './components/RegisterJur.vue'
import Dashboard from './components/Dashboard.vue'
import Categories from './components/Categories.vue'
import Category from  './components/Category.vue'
import VueAxios from 'vue-axios';
import axios from 'axios';

const routesPublic = ['login', 'register', 'registerType2']
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'login', component: Login },
        {path: '/register', name: 'register', component: Register},
        {path: '/dashboard', name: 'dashboard', component: Dashboard },
        {path: '/categories', name: 'categories', component: Categories},
        {path: '/category', name: 'category', component: Category}
    ]
})

router.beforeEach((to, from, next) => {
    const authenticate = localStorage.getItem('token')
    if (!authenticate && !routesPublic.includes(to.name)) next({name: 'login'})
    else next()
})

createApp(App).use(router).use(VueSweetalert2).use(VueAxios, axios).mount('#app')
export default router
