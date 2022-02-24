const express = require('express')
const mongoose = require('mongoose')
const url='mongodb://localhost:27017/Assessment'

const app = express()

//connect to db
mongoose.connect(url)
// {useNewUrlParser:true}

const db = mongoose.connection

db.on('open',function(){
    console.log('connected..')
})
app.use(express.json())

const userRouter = require('./entry')
app.use('/entries',userRouter) 
app.listen(9000,()=>{
    console.log('server started');
})