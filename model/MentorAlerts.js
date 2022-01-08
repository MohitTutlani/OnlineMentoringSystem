const mongoose = require("mongoose");
const Alert = mongoose.Schema({
  alert: {
    type: String,
    required: true,
  },
});

module.exports = alert = mongoose.model("alerts", Alert);
