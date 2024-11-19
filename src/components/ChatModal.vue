<template>
  <div class="modal-box overflow-hidden relative p-2 no-scrollbar">
    <div class="flex justify-between items-center gap-2">
      <div class="flex justify-start items-center gap-2">
        <div class="avatar">
          <div class="w-10 rounded-full">
            <img
              :src="selectedUser.userPhotoURL"
              loading="lazy"
              class="bg-gray-500/20 border border-gray-500/20 rounded-full"
            />
          </div>
        </div>
        <div>
          <h1 class="text-sm font-medium">{{ selectedUser.userName }}</h1>
        </div>
      </div>

      <form method="dialog" class="flex justify-start items-center">
        <button class="px-0.5">
          <Icon icon="carbon:close" width="20" height="20" />
        </button>
      </form>
    </div>
    <hr class="my-1 border border-gray-400/20" />
    <div
      class="h-dvh pb-[165px] sm:pb-0 sm:h-[366px] sm:mb-[86px] rounded-md overflow-auto"
      ref="messageContainer"
    >
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
      <div v-for="m in filteredMessages" :key="m.id" class="relative">
        <MessageLayout
          :m="m"
          :userId="userId"
          :selectedUser="selectedUser"
          :isImageLoading="isImageLoading"
          :showDetailsId="showDetailsId"
          :formatTime="formatTime"
          :onLoad="onLoad"
          :onError="onError"
          :showInfo="showInfo"
        />
      </div>
      <div v-if="isLoading">
        <MessageLoading />
      </div>
    </div>

    <div class="fixed bottom-0 z-50 inset-x-0">
      <!-- message attachements and error and success alerts -->
      <MessageAttachments />
      <!--  -->
      <RecordingModal />

      <form ref="messageBoxContainer">
        <div
          class="flex justify-start items-center rounded-t-2xl gap-2 bg-gray-400/20 backdrop-blur-2xl shadow"
        >
          <div class="w-full rounded-t-2xl border border-gray-500/20 shadow">
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
              class="w-full px-3 pt-3 placeholder:text-sm placeholder:text-gray-500 resize-none rounded-t-2xl no-scrollbar bg-transparent outline-none"
            />

            <div class="flex justify-between items-center m-3 h-5">
              <div class="flex justify-center items-center gap-2">
                <button
                  @click.prevent="triggerImageInput"
                  class="transition p-1 rounded-full bg-gray-400/20 hover:text-success shadow"
                >
                  <Icon icon="tabler:photo" class="text-xl" />
                </button>
                <input
                  type="file"
                  ref="imageInput"
                  accept="image/*"
                  @change="handleImageChange"
                  class="hidden"
                />

                <input
                  type="file"
                  ref="fileInput"
                  accept=".pdf, .doc, .docx"
                  @change="handleFileChange"
                  class="hidden"
                />

                <button
                  @click.prevent="triggerFileInput"
                  class="transition p-1 rounded-full bg-gray-400/20 hover:text-secondary shadow"
                >
                  <Icon icon="tabler:file" class="text-xl" />
                </button>
              </div>

              <div
                class="rounded-full p-1.5 flex shadow justify-center transition items-center"
                :class="
                  modelValue || selectedFile || selectedImage !== null
                    ? 'bg-blue-500 hover:bg-blue-500/90 '
                    : 'bg-primary/10 hover:bg-primary/20'
                "
              >
                <button
                  v-if="
                    (!isSendMessageLoading && modelValue) ||
                    selectedFile ||
                    selectedImage
                  "
                  :disabled="isSendMessageLoading"
                  @click.prevent="sendMessage"
                  v-motion-fade
                >
                  <Icon icon="bxs:send" class="text-xl text-gray-200" />
                </button>
                <button
                  :disabled="isSendMessageLoading"
                  v-motion-fade
                  v-else
                  @click.prevent.stop="startRecording"
                >
                  <Icon icon="ic:round-mic" class="text-xl text-primary" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, watch, onMounted, nextTick } from "vue";
import { Icon } from "@iconify/vue";

// Component Imports
import MessageLoading from "../components/messageLoading.vue";
import RecordingModal from "./recordingModal.vue";
import MessageLayout from "./messageLayout.vue";
import MessageAttachments from "./messageAttachments.vue";

// Utility Imports
import {
  chatFileAttachments,
  recordingFunctions,
} from "../scripts/chatAttachments";

// Props Definition
const props = defineProps({
  // User Identification
  userId: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  userPhoto: {
    type: String,
    required: true,
  },

  // Message Related Props
  messages: {
    type: Array,
    required: true,
  },
  filteredMessages: {
    type: Array,
    default: () => [],
  },

  // State Management Props
  selectedUser: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  selectedFile: {
    type: Object,
    default: null,
  },
  selectedImage: {
    type: Object,
    default: null,
  },

  // Loading States
  isSendMessageLoading: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },

  // Utility Functions
  formatTime: {
    type: Function,
    required: true,
  },
  sendMessage: {
    type: Function,
    required: true,
  },
});

// Emit Events
const emit = defineEmits([
  "update:selectedFile",
  "update:modelValue",
  "update:selectedImage",
]);

// Destructure Utility Functions
const { startRecording } = recordingFunctions();
const {
  showDetailsId,
  showInfo,
  handleFileChange,
  handleImageChange,
  selectedFile,
  selectedImage,
} = chatFileAttachments(emit);

// Reference Variables
const imageInput = ref(null);
const fileInput = ref(null);
const messageContainer = ref(null);
const autoExpand = ref(null);
const messageBoxContainer = ref(null);

// Image Loading State
const isImageLoading = ref(true);

// Textarea Auto-expand Configuration
const maxRows = 10;
const lineHeight = 24;

// Image and File Input Handlers
const triggerImageInput = () => {
  imageInput.value?.click();
};

const triggerFileInput = () => {
  fileInput.value?.click();
};

// Image Loading Callbacks
const onLoad = () => {
  console.log("Image loading completed");
  isImageLoading.value = false;
};

const onError = () => {
  isImageLoading.value = false;
};

// Textarea Auto-expand Logic
const autoSpand = () => {
  const el = autoExpand.value;
  if (el) {
    const currentScrollPosition = el.scrollTop;
    const currentHeight = el.scrollHeight;

    el.style.height = "auto";
    const newHeight = el.scrollHeight;
    const maxHeight = maxRows * lineHeight;

    if (newHeight > maxHeight) {
      el.style.height = `${maxHeight}px`;
      el.style.overflowY = "auto";
    } else {
      el.style.height = `${newHeight}px`;
    }

    const newScrollTop = currentScrollPosition + (newHeight - currentHeight);
    el.scrollTop = newScrollTop;
  }
};

// Input Handler
const onInput = (event) => {
  emit("update:modelValue", event.target.value);
  autoSpand();
};

// Watchers
watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue === "") {
      const el = autoExpand.value;
      if (el) {
        el.style.height = "auto";
        el.style.overflowY = "hidden";
      }
    } else {
      autoSpand();
    }
  }
);

watch(
  () => props.filteredMessages,
  () => {
    nextTick(() => {
      if (messageContainer.value) {
        messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
      }
    });
  },
  { deep: true }
);

// Lifecycle Hook
onMounted(() => {
  autoSpand();
  if (messageContainer.value) {
    messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
  }
});
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
