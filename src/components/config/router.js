import Vue from 'vue'
// 引入路由路径
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//引入组件
import home from '../home/home.vue'
import cart from '../cart/cart.vue'
import member from '../member/member.vue'
import search from '../search/search.vue'
import back from '../../back.vue'

//home组件下新闻资讯
import news from '../home/news/news.vue'
import detail from '../home/news/detail/detail.vue'
import newsComment from '../home/news/detail/newsDetail-comment.vue'

//home组件下图片分享
import share from '../home/share/share.vue'
import shareDetail from '../home/share/shareDetail.vue'

let router = new VueRouter({
    linkActiveClass: 'mui-active',
    routes: [
        { path: '/', redirect: { name: 'home' } },
        { name: 'home', path: '/home', component: home },
        { path: '/cart', components: { default: cart, aaa: back } },
        { path: '/member', components: { default: member, aaa: back } },
        { path: '/search', components: { default: search, aaa: back } },

        //news
        { path: '/news', components: { default: news, aaa: back } },
        { name: 'detail', path: '/detail/:id', components: { default: detail, aaa: back, bbb: newsComment }, props: { default: true, aaa: true, bbb: true } },
        //share
        { path: '/share', components: { default: share, aaa: back } },
        { name: 'shareDetail', path: '/shareDetail/:id', components: { default: shareDetail, aaa: back, bbb: newsComment }, props: { default: true, bbb: true } }


    ]
})

export default router;