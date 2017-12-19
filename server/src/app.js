// Dev modules
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {
    sequelize
} = require('./models')
const config = require('./config/config')
// Express
const app = express()
// Middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())
// Routesc
require('./routes')(app)
// Starting server
sequelize.sync()
    .then(() => {
        app.listen(process.env.PORT || config.port, () => {
            console.log(`Server started on port: ${config.port}`)
        })
    })