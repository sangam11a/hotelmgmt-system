// const LogsModel = require('../model/logsModel')

const chooseModel=(val)=>{    
    const OrderModel = require('../model/orderModels')
    const MenuModel = require('../model/menuModels')
    const CategoryModel = require('../model/categoryModels')
    const InventoryModel = require('../model/inventoryModels')
    const LoginModel = require('../model/loginModels')
    const LogsModel = require('../model/logsModel')
    const TableModel = require('../model/tableModels')
    switch(val){
        case 'category':return  CategoryModel
                        break;
        case 'inventory': return InventoryModel
                        break;
        case 'login': return LoginModel
                        break;
        case 'menu':return MenuModel
                        break;
        case 'order': return OrderModel
                        break;
        case 'table': return TableModel
                        break;
        default:return LogsModel;break;
    }
}
module.exports = chooseModel