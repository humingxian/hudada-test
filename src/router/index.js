import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/hudada-test/index',
    name: 'hudada-test-index',
    redirect: '/hudada-test/home'
  },
  {
    path: '/hudada-test/home',
    name: 'hudada-test-home',
    component: () => import('../page/home/index.vue'),
    redirect: '/hudada-test/home/a',
    children: [
      {
        path: 'a',
        name: 'hudada-test-home-a',
        component: () => import('../page/home/children/a.vue'),
        redirect: '/hudada-test/home/a/A',
        children: [
          {
            path: 'A',
            name: 'hudada-test-home-a-A',
            component: () => import('../page/home/children/children/A.vue')
          },
          {
            path: 'B',
            name: 'hudada-test-home-a-B',
            component: () => import('../page/home/children/children/B.vue')
          }
        ]
      },
      {
        path: 'b',
        name: 'hudada-test-home-b',
        component: () => import('../page/home/children/b.vue')
      }
    ]
  },
  {
    path: '/hudada-test/about',
    name: 'hudada-test-about',
    component: () => import('../page/about/index.vue')
  }
]

export default new Router({
  routes: routes
})

export const TestRoutes = routes
