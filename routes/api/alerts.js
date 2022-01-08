const express = require("express");
const MentorAlerts = require("../../model/MentorAlerts");
const { check, validationResult } = require("express-validator");
const router = express.Router();
router.post(
  "/",
  [check("alert", "Can not keep empty").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //requesting the bodies
    const { alert } = req.body;

    try {
      let user = await MentorAlerts.findOne({ alert });
      if (user) {
        return res.status(400).json({ msg: "User already Exists" });
      }
      user = new MentorAlerts({
        alert,
      });
      await user.save();
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

//@desc Delete the specific Userdb by ID
router.delete("/:id", async (req, res) => {
  try {
    await MentorAlerts.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Message  is successfully Deleted" });
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/", async (req, res) => {
  // res.send("Auth route Running");
  try {
    let user = await MentorAlerts.find();
    res.json(user);
  } catch (error) {
    console.error(error.message);
  }
});
module.exports = router;
