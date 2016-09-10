import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routerMap from './router';
import store from './vuex/store';
import {
  setRouter,
  setReverse,
  setScrollTop,
} from './vuex/actions';

Vue.use(VueRouter);

const router = new VueRouter({
  history: true,
});

router.map(routerMap);

router.redirect({
  '*': '/',
});

router.start(App, '#app');

/**
 * use vuex to manager router history state
 */
const routerData = store.state.router || {};
const app = document.getElementById('app');

router.beforeEach(({ from, to, next }) => {
  const toPath = to.path;
  const fromPath = from.path;
  // const scrollTop = 100; // TODO
  const data = routerData[toPath];

  if (data && data.history || (fromPath && fromPath.indexOf(toPath) === 0)) {
    setReverse(store, true);
    setRouter(store, { path: toPath, history: false });
  } else {
    setRouter(store, { path: fromPath, history: true });
    setReverse(store, false);
  }

  setScrollTop(store, { path: fromPath, scrollTop: app.scrollTop });

  next();
});

/**
 * to set scrollTop
 */
router.afterEach(({ to: { path } }) => {
  Vue.nextTick(() => {
    if (routerData[path]) {
      app.scrollTop = routerData[path].scrollTop || 0;
    }
  });
});
