import Vue from 'vue'
import Router from 'vue-router'
import AdminPage from '@/components/admin/AdminPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin',
      name: 'AdminPage',
      component: AdminPage,
    },
  ],
})
