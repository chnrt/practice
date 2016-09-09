import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routerMap from './router';
import { sessionStorage } from './api/Storage';

Vue.use(VueRouter);

const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
});

router.map(routerMap);

router.redirect({
  '*': '/',
});

router.start(App, '#app');

router.beforeEach(({ from, to, next }) => {
  const toPath = to.path;
  const fromPath = from.path;
  const scrollTop = 100; // TODO
  const h = sessionStorage.get(toPath);

  if (h && h.history || (fromPath && fromPath.indexOf(toPath) === 0)) {
    router.app.$el.className = 'transition-reverse';
    h.history = false;
    sessionStorage.set(toPath, h);
  } else {
    sessionStorage.set(fromPath, {
      scrollTop,
      history: true,
    });

    router.app.$el.className = '';
  }
  next();
});
