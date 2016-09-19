import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Hello from 'components/Hello';
import Todos from 'components/Todos';
import store from './vuex/store';

Vue.use(VueRouter);

const router = new VueRouter({
  base: __dirname,
  mode: 'history',
  routes: [{
    path: '/',
    component: Todos,
  }, {
    path: '/test',
    component: Hello,
  }],
});

/* eslint-disable no-new */
new Vue({
  store,
  render: h => h(App),
  router,
}).$mount('#app');
