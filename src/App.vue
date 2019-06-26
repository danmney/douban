<template>
  <div id="app">
    <div class="app">
        <router-link :to = "{name:'home'}" active-class = "abc">首页</router-link>
        <router-link to = "/list" active-class = "abc">列表</router-link>
        <router-link to = "/group" active-class = "abc">分组</router-link>
        <router-link to = "/detail" active-class = "abc">详情</router-link>
        <router-link to = "/mine" active-class = "abc">我的</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang = "scss">
    #app{
      .app{
        width: 100%;
        position:fixed;
        bottom:0;
        left:0;
        display:flex;
        justify-content: space-around;
      }
    }
    /* .router-link-active{
      color:red;
    } */
    /* .router-link-exact-active{
      color:orange;
    } */
    .abc{
      color:red;
    }
</style>
