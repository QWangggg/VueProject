<template>
	<div class="mui-content">
		<div class="row" v-for="(item,index) in goodslist" :key="item.id">
			<div class="left">
				<mt-switch v-model="value[(index)]"></mt-switch>
			</div>
			<div class="center">
				<img width="75" height="75" :src="item.thumb_path" alt="">
			</div>
			<div class="right">
				<h4>
					{{item.title}}
				</h4>
				<span>￥{{item.sell_price}}</span>
				<amount :count="data[index].count" :index="index" ></amount>
				<a >删除</a>
			</div>
		</div>

		<div class="total">
			<div class="left">
				<h4>总计(不含运费):</h4>
				<span>已经选择商品 {{ totalNum }} 件，共计￥{{totalPrice}}元</span>
			</div>
			<div class="right">
				<button  class="mui-btn mui-btn-danger">去结算</button>
			</div>
      
		</div>
    {{ value }}
	</div>
  
</template>

<script>
  // 引入switch
  import { Switch } from 'mint-ui';
  // 引入localstorage
  import { getData } from '../common/localstoragehelp.js';
  // 引入加减器
  import amount from '../common/amount.vue'
  //引入setData
  import { setData } from '../common/localstoragehelp.js'
  //引入时光机
  import vueObj from '../config/communication.js'

  export default {
    data(){
      return {
        value: [],
        data: [],
        id: [],
        goodslist: [],
        count: 1,
        totalNum: 0,
        totalPrice: 0,
      }
    },
    methods: {
      getCartData(){
        var that = this
        this.$http
          .get('goods/getshopcarlist/'+this.id.toString())
          .then(res=>{
            if(res.status ===200 && res.data.status === 0) {
              this.goodslist = res.data.message
              this.goodslist.forEach(function(item, index){
                that.value.push(false)
              })
              this.goodslist.sort(function(a,b){
                return a.id - b.id
              })
              this.data.sort(function(a,b){
                return a.id - b.id
              })
              console.log(this.data)
            }
            // console.log(this.goodslist)
          })
          .catch(err=>{
            console.error(err)
          })
      },
      getTotalPrice(){
        this.data = getData()
        var that = this
        that.totalNum = 0
        that.totalPrice = 0
        that.value.forEach(function(item, index) {
            if(item){
              that.totalNum += that.data[index].count
              that.totalPrice += that.goodslist[index].sell_price*that.data[index].count
            }      
        }, this);
      }
    },
    created(){
      var that = this
      this.data = getData()
      this.data.forEach((item)=>{
        this.id.push(item.id)
      })
      this.getCartData()
      
      vueObj.$on('changeCart', function(obj){
          if(obj.type === 'sub') {
              setData({id: that.data[obj.index].id, count : -1})
              that.getTotalPrice()         
          }
          if(obj.type === 'add') {
              setData({id: that.data[obj.index].id, count : 1})
              that.getTotalPrice()
          }
      })
    },
    components: {
      amount
    },
    watch: {
      'value': function(){        
        this.getTotalPrice() 
      }
    },
  }

</script>

<style scoped>
.mui-bar-tab ~ .mui-content {
  padding-bottom: 0;
  background-color: #fff;
}
.total {
  display: flex;
  margin-top: 10px;
  padding: 5px 10px;
  background-color: rgba(92, 92, 92, 0.2);
  justify-content: space-between;
  height: 70px;
}

.total h4 {
  font-weight: bold;
  font-family: '微软雅黑';
}

.total span {
  margin-top: 10px;
  font-size: 14px;
}

.total .right {
  margin-top: 8px;
}

.row {
  display: flex;
  border-bottom: 1px solid rgba(1, 1, 1, 0.3);
  padding: 10px 5px;
}

.row .left {
  /*flex: 0, 0, auto;*/
  padding-top: 20px;
}

.row .center {
  /*flex: 0, 0, auto;*/
  margin-left: 5px;
}

.row .right {
  /*flex: 1;*/
  margin-left: 5px;
}

.row .right h4 {
  color: #0094ff;
  font-size: 16px;
  padding: 5px 0px;
}

.row .right .num {
  display: inline-block;
  margin-left: 5px;
}

.row .right span {
  color: red;
  font-size: 20px;
}

.row .right a {
  color: gray;
  font-size: 14px;
  margin-left: 5px;
}
</style>

