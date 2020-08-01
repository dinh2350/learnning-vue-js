<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <TodoApp />
  </div>
</template>

<script>
import TodoApp from "./components/TodoApp";

export default {
  name: "App",
  components: {
    TodoApp,
  },
};
</script>

<style>
#app {
  text-align: center;
}
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
