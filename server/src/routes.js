const AuthController = require('./controllers/AuthController')
const ListDB = require('./controllers/ListDB')

module.exports = (app) => {

    app.get('/', ListDB.list)
    app.post('/register', AuthController.register)

}
