const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    subjectCode: { type: String, required: true },
    subjectType: { type: String, required: true },
    // Other subject attributes can be added here
}, { timestamps: true });

const Subject = mongoose.model('Subject', subjectSchema);

module.exports = Subject;
