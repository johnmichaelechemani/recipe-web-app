<template>
  <div>
    <div v-for="user in storedUsers" :key="user.id">
      <div
        @click="yourChat(user)"
        class="flex justify-start items-center gap-2 cursor-pointer hover:bg-gray-500/20 transition p-1 rounded-md"
      >
        <div
          class="avatar"
          :class="user.status === 'online' ? 'online' : 'offline'"
        >
          <div class="w-10 rounded-full">
            <img :src="user.userPhotoURL" />
          </div>
        </div>
        <div class="">
          <h1 class="text-sm font-medium">{{ user.userName }}</h1>
          <span class="text-xs px-2 bg-blue-500/20 text-blue-500 rounded-full">
            test
          </span>
        </div>
      </div>
    </div>

    <dialog id="openInbox" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box relative pb-4 pt-2 px-2">
        <div class="modal-action absolute z-10 -top-4 right-2">
          <form method="dialog">
            <button class="btn btn-xs px-0.5 rounded-full">
              <Icon icon="carbon:close" class="text-xl text-red-500" />
            </button>
          </form>
        </div>
        <div class="flex justify-start items-center gap-2">
          <div class="avatar">
            <div class="w-10 rounded-full">
              <img :src="selectedUser.userPhotoURL" />
            </div>
          </div>
          <div>
            <h1 class="text-sm font-medium">{{ selectedUser.userName }}</h1>
          </div>
        </div>
        <hr class="my-1 border border-gray-400/20" />
        <div class="h-80 rounded-md overflow-y-scroll" ref="messageContainer">
          <div
            v-if="filteredMessages.length === 0 && !isLoading"
            class="my-2 flex justify-center items-center text-sm"
          >
            <span class="py-1 px-4 bg-primary/10 rounded-full"
              >No conversation with chef
              <span class="text-primary font-semibold">{{
                selectedUser.userName
              }}</span></span
            >
          </div>
          <div v-for="m in filteredMessages" :key="m.id">
            <div
              class="chat"
              :class="m.senderId === userId ? 'chat-end' : 'chat-start'"
            >
              <div class="chat-image avatar">
                <div class="w-10 rounded-full">
                  <img v-if="userId === m.senderId" :src="photoURL" />
                  <img v-else :src="selectedUser.userPhotoURL" />
                </div>
              </div>

              <div class="chat-header text-xs font-medium">
                {{ m.senderId === userId ? userName : selectedUser.userName }}
                <time class="text-[10px] opacity-50">{{
                  formatTime(m.timestamp)
                }}</time>
              </div>

              <div
                class="chat-bubble text-sm"
                :class="userId === m.senderId ? 'chat-bubble-primary' : ''"
              >
                {{ m.message }}
              </div>
            </div>
          </div>
          <div v-if="isLoading">
            <MessageLoading />
          </div>
        </div>

        <form action="" @submit.prevent="sendMessage">
          <div class="my-1 flex justify-start items-center gap-2">
            <input
              type="text"
              :disabled="isSendMessageLoading"
              required
              v-model="newMessage"
              placeholder="Enter a message.."
              class="input input-bordered w-full placeholder:text-sm rounded-full"
            />
            <span
              v-if="isSendMessageLoading"
              class="loading loading-ring loading-lg"
            ></span>
            <button
              v-if="!isSendMessageLoading"
              class="rounded-full btn transition"
              :class="newMessage === '' ? 'hidden' : ''"
            >
              <Icon icon="bxs:send" class="text-xl text-blue-500" />
            </button>
          </div>
        </form>
      </div>
    </dialog>
  </div>
</template>

<script setup>
import { ref, onUnmounted, computed, nextTick } from "vue";
import { Icon } from "@iconify/vue";
import { getUsers } from "../scripts/getUsers.js";
import { getAuth } from "firebase/auth";
import { useAuth } from "../firebase";
import MessageLoading from "../components/messageLoading.vue";
import {
  collection,
  addDoc,
  where,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";

import { getMessaging, getToken, onMessage } from "firebase/messaging";
const messaging = getMessaging();

const auth = getAuth();
const user = ref(auth.currentUser);
const { firestore } = useAuth();
const { uid, photoURL, displayName } = user.value;
const userId = uid;
const userPhoto = photoURL;
const userName = displayName;
//console.log(user.value);

const { storedUsers } = getUsers();

let selectedUser = ref([]);
const newMessage = ref("");
const messages = ref([]);
const isLoading = ref(false);
const isSendMessageLoading = ref(false);
const messageContainer = ref(null);

const yourChat = (user) => {
  const modal = document.getElementById("openInbox");
  modal.showModal();
  selectedUser.value = user;
  console.log(selectedUser.value.userId);
  loadMessages();
};

const sendMessage = async () => {
  if (newMessage.value.trim() === "") return;
  isSendMessageLoading.value = true;
  console.log("sending");
  try {
    await addDoc(collection(firestore, `messages`), {
      senderId: userId,
      recipientId: selectedUser.value.userId,
      message: newMessage.value,
      timestamp: serverTimestamp(),
    });
    console.log("send!");
    //console.log("message:", messages.value);
    isSendMessageLoading.value = false;
  } catch {}
  newMessage.value = "";
};

const filteredMessages = computed(() =>
  messages.value.filter(
    (m) =>
      (m.senderId === userId && m.recipientId === selectedUser.value.userId) ||
      (m.senderId === selectedUser.value.userId && m.recipientId === userId)
  )
);

const formatTime = (timestamp) => {
  if (timestamp) {
    const date = firestoreTimestampToJsDate(timestamp);
    const hours = date.getHours() % 12 || 12;
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const period = date.getHours() < 12 ? "am" : "pm";
    return `${hours}:${minutes} ${period}`;
  }
};
const firestoreTimestampToJsDate = (timestamp) => {
  const milliseconds = timestamp.nanoseconds / 1e6;
  const seconds = timestamp.seconds;
  if (milliseconds) {
    return new Date(seconds * 1000 + milliseconds);
  }
  return jsDate;
};
const scrollToBottom = () => {
  nextTick(() => {
    if (messageContainer.value) {
      messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
    }
  });
};

const loadMessages = () => {
  isLoading.value = true;
  const q = query(
    collection(firestore, "messages"),
    where("senderId", "in", [userId, selectedUser.value.userId]),
    where("recipientId", "in", [userId, selectedUser.value.userId]),
    orderBy("timestamp", "asc")
  );
  const unsub = onSnapshot(q, (snapshot) => {
    messages.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    isLoading.value = false;
    scrollToBottom();
  });
  onUnmounted(() => {
    if (unsub) {
      unsub();
    }
  });
};

// getToken(messaging, {
//   vapidKey:
//     "BL86oYkhYfHm_nhwT89ZXqmTc_zaFp2Kd6PV5G48wUX0NIhd6gZjqqXORxWtf1EsK6d3buMJ-KN6IphPtJdMfus",
// })
//   .then((currentToken) => {
//     if (currentToken) {
//       // Send the token to your server and update the UI if necessary
//       console.log("Token received:", currentToken);
//       // ...
//     } else {
//       // Show permission request UI
//       console.log(
//         "No registration token available. Request permission to generate one."
//       );
//       // ...
//     }
//   })
//   .catch((err) => {
//     console.log("An error occurred while retrieving token. ", err);
//     // ...
//   });

// onMessage(messaging, (payload) => {
//   console.log("Message received:", payload);
//   new Notification(payload.notification.title, {
//     body: payload.notification.body,
//     icon: notification.icon,
//   });
// });

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
