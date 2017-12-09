<template>
    <div class="mui-content">
        <div class="wraper">
            <h3 class="my-title">{{ imgList.title }}</h3>
            <div class="time">
                <span>{{ imgList.add_time | fmtdate('YYYY-MM-DD') }}</span>
                <span>{{ imgList.click }}次浏览</span>
            </div>
            <div class="line"></div>
            <div class="content">
                <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-col-xs-4 mui-col-sm-3" v-for="(item, index) in images" :key="index">
                        <a href="#">
                            <img :src="item.src" alt="">
                        </a>
                    </li>
		        </ul>
                <div class="my_content" v-html="imgList.content">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                images: [],
                imgList: []
            }
        },
        props:['id'],
        created(){
            this.getImage(this.id)
            this.getImages()
        },
        methods: {
            getImages: function(){
                this.$http
                    .get('getthumimages/'+this.id)
                    .then(res=>{
                        console.log(res)
                        if(res.status === 200 && res.data.status === 0) {
                            this.images = res.data.message
                        }
                    })
                    .catch(err=>{
                        console.error(err)
                    })
            },
            getImage: function(id=-1){
                this.$http
                    .get('getimageInfo/' + id)
                    .then(response=>{
                        if(response.status === 200 && response.data.status === 0) {
                            
                            this.imgList = response.data.message[0]
                            console.log(this.imgList)
                        }
                    })
                    .catch(err=>{
                        console.error(err)
                    })
            }
        }
    }
</script>

<style scoped>
    .mui-content {
        background-color: #fff;
    }
    .wraper {
        padding: 5px;
    }
    .my-title {
        font-size: 16px;
        color: #0094ff;
    }
    .time {
        font-size: 12px;
        color: rgba(92,92,92,0.6);
    }
    .line {
        width: 100%;
        height: 1px;
        background-color: #ccc;
    }
    .content {
        font-size: 14px;
        color: #8f8f94;
    }
    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
    }
    li img{
        height: 100px;
    }
    li {
        display: inline-block;
        text-align: center;
    }
</style>

