const {
  Property
} = require('../models')

module.exports = {
  // Find a specific property
  async searchProperties (req, res) {
    try {
      const result = await Property.findAll({
        where: {
          $or: [
            'name_of_listing', 'city', 'street'
          ].map(i => ({
            [i]: {
              $like: `%${req.body.options}%`
            }
          }))
        },
        limit: 3
      })
      res.send({
        msg: 'Found one',
        property: result
      })
    } catch (err) {
      res.status(400).send({
        error: 'Error getting the requested property'
      })
    }
  }
}
