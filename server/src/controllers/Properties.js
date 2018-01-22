const {
  Property
} = require('../models')
const {
  Images
} = require('../models')

module.exports = {
  // Add a new property, if files are not attached/wrong type request rejects
  async addProperty (req, res) {
    // checks for files
    if (!req.files) {
      res.status(400).send({
        error: 'Wrong file format, please use .jpeg'
      })
    } else {
      try {
        let newProperty = await Property.create(req.body)
        let fileObject = {
          listing_id: newProperty.id
        }
        // attaching file names to Images model. ~
        for (let i = 0; i < req.files.length; i++) {
          let x = 'image_' + i
          fileObject[x] = req.files[i].destination + req.files[i].filename
        }
        let imageLocations = await Images.create(fileObject)
        res.send({
          msg: 'New property created',
          a: newProperty,
          b: imageLocations
        })
      } catch (err) {
        res.status(400).send({
          error: 'Error creating the property'
        })
      }
    }
  },
  // List all properties
  async listAll (req, res) {
    try {
      let results = await Property.findAll({
        limit: 30
      })
      let propertyIds = []
      results.forEach((x) => {
        propertyIds.push(x.id)
      })
      let imagePaths = await Images.findAll({
        where: {
          id: propertyIds
        }
      })

      for (let i = 0; i < results.length; i++) {
        results[i].main_image_path = imagePaths[i].image_0
      }

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
  // Throws back property by ID
  async findPropertyById (req, res) {
    try {
      let result = await Property.findOne({
        where: {
          id: req.body.id
        }
      })
      res.send({
        msg: 'Found one',
        property: result
      })
      let currentViews = result.dataValues.listing_views + 1
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
