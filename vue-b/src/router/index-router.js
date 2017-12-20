// import Vue from 'vue'
// import Router from 'vue-router'
// Vue.use(Router)

export const indexRouterMap = [
  {
    path: '/login',
    meta: {
      title: '登录'
    },
    name: 'login',
    component: resolve => {
      require(['../views/login/index'], resolve)
    },
    hidden: true
  },
  {
    path: '/',
    alias: '/index',
    meta: {
      title: '首页'
    },
    name: 'index',
    component: resolve => {
      require(['../views/index/index'], resolve)
    },
    hidden: true
  }
]
