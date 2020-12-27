<template>
  <b-nav>
    <b-nav-item v-for="item in navItems" :key="item.id">
      <router-link :to="item.url">{{ item.title }}</router-link>
    </b-nav-item>
  </b-nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          id: 1,
          title: 'Home',
          url: '/',
        },
        {
          id: 2,
          title: 'Profile',
          url: '/profile',
        },
        {
          id: 3,
          title: 'Browse',
          url: '/directory',
        },
      ],
    };
  },
};
</script>

<style></style>
