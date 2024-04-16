const mongoose = require('mongoose');

// Define the schema
const DesignMarkSheetSchema = new mongoose.Schema({
  Template: {
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
  BodyText: {
    type: String,
    required: true
  },
  FooterText: {
    type: String,
    required: true
  },
  PrintingDate: {
    type: Date,
    default: Date.now
  },
  HeaderImage: {
    type: String,
    required: false
  },
  LeftLogo: {
    type: String,
    required: false
  },
  RightLogo: {
    type: String,
    required: false
  },
  LeftSign: {
    type: String,
    required: false
  },
  MiddleSign: {
    type: String,
    required: false
  },
  RightSign: {
    type: String,
    required: false
  },
  BackgroundImage: {
    type: String,
    required: false
  }
});

// Create a Mongoose model
const DesignMarkSheet = mongoose.model('DesignMarkSheet', DesignMarkSheetSchema);

module.exports = DesignMarkSheet;
