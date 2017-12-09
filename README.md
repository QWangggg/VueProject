# VueProject
vue project practice

## Config：
- router.js (vue,vue-router)
- filters.js (vue,moment)
- plugins.js (vue,axios,mint-ui)

## Components
- swipe (mint-ui)
- 


## MY EXPERIENCE
- props for route:
    ```
    1.routes:[{name:'anything',path:'/somewhere/:id',props:true}]
      <router-link :to="{name:'anything',params:{id: something.id}}"></router-link>
    2.routes:[path:'/somewhere/:id',props:true]
      <router-link v-bind:"{'to':'/somewhere/'+something.id}"></router-link>
    3.<router-link :to="{path: '/somewhere/'+something.id}"></router-link>
    ```