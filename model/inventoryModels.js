const {mongoose,dateKathmandu} = require('../controller/allExports')
const InventorySchema = new mongoose.Schema({
    inventoryName:{
        type: String,
        required : true,
        unique : true
    },
    quantity:{
        type : Number,
        required : true,
        min :0
    },
    price:{
        type : Number,
        required : true,
        min : 0
    },
    created_date:{
        type : Date,
        default : dateKathmandu
    }
})
const InventoryModel = mongoose.model("InventoryModel",InventorySchema)
module.exports = InventoryModel