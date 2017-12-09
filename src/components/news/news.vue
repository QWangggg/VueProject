<template>
    <div class="content">
       
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in msg" :key="item.url">
                <router-link v-bind="{'to':'/detail/:' + item.id}">
                    <img class="mui-media-object mui-pull-left" v-bind:src="item.img_url">
                    <div class="mui-media-body">
                        <p class="my_title">{{item.title}}</p>
                        <p class="mui-pull-left my_time">发表时间:{{item.add_time | dateFormat}}</p>
                        <p class="mui-pull-right my_click">点击数:{{item.click}}</p>
                    </div>
                </router-link>
            </li>
        </ul>
           
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                msg:[]
            }
        },
        created: function(){
            this.getData()
        },
        methods: {
            getData(){
                console.log(1)
                var that = this;
                this.$http.get('api/getnewslist').then(function(response){
                    // if(response.body.status != 0){
                    //     alert('获取数据失败')
                    // }
                    that.msg = response.data.message
                })
            }
        },
        filters: {
            'dateFormat':function(value){
                let date = new Date(value)
                let year = date.getFullYear()
                let month = +date.getMonth()+1
                let day = date.getDate()
                return year + '-' + month + '-' + day
            }
        }
    }
</script>
    
<style scoped>
    .content {
        position: absolute;
        top: 44px;
        bottom: 50px;
        width:100%;
    }
    .my_title {
        font-size: 14px;
        color: #000;
        overflow: hidden;
        white-space: nowrap;
        width: 100%;
        text-overflow: ellipsis;

    }
    .my_click,.my_time {
        font-size: 12px;
        color:blue
    }
</style>
