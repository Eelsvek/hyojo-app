<template>
  <div>
    <form @submit="onSubmit" class="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-primary-500 text-sm font-bold mb-2" for="email">Email</label>
        <input
          v-model="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
          placeholder="Email"
        />
      </div>
      <div class="mb-6">
        <label class="block text-primary-500 text-sm font-bold mb-2" for="password">Password</label>
        <input
          v-model="password"
          class="shadow appearance-none border border-error rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="*****"
        />
        <p class="text-error text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-primary-500 hover:bg-primary-300 text-white text-sm font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >Sign In</button>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">&copy;2020 SCMP LLC.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
    };
  },

  methods: {
    onSubmit() {
      console.log('wooo', this.email, this.password);
    },
  },
};
</script>

<style></style>
