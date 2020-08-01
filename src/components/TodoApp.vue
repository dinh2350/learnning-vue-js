<template>
  <div class="container">
    <TodoControl />
    <TodoList />
  </div>
</template>

<script>
import TodoControl from "./TodoControl";
import TodoList from "./TodoList";
export default {
  components: {
    TodoList,
    TodoControl,
  },
};
</script>

<style lang="scss">
ul {
  text-align: left;
  list-style: none;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    padding-left: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid darkgray;
    .action {
      .btn-danger {
        margin-left: 10px;
      }
    }
  }
}
</style>