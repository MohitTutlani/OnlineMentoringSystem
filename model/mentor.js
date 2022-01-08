const mongoose = require("mongoose");

const mentor = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
  },
  resetLink: {
    data: String,
    default: "",
  },
});

module.exports = mentors = mongoose.model("Mentor", mentor);
