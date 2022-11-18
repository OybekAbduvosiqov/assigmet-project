const exp = require("constants")
const express = require("express")
const path = require("path")
const app = express()
const cors = require("cors");
const port = 5500


app.use(express.json())
app.use(cors())
app.use(express.static(path.join(process.cwd(), "front")));

//import routers
app.get("/", (req, res) => {
    res.setHeader("Content-Type", "signUp/html");
    res.sendFile(path.join(process.cwd(), "front", "signUp.html"));
  });

const registerRouter = require(path.join(__dirname, "routes", "user.js"))
const loginRouter = require(path.join(__dirname, "routes", "login.js"))


app.use(registerRouter)
app.use(loginRouter)





app.listen(port, () => console.log("Server is running on http://localhost:5500"))