const mongoose = require('mongoose')
const {dateKathmandu} = require('../controller/allExports')
const LogsSchema = new mongoose.Schema({
    ipAddress:{
        type : String,
        required : true
    },
    request:{
        type : String,
        required : true
    },
    route:{
        type : String,
        required : true
    },
    created_date:{
        type : Date,
        default : dateKathmandu
    }
})

const LogsModel = mongoose.model("LogsModel",LogsSchema)
module.exports = LogsModel