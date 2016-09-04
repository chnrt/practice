<template>
  <div>
    <Display></Display>
    <Increment></Increment>
  </div>
</template>

<script>
import Display from './components/Display.vue';
import Increment from './components/Increment.vue';
import store from './vuex/store.js';

export default {
  components: {
    Display,
    Increment,
  },
  store,
};
</script>
