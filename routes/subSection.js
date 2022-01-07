const express = require("express");
const router = express.Router();
const subSection = require("../controllers/subSection");

// desc: add subsection
router.get("/sub-section", subSection.addSubSections);

// desc: get sub-sectionsn on the basis of section
router.get("/sub-section/:sectionId", subSection.getSubSections);

module.exports = router;

