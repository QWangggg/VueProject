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
- props of route:
    ```html
    1.routes:[{name:'anything',path:'/somewhere/:id',props:true}]
      <router-link :to="{name:'anything',params:{id: something.id}}"></router-link>
    2.routes:[{path:'/somewhere/:id',props:true}]
      <router-link v-bind:"{'to':'/somewhere/'+something.id}"></router-link>
    3.<router-link :to="{path: '/somewhere/'+something.id}"></router-link>
    ```