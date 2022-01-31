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
    <List :filterVal="filterTodos" :item="this.todos">
      <template #itemSlot="{data: item}">
        <ItemTodo :fields="item"/>
      </template>

    </List>


    <PopUp ref="popUpElem" >
      <template v-slot:content>
        <div>
          Anything that I am going to do now!!!
          <p>Are you ready?</p>
        </div>
      </template>
      <template #button-block="{emitFn: hideModalFn}">
        <input type="text" :placeholder="$options.ENTRY_ACCEPT" v-model="valueInput">
        <button @click="hideModalFn">Chancel</button>
        <button
            :disabled="buttonDisable"
                @click="hideModalFn">Ok</button>
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

export default {
  name: 'App',
  components: {
    PopUp,
    List, Item, ItemTodo
  },

  data() {
    return {
      users: [],
      todos: [],
      filterUser: 'name',
      filterTodos: 'title',
      valueInput: ''
    }
  },
  methods: {

    async openModal() {
      document.body.classList.add("modal-open");
      this.valueInput = ''
      const closeModalAsync = await this.$refs.popUpElem.open()
            if (closeModalAsync) {
              document.body.classList.remove("modal-open");
              alert('confirm')

            }

    },

  },
  computed: {
    buttonDisable() {
      return this.valueInput === this.$options.ENTRY_ACCEPT
    },


  },
  ENTRY_ACCEPT: 'ENTER THIS',
  mounted() {
    getUsers().then(data => this.users = data)
    getTodos().then(data => this.todos = data)
  },


}
</script>

<style>


</style>
