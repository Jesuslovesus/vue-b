import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve => {
        require(['../views/login/index'], resolve)
      },
      hidden: true
    },
    {
      path: '/',

      name: 'Layout',
      component: resolve => {
        require(['../views/layout/layout'], resolve)
      },
      hidden: true
      // children
    }
  ]
})
