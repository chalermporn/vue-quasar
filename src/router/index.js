import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

import './router-app'
import './router-home'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

export default router

// router.beforeResolve(async (to, from, next) => {
//   const { loginRequired, hasPermission } = to.meta
//   const $auth = Vue.prototype.$auth
//   const $app = Vue.prototype.$app
//   const $dialog = Vue.prototype.$dialog

//   if (loginRequired) {
//     if ($auth.authenticated) {
//       if (!hasPermission || $app.isPermit(hasPermission)) {
//         next()
//       } else {
//         next({ path: '/page404', replace: true })
//       }
//     } else {
//       $dialog.custom({
//         component: () =>
//           import('@/components/trd-dialogs/login/LoginDialog.vue'),
//         width: 423
//       })

//       next({ path: '/home', replace: true })
//     }
//   } else {
//     next()
//   }
// })
