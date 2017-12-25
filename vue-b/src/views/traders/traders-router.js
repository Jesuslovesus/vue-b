import controlCenter from '../controlCenter/index.vue'

export default [
  {
    path: '/trader',
    redirect: '/trader',
    component: controlCenter,
    children: [
      {
        path: '/trader',
        meta: {
          title: '交易员'
        },
        component: resolve => {
          require(['./index'], resolve)
        },
        name: 'trader'
        // children:
      }
    ]
  }
]
