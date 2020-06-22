import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sliceIndex: 0,
  },
  mutations: {
    SETINDEX(state, n) {
      state.sliceIndex = n;
    },
  },
  actions: {
    SETINDEX({ commit }, n) {
      commit('SETINDEX', n);
    },
  },
});
