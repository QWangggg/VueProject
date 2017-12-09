import Vue from 'vue'
//引入插件
import './components/config/plugins.js'
// 引入过滤器
import './components/config/filters.js'
//引入路由
import router from './components/config/router.js'

import app from './app.vue'
import '../static/css/mui.css'

let vm = new Vue({
    el: '#app',
    router,
    render: function (createElement) {
        return createElement(app)
    },
    created() {
        // Add a request interceptor
        this.axios.interceptors.request.use(function (config) {
            // Do something before request is sent
            this.$indicator.open('正在加载...')
            return config;
        }.bind(this), function (error) {
            // Do something with request error
            return Promise.reject(error);
        });

        // Add a response interceptor
        this.axios.interceptors.response.use((response) => {
            // Do something with response data
            this.$indicator.close()
            return response;
        }, (error) => {
            // Do something with response error
            this.$indicator.close()
            return Promise.reject(error);
        });
    }
})