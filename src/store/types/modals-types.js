import removeNamespace from '@/helpers/namespace-helpers';

export const GET_ACCOUNT_MODAL_TYPE = '';

export const Types = {
  getters: {
    GET_ACCOUNT_MODAL_TYPE: 'modals/getAccountModalType',
  },
  mutations: {
    RESET_ACCOUNT_MODAL: 'modals/resetLoginRegisterModal',
    SET_ACCOUNT_MODAL: 'modals/setLoginRegisterModal',
    SET_ACCOUNT_MODAL_TYPE: 'modals/setLoginRegisterModalType',
  },
  actions: {
    SHOW_LOGIN_MODAL: 'modals/showLoginModal',
    SHOW_REGISTER_MODAL: 'modals/showRegisterModal',
  },
};

export const PrivateTypes = removeNamespace('modals/', Types);
