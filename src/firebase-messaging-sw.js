import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyDFqqFcvC3WWQMGp_q00Y6BQ5y7uQpRrUg",
  authDomain: "recipe-2bcd4.firebaseapp.com",
  projectId: "recipe-2bcd4",
  storageBucket: "recipe-2bcd4.appspot.com",
  messagingSenderId: "214051528054",
  appId: "1:214051528054:web:9eb82bd7f5212581d36e57",
  measurementId: "G-4E17212C1W",
});

const messaging = getMessaging(firebaseApp);
