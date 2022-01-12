<template>
  <div v-for="field in fields" >
    {{field}}
  </div>
  {{ user.name}} -- {{user.email}}
</template>

<script>
export default {
  name: "Item",
  props: {
    fields: {
      type: Array
    }
  }
}
</script>

<style scoped>

</style>