<template>
  <div>
    <button @click='increment'>increment +1</button>
  </div>
</template>

<script>
import { increment } from '../vuex/action.js';

export default {
  vuex: {
    actions: {
      increment,
    },
  },
};
</script>