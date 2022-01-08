const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  rollno: {
    type: Number,
    required: true,
  },
  doubt: {
    type: String,
    required: true,
  },
  response: {
    type: String,
  },
});

module.exports = Student = mongoose.model("student", StudentSchema);
