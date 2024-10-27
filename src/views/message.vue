<script setup>
import { Icon } from "@iconify/vue";
import Search from "../components/Search.vue";
import { ref, computed } from "vue";
import { ChatFuntions } from "../scripts/ChatFunctions.js";
import UsersChatHeads from "../components/usersChatHeads.vue";
const {
  filteredUsers,
  Time,
  getChatId,
  yourChat,
  storedUsers,
  isSender,
  userId,
  timestamp,
  latestMessages,
} = ChatFuntions();
const isActive = ref(1); // Default active tab is "Inbox"

const changeTab = (num) => {
  isActive.value = num;
};

const allUsers = computed(() => {
  return storedUsers.value.sort((a, b) => {
    const chatIdA = getChatId(userId, a.id);
    const chatIdB = getChatId(userId, b.id);
    return timestamp.value[chatIdB] - timestamp.value[chatIdA];
  });
});
</script>

<template>
  <div class="relative">
    <div class="fixed min-w-72 inset-y-0 left-0 z-40">
      <div class="pb-3 px-2 pt-14 flex justify-start items-center gap-1">
        <router-link
          to="/recipes"
          class="p-2 rounded-full hover:bg-gray-500/20 transition"
        >
          <Icon icon="line-md:arrow-left" width="20" height="20" />
        </router-link>
        <h1 class="text-xl font-semibold">Chats</h1>
      </div>
      <div class="px-2">
        <Search />
      </div>
      <div>
        <div class="flex justify-start items-center gap-2 px-2 mt-2 mb-4">
          <button
            @click="changeTab(1)"
            class="rounded-full tracking-wide"
            :class="
              isActive === 1
                ? 'btn btn-sm bg-blue-400/10 text-blue-500 '
                : 'hover:bg-blue-500/10 hover:text-blue-400 text-gray-400 transition px-4 py-1.5 font-semibold text-xs'
            "
          >
            Inbox
          </button>

          <button
            @click="changeTab(2)"
            class="rounded-full tracking-wide"
            :class="
              isActive === 2
                ? 'btn btn-sm text-blue-500 bg-blue-400/10'
                : 'hover:bg-blue-500/10 hover:text-blue-500 text-gray-400 transition px-4 py-1.5 font-semibold text-xs'
            "
          >
            Chefs
          </button>
        </div>

        <div class="px-2 h-96 overflow-y-auto">
          <div v-if="isActive === 1">
            <div v-for="item in filteredUsers" :key="item.id">
              <UsersChatHeads
                :user="item"
                :yourChat="() => yourChat(item)"
                :formatTime="Time"
                :latestMessages="latestMessages"
                :getChatId="getChatId"
                :userId="userId"
                :isSender="isSender"
                :timestamp="timestamp"
              />
            </div>
          </div>
          <div v-else>
            <div v-for="item in allUsers" :key="item.id">
              <UsersChatHeads
                :user="item"
                :yourChat="() => yourChat(item)"
                :formatTime="Time"
                :latestMessages="latestMessages"
                :getChatId="getChatId"
                :userId="userId"
                :isSender="isSender"
                :timestamp="timestamp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <router-view name="messageBox" />
  </div>
</template>
