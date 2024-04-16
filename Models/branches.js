const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for Branch
const branchSchema = new Schema({
    Hostname: {
        type: String,
        required: true
    },
    DatabaseName: {
        type: String,
        required: true
    },
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
});

// Create a model for Branch
const Branch = mongoose.model('Branch', branchSchema);

mo
