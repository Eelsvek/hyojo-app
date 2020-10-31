<template>
  <div>
    <MainMenu />
    <slot> </slot>
  </div>
</template>

<script>
import MainMenu from '@/components/Navigation/MainMenu';

export default {
  components: {
    MainMenu,
  },
};
</script>

<style lang="scss" scoped></style>
