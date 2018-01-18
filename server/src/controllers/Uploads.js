const multer = require('multer')
const upload = multer({dest: 'uploads/'})

module.exports = {
  async storeFile (req, res) {
    upload.single('propertyImage')
    console.log(req.file)
  }
}
