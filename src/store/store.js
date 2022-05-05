import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  flavor: "",
};

const mutations = {
  change(state, flavor) {
    state.flavor = flavor;
  },
};

const getters = {
  flavor: (state) => state.flavor,
};

export const store = new Vuex.Store({
  state,
  mutations,
  getters,
});
