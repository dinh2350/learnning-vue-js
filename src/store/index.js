import Vue from "vue";
import Vuex from "vuex";
import todosModule from "./todos";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    todosModule,
  },
});

export default store;
