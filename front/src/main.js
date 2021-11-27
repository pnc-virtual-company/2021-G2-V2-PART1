import { createApp } from "vue";

import App from "./App.vue";
// import { createRouter, createWebHistory} from "vue-router";
// import SignIn from "./components/authentication/SignIn.vue";
// import SignOut from "./components/authentication/SignOut.vue";
// import SignUp from "./components/authentication/SignUp.vue";
// import Navigation from "./components/menu/Navigation.vue";

const app = createApp(App);
// app.component("sign-in", SignIn);
// app.component("sign-out", SignOut);
// app.component("sign-up", SignUp);
// app.component("nav-bar", Navigation);

// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         { path: '/', component: Navigation},
//         // { path: '/signin', component: SignIn},
//         // { path: '/signup', component: SignUp },
//     ],
// });
// app.use(router)
app.mount("#app");