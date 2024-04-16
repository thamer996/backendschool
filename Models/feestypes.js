const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for FeeType
const feeTypeSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    FeesCode: {
        type: String,
        required: true
    },
    Description: {
        type: String
    }
});

// Create a model for FeeType
const FeeType = mongoose.model('FeeType', feeTypeSchema);

module.exports = FeeType;
