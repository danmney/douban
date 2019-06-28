<template>
    <div class="header" v-show="isShow">
       <div class="left">
           <i :class="['fa','fa-' + icon]"></i>
            <span>{{title}}</span>
       </div>
        <div class="right">
            <span>城市</span>
        </div>
    </div>
</template>

<script>
import router from "@/routers"
export default {
    data(){
        return {
            icon:"home",
            title:"首页",
            isShow:true
        }
    },
    methods:{
        changeTo(to){
            switch (to.name) {
               case "home":
                   this.icon = "home";
                   this.title = "首页";
                   this.isShow = true;
                   break;
                case "audio":
                   this.icon = "audio-description";
                   this.title = "书音影";
                   this.isShow = true;
                   break;
                case "radio":
                   this.icon = "podcast";
                   this.title = "广播";
                   this.isShow = true;
                   break;
                case "group":
                   this.icon = "group";
                   this.title = "分组";
                   this.isShow = true;
                   break;
                case "mine":
                   this.icon = "user";
                   this.title = "我的";
                   this.isShow = true;
                   break;
               default:
                   this.isShow = false;
                   break;
           }
        }
    },
    watch:{
        $route(val){
            this.changeTo(val);
        }
    },
    created(){
       router.beforeEach((to,from,next)=>{
           this.changeTo(to);
           next();
       })
    }
}
</script>

<style lang = "scss" scoped>
    .header{
        position: fixed;
        left: 0;
        top:0;
        z-index: 10;
        width: 3.75rem;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        color: antiquewhite;
        background-color: rgb(15, 15, 15);
        .left{
            i{
                padding-right: 5px;
            }
        }
    }
</style>
