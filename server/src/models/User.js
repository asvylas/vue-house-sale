const bcrypt = require('bcrypt')

function hashPassword(user, options) {
  const SALT_FACTOR = 8

  return bcrypt
  .hash(user.password, SALT_FACTOR)
  .then(function(hash) {
    user.setDataValue('password', hash)
});
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  })

  User.prototype.comparePassword =  function (password) {
    
    return bcrypt.compare(password, this.password)
    .then(function(res) {
      console.log(this.password )
  })
  }

  return User
}