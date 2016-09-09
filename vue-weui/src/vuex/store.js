import Vue from 'vue';
import Vuex from 'vuex';
import {
  SET_ROUTER,
  DELETE_ROUTER,
  SET_REVERSE,
} from './mutations_type';

Vue.use(Vuex);

const state = {
  router: {},
  reverse: false,
};

/* eslint-disable no-param-reassign */
const mutations = {
  [SET_ROUTER](states, { path, history }) {
    states.router[path] = { history };
  },

  [DELETE_ROUTER](states, { path }) {
    delete states.router[path];
  },

  [SET_REVERSE](states, reverse) {
    states.reverse = reverse;
  },
};

export default new Vuex.Store({
  state,
  mutations,
});
