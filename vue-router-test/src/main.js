import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

Vue.use(VueRouter);

const router = new VueRouter({
  history: true,
});

router.map({
  '/': {
    component: {
      template: '<p>This is Foo!</p>',
    },
  },
  '/bar': {
    component: {
      template: '<p>This is Bar!</p>',
    },
  },
});

router.redirect({
  '*': '/',
});

router.start(App, '#app');
