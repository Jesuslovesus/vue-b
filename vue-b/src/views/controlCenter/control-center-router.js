export default [
  {
    path: '/controlCenter',
    meta: {
      title: '控制中心'
    },
    name: 'Layout',
    component: resolve => {
      require(['./index'], resolve)
    },
    hidden: true
    // children
  }
]
