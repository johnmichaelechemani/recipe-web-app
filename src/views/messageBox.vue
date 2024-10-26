<template>
  <div>test: {{ selectedUserFromMessageBox }}, {{ userId }}</div>
</template>

<script setup>
import { ChatFuntions } from "../scripts/ChatFunctions.js";
const { selectedUserFromMessageBox, userId } = ChatFuntions();
console.log("from", selectedUserFromMessageBox);
</script>
