import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: {
        menu: false,
        longName: 'indexRedirect',
      },
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        menu: true,
        longName: 'Home',
      },
      component: Home,
    },
    {
      path: '/entities',
      redirect: '/entities/CK',
      meta: {
        menu: true,
        longName: 'Entities',
      },
    },
    {
      path: '/entities/:id',
      name: 'entities',
      meta: {
        menu: false,
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
      redirect: '/seats',
      meta: {
        menu: false,
        longName: 'Results',
      },
    },
    {
      path: '/results/:id',
      redirect: '/seats/:id',
      meta: {
        menu: false,
        longName: 'Results',
      },
    },
    // {
    //   path: '/results/:id',
    //   name: 'results',
    //   meta: {
    //     menu: false,
    //     longName: 'Results',
    //   },
    //   component: () => import(/* webpackChunkName: "results" */ './views/Results.vue'),
    // },
    {
      path: '/seats',
      redirect: '/seats/CK',
      meta: {
        menu: true,
        longName: 'Seats',
      },
    },
    {
      path: '/seats/:id',
      name: 'seats',
      meta: {
        menu: false,
        longName: 'Seats',
      },
      component: () => import(/* webpackChunkName: "seats" */ './views/Seats.vue'),
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

router.beforeEach((to, from, next) => {
  const appName = 'Electathon 2019';
  document.title = `${appName} - ${to.meta.longName}`;
  next();
});

export default router;
