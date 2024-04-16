const mongoose = require('mongoose');

const sectionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    // Reference to Class model
    class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true }
}, { timestamps: true });

const Section = mongoose.model('Section', sectionSchema);

module.exports = Section;
