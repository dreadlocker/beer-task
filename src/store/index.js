import Vue from "vue";
import Vuex from "vuex";
import * as types from "./types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    beers: null
  },
  mutations: {
    [types.BEERS]: (state, payload) => {
      state.beers = payload;
    }
  },
  actions: {
    [types.ACTION_BEERS]({ commit }, payload) {
      commit(types.BEERS, payload);
    }
  }
});
