const Register=require("../model/register")


const login = async (req,res)=>{
    try{
       const loginuser=await Register.findOne({ email: req.body.email,password:req.body.password })
       if(loginuser){
           res.status(200).send(loginuser)
       }else{
        res.status(400).send({ msg: "user not found" })
        //throw new Error({ msg: "user not found" });
       }
    }
    catch(err){
        res.send(err)
    }
}




module.exports={login}