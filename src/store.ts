import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sliceIndex: 0,
    imageData: null,
  },
  mutations: {
    SETINDEX(state, n) {
      state.sliceIndex = n;
    },
    SETIMG(state, data) {
      state.imageData = data;
    },
  },
  actions: {
    SETINDEX({ commit }, n) {
      commit('SETINDEX', n);
    },
    SETIMG({ commit }, data) {
      commit('SETIMG', data);
    },
  },
});
