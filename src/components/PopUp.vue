<template>
  <div v-if="isOpened" class="bgPopup" @click="hideModal">
    <div class="winPopup" @click.stop="">
      <h2>Some content</h2>
      <slot name="content"></slot>
      <slot :emitFn="hideModal" name="button-block"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "PopUp",
  CUSTOM_CATCHER_PROMISE: null,
  data(){
    return{
      isOpened: false
    }
  },

  methods: {
    hideModal() {
      this.isOpened = false
      this.$options.CUSTOM_CATCHER_PROMISE.resolve(true)

    },
    closeOnEscape(e) {
      if (this.isOpened && e.key === 'Escape') {
        this.isOpened = false
        this.$options.CUSTOM_CATCHER_PROMISE.resolve(true)
      }
    },

    open() {
      this.isOpened = true
      let resolve;
      let reject

      const customPromise = new Promise((ok, failed) => {
        resolve = ok
        reject = failed
      })
      this.$options.CUSTOM_CATCHER_PROMISE = {resolve, reject}

      return customPromise
    },

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