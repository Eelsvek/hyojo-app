import Vue from 'vue';
import Vuelidate from 'vuelidate';
import Vuex from 'vuex';

import App from './App.vue';
import './assets/main.scss';
import './assets/tailwind.scss';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(Vuex);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
