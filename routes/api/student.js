const express = require("express");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Userdb = require("../../model/model");

//@Get Route
//get all the data of the specified user
// router.get("/", auth, async (req, res) => {
//   try {
//     const stuDetails = await Userdb.find({ user: req.user.id });

//     if (stuDetails.length == 0) {
//       return res.json({ msg: "There is no available data of that user..." });
//     }
//     res.json(stuDetails);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

router.get("/", async (req, res) => {
  // res.send("Auth route Running");
  try {
    let user = await Userdb.find();
    res.json(user);
  } catch (error) {
    console.error(error.message);
  }
});

//@Post Route
//Add-user
router.post(
  "/",
  [
    check("name", "Name is Required").not().isEmpty(),
    check("fname", "Father's Name is Required").not().isEmpty(),
    check("mname", "Mother'sName is Required").not().isEmpty(),
    check("email", "Personal Email is Required").not().isEmpty(),
    check("pemail", "Parent's Email is Required").not().isEmpty(),
    check("contact", "Contact is Required").not().isEmpty(),
    check("fcontact", "Father's contact is Required").not().isEmpty(),
    check("mcontact", "Mother's contact is Required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //requesting the bodies
    const { name, fname, mname, email, pemail, contact, fcontact, mcontact } =
      req.body;

    try {
      let user = await Userdb.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "User already Exists" });
      }
      user = new Userdb({
        name,
        fname,
        mname,
        email,
        pemail,
        contact,
        fcontact,
        mcontact,
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
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

//@put route
//@Desc update using ID
router.put("/:id", async (req, res, next) => {
  console.log(req.params.id);
  Userdb.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        fname: req.body.fname,
        mname: req.body.mname,
        email: req.body.email,
        pemail: req.body.pemail,
        contact: req.body.contact,
        fcontact: req.body.fcontact,
        mcontact: req.body.mcontact,
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

//@Put route
//@DESC Update a Userdb by ID
// router.put("/:id", auth, async (req, res) => {
//   const { name, fname, mname, email, pemail, contact, fcontact, mcontact } =
//     req.body;
//   const stuUpdate = {};
//   stuUpdate.user = req.user.id;
//   try {
//     if (name) stuUpdate.name = name;
//     if (fname) stuUpdate.fname = fname;
//     if (mname) stuUpdate.mname = mname;
//     if (email) stuUpdate.email = email;
//     if (pemail) stuUpdate.pemail = pemail;
//     if (contact) stuUpdate.contact = contact;
//     if (fcontact) stuUpdate.fcontact = fcontact;
//     if (mcontact) stuUpdate.mcontact = mcontact;
//     let task = await Userdb.findById(req.params.id);
//     if (task) {
//       let task = await Userdb.findOneAndUpdate(
//         { _id: req.params.id },
//         { $set: stuUpdate },
//         { new: true }
//       );
//       return res.json({ msg: "Userdb  Updated!", data: task });
//     }
//     res.json({ msg: "Enter Valid ID" });
//   } catch (error) {
//     console.log(error.message);
//   }
// });

//@Delete route
//@desc Delete the specific Userdb by ID
router.delete("/:id", async (req, res) => {
  try {
    await Userdb.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Userdb  is successfully Deleted" });
  } catch (error) {
    console.log(error.message);
  }
});
//@GET Route
//@DESC Get all the student of the specific user
router.get("/:id", async (req, res) => {
  Userdb.findById(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => res.status(400).json("Error" + err));
});
module.exports = router;
