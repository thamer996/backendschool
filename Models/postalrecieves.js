const mongoose = require('mongoose');

// Define the schema
const postalReceiveSchema = new mongoose.Schema({
  fromTitle: { type: String, required: true },
  referenceNo: { type: String },
  address: { type: String },
  note: { type: String },
  toTitle: { type: String },
  date: { type: Date, default: Date.now },
  attachDocument: { type: String } // Assuming document attachment is stored as a file path or URL
});

// Create a model
const PostalReceive = mongoose.model('PostalReceive', postalReceiveSchema);

module.exports = PostalReceive;
