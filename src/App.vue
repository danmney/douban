<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>
<style lang = "scss">
    
</style>
<script>
//引入Tabbar组件
import Tabbar from '@/components/Tabbar/tabbar';
import Header from "@/components/Header/index";
export default {
    components:{
      Tabbar,
      Header
    }
}
</script>
