<template>
  <li>
    <span>{{ todo.content }}</span>
    <div class="action">
      <button class="btn btn-dark">checked</button>
      <button class="btn btn-danger">delete</button>
    </div>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
};
</script>

<style></style>
