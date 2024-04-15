const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    fullName: { type: String },
    gender: { type: String, enum: ['Male', 'Female', 'Other'] },
    dateOfBirth: { type: Date },
    class: { type: String },
    grade: { type: String },
    subject: { type: String },
    email: { type: String },
    contact: { type: String }
}, { timestamps: true });

const Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = Teacher;
