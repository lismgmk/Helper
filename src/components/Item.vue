<template>
  {{fields[name]}} -- {{fields[email]}}
</template>

<script>
export default {
  name: "Item",
  data(){
    return{
      name: 'name',
      email: 'email'
    }
  },
  props: {

    fields: {
      type: Object,
      default: () => {
        return {}
      }
    },
  }

}
</script>

<style scoped>

</style>