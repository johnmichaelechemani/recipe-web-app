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
          <span class="text-xs px-2 bg-blue-500/20 text-blue-500 rounded-full"
            >test</span
          >
        </div>
      </div>
    </div>

    <dialog id="openInbox" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box relative pb-4 pt-2 px-2">
        <div class="modal-action absolute z-10 -top-4 right-2">
          <form method="dialog">
            <button class="btn btn-xs rounded-full">
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
        <div class="h-80 rounded-md overflow-y-scroll">
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
              required
              v-model="newMessage"
              placeholder="Enter a message.."
              class="input input-bordered w-full placeholder:text-sm rounded-full"
            />
            <button
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
import { ref, onUnmounted, computed } from "vue";
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

const yourChat = (user) => {
  const modal = document.getElementById("openInbox");
  modal.showModal();
  selectedUser.value = user;
  console.log(selectedUser.value.userId);
  loadMessages();
};

const sendMessage = async () => {
  if (newMessage.value.trim() === "") return;

  await addDoc(collection(firestore, `messages`), {
    senderId: userId,
    recipientId: selectedUser.value.userId,
    message: newMessage.value,
    timestamp: serverTimestamp(),
  });

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
  const date = timestamp.toDate();
  return `${date.getHours()}:${date.getMinutes()}`;
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
  });
  onUnmounted(() => {
    if (unsub) {
      unsub();
    }
  });
};
</script>
