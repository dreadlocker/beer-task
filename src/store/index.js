import Vue from "vue";
import Vuex from "vuex";
import * as types from "./types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    beers_array: []
  },
  mutations: {
    [types.BEERS_ARRAY]: (state, payload) => {
      state.beers_array = payload;
    }
  },
  actions: {
    [types.ACTION_BEERS_ARRAY]({ commit }, payload) {
      commit(types.BEERS_ARRAY, payload);
    }
  }
});
