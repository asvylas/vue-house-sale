module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
    name_of_listing: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    zip_code: DataTypes.STRING,
    type_of_building: DataTypes.STRING,
    listed_by_user: DataTypes.STRING
  })
  return Property
}