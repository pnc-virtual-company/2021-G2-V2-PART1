import {createRouter, createWebHistory} from 'vue-router';
import Categories from '../components/pages/categories/CategoryView.vue';
import Events from '../components/pages/Event/Event.vue';
import MyEvent from '../components/pages/myEvent/MyEvent.vue';
import SignIn from '../components/authentication/SignIn.vue';
import SignUp from '../components/authentication/SignUp.vue';

const routes = [
    {
        path: '/myEvents',
        name: 'MyEvent',
        component: MyEvent
    },
    {
        path: '/category',
        name: 'Category',
        component: Categories
    },
    {
        path: '/events',
        name: 'Event',
        component: Events
    },
    {
        path: '/signIn',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/signUp',
        name: 'SignUp',
        component: SignUp
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});
  
export default router