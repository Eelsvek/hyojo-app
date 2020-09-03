<template>
  <div class="home flex h-screen bg-primary-500">
    <div class="m-auto w-full sm:w-5/12 md:w-4/12 lg:w-3/12">
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/Forms/LoginForm';

export default {
  name: 'Home',
  components: {
    LoginForm
  }
};
</script>
