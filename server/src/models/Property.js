module.exports = (sequelize, DataTypes) => {
  const Property = sequelize.define('Property', {
    name_of_listing: DataTypes.STRING,
    city: DataTypes.STRING,
    street: DataTypes.STRING,
    house_number: DataTypes.INTEGER,
    zip_code: DataTypes.STRING,
    type_of_building: DataTypes.STRING,
    listed_by_user: DataTypes.STRING,
    description: DataTypes.TEXT,
    listing_views: DataTypes.INTEGER
  })
  return Property
}
