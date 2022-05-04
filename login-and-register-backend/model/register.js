const mongoose=require('mongoose')

//creating schema for register

const registeruser=  mongoose.Schema({
    fullname:String,
    email:String,
    password:String,
})

//creating collection for registe
const Register = new mongoose.model("Register",registeruser)

module.exports=Register