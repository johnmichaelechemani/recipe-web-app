<template>
  <div
    v-if="isShowRecordingModal"
    class="fixed bottom-0 backdrop-blur-2xl py-5 z-50 inset-x-0"
  >
    <div class="flex justify-center items-center mb-4 gap-1 mx-2">
      <div
        class="backdrop-blur-2xl flex justify-start w-full items-center gap-2 bg-gray-400/20 border px-2 text-sm font-medium py-2 transition border-gray-500/20 rounded-l-xl"
      >
        <div class="flex justify-start w-full items-center">
          <button @click="isPause ? playRecord() : pauseRecording()">
            <Icon
              :icon="isPause ? 'iconoir:play-solid' : 'ic:round-pause'"
              width="20"
              height="20"
            />
          </button>
          <div class="w-full border border-gray-500/20 rounded-2xl h-5"></div>
        </div>
        <div class="max-w-20 text-[10px]">{{ elapsedTime }}</div>
      </div>
      <button
        class="px-2 bg-gray-400/20 border hover:text-green-500 transition border-gray-500/20 rounded-r-xl py-2"
        @click="isRecording ? stopRecording() : startRecording()"
      >
        <Icon
          :icon="!isRecording ? 'fluent:mic-pulse-48-filled' : 'ic:round-stop'"
          width="20"
          height="20"
          :class="!isRecording ? '' : 'text-red-500'"
        />
      </button>
    </div>
    <div class="px-2 flex justify-between items-center gap-1">
      <div class="flex justify-start items-center gap-1">
        <button
          @click="deleteRecording()"
          class="backdrop-blur-2xl flex justify-center items-center gap-1 py-1 hover:bg-red-500/10 px-2 text-sm font-medium transition rounded-full"
        >
          <Icon
            icon="mingcute:delete-fill"
            width="20"
            height="20"
            class="text-red-500"
          />
        </button>

        <button
          @click="startRecording()"
          class="backdrop-blur-2xl flex justify-center items-center hover:bg-green-500/10 gap-1 py-1 px-2 text-sm font-medium transition rounded-full"
        >
          <Icon
            icon="ion:reload"
            width="20"
            height="20"
            class="text-green-500"
          />
        </button>
      </div>
      <div>
        <button
          class="bg-blue-500 cursor-not-allowed hover:bg-blue-600 transition text-gray-100 rounded-full px-4 py-2 flex justify-start items-center gap-2"
        >
          <span class="text-sm font-meduim">Send</span>
          <Icon icon="bxs:send" class="text-xl text-gray-200" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
const props = defineProps({
  startRecording: {
    type: Function,
    required: true,
  },
  deleteRecording: {
    type: Function,
    required: true,
  },
  pauseRecording: {
    type: Function,
    required: true,
  },
  playRecord: {
    type: Function,
    required: true,
  },
  stopRecording: {
    type: Function,
    required: true,
  },

  isShowRecordingModal: {
    type: Boolean,
    default: false,
  },
  isPause: {
    type: Boolean,
    default: false,
  },
  isRecording: {
    type: Boolean,
    default: false,
  },
  elapsedTime: {
    type: String,
    default: null,
  },
});
</script>
