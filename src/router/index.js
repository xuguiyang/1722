import Vue from 'vue'
import Router from 'vue-router'
// import City from '@pages/city'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      meta: {
        title: '主页'
      },
      component: () => import('@/pages/index')
    },
    {
      path: '/city/:id',
      name: 'City',
      meta: {
        title: '城市'
      },
      component: () => import('@/pages/city')
    },
    {
      path: '/region/:id',
      name: 'Region',
      meta: {
        title: '城市'
      },
      component: () => import('@/pages/region')
    }
  ]
})
