var mysql = require('mysql');
var express=require("express");
const router = require('./routes/user');
var app =express()




app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
  res.send("<h2>My sql</h2>")
})


//user route
app.use('/',router)



app.listen(4000,()=>{
  console.log("port is running on 4000")
})