import Vue from 'vue'
import App from './App'
import router from './router'
import { Search,Swipe, SwipeItem } from 'mint-ui'


Vue.config.productionTip = false

Vue.component(Search.name,Search);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
