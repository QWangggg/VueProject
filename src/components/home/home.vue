<template>
    <div class="mui-content">
        <myswipe :imgUrl="img_Url"></myswipe>
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
    import myswipe from '../common/swipe.vue'
    export default{
        data:function(){
            return {
                msg:[],
                img_Url:'getlunbo'
            }
        },
        methods: {
            getData:function(){
                var that = this;
                this.$http.get('http://127.0.0.1:8899/api/getmenus').then(function(res){
                    console.log(res)
                    that.msg = res.data.message
                })
            }
        },
        created:function(){
            this.getData()
        },
        components: {
            myswipe
        }
    }    
</script>

<style scoped>
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
