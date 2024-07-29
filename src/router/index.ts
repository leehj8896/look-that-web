import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import LookDetailView from '@/views/look-detail/LookDetailView.vue'
import CharacterView from '@/views/character-list/CharacterView.vue'
import CharacterDetailView from '@/views/character-detail/CharacterDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/look-detail/:lookId',
      name: 'look-detail',
      component: LookDetailView
    },
    {
      path: '/character',
      name: 'character',
      component: CharacterView,
    },
    {
      path: '/character-detail/:characterName',
      name: 'character-detail',
      component: CharacterDetailView,
    },
  ]
})

export default router
