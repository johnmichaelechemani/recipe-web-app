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
      class="h-dvh pb-[150px] sm:pb-0 sm:h-[366px] sm:mb-[86px] rounded-md overflow-auto"
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
          :isSendMessageLoading="isSendMessageLoading"
        />
      </div>
      <div v-if="isLoading">
        <MessageLoading />
      </div>
    </div>

    <div class="fixed bottom-0 z-50 inset-x-0">
      <transition>
        <div v-if="isShowCopied" class="flex justify-center items-center">
          <span
            class="backdrop-blur-2xl flex justify-center items-center gap-4 bg-green-400/20 border px-4 text-sm font-medium py-1 transition border-green-500/20 text-green-500 rounded-full"
          >
            <p class="text-xs">Copied!</p>
          </span>
        </div>
      </transition>
      <transition>
        <div
          v-if="isShowDeleteConfirmation"
          class="flex justify-center items-center"
        >
          <span
            class="backdrop-blur-2xl flex justify-center items-center gap-4 bg-gray-400/20 border px-8 text-sm font-medium py-2 transition border-gray-500/20 rounded-md"
          >
            <div class="grid place-items-center cursor-pointer transition">
              <p class="text-xs">Are you sure to delete this message?</p>
              <div class="flex justify-start items-center gap-4 mt-2">
                <button
                  @click="cancelDeleteConfirmation()"
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
          v-if="selectedChatId === showDetailsId.id && showDetailsId.isClick"
          class="fixed bottom-0 backdrop-blur-2xl py-5 z-50 inset-x-0"
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
                @click="deleteChat(showDetailsId.id)"
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
          v-if="isSendMessageLoading"
          class="flex justify-center items-center"
        >
          <span
            class="backdrop-blur-2xl flex justify-center items-center gap-2 bg-gray-400/20 border px-4 text-sm font-medium py-1 transition border-gray-500/20 rounded-full"
          >
            <span class="loading loading-dots loading-xs"></span>
            <span>Sending..</span></span
          >
        </div>
      </transition>
      <transition>
        <RecordingModal
          :isShowRecordingModal="isShowRecordingModal"
          :isPause="isPause"
          :playRecord="playRecord"
          :pauseRecording="pauseRecording"
          :isRecording="isRecording"
          :elapsedTime="elapsedTime"
          :stopRecording="stopRecording"
          :startRecording="startRecording"
          :deleteRecording="deleteRecording"
          :recordingProgress="recordingProgress"
        />
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
            @click="pauseRecording()"
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
            @click="deleteRecording()"
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
          v-if="isRecordingError"
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
                  :class="isSendMessageLoading ? 'cursor-not-allowed' : ''"
                  :disabled="isSendMessageLoading"
                  @click.prevent="sendMessage"
                  v-motion-fade
                >
                  <Icon icon="bxs:send" class="text-xl text-gray-200" />
                </button>
                <button
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
import { Icon } from "@iconify/vue";
import { ref, computed, watch, onMounted, Transition, nextTick } from "vue";

import MessageLoading from "../components/messageLoading.vue";
import RecordingModal from "./recordingModal.vue";
import MessageLayout from "./messageLayout.vue";
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
const isImageLoading = ref(true); // Track loading state
const textToCopy = ref("");
const isPause = ref(true);
const isShowRecordingModal = ref(false);

let audioBlob = null;
let audioUrl = null;
let audioPlayer = null;
let mediaRecorder = null;

//time
const elapsedTime = ref("0:0:0");
let startTime = null;
let timerInterval = null;
const recordingProgress = ref(0);
const isRecordingError = ref(false);

const formatRecordTime = (totalMilliseconds) => {
  const seconds = Math.floor(totalMilliseconds / 1000);
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(1, "0");
  const secs = (seconds % 60).toString().padStart(1, "0");
  const millis = (totalMilliseconds % 1000)
    .toString()
    .padStart(3, "0")
    .slice(0, 1);
  return `${mins}:${secs}.${millis}`;
};

const updateTimer = () => {
  const millisecondsElapsed = Date.now() - startTime;
  elapsedTime.value = formatRecordTime(millisecondsElapsed);
};

const startRecording = async () => {
  console.log("recording start...");
  recordingProgress.value = 0;
  clearInterval(timerInterval);
  isPause.value = true;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (e) => {
      audioBlob = e.data;
      audioUrl = URL.createObjectURL(audioBlob);
      audioPlayer = new Audio(audioUrl);
    };

    mediaRecorder.start();
    isRecording.value = true;
    startTime = Date.now();
    timerInterval = setInterval(() => {
      if (recordingProgress.value < 100) {
        recordingProgress.value += 1; // Increment progress
      } else {
        clearInterval(timerInterval); // Stop at 100%
      }

      updateTimer();
    }, 100);
  } catch (error) {
    recordingError.value = "Recording is not supported or failed.";
    isRecordingError.value = true;
    setTimeout(() => {
      isRecordingError.value = false;
    }, 2000);
    console.error(error);
  }
};

const stopRecording = () => {
  console.log("recording stoped...");
  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
    isRecording.value = false;
    isPause.value = true;

    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null; // Reset the interval
    }
  }
};

const playRecord = () => {
  console.log("playing");
  if (audioPlayer) {
    audioPlayer.play();
    isPause.value = false;
  }
};

const pauseRecording = () => {
  console.log("paused");

  // Stop any ongoing recording
  stopRecording();

  isShowRecordingModal.value = true;
  if (audioPlayer) {
    audioPlayer.pause();
    isPause.value = true;
  }
};

const deleteRecording = () => {
  console.log("Recording deleted...");

  // Stop any ongoing recording
  stopRecording();

  isRecording.value = false;
  isShowRecordingModal.value = false;

  if (audioPlayer) {
    audioPlayer.pause(); // Stop playback
    audioPlayer.currentTime = 0; // Reset playback position
  }

  // Clear audio resources
  if (audioUrl) {
    console.log("Clearing audio URL:", audioUrl);
    URL.revokeObjectURL(audioUrl);
    audioBlob = null;
    audioUrl = null;
    audioPlayer = null;
    isPause.value = true;
  }
};

//-----------
const onLoad = () => {
  console.log("loading is done!");
  isImageLoading.value = false;
};

const onError = () => {
  isImageLoading.value = false;
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

let selectedChatId = ref(null);
const showDetailsId = ref({
  id: null,
  isClick: false,
});
const showInfo = (chatId, text) => {
  textToCopy.value = text;
  selectedChatId.value = chatId;
  console.log(chatId);
  if (showDetailsId.value.id === chatId) {
    showDetailsId.value.id = null;
    showDetailsId.value.isClick = false;
    console.log(showDetailsId.value.id);
    console.log(showDetailsId.value.isClick);
  } else {
    showDetailsId.value.isClick = true;
    showDetailsId.value.id = chatId;
  }
};
const isShowDeleteConfirmation = ref(false);
const isShowCopied = ref(false);
const cancelDeleteConfirmation = () => {
  isShowDeleteConfirmation.value = false;
  showDetailsId.value.id = null;
  showDetailsId.value.isClick = false;
};
const deleteChat = (chatId) => {
  isShowDeleteConfirmation.value = true;
  console.log(chatId);
};

const copyChat = () => {
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      isShowCopied.value = true;
      console.log(textToCopy.value);

      setTimeout(() => {
        isShowCopied.value = false;
      }, 2000);
    })
    .catch((error) => {
      console.error("Failed to copy text: ", error);
    });

  showDetailsId.value.id = null;
  showDetailsId.value.isClick = false;

  console.log("copied");
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
