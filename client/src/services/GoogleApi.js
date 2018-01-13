import ApiKeys from '@/config/config'

export default {
  googleMapsResize () {
    const mediaCard = document.getElementById('media-card')
    const googleMapsWindow = document.getElementById('google-maps-view')
    googleMapsWindow.width = mediaCard.clientWidth - 6
  },
  googleMapsDisplay () {
    const mediaCard = document.getElementById('media-card')
    const googleMapsWindow = document.getElementById('google-maps-view')
    const googleMapsCard = document.getElementById('google-maps-card')
    googleMapsWindow.width = mediaCard.clientWidth - 6
    if (googleMapsCard.className === '' || null) {
      googleMapsCard.className = 'hidden'
    } else {
      googleMapsCard.className = ''
    }
  },
  googleSetSRC (location) {
    const googleMapsWindow = document.getElementById('google-maps-view')
    googleMapsWindow.src = `https://www.google.com/maps/embed/v1/search?key=${ApiKeys.Keys.google}&q=${location.street}+${location.house_number},${location.city}`
  }
}
