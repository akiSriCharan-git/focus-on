const mongoose = require('mongoose');

const caseStudy = {
  heading: String,
  subHeading: String,
  image: String,
  text: String,
  link: String
}

const CaseStudy = mongoose.model('CaseStudy', new mongoose.Schema(caseStudy), 'caseStudy');
module.exports = CaseStudy;
