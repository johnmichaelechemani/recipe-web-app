<template>
  <ul>
    <li v-for="(item, index) in selectedItem" :key="item.id">
      <div class="flex justify-start items-center gap-4 my-1">
        <div>
          <Icon
            v-if="itemDesables.some((item) => item === index)"
            icon="lets-icons:check-fill"
            class="text-green-500 text-sm"
          />
          <span v-else class="text-xs">{{ index + 1 }}</span>
        </div>

        <div
          class="text-xs px-2 py-1 bg-gray-400/10 flex justify-start items-center gap-2 font-medium cursor-pointer rounded-md"
          @click="handleClick(index)"
          :class="
            itemDesables.some((item) => item === index) ? 'line-through' : ''
          "
        >
          {{ item }}
        </div>
      </div>
    </li>
  </ul>
</template>
<script setup>
import { Icon } from "@iconify/vue";
const props = defineProps({
  selectedItem: {
    type: Object,
    required: true,
  },
  itemDesables: {
    type: Array,
  },
  handleClick: {
    type: Function,
    required: true,
  },
});
</script>
