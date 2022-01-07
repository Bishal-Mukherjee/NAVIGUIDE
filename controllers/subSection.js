const { GoogleSpreadsheet } = require("google-spreadsheet");
const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;
const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID);
const SubSections = require("../models/SubSections");

const createData = (
  subsId,
  name,
  subParent,
  subLink,
  sited,
  observation,
  clouserDate,
  comments,
  risk,
  status,
  note,
  attachmentLink,
  ranks,
  shipType,
  evidence
) => {
  return {
    subsId,
    name,
    subParent,
    subLink,
    sited,
    observation,
    clouserDate,
    comments,
    risk,
    status,
    note,
    attachmentLink,
    ranks,
    shipType,
    evidence,
  };
};

// desc: add subsections from google sheet
exports.addSubSections = async (req, res) => {
  await doc.useServiceAccountAuth({
    client_email: process.env.CLIENT_EMAIL,
    private_key: process.env.PRIVATE_KEY,
  });

  // load the document info
  await doc.loadInfo();

  // Index of the sheet
  let sheet = doc.sheetsByIndex[0];

  // Get all the rows
  let rows = await sheet.getRows();
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];

    SubSections.collection.insertOne(
      createData(
        parseInt(row._rawData[0]),
        row._rawData[1],
        parseInt(row._rawData[2]),
        row._rawData[3],
        row._rawData[4],
        row._rawData[5],
        row._rawData[6],
        row._rawData[7],
        row._rawData[8],
        row._rawData[9],
        row._rawData[10],
        row._rawData[11],
        row._rawData[12],
        row._rawData[13],
        row._rawData[14] === undefined ? "" : row._rawData[14]
      )
    );
  }

  res.status(200).json({ message: "SUCCESS" });
};

// desc: get the all sub-sections from the database
exports.getSubSections = async (req, res) => {
  const subSections = await SubSections.find({}).sort({ _id: 1 });
  res.status(200).json({ subSections });
};
