import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  todos: [],
};

/* eslint-disable */
const mutations = {
  ADD_TODO(state, text) {
    state.todos.push({
      text: text,
      done: false,
    });
  },

  DELETE_TODO(state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },

  TOGGLE_TODO(state, todo) {
    todo.done = !todo.done;
  },

  TOGGLE_ALL(state, bl) {
    state.todos.map(function(todo){
      todo.done = bl;
    });
  },

  EDIT_TODO(state, todo, text) {
    todo.text = text;
  },

  CLEAR_COMPLETED(state) {
    state.todos = state.todos.filter(todo => !todo.done);
  },
};

export default new Vuex.Store({
  state,
  mutations,
});
