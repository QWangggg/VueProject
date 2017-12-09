<template>
    <div class="container">
         <header class="mui-bar mui-bar-nav">
            <!-- <router-link to="/" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></router-link> -->
            <router-view name="aaa"></router-view>
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
                <span class="mui-icon mui-icon-contact"><span class="mui-badge">9</span></span>
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
    export default{
        data: function(){
            return {
                msg:'hello'
            }
        }
    }
</script>

<style scoped>
    
</style>

