<template>
  <input v-model="inputUser" plaseholder="filter..."/>
  <ul>
    <li
        v-for="(user, index) in filterUser"
        :key="index"
    >
      {{ user.name}} -- {{user.email}}
    </li>
  </ul>
</template>

<script>
export default {
  name: "List",
  data(){
    return{
      inputUser: ''
  }
  },
  props: {
    item: {
      type: Array,
      default: ()=>{
        return []
      }
    },
    filterVal: {
      type: String,
    }
  },


  computed: {
    filterUser() {
      return this.item.filter(u => {
        return u[this.filterVal].toLowerCase().indexOf(this.inputUser.toLocaleLowerCase()) !== -1
      })
    }
  },

}
</script>

<style scoped>

</style>