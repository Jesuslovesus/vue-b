// import Vue from 'vue'
// import Router from 'vue-router'
// Vue.use(Router)

export const indexRouterMap = [
  {
    path: '/logins',
    redirect: '/login',
    meta: {
      title: '登录'
    },
    name: 'login',
    component: resolve => {
      require(['../views/login/index'], resolve)
    },
    hidden: true
  }
]
