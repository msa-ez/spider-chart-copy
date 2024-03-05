import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import '@mdi/font/css/materialdesignicons.css';
import { Icon } from '@iconify/vue2';
import store from './store'; // store.js에서 정의한 스토어를 가져옵니다.

Vue.component('Icon', Icon);
Vue.prototype.$eventBus = new Vue();

require('./style.css');

new Vue({
  vuetify,
  router,
  store, // 여기에서 가져온 스토어를 사용합니다.
  render: h => h(App)
}).$mount('#app');
