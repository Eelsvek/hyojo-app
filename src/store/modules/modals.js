import { LOGIN, REGISTER } from '@/constants/account-types';
import { PrivateTypes } from '@/store/types/modal-types';

const getDefaultState = () => ({
  accountModal: {
    show: false,
    type: LOGIN,
  },
});

const { GET_ACCOUNT_MODAL_TYPE } = PrivateTypes.getters;

const {
  RESET_ACCOUNT_MODAL,
  SET_ACCOUNT_MODAL_TYPE,
  SET_ACCOUNT_MODAL,
} = PrivateTypes.mutations;

const { SHOW_LOGIN_MODAL, SHOW_REGISTER_MODAL } = PrivateTypes.actions;

export const state = getDefaultState;

export const getters = {
  [GET_ACCOUNT_MODAL_TYPE]: state => {
    return state.accountModal.type;
  },
};

export const mutations = {
  [RESET_ACCOUNT_MODAL]: state => {
    Object.assign(state, getDefaultState());
  },

  [SET_ACCOUNT_MODAL]: (state, show) => {
    state.accountModal.show = show;
  },

  [SET_ACCOUNT_MODAL_TYPE]: (state, type) => {
    state.accountModal.type = type;
  },
};

export const actions = {
  [SHOW_REGISTER_MODAL]({ commit }) {
    commit(SET_ACCOUNT_MODAL, true);
    commit(SET_ACCOUNT_MODAL_TYPE, REGISTER);
  },

  [SHOW_LOGIN_MODAL]({ commit }) {
    commit(SET_ACCOUNT_MODAL, true);
    commit(SET_ACCOUNT_MODAL_TYPE, LOGIN);
  },
};

export default {
  actions,
  getters,
  mutations,
  namespaced: true,
  state,
};
