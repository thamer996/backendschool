const mongoose = require('mongoose');
const users = require('./users'); // Import the users schema
const Designation = require('./designation'); // Import the Designation model
const Department = require('./department'); // Import the Department model

// Define the staff schema inheriting from the users schema
const staffSchema = new mongoose.Schema({
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department', required: true },
    designation: { type: mongoose.Schema.Types.ObjectId, ref: 'Designation', required: true }
});

// Inherit the properties and methods of the users schema
staffSchema.add(users.schema);

// Define the staff model
const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
