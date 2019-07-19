import Vue      from 'vue'
import Router   from 'vue-router'
import Main     from './views/Main.vue'
import Menu     from './views/Menu.vue'
import Contacts from './views/Contacts.vue'
import Pizza    from "./views/Pizza.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu
    },
    {
      path: '/pizza',
      name: 'pizza',
      component: Pizza
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contacts
    }
  ]
})
