<template>
  <b-navbar variant="primary" type="dark">
    <b-navbar-nav>
      <b-nav-item v-for="item in navItems" :key="item.id" :to="item.url">
        {{ item.title }}
      </b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto">
      <b-nav-item right>User</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
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
