<script setup>
import { ref, onMounted } from 'vue'
import Nav from './Nav.vue'

const message = ref('')

onMounted(async () => {
  const res = await fetch('https://me-api.jsramverk.se')
  const data = await res.json()
  message.value = data.description
})
</script>

<template>
  <main>
    <Nav />
    <h1>Me</h1>
    <p>{{ message }}</p>
  </main>
</template>
