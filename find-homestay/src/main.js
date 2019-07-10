import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/**引入Mint-UI**/
import MintUI from 'mint-ui'
/**注册Mint-UI**/
Vue.use(MintUI)
/**引入Mint-UI样式**/
import 'mint-ui/lib/style.css'

/**引入axios.js文件**/
import axios from './axios'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
