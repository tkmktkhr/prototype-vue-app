import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AdminEdit from '@/components/AdminEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/admin',
      name: 'AdminEdit',
      component: AdminEdit
    }
  ]
})
