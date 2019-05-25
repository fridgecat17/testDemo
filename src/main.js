import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'
import store from './store/store'
import Axios from 'axios';

import Scroller from '@/components/Scroller/Scroller'
import Loding from '@/components/loding/loding'

/* import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css'; */
/* import './plugins/element.js' */

/* Vue.use(MuseUI); */

Vue.component("Scroller",Scroller);
Vue.component("Loding",Loding);

Vue.prototype.axios = Axios;
Vue.filter('setImg',function(value,str){
  var newUrl = value.replace(/w\.h/,str);
  return newUrl;
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
