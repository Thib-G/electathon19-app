import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        menu: true,
        longName: 'Home',
      },
      component: Home,
    },
    {
      path: '/entities',
      name: 'entities',
      meta: {
        menu: true,
        longName: 'Entities',
      },
      component: () => import(/* webpackChunkName: "entities" */ './views/Entities.vue'),
    },
    {
      path: '/candidates',
      name: 'candidates',
      meta: {
        menu: true,
        longName: 'Candidates',
      },
      component: () => import(/* webpackChunkName: "candidates" */ './views/Candidates.vue'),
    },
    {
      path: '/results',
      name: 'results',
      meta: {
        menu: true,
        longName: 'Results',
      },
      component: () => import(/* webpackChunkName: "results" */ './views/Results.vue'),
    },
    // {
    //   path: '/detail-results',
    //   name: 'detail-results',
    //   meta: {
    //     menu: true,
    //     longName: 'Detailed results',
    //   },
    //   component: () =>
    //   import(/* webpackChunkName: "detail-results" */ './views/DetailResults.vue'),
    // },
    {
      path: '/about',
      name: 'about',
      meta: {
        menu: true,
        longName: 'About',
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
