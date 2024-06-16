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
            >Hey</span
          >
        </div>
      </div>
    </div>

    <dialog id="openInbox" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box relative">
        <div class="modal-action absolute z-10 -top-4 right-2">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
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
        <div class="h-80 bg-primary/20 rounded-md"></div>
      </div>
    </dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { getUsers } from "../scripts/getUsers.js";
const { storedUsers } = getUsers();

let selectedUser = ref([]);

const yourChat = (user) => {
  const modal = document.getElementById("openInbox");
  modal.showModal();
  selectedUser.value = user;
};
</script>
