const mongoose = require('mongoose')

const URL = 'mongodb+srv://deeksha:deekshak@cluster11.wrqpt.mongodb.net/resume-builder'

mongoose.connect(URL , {useUnifiedTopology:true , useNewUrlParser:true})

const connection = mongoose.connection

connection.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull')
})
connection.on('error' , (error)=>{
    console.log(error)
})

