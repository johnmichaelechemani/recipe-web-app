import { Icon } from "@iconify/vue";
import { ref, computed, watch, onMounted, Transition, nextTick } from "vue";

// global vars

const imageInput = ref(null);
const fileInput = ref(null);
const fileName = ref("");
const selectedFile = ref(null);
const selectedImage = ref(null);
const imageURL = ref(null);
const isImage = ref(false);
const isRecording = ref(false);
const recordingError = ref("");
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

let selectedChatId = ref(null);
const showDetailsId = ref({
  id: null,
  isClick: false,
});
//

export function chatFileAttachments() {
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
  return {
    selectedChatId,
    showDetailsId,
    isShowDeleteConfirmation,
    isShowCopied,
    isImage,
    deleteChat,
    selectedFile,
    selectedImage,
    imageURL,
    fileName,
    closeAttachements,
    cancelDeleteConfirmation,
    copyChat,
    Icon,
    showInfo,
    handleFileChange,
    handleImageChange,
    triggerFileInput,
    triggerImageInput,
  };
}

export function recordingFunctions() {
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
  return {
    startRecording,
    pauseRecording,
    deleteRecording,
    stopRecording,
    isShowRecordingModal,
    isPause,
    playRecord,
    recordingProgress,
    elapsedTime,
    isRecording,
    Icon,
  };
}
