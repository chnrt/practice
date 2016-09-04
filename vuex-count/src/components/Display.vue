<template>
  <div>
    <h3>Count: {{ count }}</h3>
    <input v-model='count' type="text">
  </div>
</template>

<script>
import { getCount } from '../vuex/getters.js';
import { setnumber } from '../vuex/action.js';

export default {
  vuex: {
    getters: {
      getCount,
    },
    actions: {
      setnumber,
    },
  },
  computed: {
    count: {
      get() {
        return this.getCount;
      },
      set(newCount) {
        this.setnumber(newCount);
      },
    },
  },
};
</script>