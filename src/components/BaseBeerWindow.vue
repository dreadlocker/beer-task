<template>
  <div class="single-beer-window-holder">
    <div class="beer-favorite-section">
      <span
        @click="addOrRemoveFromFavorite"
        class="favorite-icon"
      >{{beerObj.favorite ? "&#9733;" : "&#9734;"}}</span>
    </div>

    <div class="flex">
      <img @click="playOpenBottleSound" :src="beerObj.image_url" class="beer-img">
      <div class="beer-info">
        <div class="beer-name">{{beerObj.name}}</div>
        <div class="beer-description">{{description}}</div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "BaseBeerWindow",
  props: {
    beerObj: {
      type: Object,
      required: true
    },
  },
  computed: {
    ...mapState({
      beers_array: state => state.beers_array
    }),
    description() {
      return `${this.beerObj.description.slice(0, 100)}...`;
    }
  },
  methods: {
    addOrRemoveFromFavorite() {
      const currentBeerObj = this.beers_array.filter(obj => obj.id === this.beerObj.id)[0];
      let favoriteBool = currentBeerObj["favorite"];
      return currentBeerObj["favorite"] = !favoriteBool;
    },
    playOpenBottleSound() {
      return this.audio.play();
    }
  },
  created() {
    const audioFilePath = require("@/assets/sound/open cap.mp3");
    this.audio = new Audio(audioFilePath);
  }
};
</script>
