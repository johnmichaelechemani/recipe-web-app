<template>
  <div
    class="my-3 flex justify-start gap-2 items-center"
    @click="handleSearch()"
  >
    <input
      type="text"
      readonly
      placeholder="Search"
      class="input input-bordered input-sm w-full rounded-full"
    />
    <div class="p-1 rounded-full transition text-orange-500 bg-primary/10">
      <Icon icon="lets-icons:search-light" class="text-2xl" />
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
          v-model="search"
          placeholder="Search"
          class="input input-bordered input-md w-full rounded-full"
        />
        <button
          @click="searchUsers()"
          class="p-2 rounded-full transition"
          :disabled="search === ''"
          :class="
            search === ''
              ? 'text-gray-500 cursor-not-allowed'
              : 'text-orange-500 shadow hover:bg-primary/20 bg-primary/10'
          "
        >
          <Icon icon="lets-icons:search-light" class="text-3xl" />
        </button>
      </div>
      <div class="min-h-96">
        <div class="my-2">
          <span
            class="font-semibold text-xs text-gray-500 bg-gray-500/10 px-3 py-0.5 shadow-sm rounded-full"
            >Users</span
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
              :yourChat="chefsChat"
              :formatTime="Time"
              :latestMessages="latestMessages"
              :getChatId="getChatId"
              :userId="userId"
              :isSender="isSender"
              :timestamp="timestamp"
            />
          </div>
          <div v-else class="text-sm font-medium text-red-500">
            User not found
          </div>
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
    return storedUsers.value;
  } else {
    return storedUsers.value.filter((user) =>
      user.userName.toLowerCase().includes(search.value.toLowerCase())
    );
  }
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
