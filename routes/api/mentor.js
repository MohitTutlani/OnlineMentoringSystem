const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const { check, validationResult } = require("express-validator");
// const bcryptjs = require("bcryptjs");
const User = require("../../model/mentor");
const auth = require("../../middleware/auth");

//@mailgun :  mail service provider
const mailgun = require("mailgun-js");
const mg = mailgun({
  apiKey: "c68a96e8b7197eb87dbe511429d64aad-6ae2ecad-e0608df4",
  domain: "sandbox7ad43a9a053d450e96370dc123ecb04e.mailgun.org",
});

//@Post route
//@Desc Mentor signup
router.post(
  "/mentorSignup",
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
        return res.status(400).json({ msg: "User already Exists" });
      }

      user = new User({
        email,
        password,
      });

      // const salt = await bcryptjs.genSalt(10);
      // user.password = await bcryptjs.hash(password, salt);
      await user.save();
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
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

//Post Route
// Desc: Mentor Login
router.post(
  "/mentorLogin",
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
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          msg: "User Doesn't Exists or  Invalid credentials",
        });
      }

      console.log(user.password); //db password
      console.log(password); //client password

      if (password !== user.password) {
        return res.status(400).json({
          msg: "Invalid",
        });
      }

      //Bcryptjs hashing password here
      // const isMatch = await bcryptjs.compare(password, user.password);
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

router.put("/forgotPassword", (req, res) => {
  const { email } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res
        .status(400)
        .json({ error: "User with this email does not exists" });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_FORGOT_PASSWORD, {
      expiresIn: "20m",
    });
    const data = {
      from: "noreply@abhey.com",
      to: email,
      subject: "Hello",
      html: `<h2>Please click on the link to RESET your password</h2>
     <a href="http://localhost:5000/forgotPassword/${token}">Click Me</a>`,
    };
    // mg.messages().send(data, function (error, body) {
    //   console.log(body);
    // });

    return user.updateOne({ resetLink: token }, (err, success) => {
      if (err) {
        return res.status(400).json({ error: "reset password link error" });
      } else {
        mg.messages().send(data, function (error, body) {
          if (error) {
            return res.json({ error: err.message });
          }
          return res.json({
            message: "Email has been sent, kindly follow the instructions",
          });
        });
      }
    });
  });
});

router.post("/forgotPassword", (req, res) => {
  const { email } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res
        .status(400)
        .json({ error: "User with this email does not exists" });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_FORGOT_PASSWORD, {
      expiresIn: "20m",
    });
    const data = {
      from: "noreply@abhey.in",
      to: email,
      subject: "Hello",
      html: `<h2>Please click on the link to RESET your password</h2>
     <a href="http://localhost:5000/forgotPassword/${token}">Click Me</a>`,
    };
    // mg.messages().send(data, function (error, body) {
    //   console.log(body);
    // });

    return user.updateOne({ resetLink: token }, (err, success) => {
      if (err) {
        return res.status(400).json({ error: "reset password link error" });
      } else {
        mg.messages().send(data, function (error, body) {
          if (error) {
            return res.json({ error: err.message });
          }
          return res.json({
            message: "Email has been sent, kindly follow the instructions",
          });
        });
      }
    });
  });
});

//reset password route/api
router.put("/resetPassword", (req, res) => {
  var { resetLink, newPass } = req.body;
  if (resetLink) {
    jwt.verify(
      resetLink,
      process.env.JWT_FORGOT_PASSWORD,
      (err, decodedData) => {
        // console.log(decodedData);
        if (err) {
          return res.status(401).json({ error: "Incorrect Token or Expired" });
        }
        User.findOne({ resetLink }, (err, user) => {
          if (err || !user) {
            return res
              .status(400)
              .json({ error: "User with this Token does not exists" });
          }

          var obj = {
            password: newPass,
          };

          user = _.extend(user, obj);
          user.save((err, result) => {
            if (err) {
              return res
                .status(400)
                .json({ error: "reset password link error" });
            } else {
              return res.status(200).json({
                message: "Password has been changed",
              });
            }
          });
        });
      }
    );
  } else {
    return res.status(401).json({ error: "Authentication error!!!" });
  }
});

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
