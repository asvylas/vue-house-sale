const AuthController = require('./controllers/AuthController')
const AuthControlPolicy = require('./policies/AuthControlPolicy')
const Properties = require('./controllers/Properties')
const Search = require('./controllers/Search')
const Bookmarks = require('./controllers/Bookmarks')

// File parser and filter, storage options.
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 2
  },
  fileFilter: fileFilter
})

module.exports = (app) => {
  app.post('/register',
    AuthControlPolicy.register,
    AuthController.register)

  app.post('/login',
    AuthController.login)

  app.post('/properties',
    upload.single('a'),
    Properties.addProperty)

  app.get('/properties',
    Properties.listAll)

  app.post('/propertiesbyid',
    Properties.findPropertyById)

  app.post('/searchProperties',
    Search.searchProperties)

  app.post('/bookmarks',
    Bookmarks.addNewBookmark)
}
