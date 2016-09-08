<template>
  <div>
    <div
      class="weui_cells_title"
      :class="titleStyle"
      v-if="title">
      {{ title }}
    </div>

    <div class="weui_cells" :class="cellsStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      titleStyle: {
        type: Object,
        default() {
          return {};
        },
      },
      cellsStyle: {
        type: Object,
        default() {
          return {};
        },
      },
    },
  };
</script>