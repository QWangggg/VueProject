# VueProject
vue project practice

## Config:
- router.js (vue,vue-router)
- filters.js (vue,moment)
- plugins.js (vue,axios,mint-ui)

## Function:
- swipe (mint-ui's swipe,an image slider)
- axios.interceptors (intercept requests or responses before they are handled by then or catch,in order to global config mint-ui's toast)



## MY EXPERIENCE
##路由
    ```
    1.routes:[{name:'anything',path:'/somewhere/:id',props:true}]
      <router-link :to="{name:'anything',params:{id: something.id}}"></router-link>
    2.routes:[{path:'/somewhere/:id',props:true}]
      <router-link v-bind:"{'to':'/somewhere/'+something.id}"></router-link>
    3.<router-link :to="{path: '/somewhere/'+something.id}"></router-link>
    ```

##轮播图
  使用mint-ui框架的swipe组件，通过props传递后台端口地址请求数据

##加减组件
  使用vue的自定义事件，通过$emit和$on子组件向父组件传递参数

##加入购物车
  使用vue的自定义事件，新建一个时光传送Vue模块，绑定$emit和$on在不相关的组件中进行时光旅行

##请求数据
  使用axios，为浏览器及nodejs提供基于Promise的HTTP客户端，可以用axios.default.baseURL设定根目录。必须绑定到Vue.prototype上

##返回按钮
  使用$route路由信息对象，通过监视$route的改变，来执行函数判断路由地址是否显示返回按钮

##导航守卫

##编程式导航

##项目过程中碰到的注意点:
  -在vue组件中最好不要用箭头函数，因为指向的是父组件的上下文
  -在过渡中，有特定的几个方法属性可以让浏览器触发layout的操作，否则浏览器会将该过渡动画放在layout队列中，等待一并完成，详细查看
   https://www.qianduan.net/high-performance-css3-animations/

# 项目布局
```
.
│  app.js         
│  app.vue
│
└─components
    ├─cart        
    │      cart.vue
    │
    ├─common
    │      amount.vue
    │      swipe.vue
    │
    ├─config
    │      communication.js
    │      filters.js
    │      plugins.js
    │      router.js
    │
    ├─home
    │  │  home.vue
    │  │
    │  ├─goods
    │  │      goods.vue
    │  │      goodsDetail.vue
    │  │
    │  ├─news
    │  │  │  news.vue
    │  │  │
    │  │  └─detail
    │  │          detail.vue
    │  │          newsDetail-comment.vue
    │  │
    │  └─share
    │          share.vue
    │          shareDetail.vue
    │
    ├─member
    │      member.vue
    │
    └─search
            search.vue
```