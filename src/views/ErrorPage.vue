<template>
  <div class="error-page">
    <h2>CBC HET IS STUCK!!!11!!1!! </h2>
    <p>{{ errorMessage }}</p>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const errorMessage = computed(() => route.query.error );
</script>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffe5e5;
  color: #d9534f;
  text-align: center;
}
.error-page h2 {
  font-size: 2em;
  margin-bottom: 0.5em;
}
.error-page p {
  font-size: 1.2em;
  margin-bottom: 1em;
}
</style>
