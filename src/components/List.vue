<template>
  <input v-model="inputUser" plaseholder="filter..."/>
  <ul>
    <li
        v-for="(dataforItem, index) in filterBuInput"
        :key="index"
    >
<!--      <component-->
<!--          :is="customComponents"-->
<!--          :fields="dataforItem"-->
<!--      />-->
    <slot name="itemSlot" :data="dataforItem"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      inputUser: ''
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
    customComponents: {
      type: Object,
      required: true
    },

  },

  watch: {
    item(p) {
      console.log(p, 'props')
    }
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