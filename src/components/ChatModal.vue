<template>
  <div class="modal-box relative p-2 no-scrollbar">
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
    <div
      class="h-[366px] mb-[86px] rounded-md overflow-y-scroll"
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
            v-if="m.message"
            class="chat-bubble text-sm"
            :class="userId === m.senderId ? 'chat-bubble-primary' : ''"
          >
            {{ m.message }}
          </div>
          <div
            v-if="m.fileUrl"
            class="text-sm rounded-2xl backdrop-blur-2xl bg-gray-500/20 font-medium border border-gray-500/20 px-4 py-3"
          >
            <a :href="m.fileUrl" download class=" flex justify-start items-center gap-1">
              <Icon icon="simple-icons:googledocs" width="16" height="16" />{{
                m.fileName
              }}</a
            >
          </div>
          <div v-if="m.imageUrl" class="">
            <img
              :src="m.imageUrl"
              alt=""
              class="h-auto w-52 object-cover border border-gray-500/20 rounded-2xl"
            />
          </div>

          <div class="chat-footer opacity-50 font-semibold text-xs">
            {{
              m.isSendMessageLoading ? "Sending... bugs, hehehe" : "Delivered"
            }}
          </div>
        </div>
      </div>
      <div v-if="isLoading">
        <MessageLoading />
      </div>
    </div>

    <div class="fixed bottom-0 z-50 inset-x-0">
      <div
        v-if="fileName"
        class="ml-1 flex justify-start items-end gap-1 text-xs"
      >
        <div v-if="isImage">
          <img
            :src="imageURL"
            alt=""
            class="size-14 rounded-xl backdrop-blur-2xl object-cover bg-gray-400/20 border border-gray-500/20"
          />
        </div>
        <div class="flex justify-start items-center gap-1">
          <span
            class="backdrop-blur-2xl flex bg-gray-400/20 justify-start items-center gap-2 px-2 py-1 border border-gray-500/20 rounded-xl"
            ><Icon icon="fluent:attach-16-regular" width="20" height="20" />
            <span>{{ fileName }}</span></span
          >
          <button
            @click="closeAttachements(selectedFile, fileName, selectedImage)"
            class="backdrop-blur-2xl bg-gray-400/20 border p-0.5 hover:text-red-500 transition border-gray-500/20 rounded-full"
          >
            <Icon icon="iconamoon:close-light" width="20" height="20" />
          </button>
        </div>
      </div>
      <form ref="messageBoxContainer">
        <div
          class="my-1 mx-1 flex justify-start items-center rounded-2xl gap-2 bg-gray-400/20 backdrop-blur-2xl shadow"
        >
          <div class="w-full rounded-2xl border border-gray-500/20 shadow">
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
              class="w-full px-3 pt-3 placeholder:text-sm placeholder:text-gray-500 resize-none rounded-2xl no-scrollbar bg-transparent outline-none"
            />

            <div class="flex justify-between items-center m-3 h-5">
              <div class="flex justify-center items-center gap-1">
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
                  @click.prevent="sendMessage"
                  v-motion-fade
                >
                  <Icon icon="bxs:send" class="text-xl text-gray-200" />
                </button>
                <button
                  v-motion-fade
                  v-else
                  class="cursor-not-allowed"
                  disabled
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
const imageInput = ref(null);

const fileInput = ref(null);
const fileName = ref("");
const selectedFile = ref(null);
const selectedImage = ref(null);
const imageURL = ref(null);
const isImage = ref(false);

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
    console.log(selectedFile.value);
  }
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
