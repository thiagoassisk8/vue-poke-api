<template>
  <v-sheet class="ma-2 pa-2">
    <v-card class="product">
      <v-img :src="props.pokemonData.thumbnail" height="200px" cover />

      <v-card-title>
        {{ props.pokemonData.name }}
      </v-card-title>

      <v-card-subtitle> $ {{ props.pokemonData.name }} </v-card-subtitle>

      <v-card-text>
        {{ props.pokemonData.url }}
      </v-card-text>

      <v-card-actions>
        <v-btn @click="goToProductPage(props.pokemonData.id)"> Add to cart </v-btn>
      </v-card-actions>
    </v-card>
  </v-sheet>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'ProductItem'
})
</script>

<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  pokemonData: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['item-clicked'])

const goToProductPage = (productId) => {
  emit('item-clicked', productId)
}
</script>
