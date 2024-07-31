import { defineStore } from 'pinia'

export const pokemonsStore = defineStore('pokemons', {
  state: () => ({
    pokemons: [],
    pokemonImg: ''
  }),
  actions: {
    fetchPokemons() {
      fetch('https://pokeapi.co/api/v2/pokemon-species/')
        .then((res) => res.json())
        .then((json) => {
          this.pokemons = json.results
          this.next = json.next
          this.previous = json.previous
          this.count = json.count
        })
    }
  },
  //   todo fix that
  fetchPokemonsImagebyID(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((json) => {
        this.pokemonImg = json.sprites.front_default
      })
  }
})
