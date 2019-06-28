import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'

Vue.config.productionTip = false
//加载通用样式
import "./stylesheets/main.scss";
//加载rem.js组件
import "./models/rem";
//加载swiper组件
import swiper from "swiper/dist/css/swiper.min.css";
//引入axios文件
import axios  from "axios";
Vue.prototype.$http = axios;//方便用以后用this.$http引用axios
//引入mint-ui
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
