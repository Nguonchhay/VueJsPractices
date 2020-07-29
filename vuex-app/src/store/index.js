import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addToDo(state, payload) {
      state.todos = [
          ...state.todos,
          payload
      ]
    },
    addToDos(state, payload = []) {
      state.todos = payload
    }
  },
  getters: {
    todoCount(state) {
      return state.todos.length
    }
  },
  actions: {
    listToDoAction(context) {
      Axios.get('https://5f211dbfdaa42f00166654ba.mockapi.io/todos')
        .then(res => {
          context.commit('addToDos', res.data.map(item => item.title))
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
