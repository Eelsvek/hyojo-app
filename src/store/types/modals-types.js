import removeNamespace from '@/helpers/namespace-helpers';

export const Types = {
  getters: {
    GET_ACCOUNT_MODAL_TYPE: 'modals/getAccountModalType',
  },
  mutations: {
    SET_ACCOUNT_MODAL_TYPE: 'modals/setAccountModalType',
  },
  actions: {
    SHOW_LOGIN_MODAL: 'modals/showLoginModal',
    SHOW_REGISTER_MODAL: 'modals/showRegisterModal',
    HIDE_ACCOUNT_MODAL: 'modals/hideAccountModal',
  },
};

export const PrivateTypes = removeNamespace('modals/', Types);
