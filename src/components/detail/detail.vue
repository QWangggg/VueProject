<template>
    <div>
        <div class="my_article" v-for="item in msg" :key="item.id">
            <h4 class="my_title">{{item.title}}</h4>
            <div class="my_time">
                <span>{{item.add_time | dateFormat}}</span>
                <span>{{item.click}}次浏览</span>
            </div>
            
            <div class="my_line"></div>
            <p class="my_content" v-html="item.content"></p>
        </div>
        
    </div>
</template>

<script>
    import '../../../static/css/style.css'
    import axios from 'axios'
    export default {
        data: function(){
            return {
                msg: []
            }
        },
        created: function(){
            this.getData()
            console.log(axios)
        },
        props: ['id'],
        methods: {
            getData(){
                // console.log(this.id)
                var id = this.$route.params.id.slice(1)
                var url = 'getnew/' + id
                console.log(url)
                this.$http.get(url).then(res=>{
                    this.msg = res.data.message
                    // console.log(that.msg)
                })
            }
        },
        filters: {
            'dateFormat': function(value) {
                let time = new Date(value)
                let year = time.getFullYear()
                let month = time.getMonth() + 1
                let day = time.getDate()
                return year + '-' + month + '-' + day
            }
        }
    }
</script>

<style scoped>
    .my_title {
        font-size: 16px;
        padding: 5px;
        color: #0094ff;
    }
    .my_time {
        font-size: 12px;
        color: rgba(92,92,92,0.6);
        padding: 5px;
    }
    .my_content {
        padding: 5px;
    }
    .my_line {
        height: 1px;
        width: 100%;
        background-color: #ccc;
    }
</style>
