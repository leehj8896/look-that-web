import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LookDetailView from '../views/LookDetailView.vue'
import CharacterView from '../views/CharacterView.vue'
import CharacterDetailView from '../views/CharacterDetailView.vue'

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
