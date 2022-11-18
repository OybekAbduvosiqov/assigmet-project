const fs = require("fs");
const path = require("path");

let check = JSON.parse(
  fs.readFileSync(
    path.join(process.cwd(), "database", "user.json"),
    "utf8".trim() || "[]"
  )
);

const GET = (req, res) => {

  console.log("rocket ~ file: login.js ~ line 12 ~ GET ~ req", req.body);
  res.setHeader("Content-Type", "application/json");
  const {email, password } = req.body;

  if (check.findIndex((el) => (el.password == password) && (el.email == email)  ) > -1) {
    return res.status(200).json({
      message: "already exists please welcome",
      isRegistered: true,
    });
  }
  res.status(200).json(check);
};

module.exports = {
    GET,
  };