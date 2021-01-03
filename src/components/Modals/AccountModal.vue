<template>
  <b-modal :id="ACCOUNT_MODAL_ID" :title="title" hide-footer>
    <b-tabs class="mb-3" small>
      <b-tab
        v-for="tab in tabs"
        :key="tab.id"
        :active="tab.title === modalType"
        :title="tab.title"
        @click="onTabClick(tab.id)"
      ></b-tab>
    </b-tabs>
    <b-form @submit="onSubmit">
      <template v-if="modalType === constants.LOGIN">
        <b-form-group label="Email" label-for="email-input">
          <b-form-input
            id="email-input"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Password" label-for="pw-input">
          <b-form-input
            id="pw-input"
            v-model="form.password"
            type="password"
            placeholder="Enter password"
            required
          ></b-form-input>
        </b-form-group>
      </template>
      <template v-else>
        <b-form-group label="Email" label-for="email-input">
          <b-form-input
            id="email-input"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Password" label-for="pw-input">
          <b-form-input
            id="pw-input"
            v-model="form.password"
            type="password"
            placeholder="Enter password"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Password Confirmation"
          label-for="pw-input-confirm"
        >
          <b-form-input
            id="pw-input-confirm"
            v-model="form.passwordConfirm"
            type="password"
            placeholder="Enter password again"
            required
          ></b-form-input>
        </b-form-group>
      </template>
      <b-button type="submit" variant="primary">{{ buttonText }}</b-button>
    </b-form>
  </b-modal>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import { Types } from '@/store/types/modals-types';
import { LOGIN, ACCOUNT_MODAL_ID } from '@/constants/account-modal-types';

export default {
  name: 'AccountModal',

  data() {
    return {
      constants: {
        ACCOUNT_MODAL_ID,
        LOGIN,
      },
      form: {
        email: '',
      },
      tabs: [
        {
          id: 1,
          title: 'Login',
        },
        {
          id: 2,
          title: 'Register',
        },
      ],
    };
  },

  computed: {
    ...mapGetters({
      modalType: Types.getters.GET_ACCOUNT_MODAL_TYPE,
    }),

    buttonText() {
      return this.modalType === LOGIN ? 'Login' : 'Register';
    },

    title() {
      return this.modalType === LOGIN ? 'Login to Hyojo' : 'Create an Account';
    },
  },

  methods: {
    ...mapActions({
      showLoginModal: Types.actions.SHOW_LOGIN_MODAL,
      showRegisterModal: Types.actions.SHOW_REGISTER_MODAL,
      hideAccountModal: Types.actions.HIDE_ACCOUNT_MODAL,
    }),

    onSubmit() {
      console.log('submittin');
    },

    onTabClick(tabId) {
      if (tabId === 1) {
        this.showLoginModal();
      } else {
        this.showRegisterModal();
      }
    },
  },
};
</script>
