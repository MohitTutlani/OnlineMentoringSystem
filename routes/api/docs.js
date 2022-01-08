const express = require("express");
const router = express.Router();
const Document = require("../../model/Documents");
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
});
router.post("/", upload.single("image"), async (req, res, next) => {
  // const upload = multer({ storage }).single("image");
  console.log("Body", req.body);
  console.log("File: ", req.file);
  // return res.json({ data: req.file };
  if (req.fileValidationError) {
    return res.send(req.fileValidationError);
  }
  console.log("ID.", req.file);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { documentName, documentTitle } = req.body;

  const documentFields = {};

  try {
    if (documentName) documentFields.documentName = documentName;

    if (documentTitle) documentFields.documentTitle = documentTitle;

    documentFields.documentImage = `http://localhost:5000/uploads/${req.file.filename}`;

    let documentData = new Document(documentFields);
    await documentData.save();
    res.json(documentData);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
