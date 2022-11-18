const router = require("express").Router()
const path = require("path")
 

//import controller

const userController = require(path.join(__dirname, "..", "controllers", "user.js"))

router.get("/register", userController.GET)
router.post("/register", userController.POST)

module.exports = router;