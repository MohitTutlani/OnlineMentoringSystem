const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const User = require("../../model/User");

//@Post route
//@Desc User signup
router.post(
  "/",
  [
    // check("name", "Name is Required").not().isEmpty(),
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
      let user = await User.findOne({ email });
      if (user) {
        // alert("User already Exists");
        return res.status(400).json({ msg: "User already Exists" });
      }
      user = new User({
        email,
        password,
      });

      const salt = await bcryptjs.genSalt(10);
      user.password = await bcryptjs.hash(password, salt);
      await user.save();
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(payload, "ak", { expiresIn: 40000000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

router.get("/", async (req, res) => {
  res.send("User Route is Running");
});

module.exports = router;
