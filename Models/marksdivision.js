const mongoose = require('mongoose');

// Define the schema
const MarksDivisionSchema = new mongoose.Schema({
  DivisionName: {
    type: String,
    required: true
  },
  PercentFrom: {
    type: Number,
    required: true
  },
  PercentUpto: {
    type: Number,
    required: true
  }
});

// Create a Mongoose model
const MarksDivision = mongoose.model('MarksDivision', MarksDivisionSchema);

module.exports = MarksDivision;
