const {
  SubscribeList
} = require('../models')

module.exports = {
  // Find a specific property

  async addNewBookmark (req, res) {
    try {
      const newBookmark = {}
      newBookmark.listing_id = req.body.propertyId
      newBookmark.user_id = req.body.userId
      console.log(newBookmark)
      await SubscribeList.create(newBookmark)
      res.send({
        msg: 'Bookmarked',
        result: true
      })
    } catch (err) {
      res.status(400).send({
        error: 'Error getting the requested property',
        result: false
      })
    }
  },
  async getUserBookmakrs (req, res) {
    try {
      let response = await SubscribeList.findAll({
        where: {
          user_id: req.params.id
        }
      })
      console.log(response)
      res.send({
        result: response
      })
    } catch (err) {
      res.status(400).send({
        error: 'a'
      })
    }
  }
}
