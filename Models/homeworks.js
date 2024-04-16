const mongoose = require('mongoose');

const homeworkSchema = new mongoose.Schema({
    class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
    homeworkDate: { type: Date, required: true },
    submissionDate: { type: Date },
    evaluationDate: { type: Date },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Staff', required: true }
}, { timestamps: true });

const Homework = mongoose.model('Homework', homeworkSchema);

module.exports = Homework;
