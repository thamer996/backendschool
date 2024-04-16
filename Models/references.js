const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for References
const referencesSchema = new Schema({
    reference: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

// Create a model for References
const References = mongoose.model('References', referencesSchema);

module.exports = References;
