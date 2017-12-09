import Vue from 'vue'
// import VueResource from 'vue-resource'

// 引入路由路径
import VueRouter from 'vue-router'
// Vue.use(VueResource)
Vue.use(VueRouter)

//引入axios
import axios from 'axios'
Vue.prototype.$http = axios

//引入moment
import moment from 'moment'
Vue.filter('fmtdate',(date, dateStr)=>{
    return moment(date).format(dateStr)
})

//提取根地址
axios.defaults.baseURL = 'http://127.0.0.1:8899/'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

//引入组件
import home from './components/home/home.vue'
import cart from './components/cart/cart.vue'
import member from './components/member/member.vue'
import search from './components/search/search.vue'
import news from './components/news/news.vue'
import detail from './components/detail/detail.vue'
import back from './back.vue'
import newsComment from './components/detail/newsDetail-comment.vue'


let router = new VueRouter({
    linkActiveClass: 'mui-active',
    routes:[
        {path: '/', redirect:{name:'home'}},
        {name:'home',path: '/home', component:home},     
        {path: '/cart', components:{default:cart,aaa:back}},
        {path: '/member', components:{default:member,aaa:back}},
        {path: '/search', components:{default:search,aaa:back}},
        {path: '/news', components:{default:news,aaa:back}},
        {path: '/detail/:id', components:{default:detail,aaa:back,bbb:newsComment},props: {default:true,aaa:true,bbb:true}}
    ]
})

import app from './app.vue'
import '../static/css/mui.css'

let vm = new Vue({
    el: '#app',
    router,
    render: function(createElement){
        return createElement(app)
    }
})