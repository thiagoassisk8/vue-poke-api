<template>
  <div class="products-list">
    <v-text-field clearable label="Label" prepend-icon="$vuetify"></v-text-field>
    <div v-for="pokemon in store.pokemons">
      {{ pokemon.name }}
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ProductItem from '@/components/ProductItem.vue'
export default defineComponent({
  name: 'CatalogView',
  components: {
    ProductItem
  }
})
</script>

<script setup>
import { onMounted, ref } from 'vue'
import { pokemonsStore } from '@/stores/pokemons'
import { useRouter } from 'vue-router'

const store = pokemonsStore()
const router = useRouter()

const search = ref('')

const goToProductPage = (id) => {
  router.push({ name: 'ProductView', params: { id } })
}

onMounted(async () => {
  await store.fetchPokemons()
})
</script>

<style scoped></style>
