import { LOGIN, REGISTER } from '@/constants/account-types';
import { PrivateTypes } from '@/store/types/modals-types';

const getDefaultState = () => ({
  accountModal: {
    show: false,
    type: LOGIN,
  },
});

export const state = getDefaultState;

export const getters = {
  [PrivateTypes.getters.GET_ACCOUNT_MODAL]: state => {
    return state.accountModal;
  },
};

export const mutations = {
  [PrivateTypes.mutations.RESET_ACCOUNT_MODAL]: state => {
    Object.assign(state, getDefaultState());
  },

  [PrivateTypes.mutations.SET_ACCOUNT_MODAL]: (state, show) => {
    state.accountModal.show = show;
  },

  [PrivateTypes.mutations.SET_ACCOUNT_MODAL_TYPE]: (state, type) => {
    state.accountModal.type = type;
  },
};

export const actions = {
  [PrivateTypes.actions.SHOW_REGISTER_MODAL]: ({ commit }) => {
    commit(PrivateTypes.mutations.SET_ACCOUNT_MODAL, true);
    commit(PrivateTypes.mutations.SET_ACCOUNT_MODAL_TYPE, REGISTER);
  },

  [PrivateTypes.actions.SHOW_LOGIN_MODAL]: ({ commit }) => {
    commit(PrivateTypes.mutations.SET_ACCOUNT_MODAL, true);
    commit(PrivateTypes.mutations.SET_ACCOUNT_MODAL_TYPE, LOGIN);
  },
};

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};
