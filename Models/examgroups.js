const mongoose = require('mongoose');

const examGroupSchema = new mongoose.Schema({
    name: { type: String, required: true },
    examType: { type: String, required: true },
    description: { type: String }
}, { timestamps: true });

const ExamGroup = mongoose.model('ExamGroup', examGroupSchema);

module.exports = ExamGroup;
