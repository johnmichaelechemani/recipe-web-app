import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { MotionPlugin } from "@vueuse/motion";

import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import router from "./router";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const init = initializeApp(firebaseConfig);
const messaging = getMessaging(init);
const app = createApp(App);
app.use(MotionPlugin);
app.use(router);

app.mount("#app");
