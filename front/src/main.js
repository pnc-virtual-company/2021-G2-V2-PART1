//import Vue
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
//card
import CategoryCard from './components/categories/CategoryCard.vue'

import Navigation from "./components/menu/Navigation.vue";
import MyEventViews from "./components/myEvent/MyEventViews.vue";
import EventViews from "./components/events/EventViews.vue";
import CategoryViews from "./components/categories/CategoryViews.vue";
import SignOut from "./components/signOut/SignOut.vue";


const app = createApp(App);
app.component("navigation", Navigation);
app.component("my-event", MyEventViews);
app.component("event", EventViews);
app.component("categories", CategoryViews);
app.component("sign-Out", SignOut);
//card
app.component("category-card", CategoryCard);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Navigation},
        { path: '/myevent', component: MyEventViews},
        { path: '/events', component: EventViews},
        { path: '/categories', component: CategoryViews },
        { path: '/signout', component: SignOut },
        //path card
        { path: '/card', component: CategoryCard},
    ],
});
app.use(router)
app.mount("#app");