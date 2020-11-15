import Vuex from 'vuex';
import Vue from 'vue';

import modals from './modules/modals';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    modals,
  },
  strict: process.env.NODE_ENV !== 'production',
});
