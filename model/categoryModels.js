const mongoose = require('mongoose')
const {dateKathmandu} = require('../controller/allExports')
const CategorySchema = new mongoose.Schema({
    categoryName : {
        type : String,
        required : true,
        unique : true
    },
    categoryID: {
        type : String,
        required : true,
        unique : true
    },
    created_date:{
        type : Date,
        default : dateKathmandu
    }
})
const CategoryModel = mongoose.model("CategoryModel",CategorySchema)
module.exports = CategoryModel