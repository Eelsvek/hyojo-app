<template>
  <div>
    <form @submit="onSubmit" class="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-primary-500 text-sm font-bold mb-2" for="email">Email</label>
        <input
          v-model="$v.email.$model"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          :class="{ 'border-error': $v.email.$error }"
          id="email"
          type="text"
          placeholder="Email"
        />
        <p v-show="$v.email.$error" class="text-error text-xs italic">
          Please input an email address.
        </p>
      </div>
      <div class="mb-6">
        <label class="block text-primary-500 text-sm font-bold mb-2" for="password">Password</label>
        <input
          v-model="$v.password.$model"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          :class="{ 'border-error': $v.password.$error }"
          id="password"
          type="password"
          placeholder="*****"
        />
        <p v-show="$v.password.$error" class="text-error text-xs italic">
          Please choose a password.
        </p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-primary-500 text-white text-sm font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline"
          :class="{
            'cursor-not-allowed opacity-50': $v.$invalid
          }"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      email: null,
      password: null
    };
  },

  validations: {
    email: {
      required,
      email
    },

    password: {
      required
    }
  },

  methods: {
    onSubmit() {}
  }
};
</script>

<style></style>
