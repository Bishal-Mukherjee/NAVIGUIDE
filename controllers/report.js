const Report = require("../models/Report");

exports.saveReport = async (req, res) => {
  const { qId, userId, answer, comment, imageLink } = req.body;
  const reports = await Report.find({}).sort({ _id: -1 });
  let formedAnswerId =
    "Q" + qId + "_" + (reports.length + 1) + "_" + "U" + userId;

  let newReport = Report({
    qId,
    userId,
    answerId: formedAnswerId,
    answer,
    comment,
    imageLink,
  });
  await newReport.save();

  res
    .status(200)
    .json({ responseCode: 200, responseMessage: "SUCCESS", report: newReport });
};

exports.getReport = async (req, res) => {
  const { answerId } = req.body;
  const report = await Report.findOne({ answerId });

  if (!report) {
    res.status(404).json({
      responseCode: 404,
      responseMessage: "NOT FOUND",
    });
  } else {
    res
      .status(200)
      .json({ responseCode: 200, responseMessage: "SUCCESS", report });
  }
};
