import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  flavor: "",
  count: 0,
};

const mutations = {
  change(state, flavor) {
    state.flavor = flavor;
  },
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
};

const actions = {
  increment: ({ commit }) => commit("increment"),
  decrement: ({ commit }) => commit("decrement"),
  incrementIfOdd({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit("increment");
    }
  },
  incrementAsync({ commit }) {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit("increment");
        resolve();
      }, 2000);
    });
  },
};

const getters = {
  flavor: (state) => state.flavor,
  evenOrOdd: (state) => (state.count % 2 === 0 ? "even" : "odd"),
};

export const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});
