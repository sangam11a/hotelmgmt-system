const mongoose = require('mongoose')
const {dateKathmandu} = require('../controller/allExports')
const OrderSchema = new mongoose.Schema({
    orderId:{
        type : Number,
        required : true,
        unique: true
    },
    orderName:{
        type : String,
        required : true
    },
    tableNumber:{
        type : Number,
        required : true
    },
    orderStatus:{
        type : String,
        required : true,
        default : "pending"
    },
    quantity:{
        type : Number,
        required : true,
        min : 1,
    },
    price:{
        type : Number,
        required : true,
        min : 1
    },
    customerName :{
        type : String,
        required : true
    }   ,
    created_date:{
        type : Date,
        default : dateKathmandu
    }
})
const OrderModel = mongoose.model("OrderModel",OrderSchema)
module.exports = OrderModel