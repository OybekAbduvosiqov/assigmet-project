const exp = require("constants")
const express = require("express")
const path = require("path")
const app = express()
const port = 5500

app.use(express.json())
//import routers

const userRouter = require(path.join(__dirname, "routes", "user.js"))
app.use(userRouter)

app.listen(port, () => console.log("Server is running on http://localhost:5500"))