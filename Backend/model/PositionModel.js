const {model} = require("mongoose") 

const {PositionSchema} = require("../Schemas/PositionSchema")

const PositionModel = new model("postion" , PositionSchema ) ;
module.exports = {PositionModel} 