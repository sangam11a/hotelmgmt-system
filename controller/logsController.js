const express = require('express')
const fs = require('fs')
const fsPromises = fs.promises
const path = require('path')
const { v4: uuid} = require("uuid")
const {format} = require('date-fns')
const commitLogs=async (message, logFileName)=>{
    const dateTime = (`${format(new Date(),"yyyy/MM/dd\tHH:mm:ss")}\t${uuid()}\t${message}\n `)
    try{
        if(!fs.existsSync(path.join(__dirname,"..","logs"))){
            await fsPromises.mkdir(path.join(__dirname,"..","logs"))
        }
        await fsPromises.appendFile(path.join(__dirname,"..","logs",logFileName),dateTime)
    }
    catch(err){
        console.log(err)
    }
}

const saveFiles =  (req,res,next) =>{
    const message = `${req.method}\t${req.url}\t${req.headers.origin}\n`;
    commitLogs(message,"savedlogs.log");
    next()
}

module.exports={saveFiles,commitLogs};