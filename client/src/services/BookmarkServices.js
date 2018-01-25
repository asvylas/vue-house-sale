import Api from '@/services/Api'

export default {
  bookmarkProperty (userId, propertyId) {
    const properties = {
      userId: userId,
      propertyId: propertyId
    }
    return Api().post('bookmarks', properties)
  },
  getBookmarkedProperties (id) {
    return Api().get(`bookmarks/${id}`)
  }
}
