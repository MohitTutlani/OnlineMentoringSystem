const express = require("express");
const auth = require("../../middleware/auth");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const User = require("../../model/User");
const nodemailer = require("nodemailer");
// const mailgun = require("mailgun-js");
// const nodemailgun = require("nodemailer-mailgun-transport");
const router = express.Router();

// const transporter = nodemailer.createTransport(
//   mailgun({
//     auth: {
//       api_key: "c68a96e8b7197eb87dbe511429d64aad-6ae2ecad-e0608df4",
//     },
//   })
// );

// const authh = {
//   auth: {
//     api_key: "c68a96e8b7197eb87dbe511429d64aad-6ae2ecad-e0608df4",
//     domain:
//       "https://app.mailgun.com/app/sending/domains/sandbox7ad43a9a053d450e96370dc123ecb04e.mailgun.org",
//   },
// };

// let transport = nodemailer.createTransport(nodemailgun(authh));

// const mailOptions = {
//   from: "abeyp1m2@gmail.com",
//   to: "khajuriaabhishek998@gmail.com",
//   subject: "no reply mail",
//   text: "Hey there form MERN",
// };

// transport.sendMail(mailOptions, function (err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Mail Successfully Sent");
//   }
// });
//Post Route
// Desc User Login
router.post(
  "/login",
  [
    check("email", "Email is Required").not().isEmpty(),
    check("password", "Password is Required").isLength({ min: 8 }),
  ],

  // api_key=c68a96e8b7197eb87dbe511429d64aad-6ae2ecad-e0608df4    // To Send mails
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // res.json(req.body);
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "User Doesn't Exists" });
      }

      // const isMatch = await bcryptjs.compare(password, user.password);
      // if (!isMatch) {
      //   return res.status(400).json({ msg: "Invalid Credentials" });
      // }
      if (password !== user.password) {
        return res.status(400).json({
          msg: "Invalid Email or password",
        });
      }
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
          res.json({ token });
        }
      );

      const token = await user.generateToken();
      console.log(token);
      res.json({ token: token });

      // res.cookie("jwt_token", token, {
      //   expires: new Date(Date.now() + 25892000000),
      // });
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
