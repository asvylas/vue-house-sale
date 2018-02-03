import ApiKeys from '@/config/config'

export default {
  googleMapsResize () {
    const mediaCard = document.getElementById('main-card')
    const googleMapsWindow = document.getElementById('google-maps-view')
    googleMapsWindow.width = mediaCard.clientWidth
  },
  googleMapsDisplay () {
    const mediaCard = document.getElementById('main-card')
    const googleMapsWindow = document.getElementById('google-maps-view')
    const googleMapsCard = document.getElementById('google-maps-card')
    googleMapsWindow.width = mediaCard.clientWidth
    if (googleMapsCard.className === '' || null) {
      googleMapsCard.className = 'hidden'
    } else {
      googleMapsCard.className = ''
    }
  },
  googleSetSRC (location) {
    console.log(location)
    const googleMapsWindow = document.getElementById('google-maps-view')
    googleMapsWindow.src = `https://www.google.com/maps/embed/v1/search?key=${ApiKeys.Keys.google}&q=${location.street}+${location.house_number},${location.city}`
  }
}
