/*
 * @Author: your name
 * @Date: 2020-11-16 18:23:57
 * @LastEditTime: 2020-11-26 09:55:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \doc-tina\doc-tina\demo-zheye\src\router\index.ts
 */
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
    meta: {
      redirectAldeayLogin: true
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue'),

  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/ColumnDetail.vue')
  },
  {
    path: '/postDetail/:id',
    name: 'postDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/PostDetail.vue'),

  },
  {
    path: '/create',
    name: 'create',
    component: () => import(/* webpackChunkName: "about" */ '../views/createPost.vue'),
    meta: {
      requieLogin: true
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
router.beforeEach((to, from, next) => {
  // const isLogin=computed(()=>store.state.user.isLogin)

  if (!store.state.user.isLogin && to.meta.requieLogin) {
    next({ name: 'login' })

  } else if (to.meta.redirectAldeayLogin && store.state.user.isLogin) {
    next("/")
  }
  next()


})

export default router
