<template>
  <div>
    <group>
      <cell title="My Account" value="Protected" @click="click"></cell>
    </group>
  </div>
</template>

<script>
  import Group from 'vux-components/group';
  import Cell from 'vux-components/cell';

  export default {
    components: {
      Group,
      Cell,
    },

    methods: {
      click() {
        console.log('123');
      },
    },
  };
</script>
