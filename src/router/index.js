import { createRouter, createWebHistory } from 'vue-router'
import Me from '../components/Me.vue'
import Report from '../components/Report.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Me },
    { path: '/report/:kmom', component: Report }
  ]
})

export default router
