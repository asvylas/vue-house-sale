const AuthController = require('./controllers/AuthController')
const ListDB = require('./controllers/ListDB')
const AuthControlPolicy = require('./policies/AuthControlPolicy')

module.exports = (app) => {

  app.get('/', ListDB.list)

  app.post('/register',
    AuthControlPolicy.register,
    AuthController.register)

  app.post('/login',
    AuthController.login)

}