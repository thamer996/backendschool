const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for FeesGroup
const feesGroupSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String
    }
});

// Create a model for FeesGroup
const FeesGroup = mongoose.model('FeesGroup', feesGroupSchema);

module.exports = FeesGroup;
