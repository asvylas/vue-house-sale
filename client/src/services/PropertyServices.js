import Api from '@/services/Api'

export default {
  fetchProperties() {
    return Api().get('properties')
  },
  addProperty(property) {
    return Api().post('properties', property)
  },
  searchProperties(options){
    return Api().get('searchProperties', options)
  }
}
