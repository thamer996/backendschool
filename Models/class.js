// classModel.js

const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    grade: { type: String, required: true },
    section: { type: String, required: true },
}, { timestamps: true });

const Class = mongoose.model('Class', classSchema);

module.exports = Class;
{/*  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }]  */}