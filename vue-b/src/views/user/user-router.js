import Layout from '../layout/layout.vue'

export default [
  {
    path: '/user',
    meta: {
      title: '用户'
    },
    redirect: '/user/info',
    component: Layout,
    children: [
      {
        path: 'info',
        redirect: '/user/info',
        component: resolve => {
          require(['./index'], resolve)
        },
        name: 'userCenter'
        // children:
      }
    ]
  }
]
