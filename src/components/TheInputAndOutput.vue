<script setup lang="ts">
import { store } from '../stores/expression';
</script>

<template>
  <div class="input-container">
    <textarea
      @input="store.checkAndEval()"
      type="text"
      class="input"
      v-model="store.expression"
      id="input"
      autofocus
    ></textarea>
    <div id="result" class="result">{{ store.result }}</div>
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  padding: 16px 16px;
  background-color: white;
  border-radius: 10px;
  height: 100%;
  justify-content: space-between;
  max-width: 100%;
}

input,
textarea {
  border-style: none;
  border-bottom: 1px solid gray;
  outline: none;
  color: #5a8bae;
  font-size: 20px;
  font-weight: 400;
  height: 100%;
}

.result {
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-align: center;
  min-height: 38px;
  max-width: 100%;
}
</style>
