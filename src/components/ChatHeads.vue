<template>
  <span class="text-red-500 bg-red-500/10 p-2 rounded-full text-xs font-bold">
    Stats: In Development
  </span>
  <div
    class="border-b pb-2 overflow-scroll no-scrollbar gap-2 w-full border-gray-500/10 rounded-md my-2 flex justify-start items-center"
  >
    <div v-for="user in filteredUsers" :key="user.id">
      <div class="max-w-12">
        <div
          class="avatar"
          :class="user.status === 'online' ? 'online' : 'offline'"
        >
          <div class="w-12 rounded-full">
            <img :src="user.userPhotoURL" />
          </div>
        </div>

        <p class="text-xs text-center truncate capitalize">
          {{ user.userName }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  filteredUsers: {
    type: Object,
    required: true,
  },
});
</script>
