const mongoose = require('mongoose')
const LoginModel = require('../model/loginModels')
main().catch(err => console.log(err));
const connectDB = require('./connectDB')
const jwt = require('jsonwebtoken')
require('dotenv').config()

async function main(mongoDB){
    await mongoose.connect(mongoDB)
    console.log("Database has been connected")
}

async function addUsers(data){
    const data1 = new LoginModel(data)
    const saved = false
    await data1.save()
    .then(()=>{
        console.log(`New user ${data.email} has been added to Login Schema`);
        saved = true
    })
    .catch((e)=>{
        console.log()
        return saved
    })
    return saved
}

async function updateUsers(data){
    const data1 = new LoginModel(data)
    const data2 = await data1.findOneAndUpdate({'email':data1.email},data1,
    {
        returnOriginal: false
    })
    if(data1!=data2){
        return true
    }
    return false
}

async function changeStatus(data){
    const data1 = new LoginModel(data)
    const status =await data1.findOneAndUpdate({'email':data.email},{status:false},
    {
        returnOriginal: false
    })
    if(status.status==false){
        return true
    }
    else{
        return false
    }
}
module.exports = {main,addUsers,updateUsers,changeStatus}