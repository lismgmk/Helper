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
  props:{
    message:{
      type: String,
      require: false
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
    }

  },
  watch: {
    message(val){
      console.log(val)
    },
  },

  // computed:{
  //   consoleMethod(){
  //     return
  //   }
  // }
}
</script>

<style scoped>

</style>