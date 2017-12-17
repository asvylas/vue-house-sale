// Dev modules
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// Express
const app = express()
// Middleware
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
// Routes
app.get('/', (req, res) => {
    res.send({
        message: "Goodbye cruel wurld"
    })
})
app.post('/register', (req, res) => {
    res.send({
        success: true,
        message: 'User registered with email: ' + req.body.email
    })
})
// Starting server
const port = 8082
app.listen(process.env.PORT || port, ()=>{
    console.log(port + ': Running smoothly')
})
