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

          <div class="chat-footer opacity-50 font-semibold text-xs">
            {{ isSendMessageLoading ? "Sending... bugs, hehehe" : "Delivered" }}
          </div>
        </div>
      </div>
      <div v-if="isLoading">
        <MessageLoading />
      </div>
    </div>

    <form ref="messageBoxContainer">
      <div
        @click="showTextbox"
        :class="isShowTextbox ? 'rounded-2xl' : 'rounded-full'"
        class="my-1 flex justify-start items-center gap-2 bg-gray-400/20 shadow"
      >
        <div class="w-full">
          <textarea
            type="text"
            :disabled="isSendMessageLoading"
            cols="1"
            rows="1"
            required
            autofocus
            ref="autoExpand"
            :value="modelValue"
            @input="onInput"
            placeholder="Enter a message"
            :class="isShowTextbox ? '' : 'hidden'"
            class="w-full px-3 pt-3 placeholder:text-sm resize-none rounded-2xl no-scrollbar bg-transparent outline-none"
          />

          <div class="flex justify-between items-center m-3 h-5">
            <div class="flex justify-center items-center gap-1">
              <button
                disabled
                class="transition cursor-not-allowed p-1 rounded-full bg-gray-400/20 hover:text-success shadow"
              >
                <Icon icon="tabler:photo" class="text-xl" />
              </button>
              <button
                disabled
                class="transition cursor-not-allowed p-1 rounded-full bg-gray-400/20 hover:text-secondary shadow"
              >
                <Icon icon="tabler:file" class="text-xl" />
              </button>
              <span
                v-if="!isShowTextbox"
                class="text-xs font-medium opacity-60 pl-2"
                >Send a message</span
              >
            </div>

            <div
              class="rounded-full p-1.5 flex shadow justify-center transition items-center"
              :class="
                modelValue !== ''
                  ? 'bg-blue-500 hover:bg-blue-500/90 '
                  : 'bg-primary/10 hover:bg-primary/20'
              "
            >
              <botton
                v-if="!isSendMessageLoading && modelValue"
                @click.prevent="sendMessage"
                v-motion-fade
              >
                <Icon icon="bxs:send" class="text-xl text-gray-200" />
              </botton>
              <button v-motion-fade v-else class="cursor-not-allowed" disabled>
                <Icon icon="ic:round-mic" class="text-xl text-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { ref, computed, watch, onMounted, Transition } from "vue";
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
const emit = defineEmits(["update:modelValue"]);
const maxRows = 10;
const lineHeight = 24;
const messageContainer = ref(null);
const autoExpand = ref(null);
const isShowTextbox = ref(false);
const messageBoxContainer = ref(null);
const messBoxCont = messageBoxContainer.value;
const el = autoExpand.value;

const autoSpand = () => {
  if (el) {
    el.style.height = "auto";
    const scrollHeight = el.scrollHeight;
    const maxHeight = maxRows * lineHeight;

    if (scrollHeight > maxHeight) {
      el.style.height = `${maxHeight}px`;
      el.style.overflowY = "auto";
    } else {
      el.style.height = `${scrollHeight}px`;
    }
  }
};
const onInput = (event) => {
  emit("update:modelValue", event.target.value);
  autoSpand();
};
watch(props.modelValue, () => {
  autoSpand();
});
const showTextbox = () => {
  isShowTextbox.value = true;
};
</script>
<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
