import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';

Vue.use(Vuex)

const apiBaseUrl = 'http://localhost:8085'

export default new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addToDo(state, payload) {
      state.todos.push(payload)
    },
    addToDos(state, payload = []) {
      state.todos = payload
    },
    editToDo(state, payload) {
      state.todos = state.todos.map(todo => {
        if (todo.id === payload.id) {
          todo.title = payload.todo
        }
        return todo
      })
    },
    deleteToDo(state, payload) {
      state.todos = state.todos.filter(todo => todo.id !== payload)
    }
  },
  getters: {
    todoCount(state) {
      return state.todos.length
    }
  },
  actions: {
    listToDoAction({commit}) {
      Axios.get(`${apiBaseUrl}/todos`)
        .then(res => {
          commit('addToDos', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addToDoAction({commit}, payload) {
      Axios.post(`${apiBaseUrl}/todos`, {
        title: payload
      })
      .then(res => {
        commit('addToDo', res.data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    editToDoAction({state, commit}, payload) {
      Axios.put(`${apiBaseUrl}/todos/${payload.id}`, {
        title: payload.todo
      })
      .then(() => {
        commit('editToDo', state, payload)
      })
      .catch(err => {
        console.log(err)
      })
    },
    deleteToDoAction({commit}, payload) {
      Axios.delete(`${apiBaseUrl}/todos/${payload}`)
      .then(() => {
        commit('deleteToDo', payload)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }
})
