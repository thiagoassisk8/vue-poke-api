<template>
  <v-btn @click="router.push({ name: 'Catalog' })" color="primary" variant="elevated">
    Back to catalog
  </v-btn>

  <div class="product">
    <div class="product-image">
      <img :src="pokemonImg" alt="pokemon" />
    </div>
    <div class="product-details">
      <p>Brand:</p>
      <p>Description:</p>
      <h2>Price:</h2>
      <v-btn variant="elevated" color="indigo-lighten-3" @click="addToCart">Add to cart</v-btn>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'PokemonDetail'
})
</script>

<script setup>
import { defineComponent, ref, computed, onMounted } from 'vue'
import { pokemonsStore } from '@/stores/pokemons'
import { useRoute, useRouter } from 'vue-router'

const store = pokemonsStore()
const router = useRouter()
const route = useRoute()
const pokemonImg = ref('')

const selectedProduct = computed(() => {
  return store.pokemons.find((item) => item.id === Number(route.params.id))
})

const fetchPokemonsImage = async () => {
  if (selectedProduct.value) {
    await store.fetchPokemonsImageByID(selectedProduct.value.id)
    console.log('n ta sendo chmada')
    console.log(pokemonImg)
    pokemonImg.value = store.pokemonImg
  }
}

const addToCart = () => {
  store.addToCart(selectedProduct.value)
  router.push({ name: 'CartView' })
}
</script>

<style scoped>
.product {
  display: flex;
  margin-top: 50px;
}

.product-image {
  margin-right: 24px;
}
</style>
