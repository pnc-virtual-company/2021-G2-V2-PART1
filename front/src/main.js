import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router';

import SignIn from './components/authentication/SignIn.vue';
import SignUp from './components/authentication/SignUp.vue';
import Navbar from './components/menu/Navigation.vue';

const app = createApp(App);
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/',component: SignIn},
        {path: '/signin',component: SignIn},
        {path: '/signup',component: SignUp},
        {path: '/navbar',component: Navbar},
    ]
})

app.use(router);
app.mount('#app');