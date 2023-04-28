import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router";
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import RegisterJur from './components/RegisterJur.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/login', name: 'login', component: Login },
        {path: '/register', name: 'register', component: Register},
        {path: '/registerType2', name: 'registerType2', component: RegisterJur}
    ]
})

createApp(App).use(router).mount('#app')
