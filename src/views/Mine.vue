<template>
    <div class="mine">
        <p v-on:click = "clickme">退出</p>
    </div>
</template>

<script>
export default {
    methods:{
       clickme(){
           let flage = confirm("确定退出吗？")
            if (flage) {
                this.$router.push("/");
            }
       }

    }
}
</script>

<style>

</style>
