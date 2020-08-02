import axios from "axios";

export function getTodoListApi() {
  return axios({
    url: "https://5dce9e0c75f9360014c25ffc.mockapi.io/api/Todos",
    method: "GET",
  });
}

export function createTodoListApi(todo) {
  return axios({
    url: "https://5dce9e0c75f9360014c25ffc.mockapi.io/api/Todos",
    method: "POST",
    data: todo,
  });
}

export function deleteTodoListApi(id) {
  return axios({
    url: `https://5dce9e0c75f9360014c25ffc.mockapi.io/api/Todos/${id}`,
    method: "DELETE",
  });
}
