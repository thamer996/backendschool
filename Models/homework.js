// models/homeworkModel.js

const mongoose = require('mongoose');

const homeworkSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    homeworkDate: { type: Date, required: true },
    submissionDate: { type: Date, required: true },
    createdBy: { type: String, required: true }
}, { timestamps: true });

const Homework = mongoose.model('Homework', homeworkSchema);

module.exports = Homework;
