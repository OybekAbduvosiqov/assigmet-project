const fs = require("fs");
const path = require("path");

let users = JSON.parse(
  fs.readFileSync(
    path.join(process.cwd(), "database", "user.json"),
    "utf8".trim() || "[]"
  )
);

const GET = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(users);
};

const POST = (req, res) => {
  console.log("rocket ~ file: user.js ~ line 12 ~ POST ~ req", req.body);
  res.setHeader("Content-Type", "application/json");
  const { name, email, password } = req.body;

  if (users.findIndex((el) => el.password === password) > -1) {
    return res.status(200).json({
      message: "already exists please welcome",
      isRegistered: true,
    });
  }

    else if (!name || !email || !password) {
      return res.status(400).json({
        massage: "Name, email and password required",
        status: 400,
      });
    }
    else if (name.length < 3 || email.length < 5 || password.length < 5) {
      return res.status(404).json({
        massage: " You should do all our conditions",
        status: 404,
      });
    } else if (name.length > 30 ||  email.length > 30 ||  password.length > 30) {
      return res.status(404).json({
        massage: " You should do all our conditions",
        status: 404,
      });
    }

  const newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name,
    email,
    password,
  };

  users.push(newUser);
  fs.writeFileSync(
    path.join(process.cwd(), "database", "user.json"),
    JSON.stringify(users, null, 2)
  );
  res.status(201).json({
    massage: "New user created",
    status: 201,
  });
};

module.exports = {
  GET,
  POST,
};