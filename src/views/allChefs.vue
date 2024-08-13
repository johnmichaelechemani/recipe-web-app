<template>
  <div>
    <div class="flex gap-2 justify-start items-center">
      <p class="text-red-500 bg-red-500/10 p-2 rounded-full text-xs font-bold">
        Stats: In Development
      </p>
      <p
        class="text-orange-500 bg-red-500/10 p-2 rounded-full text-xs font-bold"
      >
        Work: Sort by timestamp
      </p>
    </div>
    <div class="my-2">
      <span
        class="font-semibold text-sm text-gray-500 bg-gray-500/10 px-3 py-0.5 shadow-sm rounded-full"
        >All</span
      >
    </div>
    <div v-for="user in storedUsers" :key="user.id">
      <UsersChatHeads
        :user="user"
        :yourChat="chefsChat"
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
import { defineComponent } from "vue";
import UsersChatHeads from "../components/usersChatHeads.vue";
import ChatModal from "../components/ChatModal.vue";
import { ChatFuntions } from "../scripts/ChatFunctions.js";

const component = defineComponent({
  UsersChatHeads,
  ChatModal,
});

const {
  Time,
  getChatId,
  chefsChat,
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
} = ChatFuntions();
</script>
