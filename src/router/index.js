import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    
  ]
})
