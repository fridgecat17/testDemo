import Vue from 'vue'
import Router from 'vue-router'
/* import Home from '../views/Home.vue'
import Mine from '../views/Mine.vue'
import Search from '../views/Search.vue' */
import RouterHome from './home/home'
import RouterRole from './role/role'
import RouterMine from './mine/mine'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    RouterHome,
    RouterRole,
    RouterMine,
    {
      path: '/*',
      redirect : '/'
    }
    /* {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    } */
  ]
})
