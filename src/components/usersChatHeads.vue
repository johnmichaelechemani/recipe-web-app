<template>
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
      <h1 class="text-sm font-medium capitalize">
        {{ user.userName }}
      </h1>
      <div class="flex gap-2 justify-start items-center">
        <span
          v-if="latestMessages[getChatId(userId, user.id)]"
          class="text-xs px-2 py-0.5 bg-gray-500/20 rounded-full"
          :class="
            isSender[getChatId(userId, user.id)] === userId
              ? ''
              : 'text-blue-500'
          "
        >
          <span
            class="text-xs"
            v-if="isSender[getChatId(userId, user.id)] === userId"
          >
            You:
          </span>
          {{ latestMessages[getChatId(userId, user.id)] }}
        </span>
        <span class="text-[10px]">{{
          formatTime(timestamp[getChatId(userId, user.id)])
        }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  yourChat: {
    type: Function,
    required: true,
  },
  formatTime: {
    type: Function,
    required: true,
  },
  user: {
    type: Object,
    required: true,
  },
  latestMessages: {
    type: Object,
    required: true,
  },
  getChatId: {
    type: Function,
    required: true,
  },
  userId: {
    type: [String, Number],
    required: true,
  },
  isSender: {
    type: Object,
    required: true,
  },
  timestamp: {
    type: Object,
    required: true,
  },
});
</script>
