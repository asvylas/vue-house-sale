const {
  Property
} = require('../models')

module.exports = {
  async addProperty(req, res) {
        try {
          const property = await Property.create(req.body)
          res.send({
            msg: 'New property created',
            property: req.body
          })
        } catch (err) {
          res.status(400).send({
            msg: 'Error creating the property'
          })
        }
      },
      // List all properties
      async listAll(req, res) {
        try {
          const allProperties = await Property.findAll({
            limit:10
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

}