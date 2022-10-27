const express=require('express')
const { body, validationResult } = require('express-validator');
const  mongoose = require('mongoose')
const jwt = require("jsonwebtoken")

const userModel=require('./model/user.model')


const app=express()

app.use(express.urlencoded({extended:true}))

app.use(express.json())

app.get('/', (req, res)=>{res.send('home')})


app.post('/signup',
body("email").isEmail(),
body("password").isLength({min:8}),
 async(req, res)=>{
    const error =validationResult(req)
    if(!error.isEmpty())
    return res.status(400).send({ errors: error });
    const userdata=req.body
    const userfound= await userModel.findOne({email:userdata.email})
    if (userfound){
        return res.status(409).send("your are already registed with us, please proceed to login")
    }
    const user=new userModel({...userdata, role:userdata.email==="pv3216@gmail.com"? "admin": "reader"})
    await user.save();
    const mainToken=jwt.sign({email:user.email, role:user.role}, "SECRETKEY009", {
        expiresIn:"10 seconds"
    })
    const refreshToken=jwt.sign({email:user.email, role:user.role}, "SECRETKEY0099", {
        expiresIn:"10 minutes"
    })
    res.send({mainToken:mainToken, refreshToken:refreshToken})
    return res.status(200).send("your account is created successfully")
})

app.listen(8080, async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/blogslog")
    console.log('server started on port 8080')})
