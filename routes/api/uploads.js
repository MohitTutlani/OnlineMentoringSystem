const express = require("express");
const router = express.Router();
const Document = require("../../model/Documents");
const multer = require("multer");
const path = require("path");

const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline);

const upload = multer();
router.post("/upload", upload.single("file"), async (req, res, next) => {
  //   console.log(req.body);
  //   console.log(req.file);

  const {
    file,
    body: { name },
  } = req;

  if (file.detectedFileExtension != ".rar")
    next(new Error("Invalid File Extension"));
  const fileName = name + file.detectedFileExtension;
  await pipeline(
    file.stream,
    fs.createWriteStream(
      `${__dirname}/../../../client/public/image/${fileName}`
    )
  );

  res.send("File uploaded successfully" + fileName);
});

module.exports = router;
