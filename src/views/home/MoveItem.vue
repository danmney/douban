<template>
    <div class="item">
        <div class="img">
            <img :src="getImg(movie.images.small)" alt="">
        </div>
        <div class="desc">
            <div class="left">
                <span class="name">{{movie.title}}</span>
                <span>上映时间：{{movie.pubdates[0]}}</span>
            </div>
            <div class="right">
                <span>导演:{{movie.directors[0].name}}</span>
                <span>评分:{{movie.rating.average}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        movie:Object
    },
     methods:{
        getImg(_url){
            if( _url !== undefined ){
                let _u = _url.substring( 7 );
                return 'https://images.weserv.nl/?url=' + _u;
            }
        }
     }
}
</script>

<style lang = "scss" scoped>
     .item{
        width: 3.5rem;
        height: 2.5rem;
        margin-top: 10px;
        margin-bottom: .1rem;
        box-shadow: 2px 3px 4px rgb(236, 216, 216);
        border-radius: 5px;
        img{
            width: 100%;
            height: 1.8rem;
        }
        .desc{
            display: flex;
            justify-content: space-between;
            align-items: center;
            .left{
                display: flex;
                flex-flow: column;
                span{
                    padding:3px 0;
                }
                .name{
                    font-size: 20px;
                    font-weight: bold;
                    font-family: Verdana, Geneva, Tahoma, sans-serif;
                    color: peru;
                }
            }
            .right{
                display: flex;
                flex-flow: column;
                justify-content: space-between;
                color:firebrick;
                span{
                    padding:2px 3px;
                }
            }
        }
    }
</style>
