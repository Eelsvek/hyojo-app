<template>
  <b-modal v-model="value">Yolo</b-modal>
</template>

<script>
export default {
  name: 'AccountModal',
  props: {
    value: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
};
</script>
