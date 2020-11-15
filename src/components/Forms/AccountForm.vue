<template>
  <div>
    <h1 class="text-center font-bold mb-5">{{ formTitle }}</h1>
    <ul class="flex mb-8">
      <li
        class="mr-3 border-primary-500 cursor-pointer"
        :class="{ 'border-b-2': userLogin }"
        @click="userLogin = true"
      >
        Login
      </li>
      <li
        class="cursor-pointer border-primary-500"
        :class="{ 'border-b-2': !userLogin }"
        @click="userLogin = false"
      >
        Register
      </li>
    </ul>
    <form @submit.prevent="onSubmit">
      <div class="mb-4">
        <label class="block text-primary-500 font-bold mb-2" for="email"
          >Email</label
        >
        <input
          id="email"
          v-model="$v.email.$model"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          :class="{ 'border-error': $v.email.$error }"
          type="text"
        />
        <p v-show="$v.email.$error" class="text-error text-xs italic">
          Please input a valid email address.
        </p>
      </div>
      <div class="mb-6">
        <label class="block text-primary-500 font-bold mb-2" for="password"
          >Password</label
        >
        <input
          id="password"
          v-model="$v.password.$model"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          :class="{ 'border-error': $v.password.$error }"
          type="password"
        />
        <p v-show="$v.password.$error" class="text-error text-xs italic">
          Please choose a password.
        </p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-secondary-500 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline w-full"
          :class="{
            'cursor-not-allowed opacity-50': $v.$invalid,
          }"
          type="submit"
        >
          {{ buttonText }}
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
      password: null,
      userLogin: true,
    };
  },

  validations: {
    email: {
      required,
      email,
    },

    password: {
      required,
    },
  },

  mounted() {
    console.log('this', this);
  },

  computed: {
    buttonText() {
      return this.userLogin ? 'Login' : 'Register';
    },

    formTitle() {
      return this.userLogin ? 'Login to Hyojo' : 'Register New Account';
    },
  },

  methods: {
    onSubmit() {},
  },
};
</script>

<style></style>
