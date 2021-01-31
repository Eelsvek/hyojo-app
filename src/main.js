import Vue from 'vue';
import Vuelidate from 'vuelidate';
import {
  BootstrapVue,
  DropdownPlugin,
  FormPlugin,
  IconsPlugin,
  ModalPlugin,
  NavPlugin,
  SidebarPlugin,
  TabsPlugin,
} from 'bootstrap-vue';

import App from './App.vue';
import './assets/main.scss';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(BootstrapVue);
Vue.use(DropdownPlugin);
Vue.use(FormPlugin);
Vue.use(IconsPlugin);
Vue.use(ModalPlugin);
Vue.use(NavPlugin);
Vue.use(SidebarPlugin);
Vue.use(TabsPlugin);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
