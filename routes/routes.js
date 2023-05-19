const {Router} = require('../controller/allExports')
const {Get,Post,Put,Patch,Delete,GetById,Login} = require("../controller/orderController")
const {authenticateToken}=require('../controller/allExports')


Router.get("/:db/order/",Get)
.post("/:db/order/",Post)
.patch("/:db/order/:id",Patch)
.put("/:db/order/:id",Put)
.get("/:db/order/:id",authenticateToken,GetById)
.delete("/:db/order/:id",Delete)

.get("/:db/category/",Get)
.post("/:db/category/",Post)
.patch("/:db/category/:id",Patch)
.put("/:db/category/:id",Put)
.get("/:db/category/:id",GetById)
.delete("/:db/category/:id",Delete)

.get("/:db/table/",Get)
.post("/:db/table/",Post)
.patch("/:db/table/:id",Patch)
.put("/:db/table/:id",Put)
.get("/:db/table/:id",GetById)
.delete("/:db/table/:id",Delete)

.get("/:db/login/",Login)
.post("/:db/login/",Post)
.patch("/:db/login/:id",Patch)
.put("/:db/login/:id",Put)
.get("/:db/login/:id",GetById)
.delete("/:db/login/:id",Delete)

.get("/:db/menu/",Get)
.post("/:db/menu/",Post)
.patch("/:db/menu/:id",Patch)
.put("/:db/menu/:id",Put)
.get("/:db/menu/:id",GetById)
.delete("/:db/menu/:id",Delete)

.get("/:db/inventory/",Get)
.post("/:db/inventory/",Post)
.patch("/:db/inventory/:id",Patch)
.put("/:db/inventory/:id",Put)
.get("/:db/inventory/:id",GetById)
.delete("/:db/inventory/:id",Delete)

.get("/:db/logs/",Get)
exports.routes = Router