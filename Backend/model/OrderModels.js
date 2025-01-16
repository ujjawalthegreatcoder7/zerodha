const {model} = require("mongoose") 
const {OrderSchema} = require("../Schemas/OrderSchema") ;

const OrdersModel = new model ("order",OrderSchema ) // because ordermodel based on ORDERSCHEMA 
module.exports = {OrdersModel};
