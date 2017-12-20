// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// css
require('!style-loader!css-loader!less-loader!./assets/style/index.less')

import Vue from 'vue'
import App from './App'
// import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueRouter from 'vue-router'
// js
// 主路由，用于存放登录注册
import { indexRouterMap } from './router/index-router'
// 首页路由，用户、
import layoutPageRouterMap from './views/layout/layout-router'

import userPageRouterMap from './views/user/user-router'

Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(ElementUI)

// 定义路由，多个模式，主路由是indexRouterMap，有分路由就后面继续.concat进来
let routes = []

routes = indexRouterMap.concat(layoutPageRouterMap).concat(userPageRouterMap)

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  window.document.title = to.meta.title
  next()
})

/* 启动app */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
