const mongoose = require("mongoose");
const DocumentSchema = new mongoose.Schema({
  documentTitle: {
    type: String,
  },
  documentFile: {
    type: Buffer,
    contentType: String,
  },
  documentVideo: {
    type: String,
  },
});

module.exports = Document = mongoose.model("Document", DocumentSchema);
