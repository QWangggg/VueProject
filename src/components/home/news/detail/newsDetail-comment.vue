<template>
  
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
                <span class="user">{{item.user_name}}</span>  <span>{{item.add_time | fmtdate('YYYY-MM-DD HH:mm:ss')}}</span>
            </div>
        </div>

        <div class="more">
            <button class="mui-btn mui-btn-primary mui-btn-outlined" @click="getMoreData(index)">加载更多</button>
        </div>

    
  </div>

</template>

<script>

    export default{
        data(){
            return {
                myComments:[],
                userContent: '',
                index:1,
                bool: true
            }
        },
        props:['id'],
        created(){
            this.getData()
        },
        methods: {            
            getData(pageindex=1){
                this.$http
                    .get('getcomments/'+this.id+'?pageindex='+pageindex)
                    .then(res=>{
                        if(res.status === 200 && res.data.status === 0 && res.data.message.length > 0){
                            if (this.bool) {
                                this.myComments = this.myComments.concat(res.data.message)
                            } else {
                                this.myComments.unshift(res.data.message[0])
                                if(this.myComments.length >10) {
                                    this.myComments.pop()
                                }          
                            }
                            
                            // this.myComments = res.data.message
                            // console.log(this.myComments)
                        } 
                    })
                    .catch(err => console.error(err))
            },
            postData(){
                this.$http
                    .post('postcomment/'+this.id,'content='+this.userContent)
                    .then(res=>{
                        if(res.status ===200 && res.data.status === 0){
                            this.bool = false
                            this.$toast('提交成功')
                            this.getData(1)
                            this.userContent = ''
                        }
                    })
            },
            getMoreData(){
                this.index ++;
                this.bool = true;
                // console.log(this.index)
                this.getData(this.index)
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
