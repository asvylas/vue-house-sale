const {
  User
} = require('../models')
const {
  SubscribeList
} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  // Registering user to DB
  async register (req, res) {
    try {
      await User.create(req.body)
      res.send({
        msg: 'Registration successful, you will be redirected soon, please wait...'
      })
    } catch (err) {
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  },
  // Logging in the user and providing a jwt-token
  async login (req, res) {
    try {
      let {
        email,
        password
      } = req.body
      let user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        res.status(403).send({
          error: 'Invalid email or password'
        })
      }

      let checkPassword = await user.comparePassword(password)
      if (checkPassword === false) {
        return res.status(403).send({
          error: 'Invalid password'
        })
      }

      let resUser = user.toJSON()
      let userBookmarks = await SubscribeList.findAll({
        where: {
          user_id: resUser.id
        }
      })
      res.send({
        user: resUser.email,
        id: resUser.id,
        token: jwtSignUser(resUser),
        userBookmarks: userBookmarks
      })
    } catch (err) {
      res.status(500).send({
        error: 'Something failed along the way'
      })
    }
  }
}
