<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in swipeMsg" :key="item.url">
            <a href="#">
                <img v-bind:src="item.img" alt="">
            </a>
        </mt-swipe-item>
    </mt-swipe>
</template>

<script>
    export default {
        data:function(){
            return {
                swipeMsg:[]
            }
        },
        props:['imgUrl'],
        methods: {
            getData2:function(){
                var that = this;
                this.$http.get(this.imgUrl).then(function(res){
                    that.swipeMsg = res.data.message
                    console.log(that.swipeMsg)
                })
            }
        },
        created:function(){
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
</style>
