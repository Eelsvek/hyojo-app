import { MODALS } from '../types/modal-types';

const { LOGIN, REGISTER } = MODALS;

const getDefaultState = () => ({
  loginRegisterModal: {
    show: false,
    type: LOGIN,
  },
});

export const state = getDefaultState;

export const mutations = {
  resetLoginRegisterModal(state) {
    Object.assign(state, getDefaultState());
  },

  setLoginRegisterModal(state, show) {
    state.loginRegisterModal.show = show;
  },

  setLoginRegisterModalType(state, type) {
    state.loginRegisterModal.type = type;
  },
};

export const actions = {
  showRegisterModal({ commit }) {
    commit('setLoginRegisterModal', true);
    commit('setLoginRegisterModalType', REGISTER);
  },

  showLoginModal({ commit }) {
    commit('setLoginRegisterModal', true);
    commit('setLoginRegisterModalType', LOGIN);
  },
};

export default {
  state,
  mutations,
  actions,
};
