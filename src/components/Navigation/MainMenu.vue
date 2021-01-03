<template>
  <b-navbar toggleable="lg" variant="dark" type="dark">
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
import { BIcon } from 'bootstrap-vue';

import { Types } from '@/store/types/modals-types';

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
    async onLogin() {
      await this.$store.dispatch(Types.actions.SHOW_LOGIN_MODAL);
      this.$bvModal.show('account-modal');
    },

    async onRegister() {
      await this.$store.dispatch(Types.actions.SHOW_REGISTER_MODAL);
      this.$bvModal.show('account-modal');
    },
  },
};
</script>

<style></style>
