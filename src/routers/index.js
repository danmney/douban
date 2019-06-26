import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
let router =  new Router({
  routes: [
      {path:"/", redirect:"/home"},
      { path:'/home',component:()=>import('@/views/Home'),name:"home"},
      {path:'/detail',component:()=>import('@/views/Detail'),children:[
        {path:"",redirect:"china"},
        {path:"china",component:()=>import('@/views/China')},
        {path:"english",component:()=>import('@/views/English')}
      ]},
      {name:"group", path:'/group',component:()=>import('@/views/Group')},
      {name:"list", path:'/list',component:()=>import('@/views/List')},
      {name:"mine", path:'/mine',component:()=>import('@/views/Mine')}
  ]
})
//全局前置守卫
/* router.beforeEach((to,from,next)=>{
  if (from.path === "/home") {
    alert("退出home")
  }
  next();
}) */
//全局后置守卫
/* router.afterEach((to,from)=>{
    if (to.path === "/mine") {
      alert("进入mine")
    }
}) */
export default  router;