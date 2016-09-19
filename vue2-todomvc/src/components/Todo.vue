<template>
  <li class="todo" :class="{ completed: todo.done, editing: editing }">
    <div class="view">
      <input class="toggle"
        type="checkbox"
        :checked="todo.done"
        @change="toggletodo({ todo: todo })">
      <label v-text="todo.text" @dblclick="editing = true"></label>
      <button class="destroy" @click="deletetodo({ todo: todo })"></button>
    </div>
    <input class="edit"
      v-show="editing"
      :value="todo.text"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
      @blur="doneEdit">
  </li>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Todo',

  props: {
    todo: Object,
  },

  data() {
    return {
      editing: false,
    };
  },

  methods: {
    doneEdit(e) {
      const value = e.target.value.trim();
      const { todo } = this;

      if (!value) {
        this.deletetodo({ todo });
      } else {
        this.edittodo({ todo, value });
        this.editing = false;
      }
    },

    cancelEdit() {
      this.editing = false;
    },

    ...mapActions([
      'toggletodo',
      'deletetodo',
      'edittodo',
    ]),
  },
};
</script>