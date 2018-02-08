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
    userLoggedIn: false,
    userBookmarks: null,
    loading: false
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
    setUserBookmarks (state, userBookmarks) {
      state.userBookmarks = userBookmarks
    },
    logoutUser (state) {
      state.user = null
      state.token = null
      state.userLoggedIn = false
      state.id = null
      sessionStorage.clear()
    },
    loading (state, loading) {
      state.loading = loading
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
    setUserbookmarks ({commit}, userBookmarks) {
      commit('setUserBookmarks', userBookmarks)
    },
    logoutUser ({commit}) {
      commit('logoutUser')
    },
    loading ({commit}, loading) {
      commit('loading', loading)
    }
  }
})
