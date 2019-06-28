<template>
    <div class="item" @click="change">
        <span v-if="!flage"><slot name = "normalImg"></slot></span>
        <span v-else><slot name = "activeImg"></slot></span>
        <span v-if="flage" class="active">{{txt}}</span>
        <span v-else>{{txt}}</span>
    </div>
</template>

<script>
export default {
    props:["txt","mark","sel"],
    computed:{
        flage(){
            if(this.mark === this.sel){
                return true
            }
            else{
                return false
            }
        }
    },
    methods:{
        change(){
            this.$router.push("/" + this.mark);
        }
    }
}
</script>

<style lang = "scss" scoped>
    .item{
        display: flex;
        flex:1;
        flex-flow: column;
        align-items: center;
        img{
            width: 40px;
            height: 40px;
        }
    }
    .active{
        color:#1ab11a;
    }
</style>
