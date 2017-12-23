const {
  User
} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  // Registering user to DB
  async register(req, res) {

    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  },
  //Logging in the user and providing a jwt-token
  async login(req, res) {
    try {
      const {
        email,
        password
      } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        res.status(403).send({
          error: 'Invalid email or password'
        })
      }

      const checkPassword = await user.comparePassword(password)
      if (!checkPassword) {
        res.status(403).send({
          error: 'Invalid password'
        })
      }

      const resUser = user.toJSON()
      res.send({
        user: resUser,
        token: jwtSignUser(resUser)
      })

    } catch (err) {
      res.status(500).send({
        error: 'Something failed along the way'
      })
    }
  }
}