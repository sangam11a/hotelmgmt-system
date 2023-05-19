const {app,mongoose} = require('./controller/allExports')
const express = require('express')
const PORT = 3000
const jwt = require('jsonwebtoken')
// const orderController = require('./controller/orderController')
const router = require('./routes/routes')
app.use(express.json())


app.use("/api", //:db/push_order", //post thyo yeta use ko satta
// (req,res)=>{
//     const mongoDB =url+String(req.params.db)
//     console.log(mongoDB)
//     orderController(res,req.body,mongoDB)
// }
router.routes
)
app.use('*',(req,res)=>{
    res.status(400).json({message:"404 not found"})
})


app.listen(PORT, ()=>{
    console.log(`The server has started on port number ${PORT}`)
})