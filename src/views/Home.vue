<template>
  <div>
    <div class="search-holder">
      <input
        @keyup.enter="search"
        v-model="searchVal"
        ref="inp"
        type="text"
        placeholder="Search for beer..."
        class="search-input"
      />
      <button
        @click="search"
        :disabled="!haveBeers"
        :class="haveBeers ? 'btn-active' : 'btn-disabled'"
        class="search-btn"
      >
        <div v-if="!haveBeers" class="loader loader-small"></div>
        <span v-else>Search</span>
      </button>
    </div>

    <div v-if="!haveBeers" class="loader loader-big"></div>
    <h1 v-if="haveBeers && !this.haveFoundBeers" class="favorite-empty">
      No beers found
    </h1>
    <div v-else class="beers-holder">
      <BaseBeerWindow
        v-for="(beer, index) in this.beersToRender"
        :key="index"
        :beer="beer"
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
    BaseBeerWindow,
  },
  computed: {
    ...mapState({
      beers: (state) => state.beers,
    }),
    longestBeerNameLength() {
      return this.beers
        .map((beer) => beer.name)
        .sort((a, b) => b.length - a.length)[0].length;
    },
    haveBeers() {
      return !!this.beers;
    },
    haveFoundBeers() {
      return !!this.beersFound?.length;
    },
    beersToRender() {
      return this.haveFoundBeers ? this.beersFound : this.beers;
    },
  },
  data() {
    return {
      beersFound: [],
      searchVal: "",
    };
  },
  methods: {
    search() {
      const searchWord = this.searchVal.trim();

      if (searchWord.length > this.longestBeerNameLength) {
        alert("Entered search value is too long!");
        this.searchVal = "";
        this.$refs.inp.focus();
        return;
      }

      const regExp = new RegExp(searchWord, "gi");
      this.beersFound = this.beers.filter((beer) => beer.name.match(regExp));
    },
  },
  created() {
    this.beersFound = this.beers;
  },
  watch: {
    beers: function (newvVal) {
      if (newvVal) {
        this.beersFound = newvVal;
      }
    },
  },
};
</script>