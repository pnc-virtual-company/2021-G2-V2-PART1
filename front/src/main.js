import { createApp } from "vue";

import App from "./App.vue";
import SignIn from "./components/authentication/SignIn.vue";
import SignOut from "./components/authentication/SignOut.vue";
import SignUp from "./components/authentication/SignUp.vue";

const app = createApp(App);
app.component("sign-in", SignIn);
app.component("sign-out", SignOut);
app.component("sign-up", SignUp);

app.mount("#app");