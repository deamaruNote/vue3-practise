// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/initiative',
      name: 'initiative',
      meta: {
        title: '取組み紹介',
      },
      component: () => import('../views/InitiativeView.vue')
    },
    {
      path: '/travelers',
      name: 'travelers',
      meta: {
        title: '旅行者にできること',
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TravelersView.vue')
    },
    {
      path: '/travelers/:userId',
      name: 'travelers_',
      meta: {
        title: '旅行者にできること',
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TravelersSub.vue')
    },
    {
      path: '/movie',
      name: 'movie',
      meta: {
        title: '関連映像',
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/MovieView.vue')
    },
    {
      path: '/communities',
      name: 'communities',
      meta: {
        title: 'コミュニティ',
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CommunitiesView.vue')
    },
    {
      path: '/folder',
      name: 'folder',
      meta: {
        title: '特集',
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FolderView.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {
  const title = (to.meta.title === undefined) ? 'Malama Hawaii' : to.meta.title; 
  document.title = title;
  next();
});
router.afterEach((to, from, next) => {
  const app = document.getElementById('app');
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
export default router

