const { Route } = require('express')
const express=require('express')
const router=express.Router()
const db=require('../config/config')

var mysql = require('mysql');

var dbcon = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "piyush1996",
    database:"mydb"
  });
  
  dbcon.connect(function(err) {
    if (err) throw err;
    console.log("Connected!.............");
    
  });

//add the user info

router.post('/create',(req,res,next)=>{
    var fullname=req.body.fullname;
    console.log(fullname)
    var email=req.body.email
   
    var sql = `INSERT INTO customers (fullname,email) VALUES ("${fullname}","${email}")`;
    dbcon.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result)
        console.log("1 record inserted");
      });
  
})

//get all user info

router.get('/info',(req,res,next)=>{
   
    dbcon.query("SELECT fullname FROM customers", function (err, result, fields) {
        if (err) throw err;
        res.send(result)
        console.log(fields);
      });
})

//update the user info

router.put('/update', function(req, res, next) {
    var fullname=req.body.fullname;
    //var email=req.body.email
    var sql = `UPDATE customers SET fullname="${fullname}"  WHERE fullname="prashant"`;
    dbcon.query(sql, function(err, result) {
      if(err) {
        res.status(500).send({ error: 'Something failed!' })
      }
     res.send(result)
     console.log('update the user')
    })
  });

router.delete('/delete',function(req,res,next){
    var email=req.body.email
    var sql = `DELETE FROM customers WHERE email ="${email}"`;
    dbcon.query(sql, function (err, result) {
      if (err) throw err;
    res.send(result)

    console.log("user is deleted")
    });
})

module.exports=router;