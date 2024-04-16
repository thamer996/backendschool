// Import Mongoose
const mongoose = require('mongoose');

// Define the designation schema
const designationSchema = new mongoose.Schema({
  designationName: {
    type: String,
    required: true
  }
});

// Define the designation model
const Designation = mongoose.model('Designation', designationSchema);

module.exports = Designation;
