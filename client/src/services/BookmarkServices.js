import Api from '@/services/Api'

export default {
  bookmarkProperty (userId, propertyId) {
    return Api().post('bookmarks', userId, propertyId)
  },
  getBookmarkedProperties (userId, propertyId) {
    return Api().get('bookmarks', userId, propertyId)
  }
}
