// Import Mongoose
const mongoose = require('mongoose');

// Define the department schema
const departmentSchema = new mongoose.Schema({
  departmentName: {
    type: String,
    required: true
  }
});

// Define the department model
const Department = mongoose.model('Department', departmentSchema);

module.exports = Department;
