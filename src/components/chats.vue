<template>
  <router-link to="yourChats">
    <button class="btn rounded-full shadow" onclick="chatModal.showModal()">
      <Icon icon="ant-design:message-filled" class="text-xl" />
    </button>
  </router-link>

  <dialog id="chatModal" class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-xl">Chats</h3>
      <hr class="border border-gray-400/10 my-1" />
      <div class="flex justify-start items-center gap-2 mt-2 mb-4">
        <router-link to="yourChats">
          <button
            class="rounded-full"
            :class="
              $route.path === '/yourChats'
                ? 'btn btn-sm text-blue-500 shadow'
                : 'hover:bg-blue-500/10 hover:text-blue-500 transition px-4 py-1.5 font-semibold text-sm'
            "
          >
            Inbox
          </button>
        </router-link>
        <router-link to="chefs">
          <button
            class="rounded-full"
            :class="
              $route.path === '/chefs'
                ? 'btn btn-sm text-blue-500 shadow'
                : 'hover:bg-blue-500/10 hover:text-blue-500 transition px-4 py-1.5 font-semibold text-sm'
            "
          >
            Chefs
          </button>
        </router-link>
      </div>
      <div>
        <router-view />
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
const messaging = getMessaging();
getToken(messaging, {
  vapidKey:
    "BL86oYkhYfHm_nhwT89ZXqmTc_zaFp2Kd6PV5G48wUX0NIhd6gZjqqXORxWtf1EsK6d3buMJ-KN6IphPtJdMfus",
})
  .then((currentToken) => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      console.log("Token received:", currentToken);
      // ...
    } else {
      // Show permission request UI
      console.log(
        "No registration token available. Request permission to generate one."
      );
      // ...
    }
  })
  .catch((err) => {
    console.log("An error occurred while retrieving token. ", err);
    // ...
  });

onMessage(messaging, (payload) => {
  console.log("Message received:", payload);
  new Notification(payload.notification.title, {
    body: payload.notification.body,
  });
});

// function requestPermission() {
//   console.log("Requesting permission...");
//   Notification.requestPermission().then((permission) => {
//     if (permission === "granted") {
//       console.log("Notification permission granted.");
//     }
//   });
// }
// requestPermission();
</script>
