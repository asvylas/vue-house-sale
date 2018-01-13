const {
  Property
} = require('../models')

module.exports = {
  async addProperty (req, res) {
    try {
      await Property.create(req.body)
      res.send({
        msg: 'New property created'
      })
    } catch (err) {
      res.status(400).send({
        error: 'Error creating the property'
      })
    }
  },
  // List all properties
  async listAll (req, res) {
    try {
      const results = await Property.findAll({
        limit: 30
      })
      res.send({
        msg: 'All properties',
        property: results
      })
    } catch (err) {
      res.status(400).send({
        error: 'Error getting the properties'
      })
    }
  },

  async findPropertyById (req, res) {
    try {
      const result = await Property.findOne({
        where: {
          id: req.body.id
        }
      })
      res.send({
        msg: 'Found one',
        property: result
      })
      const currentViews = result.dataValues.listing_views + 1
      result.update({
        listing_views: currentViews
      })
    } catch (error) {
      res.status(404).send({
        error: 'Not Found'
      })
    }
  }
}
