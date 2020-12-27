const getDefaultState = () => ({
  loginRegisterModal: {
    show: false,
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
  },

  showLoginModal({ commit }) {
    commit('setLoginRegisterModal', true);
  },
};

export default {
  actions,
  mutations,
  namespaced: true,
  state,
};
