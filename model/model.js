const { Mongoose } = require("mongoose");
const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
    required: true,
  },
  fname: {
    type: String,
    required: true,
  },
  mname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pemail: {
    type: String,
    required: true,
    unique: true,
  },
  contact: {
    type: String,
    required: true,
  },
  fcontact: {
    type: String,
    required: true,
  },
  mcontact: {
    type: String,
    required: true,
  },
});

const Userdb = mongoose.model("userdb", schema);

module.exports = Userdb;
