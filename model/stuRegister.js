const mongoose = require("mongoose");
const register = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  fields: {
    roll: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      default: Date.now,
    },
    password: {
      type: String,
      required: true,
    },
  },
});

const Register = mongoose.model("Register", register);
module.exports = Register;
