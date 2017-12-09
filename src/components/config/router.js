import Vue from 'vue'
// 引入路由路径
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//引入组件
import home from '../home/home.vue'
import cart from '../cart/cart.vue'
import member from '../member/member.vue'
import search from '../search/search.vue'
import news from '../news/news.vue'
import detail from '../detail/detail.vue'
import back from '../../back.vue'
import newsComment from '../detail/newsDetail-comment.vue'


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

export default router;