const mongoose = require('mongoose');
const Users = require('./users'); // Import the Users model

const studentSchema = new mongoose.Schema({
    admissionNo: { type: String },
    rollNumber: { type: String },
    class: {
        type: Schema.Types.ObjectId,
        ref: 'Class'
    },
    house: {
        type: Schema.Types.ObjectId,
        ref: 'House'
    },
    students_categories: {
        type: Schema.Types.ObjectId,
        ref: 'StudentCategory'
    },
    firstName: { type: String },
    lastName: { type: String },
    gender: { type: String },
    dateOfBirth: { type: Date },
    religion: { type: String },
    caste: { type: String },
    admissionDate: { type: Date },
    //studentPhoto: { type: String }, // Assuming storing the path to the photo
    bloodGroup: { type: String },
    height: { type: Number },
    weight: { type: Number },
    fatherName: { type: String },
    fatherPhone: { type: String },
    // Add any additional student-specific properties here
}, { timestamps: true });

// Inherit properties from Users schema
studentSchema.add(Users.schema);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
