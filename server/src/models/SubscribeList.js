module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('SubscribeList', {
    listing_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  })
  return Property
}
