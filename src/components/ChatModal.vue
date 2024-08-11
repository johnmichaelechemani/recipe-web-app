<template>
  <div class="modal-box relative pb-4 pt-2 px-2">
    <div class="modal-action absolute z-10 -top-4 right-2">
      <form method="dialog">
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
    <div class="h-80 rounded-md overflow-y-scroll" ref="messageContainer">
      <div
        v-if="filteredMessages.length === 0 && !isLoading"
        class="my-2 flex justify-center items-center text-sm"
      >
        <span class="py-1 px-4 bg-primary/10 rounded-full"
          >No conversation with
          <span class="text-primary font-semibold">{{
            selectedUser.userName
          }}</span>
        </span>
      </div>
      <div v-for="m in filteredMessages" :key="m.id">
        <div
          class="chat"
          :class="m.senderId === userId ? 'chat-end' : 'chat-start'"
        >
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img v-if="userId === m.senderId" :src="userPhoto" />
              <img v-else :src="selectedUser.userPhotoURL" />
            </div>
          </div>

          <div class="chat-header text-xs font-medium">
            {{ m.senderId === userId ? userName : selectedUser.userName }}
            <time class="text-[10px] opacity-50">{{
              formatTime(m.timestamp)
            }}</time>
          </div>

          <div
            class="chat-bubble text-sm"
            :class="userId === m.senderId ? 'chat-bubble-primary' : ''"
          >
            {{ m.message }}
          </div>
        </div>
      </div>
      <div v-if="isLoading">
        <MessageLoading />
      </div>
    </div>

    <form @submit.prevent="sendMessage">
      <div class="my-1 flex justify-start items-center gap-2">
        <input
          type="text"
          :disabled="isSendMessageLoading"
          required
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          placeholder="Enter a message.."
          class="input input-bordered w-full placeholder:text-sm rounded-full"
        />
        <span
          v-if="isSendMessageLoading"
          class="loading loading-ring loading-lg"
        ></span>
        <button
          v-if="!isSendMessageLoading"
          class="rounded-full btn transition"
          :class="modelValue === '' ? 'hidden' : ''"
        >
          <Icon icon="bxs:send" class="text-xl text-blue-500" />
        </button>
      </div>
    </form>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { ref, computed } from "vue";
import MessageLoading from "../components/messageLoading.vue";
const props = defineProps({
  userId: {
    type: String,
    required: true,
  },
  messages: {
    type: Array,
    required: true,
  },
  selectedUser: {
    type: Object,
    required: true,
  },
  userPhoto: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  isSendMessageLoading: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  formatTime: {
    type: Function,
    required: true,
  },
  sendMessage: {
    type: Function,
    required: true,
  },
  filteredMessages: {
    type: Array,
  },
  modelValue: {
    type: String,
    required: true,
  },
});
const messageContainer = ref(null);
</script>
