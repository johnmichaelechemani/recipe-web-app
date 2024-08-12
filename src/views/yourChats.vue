<template>
  <div>
    <div>
      <ChatHeads :filteredUsers="filteredUsers" />
    </div>
    <div v-if="filteredUsers.length !== 0">
      <div v-for="user in filteredUsers" :key="user.id">
        <UsersChatHeads
          :user="user"
          :yourChat="yourChat"
          :formatTime="Time"
          :latestMessages="latestMessages"
          :getChatId="getChatId"
          :userId="userId"
          :isSender="isSender"
          :timestamp="timestamp"
        />
      </div>
    </div>
    <div>
      <div v-if="isLoading">
        <div class="flex flex-col gap-4 w-32 ml-2">
          <div class="flex gap-2 items-center">
            <div class="skeleton w-10 h-10 rounded-full shrink-0"></div>
            <div class="flex flex-col gap-2">
              <div class="skeleton h-2 w-10"></div>
              <div class="skeleton h-2 w-20"></div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="filteredUsers.length === 0 && !isLoading">No conversation</div>
    </div>

    <dialog id="openInbox" class="modal modal-bottom sm:modal-middle">
      <ChatModal
        :userId="userId"
        :messages="messages"
        :selectedUser="selectedUser"
        :userPhoto="userPhoto"
        :userName="userName"
        :isSendMessageLoading="isSendMessageLoading"
        :isLoading="isLoading"
        :formatTime="Time"
        :sendMessage="sendMessage"
        :filteredMessages="filteredMessages"
        v-model="newMessage"
      />
    </dialog>
  </div>
</template>

<script setup>
import {
  ref,
  onUnmounted,
  computed,
  nextTick,
  onMounted,
  watch,
  defineComponent,
} from "vue";
import { getUsers } from "../scripts/getUsers.js";
import { getAuth } from "firebase/auth";
import { useAuth } from "../firebase";
import { useRouter } from "vue-router";
import UsersChatHeads from "../components/usersChatHeads.vue";
import ChatModal from "../components/ChatModal.vue";
import {
  collection,
  addDoc,
  where,
  query,
  orderBy,
  onSnapshot,
  getDoc,
  setDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { ChatFuntions } from "../scripts/ChatFunctions.js";
import ChatHeads from "../components/ChatHeads.vue";

const component = defineComponent({
  UsersChatHeads,
  ChatModal,
  ChatHeads,
});

const { Time, getChatId } = ChatFuntions();
const auth = getAuth();
const user = ref(auth.currentUser);
const { firestore } = useAuth();
const userId = user.value.uid;
const userPhoto = user.value.photoURL;
const userName = user.value.displayName;
const route = useRouter();
const { storedUsers } = getUsers();
const newMessage = ref("");
const messages = ref([]);
const isLoading = ref(false);
const isSendMessageLoading = ref(false);
const messageContainer = ref(null);
let selectedUser = ref({});

const yourChat = (user) => {
  const modal = document.getElementById("openInbox");
  modal.showModal();
  selectedUser.value = user;
  loadMessages();
  console.log(messages);
};

const sendMessage = async () => {
  if (newMessage.value.trim() === "") return;
  isSendMessageLoading.value = true;
  try {
    const chatId = getChatId(userId, selectedUser.value.userId);

    // create room
    await setDoc(
      doc(firestore, `chats/${chatId}`),
      {
        participants: {
          [userId]: true,
          [selectedUser.value.userId]: true,
        },
        lastMessage: newMessage.value,
        sender: userId,
        timestamp: serverTimestamp(),
      },
      { merge: true }
    );

    // then add the message

    await addDoc(collection(firestore, `chats/${chatId}/messages`), {
      senderId: userId,
      recipientId: selectedUser.value.userId,
      message: newMessage.value,
      timestamp: serverTimestamp(),
    });

    // set loading to false

    isSendMessageLoading.value = false;
  } catch (error) {
    console.error("Error sending message: ", error);
  }
  newMessage.value = "";
};

const latestMessages = ref({});
const isSender = ref({});
const unsubscribers = ref([]);
const timestamp = ref({});
const newMessageArray = ref(0);

const filteredUsers = computed(() => {
  return storedUsers.value.filter(
    (user) => latestMessages.value[getChatId(userId, user.id)]
  );
});

const setupChatListeners = () => {
  // Clear any existing listeners
  unsubscribers.value.forEach((unsub) => unsub());
  unsubscribers.value = [];

  storedUsers.value.forEach((user) => {
    const chatId = getChatId(userId, user.id);
    const chatDocRef = doc(firestore, "chats", chatId);

    const unsubscribe = onSnapshot(
      chatDocRef,
      (doc) => {
        if (doc.exists()) {
          latestMessages.value[chatId] = doc.data().lastMessage || "";
          isSender.value[chatId] = doc.data().sender || "";
          timestamp.value[chatId] = doc.data().timestamp || "";

          if (
            latestMessages.value[chatId] &&
            isSender.value[chatId] !== userId
          ) {
            newMessageArray.value++;
          }
        } else {
          latestMessages.value[chatId] = "";
          isSender.value[chatId] = "";
          timestamp.value[chatId] = "";
        }
      },
      (error) => {
        console.error("Error listening to chat updates:", error);
      }
    );

    unsubscribers.value.push(unsubscribe);
  });
};

onMounted(() => {
  setupChatListeners();
});
onUnmounted(() => {
  unsubscribers.value.forEach((unsub) => unsub());
});

watch(newMessageArray, (newVal) => {
  console.log(newMessageArray.value);
});

const filteredMessages = computed(() =>
  messages.value.filter(
    (m) =>
      (m.senderId === userId && m.recipientId === selectedUser.value.userId) ||
      (m.senderId === selectedUser.value.userId && m.recipientId === userId)
  )
);
//console.log(messages);

const scrollToBottom = () => {
  nextTick(() => {
    if (messageContainer.value) {
      messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
    }
  });
};

const loadMessages = () => {
  isLoading.value = true;
  const chatId = getChatId(userId, selectedUser.value.userId);

  // Query for messages
  const messagesQuery = query(
    collection(firestore, `chats/${chatId}/messages`),
    orderBy("timestamp", "asc")
  );

  const messageUnsub = onSnapshot(messagesQuery, (snapshot) => {
    messages.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    isLoading.value = false;
    scrollToBottom();
  });

  onUnmounted(() => {
    messageUnsub();
  });
};
onMounted(() => {
  loadMessages();
});
</script>
