<template>
  <transition>
    <div v-if="isShowCopied" class="flex mb-1 justify-center items-center">
      <span
        class="backdrop-blur-2xl flex justify-center items-center gap-4 bg-green-400/20 border px-4 text-sm font-medium py-1 transition border-green-500/20 text-green-500 rounded-full"
      >
        <p class="text-xs">Copied!</p>
      </span>
    </div>
  </transition>
  <transition>
    <div v-if="isShowDeleted" class="flex mb-1 justify-center items-center">
      <span
        class="backdrop-blur-2xl flex justify-center items-center gap-4 bg-red-400/20 border px-4 text-sm font-medium py-1 transition border-red-500/20 text-red-500 rounded-full"
      >
        <p class="text-xs">Operation failed! (in dev mode)</p>
      </span>
    </div>
  </transition>
  <transition>
    <div
      v-if="isShowDeleteConfirmation"
      class="flex justify-center items-center"
    >
      <span
        class="backdrop-blur-2xl mb-1 flex justify-center items-center gap-4 bg-gray-400/20 border px-8 text-sm font-medium py-2 transition border-gray-500/20 rounded-md"
      >
        <div class="grid place-items-center cursor-pointer transition">
          <p class="text-xs">Are you sure to delete this message?</p>
          <div class="flex justify-start items-center gap-4 mt-2">
            <button
              @click.stop="cancelDeleteConfirmation()"
              class="px-2 py-1 rounded-md border border-gray-400/50"
            >
              Cancel
            </button>
            <button
              @click.stop="deleteConfirmation()"
              class="px-2 py-1 rounded-md text-gray-300 border border-red-500/20 bg-red-500"
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
      v-if="selectedChatId === showDetailsId.id && showDetailsId.isClick"
      class="fixed bottom-0 backdrop-blur-2xl py-4 rounded-t-2xl z-50 inset-x-0"
    >
      <div class="flex justify-center items-center">
        <span
          class="backdrop-blur-2xl flex justify-center items-center gap-4 bg-gray-400/20 border px-8 text-sm font-medium py-2 transition border-gray-500/20 rounded-full"
        >
          <div
            @click="copyChat()"
            class="grid place-items-center hover:text-green-500 cursor-pointer transition"
          >
            <Icon icon="solar:copy-linear" width="20" height="20" />
            <p class="text-xs">Copy</p>
          </div>
          <div
            @click="deleteChat()"
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
      v-if="(selectedFile || selectedImage) && isSendMessageLoading"
      class="ml-1 flex justify-start mb-1 items-end gap-1 text-xs"
    >
      <div v-if="isImage">
        <img
          :src="imageURL"
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
          <span class="truncate max-w-52">{{ fileName }}</span>
        </span>
        <button
          @click="closeAttachements()"
          class="backdrop-blur-2xl bg-gray-400/20 border p-0.5 hover:text-red-500 transition border-gray-500/20 rounded-full"
        >
          <Icon icon="iconamoon:close-light" width="20" height="20" />
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { watch } from "vue";
import { chatFileAttachments } from "../scripts/chatAttachments";
const props = defineProps({
  isSendMessageLoading: {
    type: Boolean,
    default: null,
  },
});
const {
  selectedChatId,
  showDetailsId,
  isShowDeleteConfirmation,
  isShowCopied,
  isShowDeleted,
  isImage,
  deleteChat,
  selectedFile,
  selectedImage,
  imageURL,
  fileName,
  closeAttachements,
  cancelDeleteConfirmation,
  deleteConfirmation,
  copyChat,
  Icon,
} = chatFileAttachments();
watch(
  () => props.isSendMessageLoading,
  (newValue) => {
    if (!newValue) {
      selectedImage.value = null;
      selectedFile.value = null;
    }
  }
);
</script>
