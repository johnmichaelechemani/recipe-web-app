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
          type="text"
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
      <div>
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
      </div>
    </div>
  </dialog>
</template>
<script setup>
import { ref, defineComponent } from "vue";
import { Icon } from "@iconify/vue";
import { ChatFuntions } from "../scripts/ChatFunctions.js";
import UsersChatHeads from "../components/usersChatHeads.vue";

const search = ref("");

const component = defineComponent({
  UsersChatHeads,
});

const handleSearch = () => {
  const modal = document.getElementById("searchModal");
  modal.showModal();
  console.log("hey");
};
const searchUsers = () => {
  console.log(search.value);
};
const {
  Time,
  getChatId,
  chefsChat,
  userId,
  timestamp,
  latestMessages,
  isSender,
  storedUsers,
} = ChatFuntions();
</script>
