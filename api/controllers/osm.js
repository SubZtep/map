const { Op } = require("sequelize")
const db = require("../models")
const roadObj = db.roads

exports.getSomething = (_request, result) => {
  roadObj
    .findAll({
      attributes: ["osm_id", "addr:housename", "name", "way"],
      // where: {
      //   "addr:housename": {
      //     [Op.ne]: null
      //   }
      // },
      limit: 100,
    })
    .then(data => {
      result.send(data)
    })
    .catch(err => {
      result.status(500).send({
        message: err.message || "Something going wrong. Unable to retrieve data!",
      })
    })
}
