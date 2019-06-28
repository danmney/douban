<template>
    <div>
        <tabbar></tabbar>
        <banner></banner>
        <div class="navbar" :class="{fixednav:isFixed}">
            <span
                v-for="nav in navs"
                :key="nav.id"
                :class="{active:type===nav.type}"
                @click="type = nav.type"
            >{{nav.title}}</span>
        </div>
        <div :class="{fixedbox:isFixed}"><MoveBox :type = "type"></MoveBox></div>
    </div>
</template>

<script>
//footer切换
import tabbar from "@/components/Tabbar/tabbar";
//banner图
import banner from "@/components/Banner/banner";
//引入主页内容MoveBox
import MoveBox from "./MoveBox";
export default {
    components:{
        tabbar,
        banner,
        MoveBox
    },
    data(){
        return{
            navs:[
                {id:1,title:"正在上映",type:"in_theaters"},
                {id:2,title:"即将上映",type:"coming_soon"}
            ],
           type:"in_theaters",
           isFixed:false
        }
    },
    created(){
        window.addEventListener("scroll",e=>{
            let scroll = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(scroll);
            if(scroll>=300){
                isFixed:true;
            }else{
                isFixed:false
            }
        })
    }
}
</script>

<style lang = "scss" scoped>
    .fixedbox{
        margin-top: 60px;
    }
    .navbar{
        width: 100%;
        height: .5rem;
        font-size: 16px;
        background-color: aliceblue;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.2rem;
        &.fixednav{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
        }
        span{
            transition: all 2s;
            position: relative;
           &::after{
               content: "";
               width: 60px;
               height: 2px;
               position: absolute;
               bottom:-10px;
               left: 2px;
              
           }
        }
    }
    .active{
        color:darkorange;
        &::after{
            transition: all 2s;
            background-color: darkorange;
        }
    }
</style>
