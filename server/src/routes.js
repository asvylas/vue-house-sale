const AuthController = require('./controllers/AuthController')
const ListDB = require('./controllers/ListDB')
const AuthControlPolicy = require('./policies/AuthControlPolicy')
const ListProperties = require('./controllers/ListProperties')

module.exports = (app) => {

  app.get('/', ListDB.list)

  app.post('/register',
    AuthControlPolicy.register,
    AuthController.register)

  app.post('/login',
    AuthController.login)

  app.get('/properties',
    ListProperties.all)
}