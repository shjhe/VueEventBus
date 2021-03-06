import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DataTest',
      component: () => import('@/views/datatest')
    },
    {
      path: '/function',
      name: 'FunctionTest',
      component: () => import('@/views/functiontest')
    }
  ]
})
