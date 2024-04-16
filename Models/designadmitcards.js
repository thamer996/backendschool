const mongoose = require('mongoose');

// Define the schema
const DesignAdmitCardSchema = new mongoose.Schema({
  Template: {
    type: String,
    required: true
  },
  Heading: {
    type: String,
    required: true
  },
  Title: {
    type: String,
    required: true
  },
  ExamName: {
    type: String,
    required: true
  },
  SchoolName: {
    type: String,
    required: true
  },
  ExamCenter: {
    type: String,
    required: true
  },
  FooterText: {
    type: String,
    required: true
  },
  LeftLogo: {
    type: String,
    required: false
  },
  RightLogo: {
    type: String,
    required: false
  },
  Sign: {
    type: String,
    required: false
  },
  BackgroundImage: {
    type: String,
    required: false
  }
});

// Create a Mongoose model
const DesignAdmitCard = mongoose.model('DesignAdmitCard', DesignAdmitCardSchema);

module.exports = DesignAdmitCard;
