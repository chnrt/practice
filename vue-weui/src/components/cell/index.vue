<template>
  <a class="weui_cell" v-if="isLink">
    <div class="weui_cell_hd">
      <slot name="icon"></slot>
    </div>

    <div class="weui_cell_bd weui_cell_primary">
      <p>{{ header }}</p>
    </div>

    <div class="weui_cell_ft">{{ value }}</div>
  </a>

  <div class="weui_cell" v-if="!isLink">
    <div class="weui_cell_hd">
      <slot name="icon"></slot>
    </div>

    <div class="weui_cell_bd weui_cell_primary">
      <p>{{ header }}</p>
    </div>

    <div class="weui_cell_ft">{{ value }}</div>
  </div>
</template>

<script>
  export default {
    props: {
      isLink: Boolean,
      header: String,
      value: String,
    },
  };
</script>