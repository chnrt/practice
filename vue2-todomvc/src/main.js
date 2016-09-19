import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Hello from 'components/Hello';

Vue.use(VueRouter);

const router = new VueRouter({
  base: __dirname,
  mode: 'history',
  routes: [{
    path: '/test',
    component: Hello,
  }],
});

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
