import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showDialog: false,
    secret: '',
    timer: null,
  },
  mutations: {
    SET_SHOW_DIALOG: (state, show) => {
      state.showDialog = show;
    },
    SET_SECRET: (state, str) => {
      state.secret = str;
    },
    SET_TIMER: (state, timer) => {
      state.timer = timer;
    },
  },
  actions: {
    setShowDialog({ commit }, show) {
      commit('SET_SHOW_DIALOG', show);
    },
    setSecret({ commit }, str) {
      commit('SET_SECRET', str);
    },
    setTimer({ commit }, timer) {
      commit('SET_TIMER', timer);
    },
  },
  getters: {
    getShowDialog: (state) => state.showDialog,
    getSecret: (state) => state.secret,
    getTimer: (state) => state.timer,
  },
});
