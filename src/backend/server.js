const express=require('express')
const {mongoose } = require('mongoose')
const userModel=require('./model/user.model')


const app=express()

app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.get('/', (req, res)=>{res.send('hello')})

app.listen(8080, async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/blogslog")
    console.log('server started on port 8080')})
