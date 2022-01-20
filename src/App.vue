<template>
  <div>
    <h1>Slots</h1>
    <List :filterVal="filterUser" :item="this.users"  :customComponents="$options.customComponents.Item"/>
    <List :filterVal="filterTodos" :item="this.todos"  :customComponents="$options.customComponents.ItemTodo"/>
  </div>
</template>

<script>

import {getTodos, getUsers} from "./Api";
import List from "./components/List";
import Item from "./components/Item";
import ItemTodo from "./components/ItemTodo";

export default {
  name: 'App',
  components: {
    List
  },

  customComponents: {
    Item, ItemTodo
  },

  data() {
    return {
      users: [],
      todos: [],
      // drawFieldsUser: ['name', 'email'],
      // drawFieldsTodos: ['completed', 'title'],
      filterUser: 'name',
      filterTodos: 'title'
    }
  },
  //
  // methods: {
  //   filterData(data, filterData){
  //     const helperArr = []
  //     data.map((i)=>{
  //      helperArr.push(i[filterData[0]], i[filterData[1]])
  //       return i
  //     })
  //     return helperArr
  //   }
  // },
// computed:{
//   filterUsers(){
//     return  this.filterData(this.users, this.drawFieldsUser)
//   },
//   filterTodos(){
//     return  this.filterData(this.todos, this.drawFieldsTodos)
//   },
// },

  mounted() {
    getUsers().then(data => this.users = data)
    getTodos().then(data => this.todos = data)
  }

}
</script>

<style>


</style>
