const mongoose = require('mongoose');

const studentCategorySchema = new mongoose.Schema({
    name: { type: String, required: true },
}, { timestamps: true });

const StudentCategory = mongoose.model('StudentCategory', studentCategorySchema);

module.exports = StudentCategory;
