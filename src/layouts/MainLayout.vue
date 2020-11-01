<template>
  <div id="main-layout" class="flex">
    <div class="flex flex-col">
      <Sidebar />
    </div>
    <div class="flex flex-1 flex-col">
      <MainMenu />
      <div class="p-8">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from '@/components/Navigation/MainMenu';
import Sidebar from '@/components/Navigation/Sidebar';

export default {
  components: {
    MainMenu,
    Sidebar,
  },
};
</script>

<style lang="scss" scoped></style>
