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
  // {
  //   path: '/test',
  //   name: 'hudadaTestTest',
  //   component: () => import('../page/test.vue')
  // },
  // {
  //   path: '/animate',
  //   name: 'hudadaTestAnimate',
  //   component: () => import('../page/animate')
  // },
  // {
  //   path: '/three',
  //   name: 'hudadaTestThree',
  //   component: () => import('../page/three'),
  //   redirect: '/three/example_01',
  //   children: [
  //     {
  //       path: 'example_01',
  //       name: 'hudadaTestThreeExample_01',
  //       component: () => import('../page/three/example_01.vue')
  //     },
  //     {
  //       path: 'example_02',
  //       name: 'hudadaTestThreeExample_02',
  //       component: () => import('../page/three/example_02.vue')
  //     },
  //     {
  //       path: 'example_03',
  //       name: 'hudadaTestThreeExample_03',
  //       component: () => import('../page/three/example_03.vue')
  //     },
  //     {
  //       path: 'example_04',
  //       name: 'hudadaTestThreeExample_04',
  //       component: () => import('../page/three/example_04.vue')
  //     }
  //   ]
  // }
]

export default new Router({
  routes: routes
})

export const TestRoutes = routes
