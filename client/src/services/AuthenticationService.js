import Api from '@/services/Api'
import store from '@/store/store'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    return Api().post('login', credentials)
  },
  sessionStoreLogin () {
    if (sessionStorage.getItem('token')) {
      store.dispatch('setToken', sessionStorage.getItem('token'))
      store.dispatch('setUser', sessionStorage.getItem('user'))
      store.dispatch('setId', sessionStorage.getItem('id'))
      return true
    } else {
      return false
    }
  }
}
