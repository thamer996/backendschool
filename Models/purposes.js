const mongoose = require('mongoose');

const purposeSchema = new mongoose.Schema({
  Purpose: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  }
});

const Purpose = mongoose.model('Purpose', purposeSchema);

module.exports = Purpose;
