<template>
  <header></header>
  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { useRouter } from 'vue-router'

import { pokemonsStore } from './stores/pokemons'

const router = useRouter()
const store = pokemonsStore()
</script>

<style scoped>
.cart-items {
  text-align: end;
  padding: 16px;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
}
</style>
