<template>
  <b-modal v-model="value" :title="title" hide-footer>
    <b-tabs class="mb-3" small>
      <b-tab
        v-for="tab in tabs"
        :key="tab.id"
        :title="tab.title"
        @click="onTabClick(tab.id)"
      ></b-tab>
    </b-tabs>
    <b-form @submit="onSubmit">
      <template v-if="formType === constants.LOGIN">
        <b-form-group label="Email" label-for="email-input">
          <b-form-input
            id="email-input"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Password" label-for="pw-input">
          <b-form-input
            id="pw-input"
            v-model="form.password"
            type="password"
            placeholder="Enter Password"
            required
          ></b-form-input>
        </b-form-group>
      </template>
      <template v-else>
        <b-form-group label="Email" label-for="email-input">
          <b-form-input
            id="email-input"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Password" label-for="pw-input">
          <b-form-input
            id="pw-input"
            v-model="form.password"
            type="password"
            placeholder="Enter Password"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Confirm Password" label-for="pw-input-confirm">
          <b-form-input
            id="pw-input-confirm"
            v-model="form.passwordConfirm"
            type="password"
            placeholder="Enter Password"
            required
          ></b-form-input>
        </b-form-group>
      </template>
      <b-button type="submit" variant="primary">{{ buttonText }}</b-button>
    </b-form>
  </b-modal>
</template>

<script>
import { LOGIN, REGISTER } from '@/constants/account-types';

export default {
  name: 'AccountModal',
  props: {
    type: {
      type: String,
      default: LOGIN,
    },

    value: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      constants: {
        LOGIN,
      },
      form: {
        email: '',
      },
      formType: this.type,
      tabs: [
        {
          id: 1,
          title: 'Login',
        },
        {
          id: 2,
          title: 'Register',
        },
      ],
    };
  },

  computed: {
    buttonText() {
      return this.formType === LOGIN ? 'Login' : 'Register';
    },

    title() {
      return this.formType === LOGIN ? 'Login to Hyojo' : 'Create An Account';
    },
  },

  methods: {
    onSubmit() {
      console.log('submittin');
    },

    onTabClick(tabId) {
      if (tabId === 1) {
        this.formType = LOGIN;
      } else {
        this.formType = REGISTER;
      }
    },
  },
};
</script>
