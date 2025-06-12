<template>
  <div class="min-h-96">
    <div class="my-2">
      <span
        class="font-semibold text-xs text-gray-500 bg-gray-500/10 px-3 py-0.5 shadow-sm rounded-full"
        >All</span
      >
    </div>
    <div v-for="user in filteredUsers" :key="user.id">
      <UsersChatHeads
        :user="user"
        :yourChat="() => yourChat('openChat', user)"
        :formatTime="Time"
        :latestMessages="latestMessages"
        :getChatId="getChatId"
        :userId="userId"
        :isSender="isSender"
        :timestamp="timestamp"
      />
    </div>

    <dialog id="openChat" class="modal modal-bottom sm:modal-middle">
      <ChatModal
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
    </dialog>
  </div>
</template>

<script setup>
import { defineComponent, computed } from "vue";
import UsersChatHeads from "../components/usersChatHeads.vue";
import ChatModal from "../components/ChatModal.vue";
import { ChatFunctions } from "../scripts/ChatFunctions.js";

const component = defineComponent({
  UsersChatHeads,
  ChatModal,
});

const filteredUsers = computed(() => {
  return storedUsers.value.sort((a, b) => {
    const chatIdA = getChatId(userId, a.id);
    const chatIdB = getChatId(userId, b.id);
    return timestamp.value[chatIdB] - timestamp.value[chatIdA];
  });
});

const {
  Time,
  getChatId,
  yourChat,
  sendMessage,
  userId,
  newMessage,
  messages,
  isLoading,
  isSendMessageLoading,
  filteredMessages,
  selectedUser,
  timestamp,
  userPhoto,
  userName,
  latestMessages,
  isSender,
  storedUsers,
  file,
  imageFile,
  handleFileUpdate,
  handleImageUpdate,
} = ChatFuntions();
</script>
