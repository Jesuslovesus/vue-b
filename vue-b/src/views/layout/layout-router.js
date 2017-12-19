export default [
  {
    path: '/',
    meta: {
      title: '首页'
    },
    name: 'Layout',
    component: resolve => {
      require(['./layout'], resolve)
    },
    hidden: true
    // children
  }
]
