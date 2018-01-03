const {
  Property
} = require('../models')

module.exports = {
  async addProperty (req, res) {
    try {
      const property = await Property.create(req.body)
      res.send({
        msg: 'New property created'
      })
    } catch (err) {
      res.status(400).send({
        msg: 'Error creating the property'
      })
    }
  },
  // List all properties
  async listAll (req, res) {
    try {
      const allProperties = await Property.findAll({
        limit: 50
      })
      res.send({
        msg: 'All properties',
        property: allProperties
      })
    } catch (err) {
      res.status(400).send({
        msg: 'Error getting the properties'
      })
    }
  },

  async findPropertyById (req, res) {
    try {
      console.log(req)
      const result = await Property.findOne({
        where: {
          id: req.body.id
        }
      })
      res.send({
        msg: 'Found one',
        property: result
      })
    } catch (error) {
      res.status(404).send({
        msg: 'Not Found'
      })
    }
  }
}
