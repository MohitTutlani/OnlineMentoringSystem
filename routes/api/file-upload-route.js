const express = require("express");
const { upload } = require("../../helpers/filehelper");
const {
  fileupload,
  getallSingleFiles,
} = require("../../controllers/fileuploadController");
const router = express.Router();

// const SingleUpload = require("../../model/singleUpload");

router.post("/", upload.single("file"), fileupload);
router.get("/", getallSingleFiles);

module.exports = router;
