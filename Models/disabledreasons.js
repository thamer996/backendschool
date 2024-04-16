const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for DisabledReason
const disabledReasonSchema = new Schema({
    disabledReason: {
        type: String,
        required: true
    }
});

// Create a model for DisabledReason
const DisabledReason = mongoose.model('DisabledReason', disabledReasonSchema);

module.exports = DisabledReason;
