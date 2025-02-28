import { defineRouter } from '#q-app/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default defineRouter(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })
  Router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('user') // Check if user exists
    console.log('Navigating away from:', from.path)
  
    if (to.path === '/login' && isAuthenticated) {
      next('/') // Redirect logged-in users to home if they visit login page
    } else if (to.meta.requiresAuth && !isAuthenticated) {
      next('/login') // Redirect to login if trying to access a protected page
    } else {
      next() // Allow navigation
    }
  })

  return Router
})
