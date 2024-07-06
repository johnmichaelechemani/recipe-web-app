importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDFqqFcvC3WWQMGp_q00Y6BQ5y7uQpRrUg",
  authDomain: "recipe-2bcd4.firebaseapp.com",
  projectId: "recipe-2bcd4",
  storageBucket: "recipe-2bcd4.appspot.com",
  messagingSenderId: "214051528054",
  appId: "1:214051528054:web:9eb82bd7f5212581d36e57",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message:", payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
