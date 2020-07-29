import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addToDo(state, payload) {
      state.todos = [
          ...state.todos,
          payload
      ]
    }
  },
  getters: {
    todoCount(state) {
      return state.todos.length
    }
  }
})

export default store
