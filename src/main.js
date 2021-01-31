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

import './assets/main.scss';

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
