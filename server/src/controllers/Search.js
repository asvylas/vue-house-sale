const {
  Property
} = require('../models')

module.exports = {
  // Find a specific property
  async searchProperties(req, res) {
    try {
      const result = await Property.findAll({
        where: {
          name_of_listing: 'a'
        },
        limit: 10
      })
      res.send({
        msg: 'Found one',
        property: result
      })
    } catch (err) {
      res.status(400).send({
        msg: 'Error getting the requested property'
      })
    }
  }
}