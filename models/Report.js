const mongoose = require("mongoose");

const reportSchema = mongoose.Schema({
  // questionId, answer, comment, imagelink
  qId: {
    type: Number,
  },
  userId: {
    type: String,
  },
  answerId: {
    type: String,
  },
  answer: {
    type: String,
  },
  comment: {
    type: String,
  },
  imageLink: {
    type: String,
  },
});

module.exports = Report = mongoose.model("report", reportSchema);
