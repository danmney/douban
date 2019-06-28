<template>
    <div class="home-banner swiper-container">
        <div class="swiper-wrapper">
             <div class="swiper-slide"
                v-for = "banner in banners"
                :key = "banner.id"
             >
                <img :src="getImg(banner.images.small)" alt="">
             </div>
        </div>
         <!-- 分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
//引入swiper
import Swiper from "swiper"
export default {
     data(){
         return {
             banners:[]
         }
     },
     methods:{
        getImg(_url){
            if( _url !== undefined ){
                let _u = _url.substring( 7 );
                return 'https://images.weserv.nl/?url=' + _u;
            }
        }
     },
    created(){
        this.$http.get("/api/db/in_theaters",{
            params:{
                limit:6
            }
        }).then(res=>{
            this.banners = res.data.object_list;
            this.$nextTick(()=>{
                new Swiper(".home-banner",{
                    loop:true,
                    pagination: {
                        el: '.swiper-pagination',
                    }
                });
            })
        })
    } 
}
</script>

<style lang = "scss" scoped> 
    .home-banner{ 
        height: 1.8rem;
        margin-top: 0.6rem;
        .swiper-slide{
            img{
                width: 100%;
                height: 2.2rem;
            }
        }
       
    }
</style>
