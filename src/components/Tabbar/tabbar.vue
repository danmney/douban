<template>
    <div class="tabbar">
        <!-- <Item txt = "首页" mark = "home" :sel="selSelect">
            <img slot="normalImg" src="../../assets/ic_tab_home_normal.png" alt="">
            <img slot="activeImg" src="../../assets/ic_tab_home_active.png" alt="">
        </Item> 
        <Item txt = "书音影" mark = "audio" :sel="selSelect">
            <img slot="normalImg" src="../../assets/ic_tab_audio_normal.png" alt="">
             <img slot="activeImg" src="../../assets/ic_tab_audio_active.png" alt="">
        </Item>
        <Item txt = "广播" mark = "radio" :sel="selSelect">
            <img slot="normalImg" src="../../assets/ic_tab_broadcast_normal.png" alt="">
             <img slot="activeImg" src="../../assets/ic_tab_broadcast_active.png" alt="">
        </Item>
        <Item txt = "分组" mark = "group" :sel="selSelect">
            <img slot="normalImg" src="../../assets/ic_tab_group_normal.png" alt="">
             <img slot="activeImg" src="../../assets/ic_tab_group_active.png" alt="">
        </Item>
        <Item txt = "我的" mark = "mine" :sel="selSelect">
            <img slot="normalImg" src="../../assets/ic_tab_mine_normal.png" alt="">
             <img slot="activeImg" src="../../assets/ic_tab_mine_active.png" alt="">
        </Item> -->
        <Item 
            v-for = "footer in footer"
            :txt = "footer.txt"
            :mark = "footer.mark"
            :key = "footer.id"
            :sel = "selSelect"
        >
            <img slot="normalImg" :src="footer.normalImg" alt="">
            <img slot="activeImg" :src="footer.activeImg" alt="">
        </Item>
    </div>
</template>

<script>
import Item from "./Item";
export default {
    data(){
        return{
            selSelect:this.$route.name,
            footer:[
                {id:1,txt:"首页",mark:"home",activeImg:require("@/assets/ic_tab_home_active.png"),normalImg:require("@/assets/ic_tab_home_normal.png")},
                {id:2,txt:"书影音",mark:"audio",activeImg:require("@/assets/ic_tab_audio_active.png"),normalImg:require("@/assets/ic_tab_audio_normal.png")},
                {id:3,txt:"广播",mark:"radio",activeImg:require("@/assets/ic_tab_broadcast_active.png"),normalImg:require("@/assets/ic_tab_broadcast_normal.png")},
                {id:4,txt:"小组",mark:"group",activeImg:require("@/assets/ic_tab_group_active.png"),normalImg:require("@/assets/ic_tab_group_normal.png")},
                {id:5,txt:"我的",mark:"mine",activeImg:require("@/assets/ic_tab_mine_active.png"),normalImg:require("@/assets/ic_tab_mine_normal.png")}
            ]
        }
    },
    components:{
        Item
    }
}
</script>

<style lang = "scss" scoped>
    .tabbar{
        width: 100%;
        height:70px;
        position:fixed;
        bottom:0;
        left: 0;
        background-color: #dcdcdc;
        display: flex;
        align-items:center;
    }
</style>
