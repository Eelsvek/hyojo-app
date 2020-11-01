<template>
  <div id="sidebar" class="flex flex-col w-56 h-screen bg-secondary-300">
    <a
      v-for="item in sidebarItems"
      :key="item.url"
      class="px-2 py-2 color-white cursor-pointer"
      >{{ item.title }}</a
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarItems: [
        {
          title: 'Home',
          url: '/',
        },
        {
          title: 'Following',
          url: '/directory/following',
        },
      ],
    };
  },
};
</script>

<style></style>
