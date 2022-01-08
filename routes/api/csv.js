const express = require("express");
const csv = require("csv-parser");
const fs = require("fs");
const router = express.Router();
const results = [];

router.get("/", (req, res) => {
  fs.createReadStream("registerData.csv")
    .pipe(csv({}))
    .on("data", () => results.push(data))
    .on("end", () => console.log(results));
});

module.exports = router;
