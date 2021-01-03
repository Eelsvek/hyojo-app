<template>
  <div id="app">
    <MainLayout>
      <router-view />
    </MainLayout>
    <AccountModal />
  </div>
</template>

<script>
import AccountModal from '@/components/Modals/AccountModal';
import MainLayout from '@/layouts/MainLayout';

export default {
  components: { AccountModal, MainLayout },
};
</script>
