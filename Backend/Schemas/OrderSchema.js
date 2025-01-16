const {Schema} = require("mongoose") ;

const OrderSchema = new Schema ({
    name : String ,
    price : Number ,
    mode : String 
})

module.exports = {OrderSchema} 