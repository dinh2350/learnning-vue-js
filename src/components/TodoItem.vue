<template>
  <li>
    <span>{{ todo.content }}</span>
    <div class="action">
      <!-- <button class="btn btn-dark">checked</button> -->
      <button class="btn btn-danger" @click="deleteTodo(todo.id)">
        delete
      </button>
    </div>
  </li>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    ...mapActions(["deleteTodo"]),
  },
};
</script>

<style></style>
