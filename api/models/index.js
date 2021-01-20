const Sequelize = require("sequelize")
require("dotenv").config()

const database = new Sequelize(`postgres://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DB}`)

// const database = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
//   host: process.env.HOST,
//   dialect: "postgres",
//   // pool: {
//   //   max: dbConfig.pool.max,
//   //   min: dbConfig.pool.min,
//   //   acquire: dbConfig.pool.acquire,
//   //   idle: dbConfig.pool.idle,
//   // },
// })
const db = {}
db.Sequelize = Sequelize
db.databaseConf = database
db.roads = require("./Sequelize.model")(database, Sequelize)

db.dropRestApiTable = () => {
  db.databaseConf.sync({ force: true }).then(() => {
    console.log("osm table just dropped and db re-synced.")
  })
}

module.exports = db
