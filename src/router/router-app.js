import { addRoute } from '@/router/routes'

addRoute({
  path: '/',
  redirect: '/home',
  component: () => import('@/layouts/LoginLayout.vue'),
  children: [
    {
      path: 'login',
      name: 'login',
      component: () =>
        import(
          /* webpackChunkName: "Login" */ '@/views/Login.vue'
        ),
      meta: {
        screen: '',
        hasPermission: 'MEMBER_PROFILE:MENU',
        loginRequired: true
      }
    }
  ]
})
