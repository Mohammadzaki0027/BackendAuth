const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
email:String,
Password:String,
name:String,
role:{type:String ,enum:["customer"], default:"customer"}
})
const SignupModel=mongoose.model("user",userSchema)

module.exports={
    SignupModel
}