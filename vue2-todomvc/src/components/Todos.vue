<style src="todomvc-app-css/index.css"></style>

<template>
  <section id="app" class="todoapp">
    <!-- header -->
    <header class="header">
      <h1>待办</h1>
      <input class="new-todo"
        autofocus
        autocomplete="off"
        placeholder="需要做什么？"
        @keyup.enter="tryAddTodo">
    </header>
    <!-- main section -->
    <section class="main" v-show="todos.length">
      <input class="toggle-all"
        type="checkbox"
        :checked="allChecked"
        @change="toggleall({ done: !allChecked })">
      <ul class="todo-list">
        <todo v-for="todo in filteredTodos" :todo="todo"></todo>
      </ul>
    </section>
    <!-- footer -->
    <footer class="footer" v-show="todos.length">
      <span class="todo-count">
        还剩
        <strong>{{ remaining }}</strong>
        个
      </span>
      <ul class="filters">
        <li v-for="(val, key) in filters">
          <a :class="{ selected: visibility === key }"
            @click="visibility = key">
            {{ key }}
          </a>
        </li>
      </ul>
      <button class="clear-completed"
        v-show="todos.length > remaining"
        @click="clearcompleted">
        清除完成
      </button>
    </footer>
  </section>
</template>

<script>
import Todo from 'components/Todo.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Todos',
  components: {
    Todo,
  },

  data() {
    return {
      visibility: 'all',
      filters: {
        all: todos => todos,
        active: todos => todos.filter(todo => !todo.done),
        completed: todos => todos.filter(todo => todo.done),
      },
    };
  },

  computed: {
    todos() {
      return this.$store.state.todos;
    },

    filteredTodos() {
      return this.filters[this.visibility](this.todos);
    },

    allChecked() {
      return this.todos.every(todo => todo.done);
    },

    remaining() {
      return this.todos.filter(todo => !todo.done).length;
    },
  },

  methods: {
    tryAddTodo(e) {
      const text = e.target.value;
      if (text.trim()) {
        this.addtodo({ text });
      }
      e.target.value = ''; // eslint-disable-line
    },

    ...mapActions([
      'addtodo',
      'toggleall',
      'clearcompleted',
    ]),
  },
};
</script>
