<template>
  <div v-if="opened" class="bgPopup" @click="hideModal">
    <div class="winPopup" @click.stop="">
      <h2>Some content</h2>
      <slot name="content"></slot>
      <slot name="button-block-simple"></slot>
      <slot :emitFn="hideModal" name="button-block"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "PopUp",
  props:{
    message:{
      type: String,
      require: false
    },
    opened: {
      type: Boolean,
      require: true
    }
  },
  emits:{
    'hide-modal-popup': value => {
      return typeof value === "boolean"
    },
  },
  methods: {
    hideModal() {
      this.$emit('hide-modal-popup', false)
    },
    closeOnEscape(e) {
      if (this.opened && e.key === 'Escape') {
        this.$emit('hide-modal-popup', false)
      }
    }
  },

  mounted() {
    document.addEventListener('keydown', this.closeOnEscape)
  },
  beforeMount() {
    document.removeEventListener('keydown', this.closeOnEscape)
  }

}
</script>

<style scoped>

</style>