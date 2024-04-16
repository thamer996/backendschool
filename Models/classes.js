const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    grade: { type: String, required: true },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
    sections: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Section' }]
}, { timestamps: true });

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
