const mongoose = require('mongoose')
const {dateKathmandu} = require('../controller/allExports')
const TableSchema = new mongoose.Schema({
    id:{
        type : Number,
        required : true,
        unique: true
    },
    name:{
        type : String,
        required : true,
        unique : true
    },
    table_status:{
        type : String,
        default : "empty"
    },created_date:{
        type : Date,
        default : dateKathmandu
    }
})
const TableModel = mongoose.model("TableModel",TableSchema);
module.exports = TableModel;