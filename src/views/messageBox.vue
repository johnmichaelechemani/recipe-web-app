<template>
  <div class="ml-72 fixed inset-0 border-l border-gray-500/20">
    <div class="pt-12 pb-52">
      <div class="backdrop-blur-2xl fixed w-full z-50 border-b border-red-500">
        <div class="flex justify-start gap-2 p-2 items-center">
          <div class="size-10 rounded-full">
            <img
              :src="selectedUser.userPhotoURL"
              class="rounded-full"
              loading="lazy"
            />
          </div>
          <h1 class="text-lg font-semibold">{{ selectedUser.userName }}</h1>
        </div>
      </div>
      <div class="overflow-y-auto ml-72 pt-28 fixed z-30 inset-0">
        <div class=" ">
          <!-- Render messages here -->
          <div v-if="isLoading">Loading messages...</div>
          <div v-for="m in messages" :key="m.id">
            <div
              class="chat"
              :class="m.senderId === userId ? 'chat-end' : 'chat-start'"
            >
              <div class="chat-image avatar">
                <div class="size-5 rounded-full" v-if="userId !== m.senderId">
                  <img :src="selectedUser.userPhotoURL" />
                </div>
              </div>

              <div class="chat-header text-xs font-medium">
                {{ m.senderId === userId ? "You" : selectedUser.userName }}
                <!-- <time class="text-[10px] opacity-50">
                  {{ formatTime(m.timestamp) }}</time
                > -->
              </div>

              <!-- massage with no image, file layout -->
              <div
                v-if="m.message && m.imageUrl === null && m.fileUrl === null"
                class="rounded-2xl whitespace-pre-line py-2 px-4 text-sm max-w-52"
                :class="
                  userId === m.senderId ? 'chat-bubble-primary' : 'chat-bubble'
                "
              >
                {{ m.message }}
              </div>

              <!-- image with message layout -->
              <div v-if="m.message && m.imageUrl" class="w-52">
                <div
                  class="rounded-t-2xl whitespace-pre-line py-2 px-4 text-sm"
                  :class="
                    userId === m.senderId
                      ? 'chat-bubble-primary'
                      : 'border border-gray-500/20'
                  "
                >
                  {{ m.message }}
                </div>
                <div class="">
                  <div
                    v-if="isImageLoading"
                    class="w-52 h-32 bg-gray-500/20 border border-gray-500/20 rounded-2xl"
                  ></div>

                  <img
                    v-if="m.imageUrl"
                    :src="m.imageUrl"
                    loading="lazy"
                    alt=""
                    class="h-auto w-52 object-cover border bg-gray-500/20 border-gray-500/20 rounded-b-2xl"
                    @load="onLoad"
                    @error="onError"
                  />
                </div>
              </div>
              <!-- image with no message layout -->
              <div v-if="m.imageUrl && m.message === ''" class="">
                <div
                  v-if="isImageLoading"
                  class="w-52 h-32 bg-gray-500/20 border border-gray-500/20 rounded-2xl"
                ></div>

                <img
                  :src="m.imageUrl"
                  loading="lazy"
                  alt=""
                  @load="onLoad"
                  @error="onError"
                  class="h-auto w-52 object-cover bg-gray-500/20 border border-gray-500/20 rounded-2xl"
                />
              </div>

              <!-- file with no message layout -->
              <div
                v-if="m.fileUrl && m.message === ''"
                class="text-sm rounded-2xl backdrop-blur-2xl max-w-52 bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"
              >
                <a
                  :href="m.fileUrl"
                  download
                  class="flex justify-start items-center gap-2"
                >
                  <Icon
                    icon="simple-icons:googledocs"
                    width="16"
                    height="16"
                  />{{ m.fileName }}</a
                >
              </div>

              <!-- file with message layout -->
              <div v-if="m.message && m.fileUrl" class="max-w-52">
                <div
                  class="rounded-t-2xl whitespace-pre-line py-2 px-4 text-sm"
                  :class="
                    userId === m.senderId
                      ? 'chat-bubble-primary'
                      : 'border border-gray-500/20'
                  "
                >
                  {{ m.message }}
                </div>
                <div
                  class="text-sm rounded-b-2xl backdrop-blur-2xl bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"
                >
                  <a
                    :href="m.fileUrl"
                    download
                    class="flex justify-start items-center gap-2"
                  >
                    <Icon
                      icon="simple-icons:googledocs"
                      width="16"
                      height="16"
                    />{{ m.fileName }}</a
                  >
                </div>
              </div>

              <div class="chat-footer opacity-50 font-semibold text-xs">
                {{ m.isSendMessageLoading ? "Sending..." : "" }}
                <Icon
                  v-if="!m.isSendMessageLoading"
                  :class="userId !== m.senderId ? 'hidden' : ''"
                  icon="material-symbols-light:check-circle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed inset-x-0 bottom-0 pl-72 w-full z-50">
      <SendMessage
        :userId="userId"
        :messages="messages"
        :selectedUser="selectedUser"
        :selectedFile="file"
        :selectedImage="imageFile"
        @update:selectedFile="handleFileUpdate"
        @update:selectedImage="handleImageUpdate"
        :userPhoto="userPhoto"
        :userName="userName"
        :isSendMessageLoading="isSendMessageLoading"
        :isLoading="isLoading"
        :formatTime="Time"
        :sendMessage="sendMessage"
        :filteredMessages="filteredMessages"
        v-model="newMessage"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  getDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useAuth } from "../firebase";
import SendMessage from "../components/sendMessage.vue";
import { ChatFuntions } from "../scripts/ChatFunctions";

const { firestore } = useAuth();
const isLoading = ref(false);
const messages = ref([]);
const route = useRoute();
const auth = getAuth();
const user = ref(auth.currentUser);
const userId = user.value.uid;
const {
  Time,
  sendMessage,
  newMessage,
  formatTime,
  isSendMessageLoading,
  filteredMessages,

  userPhoto,
  userName,
  file,
  imageFile,
  handleFileUpdate,
  handleImageUpdate,
} = ChatFuntions();

let selectedUser = ref([]);
// Load messages function
const loadMessages = (chatId) => {
  isLoading.value = true;

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
    // scrollToBottom(); // Ensure you have this function defined
  });

  onUnmounted(() => {
    messageUnsub();
  });
};
const loadUserInfo = async (senderId) => {
  try {
    const userDocRef = doc(firestore, "users", senderId);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      selectedUser.value = userDoc.data(); // Update selectedUser with user data
    } else {
      console.error("User not found");
    }
  } catch (error) {
    console.error("Error loading user info:", error);
  }
};

watch(
  () => route.params.id,
  (newChatId) => {
    if (newChatId) {
      const senderId = newChatId.split("_")[0]; // Extract the sender ID
      loadMessages(newChatId); // Load messages for the chat
      loadUserInfo(senderId); // Load user info for the sender
    }
  }
);
onMounted(() => {
  const chatId = route.params.id; // For example: BygHFoPQboNDuhFdm4QalrbTMA53_q6xkvlavxFOnQpJUj6mAOPGmhjz1
  if (chatId) {
    const senderId = chatId.split("_")[0]; // Extract the sender ID
    loadMessages(chatId); // Load messages for the chat
    loadUserInfo(senderId); // Load user info for the sender
  }
});
const isImageLoading = ref(true); // Track loading state

const onLoad = () => {
  console.log("loading is done!");
  isImageLoading.value = false; // Image has loaded, hide the loading indicator
};

const onError = () => {
  isImageLoading.value = false; // Handle error case (stop showing loading)
};
</script>
