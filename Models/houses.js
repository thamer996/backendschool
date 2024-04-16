const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for House
const houseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

// Create a model for House
const House = mongoose.model('House', houseSchema);

module.exports = House;
