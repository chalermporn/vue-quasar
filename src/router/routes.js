const routes = [
  {
    path: '/',
    redirect: '/home'
  }
]

function addRoute(route) {
  const PageNotFound = {
    path: '*',
    name: 'PageNotFound',
    component: () => import('@/views/Error404.vue'),
    meta: {
      screen: '',
      hasPermission: ''
    }
  }
  const page404 = {
    path: '/page404',
    name: 'page404',
    component: () => import('@/views/Error404.vue'),
    meta: {
      screen: '',
      hasPermission: ''
    }
  }

  const page403 = {
    path: '/page403',
    name: 'page403',
    component: () => import('@/views/Error403.vue'),
    meta: {
      screen: '',
      hasPermission: ''
    }
  }
  routes.push(route)
  routes.push(page403)
  routes.push(page404)
  routes.push(PageNotFound)
}

export { routes, addRoute }
