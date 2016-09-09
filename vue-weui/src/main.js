import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routerMap from './router';
import store from './vuex/store';
import {
  setRouter,
  setReverse,
} from './vuex/actions/actions';

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

/**
 * use vuex to manager router history state
 */
const routerData = store.state.router || {};
// const dispatch = store.dispatch;

router.beforeEach(({ from, to, next }) => {
  const toPath = to.path;
  const fromPath = from.path;
  // const scrollTop = 100; // TODO
  const h = routerData[toPath];

  if (h && h.history || (fromPath && fromPath.indexOf(toPath) === 0)) {
    setReverse(store, true);
    setRouter(store, { path: toPath, history: false });
  } else {
    setRouter(store, { path: fromPath, history: true });
    setReverse(store, false);
  }
  next();
});
