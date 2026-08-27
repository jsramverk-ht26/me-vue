<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Nav from './Nav.vue'

const route = useRoute()
const questions = ref([])

async function fetchReport(kmom) {
  const res = await fetch(`https://me-api.jsramverk.se/reports/${kmom}`)
  const data = await res.json()
  questions.value = data.data
}

watch(() => route.params.kmom, (kmom) => fetchReport(kmom), { immediate: true })
</script>

<template>
  <main>
    <Nav />
    <h2>{{ route.params.kmom }}</h2>
    <div class="question" v-for="(q, index) in questions" :key="index">
      <p><strong>{{ q.question }}</strong></p>
      <p>{{ q.answer }}</p>
    </div>
  </main>
</template>

<style scoped>
h2 { text-transform: uppercase; }
.question { margin-bottom: 2em; }
</style>
