import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';

Vue.use(Vuex);

const state = {
  todos: [],
};

/* eslint-disable */
const mutations = {
  ADD_TODO(state, { text }) {
    state.todos.push({
      text: text,
      done: false,
    });
  },

  DELETE_TODO(state, { todo }) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },

  TOGGLE_TODO(state, { todo }) {
    todo.done = !todo.done;
  },

  TOGGLE_ALL(state, { done }) {
    state.todos.map(todo => todo.done = done);
  },

  EDIT_TODO(state, { todo, value }) {
    todo.text = value;
  },

  CLEAR_COMPLETED(state) {
    state.todos = state.todos.filter(todo => !todo.done);
  },
};

export default new Vuex.Store({
  actions,
  state,
  mutations,
});
