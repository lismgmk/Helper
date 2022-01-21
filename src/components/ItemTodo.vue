<template>
  <input type="checkbox" :checked="fields[completed]" />
  {{ fields[title] }}
</template>

<script>
export default {
  name: "ItemTodo",
  data() {
    return {
      completed: 'completed',
      title: 'title'
    }
  },
  props: {

    fields: {
      type: Object,
      default: () => {
        return {}
      }
    },
  },


}
</script>

<style scoped>

</style>