<template>
  <h1 v-if="!favoriteBeers.length" class="favorite-empty">
    Favorites collection is empty
  </h1>
  <div v-else class="beers-holder">
    <BaseBeerWindow
      v-for="(beer, index) in favoriteBeers"
      :key="index"
      :beer="beer"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import BaseBeerWindow from "@/components/BaseBeerWindow.vue";

export default {
  name: "Favorites",
  components: {
    BaseBeerWindow,
  },
  computed: {
    ...mapState({
      beers: (state) => state.beers,
    }),
    favoriteBeers() {
      return this.beers.filter((beer) => beer.favorite);
    },
  },
};
</script>
