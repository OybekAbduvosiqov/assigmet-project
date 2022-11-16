const fs = require("fs")
const path = require("path")

let users = JSON.parse(fs.readFileSync(path.join(process.cwd(), "database", "user.json"), "utf8".trim() || "[]"))

const GET = (req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.status(200).json(users) 
}

const POST = (req, res) => {
    res.setHeader("Content-Type", "application/json")
    const {name, email, password} = req.body

    if(!name || !email || !password) {
        return res.status(400).json({
            massage: "Name, email and password required",
            status: 400
        })
    }
    else if(name < 3 || email < 5 || password < 5) {
        return res.status(404).json({
            massage:" You should do all our conditions",
            status: 404
        })
    }
    else if(name > 30 || email > 30 || password > 30) {
        return res.status(404).json({
            massage:" You should do all our conditions",
            status: 404
        })
    }

    const newUser = {
        id: users.length ? users[users.length - 1].id + 1: 1,
        name,
        email,
        password
    }

    users.push(newUser)
    fs.writeFileSync(path.join(process.cwd(), "database", "user.json"), JSON.stringify(users, null, 2))
    res.status(201).json({
        massage:"New user created",
        status: 201
    })
}

module.exports = {
    GET,
    POST
}