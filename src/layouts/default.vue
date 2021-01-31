<template>
  <div id="main-layout">
    <MainMenu />
    <nuxt></nuxt>
    <AccountModal />
  </div>
</template>

<script>
import AccountModal from '@/components/Modals/AccountModal';
import MainMenu from '@/components/Navigation/MainMenu';

export default {
  components: {
    AccountModal,
    MainMenu,
  },
};
</script>
