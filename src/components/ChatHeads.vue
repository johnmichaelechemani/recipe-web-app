<template>
  <div
    class="border-b pb-2 overflow-scroll no-scrollbar gap-3 w-full border-gray-500/10 rounded-md my-2 flex justify-start items-center"
  >
    <div
      v-for="user in filteredUsers"
      :key="user.id"
      @click="yourChat(modalId, user)"
    >
      <div class="max-w-14">
        <div
          class="avatar"
          :class="user.status === 'online' ? 'online' : 'offline'"
        >
          <div class="w-14 rounded-full">
            <img :src="user.userPhotoURL" />
          </div>
        </div>

        <p class="text-[10px] text-center truncate capitalize">
          {{ getName(user.userName) }}
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
  yourChat: {
    type: Function,
    required: true,
  },
  modalId: {
    type: String,
    required: true,
  },
});
const getName = (userName) => {
  return userName.split(" ")[0];
};
</script>
