<template>
  <div>
    <h1>Slots</h1>
    <div>
      <button @click="openModal">Open Modal</button>
    </div>

    <List :filterVal="filterUser" :item="this.users">
      <template #itemSlot="slotProp">
        <Item :fields="slotProp.data"/>
      </template>

    </List>
    <!--    <List :filterVal="filterTodos" :item="this.todos"  :customComponents="$options.customComponents.ItemTodo"/>-->
    <List :filterVal="filterTodos" :item="this.todos">
      <template #itemSlot="{data: item}">
        <ItemTodo :fields="item"/>
      </template>

    </List>

    <PopUp @hide-modal="hideModal" v-show='opened'>
      <template v-slot:content>
        <div>
          Anything that I am going to do now!!!
          <p>Are you ready?</p>
        </div>
      </template>
      <template #button-block>
        <SimpleButton @close-modal="hideModal"/>
        <AlarmButtonButton @close-modal="hideModal"/>
      </template>
    </PopUp>
  </div>
</template>

<script>

import {getTodos, getUsers} from "./Api";
import List from "./components/List";
import Item from "./components/Item";
import ItemTodo from "./components/ItemTodo";
import PopUp from "./components/PopUp";
import SimpleButton from "./components/SimpleButton";
import AlarmButton from "./components/AlarmButton";

export default {
  name: 'App',
  components: {
    AlarmButton,
    SimpleButton,
    PopUp,
    List, Item, ItemTodo
  },

  // customComponents: {
  //   Item, ItemTodo
  // },

  data() {
    return {
      users: [],
      todos: [],
      opened: false,
      filterUser: 'name',
      filterTodos: 'title'
    }
  },
  methods: {
    openModal() {
      document.body.classList.add("modal-open");
      this.opened = true
    },
    hideModal(flag){
      console.log(flag)
      document.body.classList.remove("modal-open");
      this.opened = flag
    }
  },
  watch:{
    opened(){
      return this.opened
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
