const express = require('express')
const Register=require('../model/register')


//get user details



const userInfo =async(req,res)=>{
    try {
        const email =req.url.slice(15) 
        const user = await Register.findOne({email:email})
        
        if(user){
            res.status(200).send(user)
        }else{
            res.status(400).send({ msg: "user not found" })
        }
      
    }
    catch (err) {
        res.send({ msg: err })
    }
}
//update user


const updateUser=async (req,res)=>{
    const user ={
        fullname: req.body.fullname,
        email: req.body.email,
        password: req.body.password,
        mobileNo:req.body.mobileNo,
        phoneNo:req.body.phoneNo,
        address:req.body.address
    }
    const email =req.url.slice(15) 
   // console.log(email)
    try{
        console.log(user)
        const update=await Register.updateOne({email:email},{$set:user})
        console.log(req.body)
        res.send(req.body.email)
    }
    catch(err){
          res.send(err)
    }
}


module.exports={userInfo,updateUser}
