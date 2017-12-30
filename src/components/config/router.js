import Vue from 'vue'
// 引入路由路径
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//引入组件
import home from '../home/home.vue'
import cart from '../cart/cart.vue'
import member from '../member/member.vue'
import search from '../search/search.vue'

//home组件下新闻资讯
import news from '../home/news/news.vue'
import detail from '../home/news/detail/detail.vue'
import newsComment from '../home/news/detail/newsDetail-comment.vue'

//home组件下图片分享
import share from '../home/share/share.vue'
import shareDetail from '../home/share/shareDetail.vue'

//home组件下商品购买
import goods from '../home/goods/goods.vue'
import goodsDetail from '../home/goods/goodsDetail.vue'

let router = new VueRouter({
    linkActiveClass: 'mui-active',
    routes: [
        { path: '/', redirect: { name: 'home' } },
        { name: 'home', path: '/home', component: home },
        { path: '/cart', components: { default: cart } },
        { path: '/member', components: { default: member } },
        { path: '/search', components: { default: search } },

        //news
        { path: '/news', components: { default: news } },
        { name: 'detail', path: '/detail/:id', components: { default: detail, bbb: newsComment }, props: { default: true, aaa: true, bbb: true } },
        //share
        { path: '/share', components: { default: share } },
        { name: 'shareDetail', path: '/shareDetail/:id', components: { default: shareDetail, bbb: newsComment }, props: { default: true, bbb: true } },
        //goods
        { path: '/buy', component: goods },
        { name: 'goodsDetail', path: '/goodsDetail/:id', component: goodsDetail, props: true },

    ]
})

export default router;