import Vue from 'vue';
import Vuelidate from 'vuelidate';
import {
  BootstrapVue,
  IconsPlugin,
  NavPlugin,
  SidebarPlugin,
} from 'bootstrap-vue';

import App from './App.vue';
import './assets/main.scss';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(NavPlugin);
Vue.use(SidebarPlugin);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
