const jwt = require("jsonwebtoken");
require("dotenv").config();

//@desc : user auth middleware function
module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).json({ msg: "NO Token,Authorization Denied" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_AUTH);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not Valid" });
  }
};
