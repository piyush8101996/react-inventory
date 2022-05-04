const mongoose=require('mongoose')

const login= new mongoose.Schema({
    email:String,
    password:String
})

