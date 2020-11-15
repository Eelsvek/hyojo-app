import Vuex from 'vuex';

import Modals from './modules/modals';

export default new Vuex.Store({
  modules: {
    modals: Modals,
  },
});
