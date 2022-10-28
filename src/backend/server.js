const express=require('express')
const  mongoose = require('mongoose')
const userRoute=require("./model/user.route")

const app=express()

app.use(express.urlencoded({extended:true}))

app.use(express.json())
app.use("/user", userRoute)

app.get('/', (req, res)=>{res.send('home')})



app.listen(8080, async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/blogslog")
    console.log('server started on port 8080')})
