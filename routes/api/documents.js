const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const multer = require("multer");
const Document = require("../../model/Documents");

const upload = multer();

//@POST FileUploads api
var fileUpload = upload.fields([
  { name: "file", maxCount: 1 },
  { name: "video", maxCount: 1 },
  { name: "tenth", maxCount: 1 },
]);
router.post("/", fileUpload, async (req, res) => {
  console.log("Print:", req.files);
  const { documentTitle } = req.body;
  const documentFields = {};
  // documentFields.user = req.user.id;
  try {
    if (documentTitle) documentFields.documentTitle = documentTitle;
    // if (req.files.video[0].size > 31457280) {
    //   return res.json({ msg: "Video cannot be more than 30 MB" });
    // }

    // documentFields.documentFile = `http://localhost:5000/uploads/${req.file.filename}`;
    // documentFields.documentVideo = `http://localhost:5000/uploads/${req.file.filename}`;
    documentFields.documentFile = `http://${req.headers.host}/uploads/${req.files.file[0].originalname}`;
    documentFields.documentVideo = `http://${req.headers.host}/uploads/${req.files.video[0].originalname}`;

    return res.json({ data: req.file });

    let details = await Document.findOne({ user: req.user.id });
    if (details) {
      return res.json({
        msg: "User has already created the Document Section!",
      });
    }
    details = new Document(documentFields);
    await details.save();
    res.json(details);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
