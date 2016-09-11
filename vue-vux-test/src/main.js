import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routerMap from './routerMap';

Vue.use(VueRouter);

const router = new VueRouter({
  history: true,
});

router.map(routerMap);

router.redirect({
  '*': '/',
});

router.start(App, 'app');
