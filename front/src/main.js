import { createApp } from "vue";

import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Navigation from "./components/menu/Navigation.vue";
import MyEvent from "./components/myEvent/MyEvent.vue";
import Event from "./components/event/Event.vue";
import Categories from "./components/categories/Categories.vue";
import SignOut from "./components/signOut/SignOut.vue";


const app = createApp(App);
app.component("navigation", Navigation);
app.component("my-event", MyEvent);
app.component("event", Event);
app.component("categories", Categories);
app.component("sign-Out", SignOut);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Navigation},
        { path: '/myevent', component: MyEvent},
        { path: '/event', component: Event},
        { path: '/categories', component: Categories },
        { path: '/signout', component: SignOut },
    ],
});
app.use(router)
app.mount("#app");