<template>
  <div>
    <div class="search-holder">
      <input ref="inp" type="text" placeholder="Search for beer..." class="search-input">
      <button
        @click="searchBeer"
        :disabled="!beers_array.length"
        :class="beers_array.length ? 'btn-active' : 'btn-disabled'"
        class="search-btn"
      >
        <div v-if="!beers_array.length" class="loader loader-small"></div>
        <span v-else>Search</span>
      </button>
    </div>

    <div v-if="!beers_array.length" class="loader loader-big"></div>
    <div v-else class="beers-holder">
      <BaseBeerWindow
        v-for="(obj, index) in beersArray"
        :key="index"
        :beerObj="obj"
      />
    </div>

  </div>
</template>

<script>
import { mapState } from "vuex";
import BaseBeerWindow from "@/components/BaseBeerWindow.vue";

export default {
  name: "Home",
  components: {
    BaseBeerWindow
  },
  computed: {
    ...mapState({
      beers_array: state => state.beers_array
    }),
    longestBeerNameLength() {
      return this.beers_array.map(obj => obj.name).sort((a, b) => b.length - a.length)[0].length;
    },
    beersArray() {
      return this.foundBeersArray.length ? this.foundBeersArray : this.beers_array;
    }
  },
  data() {
    return {
      foundBeersArray: []
    };
  },
  methods: {
    searchBeer() {
      const inputElement = this.$refs.inp;
      const searchFor = inputElement.value.trim();
      if(searchFor.length > this.longestBeerNameLength) {
        alert("Entered search value is too long!");
        inputElement.value = "";
        return inputElement.focus();
      }

      const regExp = new RegExp(searchFor, "gi");
      return this.foundBeersArray = this.beers_array.filter(obj => obj.name.match(regExp));
    }
  }
};
</script>
