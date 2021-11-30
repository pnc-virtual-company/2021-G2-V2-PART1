import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router';

import SignIn from './components/authentication/SignIn.vue';
import SignUp from './components/authentication/SignUp.vue';
import Navbar from './components/menu/Navigation.vue';
import Category from './components/pages/categories/CategoryViews.vue';
import Events from './components/pages/Event/Event.vue';
import MyEvents from './components/pages/myEvent/MyEvent.vue';

const app = createApp(App);
app.component("navbar", Navbar);
app.component("sign-in", SignIn);
app.component("sign-up", SignUp);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/',component: SignIn},
        {path: '/signin',component: SignIn},
        {path: '/signup',component: SignUp},
        {path: '/category',component: Category},
        {path: '/events',component: Events},
        {path: '/myevents',component: MyEvents},
        {path: '/navbar',component: Navbar},
    ]
})

app.use(router);
app.mount('#app');