const {
  SubscribeList
} = require('../models')
const {
  Property
} = require('../models')

module.exports = {
  // Find a specific property

  async addNewBookmark (req, res) {
    try {
      let newBookmark = {}
      newBookmark.listing_id = req.body.propertyId
      newBookmark.user_id = req.body.userId

      let checkForDub = await SubscribeList.findAll({
        where: {
          listing_id: req.body.propertyId,
          user_id: req.body.userId
        }
      })
      console.log(checkForDub)
      if (checkForDub.length > 0) {
        res.status(200).send({
          msg: 'Unbookmarked.'
        })
        SubscribeList.destroy({
          where: {
            listing_id: req.body.propertyId,
            user_id: req.body.userId
          }
        })
      } else {
        await SubscribeList.create(newBookmark)
        res.send({
          msg: 'Bookmarked.'
        })
      }
    } catch (err) {
      res.status(400).send({
        error: 'Something went wrong.',
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
      }, {raw: true})

      let propertyIds = []

      response.forEach((x) => {
        propertyIds.push(x.listing_id)
      })

      let bookmarkedProperties = await Property.findAll({
        where: {
          id: propertyIds
        }
      })

      res.send({
        result: bookmarkedProperties
      })
    } catch (err) {
      res.status(400).send({
        error: 'No bookmarks found.'
      })
    }
  }
}
