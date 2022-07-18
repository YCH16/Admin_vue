import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/AdminHome',
    component: HomeView,
    redirect:"/Welcome",
    children:[
      {path:'/Welcome',component:()=>import('@/components/Pages/Welcome')},
      {path:'/Page3_1',component:()=>import('@/components/Pages/Page3_1')},
      {path:'/Page3_1/upload',component:()=>import('@/components/Pages/Upload_excel')},
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

router.beforeEach((to,from,next)=>{
  //to是將要訪問的路徑
  //from代表從哪個路徑跳轉而來
  //next是一個函數,表示放行
  // 先獲取token
  const tokenStr=window.sessionStorage.getItem('token');
  if(to.path==='/Login' && !tokenStr){console.log("1");return next();}
  else if(to.path==='/Login' && tokenStr){console.log("2");return next('/AdminHome');}
  if(!tokenStr){console.log("3");return next('/Login');}
  else if(to.path!=='/Login' && tokenStr){next();console.log("4");}
})

export default router
