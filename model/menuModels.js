const mongoose = require('mongoose')
const MenuSchema = new mongoose.Schema({
    menuId:{
        type : Number,
        required : true,
        unique : true
    },
    menuName:{
        type : String,
        required : true, 
        unique : true
    },
    price:{
        type : Number,
        required : true,
    },
    categoryID:{
        type : Number,
        required : true
    },
    menuPhoto:{
        type : String,
        required : true
    }

},{
    timestamps : true
})
const MenuModels = mongoose.model("MenuModels",MenuSchema)
module.exports = MenuModels