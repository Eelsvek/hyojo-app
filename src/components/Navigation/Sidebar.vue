<template>
  <div
    id="sidebar"
    class="fixed flex flex-col w-56 h-screen bg-secondary-300 overflow-y-auto mt-16"
  >
    <router-link
      v-for="item in sidebarItems"
      :key="item.url"
      class="px-3 py-4 color-white cursor-pointer uppercase font-bold"
      :to="item.url"
      >{{ item.title }}
    </router-link>
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
