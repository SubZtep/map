const { DataTypes } = require("sequelize")

module.exports = (database, _Sequelize) => {
  return database.define(
    "osm",
    {
      osm_id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
      },
    },
    {
      tableName: "planet_osm_roads",
      timestamps: false,
    }
  )
}
