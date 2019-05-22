import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'
import store from './store'
/* import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css'; */
/* import './plugins/element.js' */

/* Vue.use(MuseUI); */

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
