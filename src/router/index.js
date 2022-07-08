import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    component: HomeView,
    redirect:"/Welcome",
    children:[
      {path:'/Welcome',component:()=>import('@/components/Pages/Welcome')},
      {path:'/Page3_1',component:()=>import('@/components/Pages/Page3_1')},
      {path:'/Page3_2',component:()=>import('@/components/Pages/Page3_2')},
      {path:'/Page4_1',component:()=>import('@/components/Pages/Page4_1')},
      {path:'/Page4_2',component:()=>import('@/components/Pages/Page4_2')},
      {path:'/Page4_3',component:()=>import('@/components/Pages/Page4_3')},
      {path:'/Page4_4',component:()=>import('@/components/Pages/Page4_4')},
      {path:'/Page4_5',component:()=>import('@/components/Pages/Page4_5')},
      {path:'/Page5_1',component:()=>import('@/components/Pages/Page5_1')},
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
