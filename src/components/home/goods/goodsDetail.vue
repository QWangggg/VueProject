<template>
    <div class="mui-content">
        <div class="detail">
            <div class="top">
              <myswipe :imgUrl="imgUrl"></myswipe>
            </div>
        </div>
        <div class="sell">
            <h4>{{ infos.title }}</h4>
            <div class="price">
                市场价：<s>￥{{ infos.market_price }}</s> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 销售价：<span>￥{{ infos.sell_price }}</span>
            </div>
            <div class="num">
                购买数量：<amount :max="infos.stock_quantity" @valchange="myamount"></amount>
                <transition
                    v-on:before-enter="beforeEnter"
                    v-on:enter="enter"
                    v-on:after-enter="afterEnter"
                    v-on:after-leave="afterLeave"
                >
                    <div v-show="isShow" class="ball"></div>
                </transition>               
            </div>
            <div class="button">
                <button class="mui-btn mui-btn-primary">立刻购买</button>
                <button class="mui-btn mui-btn-danger" @click="addCart">加入购物车</button>
            </div>
        </div>

        <div class="param">
            <h5>商品参数</h5>
            <div class="info">
                <p>商品编号：{{ infos.goods_no }}</p>
                <p>库存情况：{{ infos.stock_quantity }}件</p>
                <p>上架时间：{{ infos.add_time | fmtdate('YYYY-MM-DD HH:mm:ss') }}</p>
            </div>
        </div>
        
        <div class="footer">
            <a class="mui-btn mui-btn-primary mui-btn-outlined">图文介绍</a>
            <a class="mui-btn mui-btn-danger mui-btn-outlined">商品评论</a>
        </div>
    </div>
</template>

<script>
    // 导入轮播图
    import myswipe from '../../common/swipe.vue'

    //数量加减器
    import amount from '../../common/amount.vue'

    import vueObj from '../../config/communication.js'

    //本地存储器
    import { setData } from '../../common/localstoragehelp.js'
  
    //导出组件
    export default {
        data() {
            return {
                infos:{},
                imgUrl: 'getthumimages/',
                mycount: 1,
                isShow: false
            }
        },
        props:['id'],
        components: {
            myswipe,
            amount
        },
        created(){
            this.imgUrl = this.imgUrl + this.id
            this.getData()
        },
        methods:{
            getData(){
                this.$http
                    .get('/goods/getinfo/'+this.id)
                    .then(res=>{
                        if(res.status === 200 && res.data.status === 0){
                            this.infos = res.data.message[0]
                            console.log(this.infos)
                        }
                    })
                    .catch(err=>{
                        console.error(err)
                    })
            },
            myamount(value){
                this.mycount = value
            },
            addCart(){
                this.isShow = true 
                setData({id:this.infos.id,count:this.mycount})
            },
            beforeEnter: (el) => {
                 el.style.transform = "translate(0,0)"
            },
            enter(el, done) {     
                let elX = el.getBoundingClientRect().left;
                let elY = el.getBoundingClientRect().top;
                // badge的位置
                // 通过dom获取badge
                let badge = document.querySelector('.mui-badge');
                let badgeX = badge.getBoundingClientRect().left;
                let badgeY = badge.getBoundingClientRect().top;

                // 相减
                let x = badgeX - elX;
                let y = badgeY - elY;  
                
                el.style.transform = `translate(${x}px, ${y}px)`;
                done();
            },
            afterEnter: function() {
                console.log(this)
                this.isShow = false;
            },
            afterLeave: function() {
                console.log(1)
                vueObj.$emit('addCartAmount', this.mycount)
            }
        }
    }
</script>

<style scoped>
    .num {
        position: relative;
    }
    
    .ball {
        left: 115px;
        top: 3px;
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background-color: red;
        transition: all 0.5s linear;
        z-index: 1000;
    }
    
    .mui-content {
        background-color: #fff;
    }
    
    .top,
    .sell,
    .param,
    .footer {
        border: 1px solid rgba(92, 92, 92, 0.7);
        border-radius: 5px;
        margin: 5px;
        padding: 10px;
    }
    
    .sell h4 {
        color: dodgerblue;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(92, 92, 92, 0.5);
    }
    
    .price,
    .num,
    .button {
        margin: 10px;
        font-size: 15px;
    }
    
    .price span {
        font-size: 18px;
        color: red;
    }
    
    .param h5 {
        font-weight: bold;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(92, 92, 92, 0.5);
    }
    
    .info {
        margin-top: 10px;
        margin-left: 20px;
    }
    
    .info p {
        margin: 0;
    }
    
    .footer .mui-btn {
        width: 100%;
    }
    
    .footer .mui-btn-danger {
        margin-top: 10px;
    }
</style>
