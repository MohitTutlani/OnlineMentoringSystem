const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.get("/get", (req, res) => {
  res.json({ msg: "get route running " });
});

router.post("/posts", verifytoken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.status(403);
    } else {
      res.json({ msg: "post created" }, authData);
    }
  });
});
router.post("/login", (req, res) => {
  //Mock user
  const user = {
    id: 1,
    username: "abhey",
    email: "abhey@gmail.com",
  };

  jwt.sign({ user }, "secretkey", (err, token) => {
    res.json({
      token,
    });
  });
  //   res.json({ msg: "post route running " });
});

//Format of token
//Authorization : Bearer <access_token>
function verifytoken(req, res, next) {
  //get auth header value

  const bearerHeader = req.headers["authorization"];

  //check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    //split at the space

    const bearer = bearerHeader.split(" ");
    //get token from array
    const bearerToken = bearer[1];
    //set the token
    req.token = bearerToken;
    // next middleware

    next();
  } else {
    // Forbidden
    res.status(403);
  }
}

module.exports = router;
