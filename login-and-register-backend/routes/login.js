const { Router } = require("express")
const registercontroller=require('../controller/registercontroller')
const logincontroller=require('../controller/logincontroller')

const routes=require("express").Router()

routes.post("/register",registercontroller.registeruser)
routes.post("/login",logincontroller.login)

module.exports={routes}