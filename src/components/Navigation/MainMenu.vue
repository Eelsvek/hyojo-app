<template>
  <b-navbar toggleable="lg" variant="secondary">
    <b-navbar-nav>
      <b-nav-item v-for="item in navItems" :key="item.id" :to="item.url">
        {{ item.title }}
      </b-nav-item>
    </b-navbar-nav>
    <!-- Right side of navbar -->
    <b-navbar-nav class="ml-auto">
      <template v-if="!loggedIn">
        <b-button variant="dark" size="sm" @click="onLogin">Login</b-button>
        <b-button class="ml-2" variant="warning" size="sm" @click="onRegister"
          >Sign Up</b-button
        >
      </template>
      <b-nav-item-dropdown v-else right>
        <template #button-content>
          <b-icon icon="person-circle" variant="light" font-scale="1.5" />
        </template>
        <b-dropdown-item to="/profile">Profile</b-dropdown-item>
        <b-dropdown-item>Sign Out</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { mapActions } from 'vuex';
import { BIcon } from 'bootstrap-vue';

import { Types } from '@/store/types/modals-types';
import { ACCOUNT_MODAL_ID } from '@/constants/account-modal-types';

export default {
  components: {
    BIcon,
  },

  data() {
    return {
      loggedIn: false,
      navItems: [
        {
          id: 1,
          title: 'Home',
          url: '/',
        },
        {
          id: 3,
          title: 'Browse',
          url: '/directory',
        },
      ],
    };
  },

  methods: {
    ...mapActions({
      showLoginModal: Types.actions.SHOW_LOGIN_MODAL,
      showRegisterModal: Types.actions.SHOW_REGISTER_MODAL,
    }),

    onLogin() {
      this.showLoginModal();
      this.$bvModal.show(ACCOUNT_MODAL_ID);
    },

    onRegister() {
      this.showRegisterModal();
      this.$bvModal.show(ACCOUNT_MODAL_ID);
    },
  },
};
</script>

<style></style>
