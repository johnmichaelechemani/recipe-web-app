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
          :isSendMessageLoading="isSendMessageLoading"
        />
      </div>
      <div v-if="isLoading">
        <MessageLoading />
      </div>
    </div>

    <div class="fixed bottom-0 z-50 inset-x-0">
      <!-- message attachements and error and success alerts -->
      <MessageAttachments
        :isShowCopied="isShowCopied"
        :isShowDeleteConfirmation="isShowDeleteConfirmation"
        :onCancelDeleteConfirmation="cancelDeleteConfirmation"
        :selectedChatId="selectedChatId"
        :showDetailsId="showDetailsId.id"
        :isDetailsClicked="showDetailsId.isClick"
        :isSendMessageLoading="isSendMessageLoading"
        :onCopyChat="copyChat"
        :onDeleteChat="deleteChat"
        :isRecording="isRecording"
        :onPauseRecording="pauseRecording"
        :onDeleteRecording="deleteRecording"
        :isRecordingError="isRecordingError"
        :recordingErrorMessage="recordingError"
        :selectedFile="props.selectedFile"
        :selectedImage="props.selectedImage"
        :isImage="isImage"
        :imageURL="imageURL"
        :fileName="fileName"
        :onCloseAttachments="closeAttachements"
      />
      <!--  -->
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
import MessageAttachments from "./messageAttachments.vue";
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
const isImageLoading = ref(true);
const textToCopy = ref("");
const isPause = ref(true);
const isShowRecordingModal = ref(false);
const recordingDuration = ref(60000);

let audioBlob = null;
let audioUrl = null;
let audioPlayer = null;
let mediaRecorder = null;

//time
const elapsedTime = ref("0:00.0");
let startTime = null;
let timerInterval = null;
const recordingProgress = ref(0);
const isRecordingError = ref(false);
let audioProgress = ref(0);

const formatRecordTime = (totalMilliseconds) => {
  const seconds = Math.floor(totalMilliseconds / 1000);
  const mins = Math.floor(seconds / 60)
    .toString()
    .padStart(1, "0");
  const secs = (seconds % 60).toString().padStart(2, "0"); // Changed to pad with 2 zeros
  const millis = (totalMilliseconds % 1000)
    .toString()
    .padStart(3, "0")
    .slice(0, 1);
  return `${mins}:${secs}:${millis}`;
};

const updateTimer = () => {
  if (isRecording.value) {
    // During recording
    const currentTime = Date.now();
    const elapsedMs = currentTime - startTime;
    elapsedTime.value = formatRecordTime(elapsedMs);
    // Update progress based on recording time
    recordingProgress.value = (elapsedMs / recordingDuration.value) * 100;
  }
};

const startRecording = async () => {
  console.log("recording start...");
  updateTimer();
  recordingProgress.value = 0;
  audioProgress.value = 0;
  clearInterval(timerInterval);
  isPause.value = true;
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (e) => {
      audioBlob = e.data;
      audioUrl = URL.createObjectURL(audioBlob);
      audioPlayer = new Audio(audioUrl);

      // Add event listeners for the audio player
      audioPlayer.addEventListener("timeupdate", updateAudioProgress);
      audioPlayer.addEventListener("ended", handleAudioEnd);
    };

    mediaRecorder.start();
    isRecording.value = true;
    startTime = Date.now();

    if (audioPlayer) {
      audioPlayer.pause();
    }
    timerInterval = setInterval(() => {
      updateTimer();
      // Auto-stop recording if it reaches max duration
      if (recordingProgress.value >= 100) {
        stopRecording();
      }
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

const updateAudioProgress = () => {
  if (audioPlayer && !isRecording.value) {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    recordingProgress.value = progress;
    elapsedTime.value = formatRecordTime(audioPlayer.currentTime * 1000);
  }
};

const handleAudioEnd = () => {
  isPause.value = true;
  recordingProgress.value = 100;
  if (audioPlayer) {
    elapsedTime.value = formatRecordTime(audioPlayer.duration * 1000);
  }
};

const stopRecording = () => {
  console.log("recording stopped...");
  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
    isRecording.value = false;
    isPause.value = true;

    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    // Store the final recording duration
    const finalDuration = Date.now() - startTime;
    elapsedTime.value = formatRecordTime(finalDuration);
  }
};

const playRecord = () => {
  console.log("playing");

  if (audioPlayer) {
    // Reset progress when starting playback
    recordingProgress.value = 0;
    audioPlayer.currentTime = 0;
    audioPlayer.play();
    isPause.value = false;

    // Start updating progress for playback
    if (!timerInterval) {
      timerInterval = setInterval(() => {
        updateAudioProgress();
      }, 100);
    }
  }
};

const pauseRecording = () => {
  console.log("paused");

  if (isRecording.value) {
    stopRecording();
  } else if (audioPlayer) {
    audioPlayer.pause();
    isPause.value = true;

    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  isShowRecordingModal.value = true;
};
const deleteRecording = () => {
  console.log("Recording deleted...");

  stopRecording();
  isRecording.value = false;
  isShowRecordingModal.value = false;

  if (audioPlayer) {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    audioPlayer.removeEventListener("timeupdate", updateAudioProgress);
    audioPlayer.removeEventListener("ended", handleAudioEnd);
  }
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  if (audioUrl) {
    URL.revokeObjectURL(audioUrl);
    audioBlob = null;
    audioUrl = null;
    audioPlayer = null;
    isPause.value = true;
    recordingProgress.value = 0;
    elapsedTime.value = "0:00.0";
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
