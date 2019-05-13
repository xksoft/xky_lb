import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '../my-theme/index.less'

import axios from 'axios'

axios.defaults.baseURL='http://127.0.0.1'
 
Vue.prototype.axios=axios  
Vue.config.productionTip = false
Vue.use(iView, {
    transfer: true,
    size: 'large'
})  

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
