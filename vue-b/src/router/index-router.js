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
    meta: {
      title: '首页'
    },
    name: 'Layout',
    component: resolve => {
      require(['../views/layout/layout.vue'], resolve)
    },
    hidden: true
    // children
  }
]
