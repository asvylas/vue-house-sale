import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default
new Vuex.Store({
  strict: true,
  state: {
    user: null,
    id: null,
    token: null,
    userLoggedIn: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.userLoggedIn = true
      } else {
        state.userLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
    },
    setId (state, id) {
      state.id = id
    },
    logoutUser (state) {
      state.user = null
      state.token = null
      state.userLoggedIn = false
      state.id = null
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    setId ({commit}, id) {
      commit('setId', id)
    },
    logoutUser ({commit}) {
      commit('logoutUser')
    }
  }
})
