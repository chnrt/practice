<template>
  <div class="container js_container">
    <router-view 
      keep-alive
      transition="slide">
    </router-view>
  </div>
</template>

<script>
  import store from './vuex/store';
  import {
    setRouter,
    deleteRouter,
  } from './vuex/actions/actions';

  export default {
    store,

    vuex: {
      getters: {
        router: state => state.router,
      },

      actions: {
        setRouter,
        deleteRouter,
      },
    },

    ready() {
      // this.setRouter({ path: '/', history: false });
    },
  };
</script>

<style>
  @import '../node_modules/weui/dist/style/weui.css';

  body,html {
    height: 100%;
    -webkit-tap-highlight-color: transparent;
  }
  body {
    overflow-x: hidden;
    background-color: #fbf9fe;
  }
  .container {
    height: 100%;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  .container > div {
    background-color: #fbf9fe;
  }
  .hd {
    padding: 2em 0;
  }
  .page_title {
    text-align: center;
    font-size: 34px;
    color: #3cc51f;
    font-weight: 400;
    margin: 0 15%;
  }
  .page_desc {
    text-align: center;
    color: #888;
    font-size: 14px;
  }
  .bd.spacing {
    padding: 0 15px;
  }
  .home {
    padding-bottom: 30px;
  }
  .button .page_title {
    color: #225fba;
  }
  .button .bd {
    padding: 0 15px;
  }
  .button .button_sp_area {
    padding: 10px 0;
    width: 60%;
    margin: 0 auto;
    text-align: justify;
    text-justify: distribute-all-lines;
    font-size: 0;
  }
  .button .button_sp_area: after {
    display: inline-block;
    width: 100%;
    height: 0;
    font-size: 0;
    margin: 0;
    padding: 0;
    overflow: hidden;
    content: ".";
  }
  .cell .page_title {
    color: #225fba;
  }
  .cell .bd {
    padding-bottom: 30px;
  }
  .dialog .bd,.toast .bd {
    padding: 120px 15px 0;
  }
  .msg {
    background-color: #fff;
  }
  .panel .bd {
    padding-bottom: 20px;
  }
  .article {
    background-color: #fff;
  }
  .article .page_title {
    color: #de7c23;
  }
  .icons {
    background-color: #fff;
    text-align: center;
  }
  .icons .page_title {
    color: #3e24bd;
  }
  .icons .bd {
    padding: 30px 0;
    text-align: center;
  }
  .icons .icon_sp_area {
    padding: 10px 20px;
    text-align: left;
  }
  .icons i {
    margin: 0 5px 10px;
  }
  .tabbar {
    height: 100%;
  }
  .search_show {
    display: none;
    margin-top: 0;
    font-size: 14px;
  }
  .search_show .weui_cell_bd {
    padding: 2px 0 2px 20px;
    color: #666;
  }
  .icon {
    display: inline-block;
    width: 28px;
    height: 28px;
    vertical-align: middle;
  }
  .icon_button {
    background: url(./assets/weui/icon_nav_button.png) no-repeat;
    background-size: 28px 28px;
  }
  .icon_cell {
    background: url(./assets/weui/icon_nav_cell.png) no-repeat;
    background-size: 28px 28px;
  }
  .icon_toast {
    background: url(./assets/weui/icon_nav_toast.png) no-repeat;
    background-size: 28px 28px;
  }
  .icon_dialog {
    background: url(./assets/weui/icon_nav_dialog.png) no-repeat;
    background-size: 28px 28px;
  }
  .icon_progress {
    background: url(./assets/weui/icon_nav_progress.png) no-repeat;
    background-size: 28px 28px;
  }
  .icon_msg {
    background: url(./assets/weui/icon_nav_msg.png) no-repeat;
    background-size: 28px 28px;
  }
  .icon_article {
    background: url(./assets/weui/icon_nav_article.png) no-repeat;
    background-size: 28px 28px;
  }
  .icon_actionSheet {
    background: url(./assets/weui/icon_nav_actionSheet.png) no-repeat;
    background-size: 28px 28px;
  }
  .icon_icons {
    background: url(./assets/weui/icon_nav_icons.png) no-repeat;
    background-size: 28px 28px;
  }
  .icon_panel {
    background: url(./assets/weui/icon_nav_panel.png) no-repeat;
    background-size: 28px 28px;
  }
  .icon_tab {
    background: url(./assets/weui/icon_nav_tab.png) no-repeat;
    background-size: 28px 28px;
  }
  .icon_search_bar {
    background: url(./assets/weui/icon_nav_search_bar.png) no-repeat;
    background-size: 28px 28px;
  }

  .slide-transition {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: all .3s;
  }
  .slide-enter {
    opacity: 0;
    transform: translate3d(70%, 0, 0);
  }
  .slide-leave {
    opacity: 0;
    transform: translate3d(-70%, 0, 0);
  }

  .transition-reverse .slide-enter {
    opacity: 0;
    transform: translate3d(-70%, 0, 0);
  }
  .transition-reverse .slide-leave {
    opacity: 0;
    transform: translate3d(70%, 0, 0);
  }
</style>