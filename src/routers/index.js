import Vue from 'vue'
import Router from 'vue-router'
import home from '@/routers/home'
import audio from '@/routers/audio'
import radio from '@/routers/radio'
import group from '@/routers/group'
import mine from '@/routers/mine'
Vue.use(Router)
let router =  new Router({
  routes: [
      {path:"/",redirect:"/home"},
      home,audio,radio,group,mine,
      {name:"notfound",path:"/notfound",component:()=>import("@/views/notFound/notFound")},
      {path:"*",redirect:"notfound"}
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