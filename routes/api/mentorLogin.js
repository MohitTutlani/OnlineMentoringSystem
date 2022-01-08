const express = require("express");
const auth = require("../../middleware/auth");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const User = require("../../model/mentor");

const router = express.Router();

//Post Route
// Desc User Login
router.post(
  "/",
  [
    check("email", "Email is Required").not().isEmpty(),
    check("password", "Password is Required").isLength({ min: 8 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // res.json(req.body);
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email, password });
      if (!user) {
        return res.status(400).json({
          msg: "User Doesn't Exists or  Invalid credentials",
        });
      }
      console.log(password);

      // if (password !== user.password) {
      //   return res.status(400).json({ msg: "Invalid Credentials" });
      // }

      // const isMatch = await user.compare(password, user.password);
      // if (!isMatch) {
      //   return res.status(400).json({ msg: "Invalid Credentials" });
      // }

      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        process.env.JWT_AUTH,
        { expiresIn: 4000000 },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).json(error.message);
    }
  }
);

router.get("/", auth, async (req, res) => {
  // res.send("Auth route Running");
  try {
    let user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
