import Vue from 'vue'

//引入axios
import axios from 'axios'
Vue.prototype.$http = axios
Vue.prototype.axios = axios
//提取根地址
axios.defaults.baseURL = 'http://127.0.0.1:8899/api/'

//引入mint-ui
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'