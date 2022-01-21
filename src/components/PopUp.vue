<template>
  <div class="bgPopup" @click="hideModal">
    <div class="winPopup" @click.stop="">
      <h2>Some content</h2>
      <slot name="content"></slot>
      <slot name="button-block-simple"></slot>
      <slot name="button-block"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUp",
  emits:{
    'hide-modal-popup': value => {
      return typeof value === "boolean"
    },
  },
  methods: {
    hideModal() {
      this.$emit('hide-modal-popup', false)
    },
  },
}
</script>

<style scoped>

</style>