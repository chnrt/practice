import Vue from 'vue';
import Vuex from 'vuex';
import {
  SET_ROUTER,
  DELETE_ROUTER,
} from './mutations_type';

Vue.use(Vuex);

const state = {
  router: {},
};

/* eslint-disable no-param-reassign */
const mutations = {
  [SET_ROUTER](states, { path, history }) {
    states.router[path] = { history };
  },

  [DELETE_ROUTER](states, { path }) {
    delete states.router[path];
  },
};

export default new Vuex.Store({
  state,
  mutations,
});
