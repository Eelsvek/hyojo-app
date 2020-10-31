<template>
  <div id="app">
    <MainLayout>
      <router-view />
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout';

export default {
  components: { MainLayout },
};
</script>
