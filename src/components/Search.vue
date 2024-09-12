<template>
  <div
    class="my-3 flex justify-start gap-2 items-center"
    @click="handleSearch()"
  >
    <div
      class="text-sm text-gray-400 flex justify-start gap-2 items-center w-full border border-gray-500/40 rounded-full px-2 py-1"
    >
      <div class="p-1 rounded-full transition text-orange-500">
        <Icon icon="lets-icons:search-light" class="text-2xl" />
      </div>
      <span>Search...</span>
    </div>
  </div>
  <!-- show modal -->
  <dialog id="searchModal" class="modal">
    <div class="modal-box">
      <form method="dialog" class="absolute top-0 right-0 p-2 z-10">
        <button>
          <Icon icon="iconamoon:close-duotone" class="text-2xl text-red-500" />
        </button>
      </form>
      <div class="my-3 flex justify-start gap-2 text-sm items-center">
        <input
          type="search"
          autofocus
          v-model="search"
          placeholder="Search"
          class="input input-bordered input-md w-full rounded-full"
        />
      </div>
      <div class="min-h-96">
        <div class="my-2">
          <span
            class="font-semibold text-xs text-gray-500 bg-gray-500/10 px-3 py-0.5 shadow-sm rounded-full"
            >Users
            <span
              class="pl-1 text-blue-500"
              :class="filteredUsers.length === 0 ? 'text-red-500' : ''"
              >{{ filteredUsers.length }}</span
            ></span
          >
        </div>
        <div>
          <div
            v-for="user in filteredUsers"
            v-if="filteredUsers.length !== 0"
            :key="user.id"
          >
            <UsersChatHeads
              :user="user"
              :yourChat="() => yourChat('searchChat', user)"
              :formatTime="Time"
              :latestMessages="latestMessages"
              :getChatId="getChatId"
              :userId="userId"
              :isSender="isSender"
              :timestamp="timestamp"
            />
          </div>
          <div v-else class="">
            <span class="font-medium text-sm text-red-400">
              {{ search }} not found</span
            >
          </div>
        </div>
        <dialog id="searchChat" class="modal modal-bottom sm:modal-middle">
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
    </div>
  </dialog>
</template>
<script setup>
import { ref, defineComponent, computed } from "vue";
import { Icon } from "@iconify/vue";
import { ChatFuntions } from "../scripts/ChatFunctions.js";
import UsersChatHeads from "../components/usersChatHeads.vue";
import ChatModal from "./ChatModal.vue";

const search = ref("");

const component = defineComponent({
  UsersChatHeads,
  ChatModal,
});

const handleSearch = () => {
  const modal = document.getElementById("searchModal");
  modal.showModal();
  console.log("hey");
};
const filteredUsers = computed(() => {
  if (search.value === "") {
    return storedUsers.value.sort((a, b) => {
      const chatIdA = getChatId(userId, a.id);
      const chatIdB = getChatId(userId, b.id);
      return timestamp.value[chatIdB] - timestamp.value[chatIdA];
    });
  } else {
    return storedUsers.value.filter((user) =>
      user.userName.toLowerCase().includes(search.value.toLowerCase())
    );
  }
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
} = ChatFuntions();
</script>
