import Vue from 'vue'
import App from './App'
import router from './router'
import { Search,Swipe, SwipeItem,Header,Button } from 'mint-ui'
import { Lazyload } from 'mint-ui';
import { Progress } from 'mint-ui';




Vue.config.productionTip = false

Vue.component(Search.name,Search);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Progress.name, Progress);
Vue.use(Lazyload);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
