<template>
  <div id="app">
    <MainLayout>
      <router-view />
    </MainLayout>
    <AccountModal :value="true" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import AccountModal from '@/components/Modals/AccountModal';
import MainLayout from '@/layouts/MainLayout';

export default {
  components: { AccountModal, MainLayout },
  computed: {
    ...mapGetters({
      '':
    })
  }
};
</script>
