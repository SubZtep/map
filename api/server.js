const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const server = express()
const api = require("./routes/index")
const db = require("./models")
require("dotenv").config()
const corsSettings = {
  originL: "http://localhost:8081",
}

server.use(cors(corsSettings))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

server.get("/", (_req, res) => {
  res.json({
    message: "API",
  })
})

server.use("/", api)

server.listen(8080, () => {
  console.log("Server running")
})

// db.dropRestApiTable()
