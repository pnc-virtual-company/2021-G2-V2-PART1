import { createApp } from "vue";

import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import SignIn from "./components/authentication/SignIn.vue";
import SignUp from "./components/authentication/SignUp.vue";

const app = createApp(App);
app.component("sign-in", SignIn);
app.component("sign-up", SignUp);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: SignIn},
        { path: '/sigin', component: SignIn},
        { path: '/signup', component: SignUp },
    ],
});
app.use(router)
app.mount("#app");