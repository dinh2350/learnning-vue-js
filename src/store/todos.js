import { getTodoListApi, createTodoListApi, deleteTodoListApi } from "../api";

const state = {
  todoList: [],
};
const getters = {
  todoList: (state) => state.todoList,
};

const mutations = {
  addTodo(state, todo) {
    createTodoListApi({ content: todo })
      .then(function(res) {
        console.log(res);
        state.todoList.push(res.data);
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  deleteTodo(state, id) {
    let index = state.todoList.findIndex((ele) => ele.id === id);
    state.todoList.splice(index, 1);
  },
  getTodoList(state, todoList) {
    state.todoList = todoList;
  },
};
const actions = {
  addTodo({ commit }, todo) {
    commit("addTodo", todo);
  },
  deleteTodo({ dispatch }, id) {
    deleteTodoListApi(id)
      .then(function() {
        dispatch("getTodoList");
      })
      .catch(function(err) {
        console.log(err);
      });
  },
  getTodoList({ commit }) {
    getTodoListApi()
      .then(function(res) {
        commit("getTodoList", res.data);
      })
      .catch((err) => console.log(err));
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
