const express=require('express')
const jwt = require("jsonwebtoken")
const { body, validationResult } = require('express-validator');
const userModel=require('./user.model')

const app=express.Router()

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
    // return res.status(200).send("your account is created successfully")
})

app.post("/login", async (req,res)=>{
    const userData=req.body
    const matchData= await userModel.findOne({email:userData.email, password:userData.password})
    if (!matchData){
        return res.status(401).send("Invalid email or password")
    }
    const mainToken=jwt.sign({email:matchData.email, role:matchData.role}, "SECRETKEY009", {
        expiresIn:"10 seconds"
    })
    const refreshToken=jwt.sign({email:matchData.email, role:matchData.role}, "SECRETKEY0099", {
        expiresIn:"10 minutes"
    })
    res.send({mainToken:mainToken, refreshToken:refreshToken})
    // res.send("Sucessfully logged in")
    
})


module.exports=app