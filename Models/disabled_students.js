const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for Disabled_Student
const disabledStudentSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    disabledReason: {
        type: Schema.Types.ObjectId,
        ref: 'DisabledReason',
        required: true
    }
});

// Create a model for Disabled_Student
const DisabledStudent = mongoose.model('Disabled_Student', disabledStudentSchema);

module.exports = DisabledStudent;
