import Vue from 'vue'

//引入moment
import moment from 'moment'
Vue.filter('fmtdate',(date, dateStr)=>{
    return moment(date).format(dateStr)
})