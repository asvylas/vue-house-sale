module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define('Images', {
    listing_id: DataTypes.INTEGER,
    image_0: DataTypes.STRING,
    image_1: DataTypes.STRING,
    image_2: DataTypes.STRING,
    image_3: DataTypes.STRING,
    image_4: DataTypes.STRING,
    image_5: DataTypes.STRING
  })
  return Images
}
