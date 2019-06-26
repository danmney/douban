<template>
  <div class="home">
    home
    <!-- <router-link to = "/group/1">新闻</router-link>
    <router-link to = "/group/2">视界</router-link> -->
    <div>
      <router-link
       v-for="nav in navs"
       :key="nav.id"
       :to = "{name:nav.name}"
         >{{nav.title}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    data(){
      return{
        navs:[
          {id:1,name:"group",title:"中文"},
          {id:2,name:"group",title:"英文"}
        ]
      }
    }
}
</script>
