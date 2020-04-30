<template>
  <h1 v-if="!favoriteBeersArray.length" class="favorite-empty">Favorites collection is empty</h1>
  <div v-else class="beers-holder">
    <BaseBeerWindow
      v-for="(obj, index) in favoriteBeersArray"
      :key="index"
      :beerObj="obj"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import BaseBeerWindow from "@/components/BaseBeerWindow.vue";

export default {
  name: "Favorites",
  components: {
    BaseBeerWindow
  },
  computed: {
    ...mapState({
      beers_array: state => state.beers_array
    }),
    favoriteBeersArray() {
      return this.beers_array.filter(obj => obj.favorite);
    }
  }
};
</script>
