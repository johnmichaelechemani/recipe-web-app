<template>
  <div
    @click="showInfo(m.id, m.message)"
    class="chat cursor-pointer py-[1px]"
    :class="m.senderId === userId ? 'chat-end' : 'chat-start'"
  >
    <div class="chat-image avatar">
      <div class="size-5 rounded-full" v-if="userId !== m.senderId">
        <img :src="selectedUser.userPhotoURL" />
      </div>
    </div>

    <div
      v-if="showDetailsId.isClick && showDetailsId.id === m.id"
      class="chat-header text-xs font-medium"
    >
      {{ m.senderId === userId ? "" : selectedUser.userName }}
    </div>

    <!-- massage with no image, file layout -->
    <div
      v-if="m.message && m.imageUrl === null && m.fileUrl === null"
      class="rounded-2xl whitespace-pre-line py-2 px-4 text-sm max-w-52"
      :class="
        userId === m.senderId
          ? 'chat-bubble-primary'
          : 'bg-gray-400/20 rounded-2xl'
      "
    >
      {{ m.message }}
    </div>

    <!-- image with message layout -->
    <div v-if="m.message && m.imageUrl" class="w-52">
      <div
        class="rounded-t-2xl whitespace-pre-line py-2 px-4 text-sm"
        :class="
          userId === m.senderId
            ? 'chat-bubble-primary'
            : 'border border-gray-500/20'
        "
      >
        {{ m.message }}
      </div>
      <div class="">
        <div
          v-if="isImageLoading"
          class="w-52 h-32 bg-gray-500/20 border border-gray-500/20 rounded-2xl"
        ></div>

        <img
          v-if="m.imageUrl"
          :src="m.imageUrl"
          loading="lazy"
          alt=""
          class="h-auto w-52 object-cover border bg-gray-500/20 border-gray-500/20 rounded-b-2xl"
          @load="onLoad"
          @error="onError"
        />
      </div>
    </div>
    <!-- image with no message layout -->
    <div v-if="m.imageUrl && m.message === ''" class="">
      <div
        v-if="isImageLoading"
        class="w-52 h-32 bg-gray-500/20 border border-gray-500/20 rounded-2xl"
      ></div>

      <img
        :src="m.imageUrl"
        loading="lazy"
        alt=""
        @load="onLoad"
        @error="onError"
        class="h-auto w-52 object-cover bg-gray-500/20 border border-gray-500/20 rounded-2xl"
      />
    </div>

    <!-- file with no message layout -->
    <div
      v-if="m.fileUrl && m.message === ''"
      class="text-sm rounded-2xl backdrop-blur-2xl max-w-52 bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"
    >
      <a
        :href="m.fileUrl"
        download
        class="flex justify-start items-center gap-2"
      >
        <Icon icon="simple-icons:googledocs" width="16" height="16" />{{
          m.fileName
        }}</a
      >
    </div>

    <!-- file with message layout -->
    <div v-if="m.message && m.fileUrl" class="max-w-52">
      <div
        class="rounded-t-2xl whitespace-pre-line py-2 px-4 text-sm"
        :class="
          userId === m.senderId
            ? 'chat-bubble-primary'
            : 'border border-gray-500/20'
        "
      >
        {{ m.message }}
      </div>
      <div
        class="text-sm rounded-b-2xl backdrop-blur-2xl bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"
      >
        <a
          :href="m.fileUrl"
          download
          class="flex justify-start items-center gap-2"
        >
          <Icon icon="simple-icons:googledocs" width="16" height="16" />{{
            m.fileName
          }}</a
        >
      </div>
    </div>

    <div
      v-if="showDetailsId.isClick && showDetailsId.id === m.id && !m.isSending"
      class="chat-footer opacity-50 font-semibold text-xs"
    >
      {{ m.isSending ? "Sending..." : "Delivered" }}
      <time class="text-[10px] opacity-80"> {{ formatTime(m.timestamp) }}</time>
    </div>
    <div class="chat-footer opacity-50 font-semibold text-xs">
      {{ m.isSending ? "Sending..." : "" }}
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { Icon } from "@iconify/vue";
const props = defineProps({
  showInfo: {
    type: Function,
    required: true,
  },
  m: {
    type: Object,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  selectedUser: {
    type: Object,
    required: true,
  },
  isImageLoading: {
    type: Boolean,
    default: false,
  },
  showDetailsId: {
    type: Object,
    required: true,
  },
  formatTime: {
    type: Function,
    required: true,
  },
  onLoad: {
    type: Function,
    required: true,
  },
  onError: {
    type: Function,
    required: true,
  },
});
</script>
