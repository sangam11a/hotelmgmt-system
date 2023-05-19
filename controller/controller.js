// not used for now
// const express = require('express')
// const app = express()
// const mongoose = require('mongoose')
// const mongoDB = 'mongodb://127.0.0.1:27017/login'
// const PORT = 3000
// const {addUsers}=require('./loginController')

// app.use(express.json())
// async function main() {
//     await mongoose.connect(mongoDB);
//     console.log("Database has been successfully connected")
// }

// main().catch(err=>console.log(err))

// app.get("/", (req,res)=>{
//     res.send("this is home page")
// })

// app.post("/add_users",(req,res)=>{
//     const sa=addUsers(req.body)
//     console.log(sa)

//     res.send('This is used to add users')
// })

// app.post("/place_orders",(req,res)=>{
//     res.send("this is used to place orders")
// })

// app.get('/get_menu',(req,res)=>{
//     res.send("This is used to get menu")
// })

// app.get('/analytics',(req,res)=>{
//     res.send("Analytics requested")
// })

// app.get('/analytics/:days',(req,res)=>{
//     console.log(req.params.days)
//     console.log(typeof(req.params.days))
//     res.send("This is days requested "+JSON.stringify(req.params.days))
// })

// app.use('*',(req,res)=>{
//     res.send("404 not found")
// })

// app.listen(PORT,()=>{
//     console.log(`The app is listening on port ${PORT}`)
// })