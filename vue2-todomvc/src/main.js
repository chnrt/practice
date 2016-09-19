import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Hello from 'components/Hello';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
    path: '/',
    component: App,
  }, {
    path: '/test',
    component: Hello,
  }],
});

/* eslint-disable no-new */
new Vue({
  render(createElement) {
    return createElement('router-view');
  },
  router,
}).$mount('#app');
