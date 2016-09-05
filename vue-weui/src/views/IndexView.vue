<template>
  <div class="home">
    <div class="hd">
      <h1 class="page_title">Vue-WeUI</h1>
      <p class="page_desc">为微信Web服务量身设计</p>
    </div>
    <div class="bd">
      <div class="weui_grids">
        <a v-link="{name: 'button'}" class="weui_grid">
          <div class="weui_grid_icon"> <i class="icon icon_button"></i>
          </div>
          <p class="weui_grid_label">Button</p>
        </a>
        <a v-link="{name: 'cell'}" class="weui_grid">
          <div class="weui_grid_icon"> <i class="icon icon_cell"></i>
          </div>
          <p class="weui_grid_label">Cell</p>
        </a>
        <a v-link="{name: 'toast'}" class="weui_grid">
          <div class="weui_grid_icon">
            <i class="icon icon_toast"></i>
          </div>
          <p class="weui_grid_label">Toast</p>
        </a>
        <a v-link="{name: 'dialog'}" class="weui_grid">
          <div class="weui_grid_icon">
            <i class="icon icon_dialog"></i>
          </div>
          <p class="weui_grid_label">Dialog</p>
        </a>
        <a v-link="{name: 'progress'}" class="weui_grid">
          <div class="weui_grid_icon">
            <i class="icon icon_progress"></i>
          </div>
          <p class="weui_grid_label">Progress</p>
        </a>
        <a v-link="{name: 'msg'}" class="weui_grid">
          <div class="weui_grid_icon">
            <i class="icon icon_msg"></i>
          </div>
          <p class="weui_grid_label">Msg</p>
        </a>
        <a v-link="{name: 'article'}" class="weui_grid">
          <div class="weui_grid_icon">
            <i class="icon icon_article"></i>
          </div>
          <p class="weui_grid_label">Article</p>
        </a>
        <a v-link="{name: 'actionsheet'}" class="weui_grid">
          <div class="weui_grid_icon">
            <i class="icon icon_actionSheet"></i>
          </div>
          <p class="weui_grid_label">ActionSheet</p>
        </a>
        <a v-link="{name: 'icons'}" class="weui_grid">
          <div class="weui_grid_icon">
            <i class="icon icon_icons"></i>
          </div>
          <p class="weui_grid_label">Icons</p>
        </a>
        <a v-link="{name: 'panel'}" class="weui_grid">
          <div class="weui_grid_icon">
            <i class="icon icon_panel"></i>
          </div>
          <p class="weui_grid_label">Panel</p>
        </a>
        <a v-link="{name: 'tab'}" class="weui_grid">
          <div class="weui_grid_icon">
            <i class="icon icon_tab"></i>
          </div>
          <p class="weui_grid_label">Tab</p>
        </a>
        <a v-link="{name: 'searchbar'}" class="weui_grid">
          <div class="weui_grid_icon">
            <i class="icon icon_search_bar"></i>
          </div>
          <p class="weui_grid_label">SearchBar</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  };
</script>