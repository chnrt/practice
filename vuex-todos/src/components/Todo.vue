<template>
  <li class="todo" :class="{ completed: todo.done, editing: editing }">
    <div class="view">
      <input class="toggle"
        type="checkbox"
        :checked="todo.done"
        @change="toggletodo(todo)">
      <label v-text="todo.text" @dblclick="editing = true"></label>
      <button class="destroy" @click="deletetodo(todo)"></button>
    </div>
    <input class="edit"
      v-show="editing"
      v-focus="editing"
      :value="todo.text"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
      @blur="doneEdit">
  </li>
</template>

<script>
import {
  toggletodo,
  deletetodo,
  edittodo,
} from '../vuex/actions';

export default {
  props: {
    todo: Object,
  },

  data() {
    return {
      editing: false,
    };
  },

  vuex: {
    actions: {
      toggletodo,
      deletetodo,
      edittodo,
    },
  },

  methods: {
    doneEdit(e) {
      const value = e.target.value.trim();
      if (!value) {
        this.deletetodo(this.todo);
      } else {
        this.edittodo(this.todo, value);
        this.editing = false;
      }
    },

    cancelEdit() {
      this.editing = false;
    },
  },
};
</script>