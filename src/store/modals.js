import { PrivateTypes, LOGIN, REGISTER } from '@/constants/store/modals';

const ACTION = PrivateTypes.actions;
const MUTATION = PrivateTypes.mutations;
const GETTER = PrivateTypes.getters;

const getDefaultState = () => ({
  accountModal: {
    type: '',
  },
});

export const state = getDefaultState;

export const getters = {
  [GETTER.GET_ACCOUNT_MODAL_TYPE]: state => {
    return state.accountModal.type;
  },
};

export const mutations = {
  [MUTATION.RESET_ACCOUNT_MODAL]: state => {
    Object.assign(state, getDefaultState());
  },

  [MUTATION.SET_ACCOUNT_MODAL_TYPE]: (state, type) => {
    state.accountModal.type = type;
  },
};

export const actions = {
  [ACTION.SHOW_REGISTER_MODAL]: ({ commit }) => {
    commit(MUTATION.SET_ACCOUNT_MODAL_TYPE, REGISTER);
  },

  [ACTION.SHOW_LOGIN_MODAL]: ({ commit }) => {
    commit(MUTATION.SET_ACCOUNT_MODAL_TYPE, LOGIN);
  },
};
