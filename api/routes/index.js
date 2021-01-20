const express = require("express")
const router = express.Router()
const osm = require("../controllers/osm")

router.get("/roads/all", osm.getSomething)

module.exports = router
