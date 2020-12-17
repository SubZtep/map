const fs = require("fs")

const tinyosmpbf = require('tiny-osmpbf');
const dataBuffer = fs.readFileSync("./assets/britain-and-ireland-latest.osm.pbf")
const osmData = tinyosmpbf(dataBuffer);
console.log(osmData)