const csv = require("fast-csv");
const mongoose = require("mongoose");
const stuRegister = require("../../model/stuRegister");

exports.post = function (req, res) {
  if (!req.files) return res.status(400).send("No files were uploaded.");

  const stuFiles = req.files.file;

  const students = [];

  csv
    .fromString(stuFiles.data.toString(), {
      headers: true,
      ignoreEmpty: true,
    })
    .on("data", function (data) {
      data["_id"] = new mongoose.Types.ObjectId();

      students.push(data);
    })
    .on("end", function () {
      stuRegister.create(students, function (err, documents) {
        if (err) throw err;
      });

      res.send(students.length + " Students have been successfully uploaded.");
    });
};
