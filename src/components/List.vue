<template>
  <input v-model="inputUser"/>
  <ul>
    <li
        v-for="(dataforItem, index) in filterBuInput"
        :key="index"
    >
    <slot name="itemSlot" :data="dataforItem"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      inputUser: 'filter...'
    }
  },
  props: {
    item: {
      type: Array,
      default: () => {
        return []
      },
      required: true
    },
    filterVal: {
      type: String,
      required: true
    },


  },



  computed: {
    filterBuInput() {
      return this.item.filter(u => {
        return u[this.filterVal].toLowerCase().indexOf(this.inputUser.toLocaleLowerCase()) !== -1
      })
    }
  },

}
</script>

<style scoped>

</style>