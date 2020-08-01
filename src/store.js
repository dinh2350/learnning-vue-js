import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todoList: [
      {
        ma: "1",
        content: "nodejs",
      },
      {
        ma: "2",
        content: "vuejs",
      },
    ],
  },
  // lấy data
  getters: {
    todoList: (state) => state.todoList,
  },
  // sửa data
  mutations: {
    addTodo(state, content) {
      state.todoList.push({ ma: "3", content });
    },
  },
  actions: {
    addTodo({ commit }, content) {
      commit("addTodo", content);
    },
  },
});
export default store;
