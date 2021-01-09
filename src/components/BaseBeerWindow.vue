<template>
  <div class="single-beer-window-holder">
    <div class="beer-favorite-section">
      <span @click="toggleFavorite" class="favorite-icon">{{
        beer.favorite ? "&#9733;" : "&#9734;"
      }}</span>
    </div>

    <div class="flex">
      <img
        @click="playOpenBottleSound"
        :src="beer.image_url"
        class="beer-img"
      />
      <div class="beer-info">
        <div class="beer-name">{{ beer.name }}</div>
        <div class="beer-description">{{ description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BaseBeerWindow",
  props: {
    beer: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState({
      beers: (state) => state.beers,
    }),
    description() {
      return `${this.beer.description.slice(0, 100)}...`;
    },
  },
  methods: {
    toggleFavorite() {
      const currentBeer = this.beers.filter(
        (beer) => beer.id === this.beer.id
      )[0];
      return (currentBeer["favorite"] = !currentBeer["favorite"]);
    },
    playOpenBottleSound() {
      return this.audio.play();
    },
  },
  created() {
    const audioFilePath = require("@/assets/sound/open cap.mp3");
    this.audio = new Audio(audioFilePath);
  },
};
</script>
