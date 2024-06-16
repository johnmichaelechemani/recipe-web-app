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
        <div>
          <h1 class="text-sm font-medium">{{ user.userName }}</h1>
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
