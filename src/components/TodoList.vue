<template>
  <ul>
    <TodoItem v-for="(todo, index) in todoList" :key="index" :todo="todo" />
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "./TodoItem";
export default {
  components: {
    TodoItem,
  },
  computed: {
    ...mapGetters(["todoList"]),
  },
};
</script>

<style></style>
