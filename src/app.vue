<template>
    <div class="container">
         <header class="mui-bar mui-bar-nav">
            <a v-if="backShow" @click="goback" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
            <h1 class="mui-title"></h1>
        </header>
        <nav class="mui-bar mui-bar-tab">
            <router-link to="/home" class="mui-tab-item">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link to="/member" class="mui-tab-item">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link to="/cart" class="mui-tab-item">
                <span class="mui-icon mui-icon-contact"><span class="mui-badge">{{ badgeNum }}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link to="/search" class="mui-tab-item">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
       
        
            <router-view></router-view>
            <router-view name="bbb"></router-view>
        
        
    </div> 
</template>

<script>
    import vueObj from './components/config/communication.js'
    // 获取本地存储购物车数据
    import { getData } from './components/common/localstoragehelp.js'
    export default{
        data: function(){
            return {
                msg:'hello',
                backShow: false,
                badgeNum: 0,
                data: []
            }
        },
        methods: {
            goback: function(){
                this.$router.back()
            },
            watchPath: function(path){
                let arr = ['/home','/member', 'cart', 'search'];
                if ( arr.indexOf(path) == -1 ) {
                    this.backShow = true
                } else {
                    this.backShow = false
                }
            },
        },
        created(){
            this.watchPath(this.$route.path);
            var that = this
            vueObj.$on('addCartAmount', function(value){
                that.badgeNum = that.badgeNum + value
            })
            vueObj.$on('changeCart', function(obj){
                if(obj.type == 'sub') {
                    that.badgeNum--
                }
                if(obj.type == 'add') {
                    that.badgeNum++
                }
            })
            this.data = getData()
            this.data.forEach(function(item) {
                this.badgeNum += item.count
            }, this);
        },
        watch: {
            "$route":function(newValue){
                this.watchPath(newValue.path)
            },
        }
    }
</script>

<style scoped>
    .mui-content {
        background-color: #fff;
    }
</style>

