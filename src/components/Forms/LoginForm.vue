<template>
  <div>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-primary-500 text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div class="mb-6">
        <label class="block text-primary-500 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input
          class="shadow appearance-none border border-error rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
        />
        <p class="text-error text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-primary-500 hover:bg-primary-300 text-white text-sm font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Sign In
        </button>
        <a
          class="inline-block align-baseline font-bold text-sm text-primary hover:text-primary-300"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">
      &copy;2020 SCMP LLC.
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
