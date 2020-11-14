<template>
  <div id="main-layout">
    <MainMenu />
    <div class="flex">
      <Sidebar />
      <div id="content" class="mt-16 p-6">
        <slot></slot>
      </div>
    </div>
    <BaseModal />
  </div>
</template>

<script>
import BaseModal from '@/components/Modals/BaseModal';
import MainMenu from '@/components/Navigation/MainMenu';
import Sidebar from '@/components/Navigation/Sidebar';

export default {
  components: {
    BaseModal,
    MainMenu,
    Sidebar,
  },
};
</script>

<style lang="scss" scoped>
#content {
  margin-left: 14rem;
}
</style>
