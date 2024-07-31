import { createRouter, createWebHistory } from 'vue-router'
import PokemonDetail from '../views/PokemonDetail.vue'
import Catalog from '../views/Catalog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Catalog
    },
    {
      path: '/pokemon/:id',
      name: 'PokemonView',
      component: PokemonDetail
    }
  ]
})

export default router
