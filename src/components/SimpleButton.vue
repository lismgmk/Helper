<template>
  <button @click="hideModal">Ok</button>
</template>

<script>
export default {
  name: "SimpleButton",
  emits:{
    'hide-modal-simpleBut': value => {
      return typeof value === "boolean"
    },
  },
  methods:{
    hideModal(){
      this.$emit('hide-modal-simpleBut', false)
    }
  }
}
</script>

<style scoped>

</style>