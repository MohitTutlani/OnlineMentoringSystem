const express = require("express");
const Admin = require("../../model/Admin");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
// const bcryptjs = require("bcryptjs");
const auth = require("../../middleware/auth");

const router = express.Router();

//Post Route
// Desc Admin Login
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
      let user = await Admin.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Admin Doesn't Exists" });
      }

      //   const isMatch = await bcryptjs.compare(password, user.password);
      //   if (!isMatch) {
      //     return res.status(400).json({ msg: "Invalid Credentials" });
      //   }
      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(payload, "ak", { expiresIn: 4000000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).json(error.message);
    }
  }
);

router.get("/", auth, async (req, res) => {
  try {
    let user = await Admin.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
