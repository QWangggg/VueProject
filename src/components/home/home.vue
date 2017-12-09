<template>
    <div class="mui-content">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in swipeMsg" :key="item.url">
                <a href="#">
                    <img v-bind:src="item.img" alt="">
                </a>
            </mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li v-for="(item,index) in msg" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3" :key="index">
                <router-link v-bind:to="item.url">
                    <span v-bind="{'class':'mui-icon ' + item.className}"></span>
                    <div class="mui-media-body">{{item.title}}</div>
                </router-link>
            </li>
            
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Swipe, SwipeItem } from 'mint-ui'

    import 'mint-ui/lib/style.css'

    Vue.component(Swipe.name, Swipe);
    Vue.component(SwipeItem.name, SwipeItem);

    export default{
        data:function(){
            return {
                msg:[],
                swipeMsg:[]
            }
        },
        methods: {
            getData:function(){
                var that = this;
                this.$http.get('http://127.0.0.1:8899/api/getmenus').then(function(res){
                    console.log(res)
                    that.msg = res.data.message
                })
            },
            getData2:function(){
                var that = this;
                this.$http.get('http://127.0.0.1:8899/api/getlunbo').then(function(res){
                    that.swipeMsg = res.data.message
                    console.log(that.swipeMsg)
                })
            },
        },
        created:function(){
            this.getData()
            this.getData2()
        }
    }    
</script>

<style scoped>
    .mint-swipe {
        height: 250px;
    }
    .mint-swipe img {
        width: 100%;
        height: 100%;
    }

    .mui-content {
        position: absolute;
        top:44px;
        bottom: 50px;
        padding-bottom: 0;
        padding-top: 0;
    }
    ul {
        margin-bottom: 0
    }
    .mui-grid-view.mui-grid-9 {
        background-color:#fff;
    }
    span {
        width: 50px;
        height: 50px;    
    }
    .icon-news {
        background: url(../../../static/images/menu1.png) no-repeat;
        background-size: contain;
    }
    .icon-share {
        background: url(../../../static/images/menu2.png) no-repeat;
        background-size: contain;
    }
    .icon-buy {
        background: url(../../../static/images/menu3.png) no-repeat;
        background-size: contain;
    }
    .icon-feedback {
        background: url(../../../static/images/menu4.png) no-repeat;
        background-size: contain;
    }
    .icon-video {
        background: url(../../../static/images/menu5.png) no-repeat;
        background-size: contain;
    }
    .icon-contact {
        background: url(../../../static/images/menu6.png) no-repeat;
        background-size: contain;
    }
</style>
