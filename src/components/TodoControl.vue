<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="button-addon2"
      v-model="content"
    />
    <div class="input-group-append">
      <button
        class="btn btn-outline-secondary"
        type="button"
        @click="addTodo(content)"
      >
        Add Todo
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      content: "",
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
  },
};
</script>

<style></style>
