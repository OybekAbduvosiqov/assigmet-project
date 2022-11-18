const router = require("express").Router()
const path = require("path")
 

//import controller

const loginController = require(path.join(__dirname, "..", "controllers", "login.js"))

router.get("/login", loginController.GET)


module.exports = router;