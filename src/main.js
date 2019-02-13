import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//插件和全局对象设置
Vue.use(ElementUI); //注册ElementUI插件
Vue.prototype.$axios=axios; //把axios z设置为所有组件实例成员属性，以后可以使用this.$axios使用异步请求
Vue.config.productionTip = false
//要求axios每次必须携带cookie去服务端
axios.defaults.withCredentials=true
Vue.prototype.axios=axios

Vue.filter("date",(val)=>{
//把bigint转换为 yyy-mm-dd
var date=new Date(val);
var yy=date.getFullYear();
var mm=date.getMonth()+1;
    mm=mm>9 ? mm : "0"+mm;
var dd=date.getDate();
  dd=dd>9 ? dd : "0"+dd;

  return yy+'-'+mm+'-'+dd
})
Vue.filter("datetime",(val)=>{
  //把bigint转换为yyy-mm-dd hh:mm:ss
  var date=new Date(val);
var yy=date.getFullYear();
var mm=date.getMonth()+1;
    mm=mm>9 ? mm : "0"+mm;
var dd=date.getDate();
  dd=dd>9 ? dd : "0"+dd;
var hh=date.getHours();
  hh=hh>9?mm:"0"+mm;
var cc=date.getMinutes();
  cc=cc>9?cc:"0"+cc;
var ss=date.getSeconds();
  ss=ss>9?ss:"0"+ss;
  return yy+'-'+mm+'-'+dd+'-'+hh+'-'+cc+'-'+ss
})
Vue.filter("currency",(val)=>{
  //把int转换为 ￥xx.yy
  return '￥'+val.toFixed(2)

})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
