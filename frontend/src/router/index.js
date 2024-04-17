import { createRouter, createWebHistory } from 'vue-router'
import SeasonView from '../views/SeasonView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/seasons',
      name: 'seasons',
      component: SeasonView,
      meta: {
        checkAuth: true
      }
    },
    {
      path: '/',
      name: 'login',
      component: LoginView
    }
  ]
})

router.beforeEach((to, from, next) => {
  if(to.meta.checkAuth && !localStorage.getItem('token')) next({name: 'login'})
  else next()
})

export default router