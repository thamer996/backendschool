// Import mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the ComplaintType schema
const complaintTypeSchema = new Schema({
    complaintType: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

// Create the model
const ComplaintType = mongoose.model('ComplaintType', complaintTypeSchema);

// Export the model
module.exports = ComplaintType;
