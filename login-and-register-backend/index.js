const express=require('express')
const app=express()
const mongoose=require("mongoose")
const env=require('dotenv')
const { routes } = require('./routes/login')
const cors = require('cors');

env.config()
app.use(cors());
//app.use(express.urlencoded())
//database connection using mongoose

mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log("connected to db")
  );

//built in express middleware
app.use(express.json())

app.use("/",routes)



app.listen(4000,()=>{
    console.log("listening to port 4000")
})