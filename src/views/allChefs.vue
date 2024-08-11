<template>
  <div>
    <div v-for="user in storedUsers" :key="user.id">
      <UsersChatHeads
        :user="user"
        :yourChat="yourChat"
        :formatTime="formatTime"
        :latestMessages="latestMessages"
        :getChatId="getChatId"
        :userId="userId"
        :isSender="isSender"
        :timestamp="timestamp"
      />
    </div>

    <dialog id="openChat" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box relative">
        <div class="modal-action absolute z-10 -top-4 right-2">
          <form method="dialog">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn btn-xs px-0.5 rounded-full">
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
        <div
          class="h-80 bg-primary/10 rounded-md font-semibold text-sm flex justify-center items-center"
        >
          Not available for now 🤪
        </div>
      </div>
    </dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { getUsers } from "../scripts/getUsers.js";
import { Icon } from "@iconify/vue";
import UsersChatHeads from "../components/usersChatHeads.vue";

const component = defineComponent({
  UsersChatHeads,
});

const { storedUsers } = getUsers();

let selectedUser = ref([]);

const chatChef = (user) => {
  const modal = document.getElementById("openChat");
  modal.showModal();
  selectedUser.value = user;
};
</script>
