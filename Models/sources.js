const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for Source
const sourceSchema = new Schema({
    source: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

// Create a model for Source
const Source = mongoose.model('Source', sourceSchema);

module.exports = Source;
