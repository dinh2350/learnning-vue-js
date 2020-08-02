<template>
  <ul>
    <TodoItem v-for="(todo, index) in todoList" :key="index" :todo="todo" />
  </ul>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("todosModule");
import TodoItem from "./TodoItem";
export default {
  components: {
    TodoItem,
  },
  computed: {
    ...mapGetters(["todoList"]),
  },
  methods: {
    ...mapActions(["getTodoList"]),
  },
  // lỗi vì hàm beforeCreate chạy trước khi khởi tạo method
  // beforeCreate() {
  //   this.getTodoList();
  // },
  // gọi ở đây là đúng r
  created() {
    this.getTodoList();
  },
  // beforeMount() {
  //   this.getTodoList();
  // },
  // mounted() {
  //   this.getTodoList();
  // },
};
</script>

<style></style>
