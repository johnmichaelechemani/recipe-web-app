<template>
  <div>
    <div v-for="user in storedUsers" :key="user.id">
      <div
        @click="chatChef(user.id)"
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
  </div>
</template>

<script setup>
import { getUsers } from "../scripts/getUsers.js";
const { storedUsers } = getUsers();

const chatChef = (id) => {
  console.log(id);
};
</script>
