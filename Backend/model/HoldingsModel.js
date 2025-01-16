const {model} = require("mongoose") ;
const {HoldingsSchema} = require("../Schemas/HoldingSchema")

const HoldingModel = new model("holding",HoldingsSchema)

module.exports = {HoldingModel} ; 