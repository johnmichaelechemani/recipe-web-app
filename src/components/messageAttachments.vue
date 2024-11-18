<template>
  <transition>
    <div
      v-if="props.isShowCopied"
      class="flex mb-1 justify-center items-center"
    >
      <span
        class="backdrop-blur-2xl flex justify-center items-center gap-4 bg-green-400/20 border px-4 text-sm font-medium py-1 transition border-green-500/20 text-green-500 rounded-full"
      >
        <p class="text-xs">Copied!</p>
      </span>
    </div>
  </transition>
  <transition>
    <div
      v-if="props.isShowDeleteConfirmation"
      class="flex justify-center items-center"
    >
      <span
        class="backdrop-blur-2xl flex justify-center items-center gap-4 bg-gray-400/20 border px-8 text-sm font-medium py-2 transition border-gray-500/20 rounded-md"
      >
        <div class="grid place-items-center cursor-pointer transition">
          <p class="text-xs">Are you sure to delete this message?</p>
          <div class="flex justify-start items-center gap-4 mt-2">
            <button
              @click="props.onCancelDeleteConfirmation()"
              class="text-gray-600 px-2 py-1 rounded-md border border-gray-500/50"
            >
              Cancel
            </button>
            <button
              class="px-2 py-1 rounded-md border text-red-500 border-red-500/50"
            >
              Delete
            </button>
          </div>
        </div>
      </span>
    </div>
  </transition>
  <transition>
    <div
      v-if="
        props.selectedChatId === props.showDetailsId && props.isDetailsClicked
      "
      class="fixed bottom-0 backdrop-blur-2xl py-5 z-50 inset-x-0"
    >
      <div class="flex justify-center items-center">
        <span
          class="backdrop-blur-2xl flex justify-center items-center gap-4 bg-gray-400/20 border px-8 text-sm font-medium py-2 transition border-gray-500/20 rounded-full"
        >
          <div
            @click="props.onCopyChat()"
            class="grid place-items-center hover:text-green-500 cursor-pointer transition"
          >
            <Icon icon="solar:copy-linear" width="20" height="20" />
            <p class="text-xs">Copy</p>
          </div>
          <div
            class="grid place-items-center hover:text-red-500 cursor-pointer transition"
          >
            <Icon icon="fluent:delete-32-regular" width="20" height="20" />
            <p class="text-xs">Delete</p>
          </div>
        </span>
      </div>
    </div>
  </transition>
  <transition>
    <div
      v-if="props.isSendMessageLoading"
      class="flex justify-center mb-1 items-center"
    >
      <span
        class="backdrop-blur-2xl flex justify-center items-center gap-2 bg-gray-400/20 border px-4 text-sm font-medium py-1 transition border-gray-500/20 rounded-full"
      >
        <span class="loading loading-dots loading-xs"></span>
        <span>Sending..</span>
      </span>
    </div>
  </transition>
  <transition>
    <div
      v-if="props.isRecording"
      class="flex mb-1 justify-center items-center gap-2"
    >
      <span
        class="backdrop-blur-2xl flex justify-center items-center gap-2 bg-green-400/10 border px-2 text-sm font-medium py-1 transition border-green-500/20 rounded-full"
      >
        <span class="loading loading-ring text-green-500 loading-md"></span>
        <span>Recording..</span>
      </span>

      <button
        @click="props.onPauseRecording()"
        class="backdrop-blur-2xl flex justify-center items-center gap-1 bg-red-400/10 border py-1 px-2 text-sm font-medium transition border-red-500/20 rounded-full"
      >
        <Icon
          icon="ic:round-pause"
          width="20"
          height="20"
          class="text-red-500"
        />
        Pause
      </button>
      <button
        @click="props.onDeleteRecording()"
        class="backdrop-blur-2xl flex justify-center items-center gap-1 py-1 px-2 text-sm font-medium transition rounded-full"
      >
        <Icon
          icon="mingcute:delete-fill"
          width="20"
          height="20"
          class="text-red-500"
        />
      </button>
    </div>
  </transition>
  <transition>
    <span
      v-if="props.isRecordingError"
      class="backdrop-blur-2xl flex mb-1 justify-start items-center gap-1 bg-red-400/10 border py-1 px-2 text-sm font-medium transition border-red-500/20 rounded-full"
    >
      <Icon
        icon="material-symbols:error"
        class="text-red-500"
        width="20"
        height="20"
      />

      {{ props.recordingErrorMessage }}
    </span>
  </transition>
  <transition>
    <div
      v-if="props.selectedFile || props.selectedImage"
      class="ml-1 flex justify-start mb-1 items-end gap-1 text-xs"
    >
      <div v-if="props.isImage">
        <img
          :src="props.imageURL"
          loading="lazy"
          alt=""
          class="size-14 rounded-xl backdrop-blur-2xl object-cover bg-gray-400/20 border border-gray-500/20"
        />
      </div>
      <div class="flex justify-start items-center gap-1">
        <span
          class="backdrop-blur-2xl flex bg-gray-400/20 justify-start items-center gap-2 px-2 py-1 border border-gray-500/20 rounded-xl"
        >
          <Icon icon="fluent:attach-16-regular" width="20" height="20" />
          <span class="truncate max-w-52">{{ props.fileName }}</span>
        </span>
        <button
          @click="props.onCloseAttachments()"
          class="backdrop-blur-2xl bg-gray-400/20 border p-0.5 hover:text-red-500 transition border-gray-500/20 rounded-full"
        >
          <Icon icon="iconamoon:close-light" width="20" height="20" />
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { Icon } from "@iconify/vue";
const props = defineProps({
  // Boolean flags
  isShowCopied: {
    type: Boolean,
    default: false,
  },
  isShowDeleteConfirmation: {
    type: Boolean,
    default: false,
  },
  isSendMessageLoading: {
    type: Boolean,
    default: false,
  },
  isRecording: {
    type: Boolean,
    default: false,
  },
  isRecordingError: {
    type: Boolean,
    default: false,
  },
  isDetailsClicked: {
    type: Boolean,
    default: false,
  },
  isImage: {
    type: Boolean,
    default: false,
  },

  // Identifiers
  selectedChatId: {
    type: String,
    required: true,
  },
  showDetailsId: {
    type: String,
    default: null,
  },

  // Functions
  onCancelDeleteConfirmation: {
    type: Function,
    required: true,
  },
  onCopyChat: {
    type: Function,
    required: true,
  },
  onDeleteChat: {
    type: Function,
    required: true,
  },
  onPauseRecording: {
    type: Function,
    required: true,
  },
  onDeleteRecording: {
    type: Function,
    required: true,
  },
  onCloseAttachments: {
    type: Function,
    required: true,
  },

  // Messages and errors
  recordingErrorMessage: {
    type: String,
    required: true,
  },

  // File and image data
  selectedFile: {
    type: Object,
    default: null,
  },
  selectedImage: {
    type: Object,
    default: null,
  },
  imageURL: {
    type: String,
    default: "",
  },
  fileName: {
    type: String,
    default: "",
  },
});
</script>
