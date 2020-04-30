<template>
  <div v-if="!beers_array.length" class="loader loader-big"></div>
  <div v-else class="screen-centered">
    <BaseBeerWindow :beerObj="randomBeer" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import BaseBeerWindow from "@/components/BaseBeerWindow.vue";

export default {
  name: "RandomBeer",
  components: {
    BaseBeerWindow
  },
  computed: {
    ...mapState({
      beers_array: state => state.beers_array
    }),
    randomBeer() {
      const randomNumber = Math.floor(Math.random () * ((this.beers_array.length - 1) - 0 + 1)) + 0;
      return this.beers_array[randomNumber];
    }
  }
};
</script>
