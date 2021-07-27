const mongoose = require('mongoose');

const faq = {
  question: String,
  answer: String,
  section: String
};

const Faq = mongoose.model('Faq', new mongoose.Schema(faq), 'faq');
module.exports = Faq;
