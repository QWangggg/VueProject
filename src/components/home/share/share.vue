<template>
  <div class="mui-content">
    <div class="title">
      <ul :style="ulWidth">
          <li>
              <a @click="getImage(-1)" href="javascript:;">全部</a>
          </li>
          <li v-for="item in listArr" :key="item.id">
              <a @click="getImage(item.id)" href="javascript:;">{{ item.title }}</a>
          </li>
      </ul>
    </div>

    <div class="images">
      <ul>
          <li v-for="item in imgList" :key="item.id">
              <router-link :to="{name: 'shareDetail', params: {id : item.id}}" href="javascript:;">
                  <img :src="item.img_url" alt="">
                  <p  class="cover">
                      <span class="my_title">{{ item.title }}</span><br>
                      <span v-html="item.zhaiyao"></span>
                      <!-- <div v-html="item.content"></div> -->
                  </p>
              </router-link>
          </li>
      </ul>
    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        listArr:[],
        ulWidth: 'width: 600px',
        imgList: []
    };
  },
  created() {
      this.getList();
      this.getImage()
  },
  methods: {
      getList: function(){
          this.$http
            .get('getimgcategory')
            .then(response=>{
                if(response.status === 200 && response.data.status === 0) {  
                    this.listArr = response.data.message;
                    this.ulWidth = 'width: ' + (78 * this.listArr.length + 50) + 'px';
                    // console.log(this.ulWidth);
                }
            })
            .catch(error=>{
                console.error(error)
            })
      },
      getImage: function(id=-1){
          this.$http
            .get('getimages/' + id)
            .then(response=>{
                if(response.status === 200 && response.data.status === 0) {
                    // console.log(response.data.message)
                    this.imgList = response.data.message
                }
            })
            .catch(err=>{
                console.error(err)
            })
      }
  }
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.title {
  overflow-x: auto;
  overflow-y: hidden;
}

.title > ul {
  width: 1000px;
}
/* webkit核心的浏览器 隐藏滚动条 */
::-webkit-scrollbar {
  display: none;
}

.title > ul > li {
  display: inline-block;
  padding: 20px 5px;
}

.images {
  margin-top: 10px;
}

.images > ul {
}

.images img {
  height: 300px;
  width: 100%;
}

.images > ul > li {
  position: relative;
}

.images .cover > .my_title {
  font-weight: bold;
}

.images .cover {
  color: #fff;
  position: absolute;
  left: 0px;
  bottom: 0px;
  background-color: rgba(92, 92, 92, 0.4);
  width: 100%;
  margin-bottom: 5px;
}
</style>


