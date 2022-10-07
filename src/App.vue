<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <header>calculator</header>
  <RouterView />
</template>

<style scoped>
header {
  text-transform: uppercase;
  font-size: 20px;
  text-align: center;
  letter-spacing: 0.08em;
  font-variant: small-caps;
  font-weight: 400;
  margin-bottom: 32px;
  margin-top: 16px;
}
</style>
