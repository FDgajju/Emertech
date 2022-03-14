const express = require("express");
const route = express.Router()

const {getMetaData, getMetaDataById} = require("../controller/metadataCon")

route.route("/:id").get(getMetaDataById)
route.route("/").get(getMetaData)



module.exports = route