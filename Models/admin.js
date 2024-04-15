// models/admin.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    fullName: { type: String },
    email: { type: String, unique: true }
}, { timestamps: true });

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
