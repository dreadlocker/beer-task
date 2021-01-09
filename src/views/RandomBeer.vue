<template>
  <div v-if="!beers.length" class="loader loader-big"></div>
  <div v-else class="screen-centered">
    <BaseBeerWindow :beer="randomBeer" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import BaseBeerWindow from "@/components/BaseBeerWindow.vue";

export default {
  name: "RandomBeer",
  components: {
    BaseBeerWindow,
  },
  computed: {
    ...mapState({
      beers: (state) => state.beers,
    }),
    randomBeer() {
      const randomNumber =
        Math.floor(Math.random() * (this.beers.length - 1 - 0 + 1)) + 0;
      return this.beers[randomNumber];
    },
  },
};
</script>
