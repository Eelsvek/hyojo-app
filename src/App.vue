<template>
  <div id="app">
    <MainLayout>
      <router-view />
    </MainLayout>
    <AccountModal :value="accountModal.show" :type="accountModal.type" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Types } from '@/store/types/modals-types';

import AccountModal from '@/components/Modals/AccountModal';
import MainLayout from '@/layouts/MainLayout';

export default {
  components: { AccountModal, MainLayout },
  computed: {
    ...mapGetters({
      accountModal: Types.getters.GET_ACCOUNT_MODAL,
    }),
  },
};
</script>
