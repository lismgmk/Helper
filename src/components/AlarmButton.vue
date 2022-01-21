<template>
  <input type="text" v-model="dataValue">
  <button disabled="disabled" @click="hideModal">Ok</button>
</template>

<script>
export default {
  name: "AlarmButton",
  data(){
    return{
      dataValue: 'Enter data',
      disabled: true
    }
  },
  methods: {
    hideModal() {
    this.dataValue === '55' &&  this.$emit('hide-modal', false)
    },
  },
  computed:{

  }
}
</script>

<style scoped>

</style>