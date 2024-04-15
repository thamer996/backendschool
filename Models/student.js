const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    admissionNo: { type: String },
    rollNumber: { type: String },
    class: { type: String },
    section: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    gender: { type: String },
    dateOfBirth: { type: Date },
    religion: { type: String },
    caste: { type: String },
    mobileNumber: { type: String },
    email: { type: String },
    admissionDate: { type: Date },
    //studentPhoto: { type: String }, // Assuming storing the path to the photo
    bloodGroup: { type: String },
    height: { type: Number },
    weight: { type: Number },
    fatherName: { type: String },
    fatherPhone: { type: String }
}, { timestamps: true });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
