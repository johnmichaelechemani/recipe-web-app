import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { MotionPlugin } from "@vueuse/motion";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import router from "./router";
const firebaseConfig = {
  apiKey: "AIzaSyDFqqFcvC3WWQMGp_q00Y6BQ5y7uQpRrUg",
  authDomain: "recipe-2bcd4.firebaseapp.com",
  projectId: "recipe-2bcd4",
  storageBucket: "recipe-2bcd4.appspot.com",
  messagingSenderId: "214051528054",
  appId: "1:214051528054:web:9eb82bd7f5212581d36e57",
  measurementId: "G-4E17212C1W",
};
const init = initializeApp(firebaseConfig);
const messaging = getMessaging(init);
const app = createApp(App);
app.use(MotionPlugin);
app.use(router);

app.mount("#app");
