<template>
  <button @click="hideModal">Ok</button>
</template>

<script>
export default {
  name: "SimpleButton",
  emits:{
    'close-modal': value => {
      return typeof value === "boolean"
    },
  },
  methods:{
    hideModal(){
      this.$emit('close-modal', false)
    }
  }
}
</script>

<style scoped>

</style>