import { createApp } from "vue";
import App from "./App.vue";

import { createRedux } from "./store/plugin";
import { store } from "./store";

import "../node_modules/flowbite-vue/dist/index.css";

createApp(App).use(createRedux(store)).mount("#app");
