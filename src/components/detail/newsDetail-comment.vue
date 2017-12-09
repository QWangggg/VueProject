<template>
  <div class="mui-content">
    <!--  评论 -->
      <div class="comment">
        <!--添加评论-->
        <h4>提交评论</h4>

        <div class="submitcomment">
            <textarea placeholder="请输入评论内容" v-model="userContent"></textarea>
            <button class="mui-btn mui-btn-primary" @click="postData()">发表</button>
        </div>
            
        <div class="title">
            <h4>评论列表</h4>
        </div>    
        
        <!--评论列表-->
        
        <div class="item" v-for="(item, index) in myComments" :key="index">
            <div class="content">{{item.content}}</div>
            <div>
                <span class="user">{{item.user_name}}</span>  <span>{{item.addtime | fmtdate('YYYY-MM-DD HH-mm-ss')}}</span>
            </div>
        </div>

        <div class="more">
            <button class="mui-btn mui-btn-primary mui-btn-outlined">加载更多</button>
        </div>

    </div>
  </div>

</template>

<script>

    export default{
        data(){
            return {
                myComments:[],
                userContent: ''
            }
        },
        props:['id'],
        created(){
            this.getData()
        },
        methods: {            
            getData(){
                var id = this.id.slice(1)
                this.$http
                    .get('/api/getcomments/'+id+'?pageindex=1')
                    .then(res=>{
                        if(res.status === 200 && res.data.status === 0 && res.data.message.length > 0){
                            this.myComments = res.data.message
                            // console.log(this.myComments)
                        }
                    })
                    .catch(err => console.error(err))
            },
            postData(){
                console.log(this.userContent)
                var id = this.id.slice(1)
                this.$http
                    .post('/api/postcomment/'+id,'content='+this.userContent)
            }
        }
    }
</script>


<style scoped>
  .mui-content {
    background-color: #fff;
  }
  .title {
    padding: 10px 5px;
    border-bottom: 1px solid rgba(92, 92, 92, 0.1);
  }
  .title h3 {
    font-size: 16px;
    font-weight: bold;
    color: #0094ff;
  }
  .title span {
    color: rgba(92, 92, 92, 0.7);
    font-size: 12px;
  }
  .details {
    padding: 5px 5px;
    overflow: hidden;;

  }
  /*  评论的样式 */
    .submitcomment {
        text-align: center;
    }
    
    .submitcomment textarea {
        margin-top: 10px;
        padding: 0;
        width: 96%;
        height: 60px;
    }
    
    .submitcomment button {
        width: 96%;
    }
    
    .comment .title {
        border-top: 1px solid rgba(92, 92, 92, 0.4);
        border-bottom: 1px solid rgba(92, 92, 92, 0.4);
        margin: 20px 0 0 0;
        vertical-align: middle;
        padding: 10px 0;
    }
    
    .item {
        padding: 15px 10px;
        border-bottom: 1px solid rgba(92, 92, 92, 0.4);
    }
    
    .item div {
        padding: 5px 0;
        display: flex;
        justify-content: space-between;
    }
    
    .item span {
        font-size: 15px;
    }
    
    .item .user {
        color: skyblue;
    }
    
    .more {
        margin: 10px 0;
        text-align: center;
    }
    
    .more>button {
        width: 96%;
    }
</style>
