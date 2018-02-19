import controlCenter from '../controlCenter/index.vue'

export default [
  {
    path: '/position',
    redirect: '/demo/position',
    component: controlCenter,
    children: [
      {
        path: '/demo/position',
        alias: '/position',
        meta: {
          title: '持仓'
        },
        component: resolve => {
          require(['./position'], resolve)
        },
        name: 'position'
        // children:
      }
    ]
  }
]
