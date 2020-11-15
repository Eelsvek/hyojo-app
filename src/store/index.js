import Vuex from 'vuex';
import Vue from 'vue';

import Modals from './modules/modals';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    modals: Modals,
  },
});
