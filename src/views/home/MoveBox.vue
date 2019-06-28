<template>
    <div class="moveBox"
        v-infinite-scroll="loadMore"
        infinite-scroll-distance="10"
        infinite-scroll-disabled="loading"
    >
        <MovieItem
            v-for="movie in movies"
            :key="movie.id"
            :movie = "movie"
        ></MovieItem>
    </div>
</template>

<script>
//导入MoveItem组件
import MovieItem from "./MoveItem";
//引入提示信息组件
import { Toast } from 'mint-ui';
export default {
    components:{
        MovieItem
    },
    props:["type"],
    data(){
        return{
            movies:[],
            loading:false,//开启无限滚动
            limit:6,
            page:1,
            hasMore:true//判断是否还有数据
        }
    },
    watch:{
         immediate:true,
        type(){
            this.movies = [];
            this.page = 1;
            this.hasMore = true;
            this.loading = false;
            this.geiMovies();
        }
    },
    methods:{
        loadMore(){
            if (!this.hasMore) {
                this.loading = true;//关闭无限滚动
                Toast({
                    message: '我是有底线的...',
                    position: 'bottom',
                    duration: 1000
                    });
                return false //阻止后续代码执行
            }
            this.geiMovies()
        },
        geiMovies(){
            let toast = Toast({
                message: '数据加载中...',
                iconClass: 'fa fa-spinner fa-pulse fa-3x fa-fw'
            },-1);
            this.loading = true //关闭无限滚动
            let {page,limit} = this
            this.$http.get("/api/db/"+ this.type,{
            params:{
                limit,
                page
            }
            }).then(res=>{
                toast.close()//数据加载成功，关闭提示信息
                this.loading = false //数据请求完毕开启无限滚动
                this.movies = this.movies.concat(res.data.object_list);
                if (this.limit * this.page >= res.data.total) {
                    this.hasMore = false;
                    return false
                }
                this.page++;
            })
        }
    },
    created(){

    }
}
</script>
<style lang = "scss" scoped>
     .moveBox{
        width:100%;
        background-color: #f6fbff;
        display: flex;
        flex-flow: column;
        align-items: center;
        margin-bottom: 0.7rem;
    }
</style>
