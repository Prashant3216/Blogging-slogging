const {Schema, model}=require("mongoose")

const userSchema=new Schema({

    firstName: {type: String, required:true},
    lastName: String,
    age: {type: Number, min:13, max:100},
    email:{type: String},
    gender: {type: String, enum:["male" || "female" || "other" || "opt out"]},
    password: {type:String},
    role: {type: String, num:["admin" || "reader"]}
})


const userModel = model("user", userSchema)

module.exports=userModel