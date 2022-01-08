const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const Student = require("../../model/Student");

//desc students doubts
router.post(
  "/",
  [
    check("rollno", "Name is Required").not().isEmpty(),
    check("doubt", "Doubt can not be empty..").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // res.json(req.body);
    const { rollno, doubt } = req.body;

    try {
      let user = await Student.findOne({ rollno });
      if (user) {
        return res.status(400).json({ msg: "Student already Exists" });
      }
      user = new Student({
        rollno,
        doubt,
      });
      await user.save();
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
      console.error(error.doubt);
      res.status(500).send("Server Error");
    }
  }
);

//@response of students doubts
router.post(
  "/mentorResponse",
  [check("response", "response is Required").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // res.json(req.body);
    const { response } = req.body;

    try {
      let user = await Student.findOne({ response });
      if (user) {
        return res.status(400).json({ msg: "Student already Exists" });
      }
      user = new Student({
        response,
      });
      await user.save();
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
      console.error(error.doubt);
      res.status(500).send("Server Error");
    }
  }
);

//@desc Mentor responses
router.put("/mentorResponse/:id", async (req, res, next) => {
  // console.log(req.params.id);
  Student.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        response: req.body.response,
      },
    }
  )
    .then((result) => {
      res.status(200).json({ updated: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.get("/", async (req, res) => {
  // res.send("Auth route Running");
  try {
    let user = await Student.find();
    res.json(user);
  } catch (error) {
    console.error(error.message);
  }
});

router.get("/:id", async (req, res) => {
  // res.send("Auth route Running");
  try {
    let user = await Student.find();
    res.json(user);
  } catch (error) {
    console.error(error.message);
  }
});

//@Delete route
//@desc Delete the specific Student by ID
router.delete("/:id", async (req, res) => {
  try {
    await Student.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Student  is successfully Deleted" });
  } catch (error) {
    console.log(error.message);
  }
});
module.exports = router;
