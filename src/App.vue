<template>
  <div>
    <h1>Slots</h1>

    <List :item="users" :filterVal="filterValUser" />
    <List :item="todos" :filterVal="filterValTodos"/>
  </div>
</template>

<script>

import {getTodos, getUsers} from "./Api";
import List from "./components/List";
import Item from "./components/Item";

export default {
  name: 'App',
  components: {
    List,
    Item
  },

  data() {
    return {
      users: [],
      todos: [],
      filterValUser: 'name',
      filterValTodos: 'title',
      drawFieldsUser: ['name', 'email'],
      drawFieldsTodos: ['completed', 'title', 'userId'],
    }
  },


  mounted() {
    getUsers().then(data => this.users = data)
    getTodos().then(data => this.todos = data)
  }

}
</script>

<style>


</style>
