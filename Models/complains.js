const mongoose = require('mongoose');

// Define the schema
const complainSchema = new mongoose.Schema({
    complaintType: {
        type: Schema.Types.ObjectId,
        ref: 'ComplaintType',
        required: true
    },
  source: { type: String, required: true },
  complainBy: { type: String, required: true },
  phone: { type: String },
  date: { type: Date, default: Date.now },
  description: { type: String },
  actionTaken: { type: String },
  assigned: { type: String },
  note: { type: String },
  attachDocument: { type: String } // Assuming document attachment is stored as a file path or URL
});

// Create a model
const Complain = mongoose.model('Complain', complainSchema);

module.exports = Complain;
