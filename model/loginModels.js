const mongoose = require('mongoose')
const {dateKathmandu} = require('../controller/allExports')
const loginSchema = new mongoose.Schema({
    email:{
        type : String,
        required : true,      
        lowercase: true,
        unique : true
    },
    mobile:{
        type : Number,
        required : true,
        unique : true
    },
    hotelName:{
        type : String,
        required : true,
        unique : true
    },
    address:{
        type : String,
        required : true
    },
    status:{
        type : Boolean,
        required : true,
        default : false

    },
    payment_status:{
        type : Boolean,
        required : true,  
        default : false
    },
    refreshToken:{
        type : String,
        required : false,

    },
    created_date:{
        type : Date,
        default : dateKathmandu
    }
}
);
const LoginModel = mongoose.model("LoginModel",loginSchema)
module.exports = LoginModel