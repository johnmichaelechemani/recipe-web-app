<template>
  <transition>
    <div v-if="isSendMessageLoading" class="flex justify-center items-center">
      <span
        class="backdrop-blur-2xl flex justify-center items-center gap-2 bg-gray-400/20 border px-4 text-sm font-medium py-1 transition border-gray-500/20 rounded-full"
      >
        <span class="loading loading-dots loading-xs"></span>
        <span>Sending..</span></span
      >
    </div>
  </transition>
  <transition>
    <div v-if="isRecording" class="flex justify-center items-center gap-2">
      <span
        class="backdrop-blur-2xl flex justify-center items-center gap-2 bg-green-400/10 border px-2 text-sm font-medium py-1 transition border-green-500/20 rounded-full"
      >
        <span class="loading loading-ring text-green-500 loading-md"></span>
        <span>Recording..</span></span
      >
      <button
        @click="stopRecording()"
        class="backdrop-blur-2xl flex justify-center items-center gap-1 bg-red-400/10 border py-1 px-2 text-sm font-medium transition border-red-500/20 rounded-full"
      >
        <Icon
          icon="mynaui:stop-solid"
          width="20"
          height="20"
          class="text-red-500"
        />
        Stop
      </button>
    </div>
  </transition>
  <transition>
    <span
      v-if="recordingError"
      class="backdrop-blur-2xl flex justify-start items-center gap-1 bg-red-400/10 border py-1 px-2 text-sm font-medium transition border-red-500/20 rounded-full"
    >
      <Icon
        icon="material-symbols:error"
        class="text-red-500"
        width="20"
        height="20"
      />

      {{ recordingError }}
    </span>
  </transition>
  <transition>
    <div
      v-if="props.selectedFile || props.selectedImage !== null"
      class="ml-1 flex justify-start items-end gap-1 text-xs"
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
          ><Icon icon="fluent:attach-16-regular" width="20" height="20" />
          <span class="truncate max-w-52">{{ fileName }}</span></span
        >
        <button
          @click="closeAttachements()"
          class="backdrop-blur-2xl bg-gray-400/20 border p-0.5 hover:text-red-500 transition border-gray-500/20 rounded-full"
        >
          <Icon icon="iconamoon:close-light" width="20" height="20" />
        </button>
      </div>
    </div>
  </transition>

  <form ref="messageBoxContainer">
    <div
      class="flex justify-start items-center gap-2 bg-gray-400/20 backdrop-blur-3xl"
    >
      <div class="w-full border border-gray-500/20">
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
          class="w-full px-3 pt-3 placeholder:text-sm placeholder:text-gray-500 resize-none no-scrollbar bg-transparent outline-none"
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
              :class="isSendMessageLoading ? 'cursor-not-allowed' : ''"
              :disabled="isSendMessageLoading"
              @click.prevent="sendMessage"
              v-motion-fade
            >
              <Icon icon="bxs:send" class="text-xl text-gray-200" />
            </button>
            <button v-motion-fade v-else @click.prevent.stop="startRecording">
              <Icon icon="ic:round-mic" class="text-xl text-primary" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { ref, computed, watch, onMounted, Transition, nextTick } from "vue";

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
  selectedFile: {
    type: Object,
    default: null,
  },
  selectedImage: {
    type: Object,
    default: null,
  },
});
const emit = defineEmits(["update:modelValue"]);
const maxRows = 10;
const lineHeight = 24;
const messageContainer = ref(null);
const autoExpand = ref(null);
const messageBoxContainer = ref(null);

const imageInput = ref(null);
const fileInput = ref(null);
const fileName = ref("");
const selectedFile = ref(null);
const selectedImage = ref(null);
const imageURL = ref(null);
const isImage = ref(false);
const isRecording = ref(false);
const recordingError = ref("");
let recognition;
const isImageLoading = ref(true); // Track loading state

const onLoad = () => {
  console.log("loading is done!");
  isImageLoading.value = false; // Image has loaded, hide the loading indicator
};

const onError = () => {
  isImageLoading.value = false; // Handle error case (stop showing loading)
};

const startRecording = () => {
  if (!("webkitSpeechRecognition" in window)) {
    recordingError.value =
      "Speech recognition is not supported in this browser.";
    console.error("Speech recognition is not supported in this browser.");
    return;
  }

  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  recognition.onstart = () => {
    isRecording.value = true;
  };

  recognition.onresult = (event) => {
    const transcript = event.results[event.results.length - 1][0].transcript;
    emit("update:modelValue", transcript);
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event);
  };

  recognition.onend = () => {
    isRecording.value = false;
  };

  recognition.start();
};

const stopRecording = () => {
  if (recognition) {
    recognition.stop();
    isRecording.value = false;
  }
};
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

const onInput = (event) => {
  emit("update:modelValue", event.target.value);
  autoSpand();
};
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
onMounted(() => {
  autoSpand();
  if (messageContainer.value) {
    messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
  }
});

watch(
  () => props.filteredMessages,
  () => {
    nextTick(() => {
      if (messageContainer.value) {
        messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
      }
    });
  },
  { deep: true },

  props.modelValue,
  () => {
    autoSpand();
  }
);

const triggerImageInput = () => {
  if (imageInput.value) {
    imageInput.value.click();
    isImage.value = true;
  }
};

const triggerFileInput = () => {
  isImage.value = false;
  if (fileInput.value) {
    fileInput.value.click();
  }
};
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    selectedFile.value = file;
    emit("update:selectedFile", selectedFile.value);
    fileName.value = selectedFile.value.name;
    console.log(selectedFile.value);
  }
};
const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    selectedImage.value = file;
    emit("update:selectedImage", selectedImage.value);

    imageURL.value = URL.createObjectURL(file);
    fileName.value = selectedImage.value.name;
    console.log(selectedImage.value);
  }
};
const closeAttachements = () => {
  if (selectedFile.value || selectedImage.value) {
    fileName.value = "";
    imageURL.value = null;
    selectedImage.value = null;
    selectedFile.value = null;
    emit("update:selectedFile", null);
    emit("update:selectedImage", null);
  }
  console.log(selectedFile.value, selectedImage.value);
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
