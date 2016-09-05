import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import IndexView from './views/IndexView.vue';
import ActionsheetView from './views/ActionsheetView.vue';
import ArticlView from './views/ArticlView.vue';
import ButtonView from './views/ButtonView.vue';
import CellView from './views/CellView.vue';
import DialogView from './views/DialogView.vue';
import IconsView from './views/IconsView.vue';
import MsgView from './views/MsgView.vue';
import PanelView from './views/PanelView.vue';
import ProgressView from './views/ProgressView.vue';
import SearchbarView from './views/SearchbarView.vue';
import TabView from './views/TabView.vue';
import ToastView from './views/ToastView.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
});

router.map({
  '/': {
    name: 'index',
    component: IndexView,
  },

  '/button': {
    name: 'button',
    component: ButtonView,
  },

  '/actionsheet': {
    name: 'actionsheet',
    component: ActionsheetView,
  },

  '/article': {
    name: 'article',
    component: ArticlView,
  },

  '/cell': {
    name: 'cell',
    component: CellView,
  },

  '/dialog': {
    name: 'dialog',
    component: DialogView,
  },

  '/icons': {
    name: 'icons',
    component: IconsView,
  },

  '/msg': {
    name: 'msg',
    component: MsgView,
  },

  '/panel': {
    name: 'panel',
    component: PanelView,
  },

  '/progress': {
    name: 'progress',
    component: ProgressView,
  },

  '/searchbar': {
    name: 'searchbar',
    component: SearchbarView,
  },

  '/tab': {
    name: 'tab',
    component: TabView,
  },

  '/toast': {
    name: 'toast',
    component: ToastView,
  },
});

router.redirect({
  '*': '/',
});

router.start(App, '#app');
