<template>
  <input type="text" v-model="value" >
  <button :disabled="flag" @click="hideModal">Ok</button>
</template>

<script>
export default {
  name: "AlarmButton",
  data(){
    return{
      value: 'Enter data',
    }
  },
  emits:{
    'hide-modal-alarmBut': value => {
      return typeof value === "boolean"
    },
  },
  methods: {
    hideModal() {
      this.$emit('hide-modal-alarmBut', false)
    },
  },

computed:{
    flag(){
      return this.value !== 'lol';
    }
}

}
</script>

<style scoped>

</style>