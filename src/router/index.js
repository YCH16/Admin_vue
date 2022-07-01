import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    component: HomeView,
    redirect:"/Welcome",
    children:[
      {path:'/Welcome',component:()=>import('@/components/Pages/Welcome')},
      {path:'/Page2_1',component:()=>import('@/components/Pages/Page2_1')},
      {path:'/Page2_2',component:()=>import('@/components/Pages/Page2_2')},
      {path:'/Page3_1',component:()=>import('@/components/Pages/Page3_1')},
      {path:'/Page3_2',component:()=>import('@/components/Pages/Page3_2')},

    ]
  },
  {path:'/',redirect:"/Login"},
  {path:'/Login', component:()=>import('../components/Login_page/Login') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
