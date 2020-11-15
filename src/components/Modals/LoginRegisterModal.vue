<template>
  <BaseModal v-if="$store.state.modals.loginRegisterModal.show">
    <template #default>
      <AccountForm />
    </template>
  </BaseModal>
</template>

<script>
import AccountForm from '@/components/Forms/AccountForm';
import BaseModal from '@/components/Modals/BaseModal';

export default {
  components: {
    BaseModal,
    AccountForm,
  },
};
</script>
