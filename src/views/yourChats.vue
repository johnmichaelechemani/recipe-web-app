<template>
  <div class="min-h-96">
    <div>
      <ChatHeads
        :filteredUsers="filteredUsers"
        :yourChat="yourChat"
        modalId="openInbox"
      />
    </div>
    <div v-for="user in tempUsers" :key="user.id">
      {{ user.userName }}
      {{ search }}
    </div>
    <div v-if="filteredUsers.length !== 0">
      <div v-for="user in filteredUsers" :key="user.id">
        <UsersChatHeads
          :user="user"
          :yourChat="() => yourChat('openInbox', user)"
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
      <div v-if="filteredUsers.length === 0 && !isLoading">
        <div class="my-2">
          <span
            class="font-semibold text-xs text-red-400 bg-red-500/10 px-3 py-0.5 shadow-sm rounded-full"
            >No conversation</span
          >
        </div>
      </div>
    </div>

    <dialog id="openInbox" class="modal modal-bottom sm:modal-middle ">
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
import ChatHeads from "../components/ChatHeads.vue";

const component = defineComponent({
  UsersChatHeads,
  ChatModal,
  ChatHeads,
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
  filteredUsers,
  latestMessages,
  isSender,
  tempUsers,
  search,
} = ChatFuntions();
</script>
