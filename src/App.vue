<template>
  <div id="app">
    <div id="nav">
      <div class="logo">{{logoLabel}}</div>
      <div class="nav-right-side">
        <router-link to="/" class="margin-right">Home</router-link>
        <router-link to="/favorites" class="margin-right">Favorites</router-link>
        <router-link to="/random-beer">Get Random Beer</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import BeersService from "@/services/BeersService.js";
import { mapActions } from "vuex";
import { ACTION_BEERS_ARRAY } from "@/store/types.js";

export default {
  name: "Home",
  data() {
    return {
      logoLabel: "Beans Love Beers"
    };
  },
  methods: {
    ...mapActions({
      action_beers_array: ACTION_BEERS_ARRAY,
    })
  },
  created() {
    BeersService.getBeers()
      .then(response => {
        response.data.forEach(obj => obj.favorite = false);
        this.action_beers_array(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="sass">
@import "@/assets/styles/main.sass"
</style>
