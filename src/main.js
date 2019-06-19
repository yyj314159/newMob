import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import router from './router/router';
import store from './store/store';
Vue.use(Mint);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
