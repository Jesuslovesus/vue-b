import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/a',

      name: 'HelloWorld',
      component: HelloWorld,
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
