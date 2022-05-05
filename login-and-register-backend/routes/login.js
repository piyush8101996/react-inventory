const { Router } = require("express")
const registercontroller=require('../controller/registercontroller')
const logincontroller=require('../controller/logincontroller')
const updatecontroller=require('../controller/updatecontroler')
const routes=require("express").Router()

routes.post("/register",registercontroller.registeruser)
routes.post("/login",logincontroller.login)
routes.get("/updateprofile/:email",updatecontroller.userInfo)
routes.post("/updateprofile/:email",updatecontroller.updateUser)

module.exports={routes}