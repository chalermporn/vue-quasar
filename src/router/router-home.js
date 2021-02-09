import { addRoute } from './routes'

addRoute({
  path: '/',
  redirect: '/home',
  component: () => import(/* webpackChunkName: "HomeLayout" */ '@/layouts/HomeLayout'),
  children: [
    {
      path: '/home',
      name: 'Home',
      component: () => import(/* webpackChunkName: "Home" */ '@/views/Home')
    }

  ]
})
