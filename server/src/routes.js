const AuthController = require('./controllers/AuthController')
const AuthControlPolicy = require('./policies/AuthControlPolicy')
const Properties = require('./controllers/Properties')
const Search = require('./controllers/Search')
const Bookmarks = require('./controllers/Bookmarks')
const Uploads = require('./controllers/Uploads')

module.exports = (app) => {
  app.post('/register',
    AuthControlPolicy.register,
    AuthController.register)

  app.post('/login',
    AuthController.login)

  app.post('/properties',
    Uploads.storeFile,
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
