import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import store from "../store"
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    meta:{
      redirectAldeayLogin:true
    }
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/ColumnDetail.vue')
  },
  {
    path: '/create',
    name: 'create',
    component: () => import(/* webpackChunkName: "about" */ '../views/createPost.vue'),
    meta:{
      requieLogin:true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to,from,next)=>{
  // const isLogin=computed(()=>store.state.user.isLogin)
  console.log(to)
  if(!store.state.user.isLogin&&to.meta.requieLogin){
    next({name:'login'})
  
  }else if(to.meta.redirectAldeayLogin&&store.state.user.isLogin){
    next("/")
  }
    next()
  

})

export default router
